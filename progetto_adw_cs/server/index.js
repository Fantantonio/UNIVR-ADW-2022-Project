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
    methods: ["GET", "PUT", "POST"],
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
            expires: 60 * 60 * 60 * 24
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


/* USERTEST */


app.get("/usertest", async (req, res) => {
    const userId = req.query.userId;
    const nomeTest = req.query.nomeTest;
    const dataTest = req.query.dataTest;
    const response = await pool.query("SELECT * FROM utentetest WHERE id_utente = $1 AND nome_test = $2 AND data_test = $3;", [userId, nomeTest, dataTest]);
    if (response.err) {
        res.send({err: response.err});
    }
    if (response.rows.length > 0) {
        /**
         * Ritorna ad es:
            [
                {
                    id: 8,
                    id_utente: 2,
                    nome_test: '2022-07-07',
                    data_test: 'Basi di Dati - II appello laboratorio',
                    nome_ultima_domanda: '',
                    ordine_domande: '',
                    id_risposte_date: ''
                }
            ]
         */
        res.send(response.rows[0]);
    }
});


app.put("/usertest", async (req, res) => {
    const id = req.body.params.id;
    const nomeUltimaDomanda = req.body.params.nomeUltimaDomanda;
    const ordineDomande = req.body.params.ordineDomande;
    const idRisposteDate = req.body.params.idRisposteDate;
    const response = await pool.query("UPDATE utentetest SET nome_ultima_domanda = $1, ordine_domande = $2, id_risposte_date = $3 WHERE id = $4;", [nomeUltimaDomanda, ordineDomande, idRisposteDate, id]);
    if (response.err) {
        res.send({err: true, message: response.err});
    }
    if (response.rowCount > 0) {
        req.session.test = response.rows;
        res.send({err: false, message: ""});
    }
});


app.post("/usertest", async (req, res) => {
    const userId = req.body.userId;
    const nomeTest = req.body.nomeTest;
    const dataTest = req.body.dataTest;
    const response = await pool.query("SELECT * FROM utentetest WHERE id_utente = $1 AND nome_test = $2 AND data_test = $3;", [userId, nomeTest, dataTest]);
    if (response.err) {
        res.send({err: response.err});
    }
    if (response.rows.length > 0) {
        req.session.test = response.rows;
        res.send(response.rows);
    }
    else {
        pool.query(
            "INSERT INTO utentetest (id_utente, nome_test, data_test) VALUES ($1, $2, $3)",
            [userId, nomeTest, dataTest],
            (err, result) => {
                res.send({err: err});
            }
        );

        const response = await pool.query("SELECT * FROM utentetest WHERE id_utente = $1 AND nome_test = $2 AND data_test = $3;", [userId, nomeTest, dataTest]);
        if (response.err) {
            res.send({err: response.err});
        }
        if (response.rows.length > 0) {
            req.session.test = response.rows;
            res.send(response.rows);
        }
    }
});


/* LOGIN */


app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({isLogged: true, userRole: req.session.user[0].ruolo, userId: req.session.user[0].id});
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


/* SERVER START */


app.listen(5000, () => {
    console.log("server has started on port 5000");
});