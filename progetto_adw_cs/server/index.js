const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


// middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24
        }
    })
);

/* routes */
// login
/*
app.post("/register", (req, res) => {
    const nomeutente = req.body.nomeutente;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
        }
        pool.query(
            "INSERT INTO utente (nomeutente, password) VALUES (?,?)",
            [nomeutente, hash],
            (err, result) => {
                console.error(err);
            }
        );
    })
});
*/

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({isLogged: true, userRole: req.session.user[0].ruolo});
    } else {
        res.send({isLogged: false});
    }
});

app.post("/login", async (req, res) => {
    const nomeutente = req.body.nomeutente;
    const password = req.body.password;
    const response = await pool.query("SELECT * FROM utente WHERE nomeutente = $1 AND password = $2;", [nomeutente, password]);
    if (response.err) {
        res.send({err: response.err});
    }
    if (response.rows.length > 0) {
        req.session.user = response.rows;
        res.send(response.rows);
    }
    else {
        res.send({ message: "Nomeutente/password sbagliati." });
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
});