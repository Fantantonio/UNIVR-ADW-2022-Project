const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


// middleware
app.use(cors());
app.use(express.json());

/* routes */
// login
/*
app.get("/login", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM utente");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

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

app.post("/login", async (req, res) => {
    const nomeutente = req.body.nomeutente;
    const password = req.body.password;
    const response = await pool.query("SELECT * FROM utente WHERE nomeutente = $1 AND password = $2;", [nomeutente, password]);
    if (response.err) {
        res.send({err: response.err});
    }
    if (response.rows.length > 0) {
        res.send(response.rows);
    }
    else {
        res.send({ message: "Nomeutente/password sbagliati." });
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000");
})