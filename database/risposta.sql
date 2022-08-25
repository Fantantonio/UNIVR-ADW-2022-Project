INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (4, 0.0000, 'Nel Piano 2 è stato usato anche l''indice creato con il comando\nCREATE INDEX pippo ON insegn(id);\nIl guadagno è di 82 accessi al disco circa ma si potrebbe migliorare con un indice su Discriminante.id ', 'Domanda 1');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (5, 0.0000, 'Nel Piano 2 è stato usato anche l''indice creato con il comando\nCREATE INDEX ON insegn(id);\nIl guadagno è di 82 secondi circa ma si potrebbe migliorare con un indice su Discriminante.id ', 'Domanda 1');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (6, 1.0000, 'Nel Piano 2 è stato usato anche l''indice creato con il comando\nCREATE INDEX pippo ON insegn(id) USING hash(id);\nIl guadagno è di 82 accessi al disco circa', 'Domanda 1');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (7, 0.5000, 'Nel Piano 2 è stato usato anche l''indice creato con il comando\nCREATE INDEX pippo ON insegn(id);\nCREATE INDEX ON ie_aa_it ON inserogato(annoaccademico);Il guadagno è di 82 accessi al disco circa', 'Domanda 1');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (8, 0.0000, 'Nella tabella B:\nmarca VARCHAR UNIQUE,\nid SERIAL PRIMARY KEY\nNella tabella A:\nnome VARCHAR REFERENCES B(marca)\nid INTEGER REFERENCES B(id)', 'Domanda 2');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (9, 0.5000, 'Nella tabella B:\nmarca VARCHAR NOT NULL,\nid SERIAL NOT NULL\nNella tabella A:\nnome VARCHAR\nid INTEGER\n FOREIGN KEY (nome, id) REFERENCES B(marca, id)', 'Domanda 2');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (10, 1.0000, 'Nella tabella B:\nmarca CHAR(10) NOT NULL,\nid SERIAL NOT NULL\nUNIQUE (marca, id)\nNella tabella A:\nnome VARCHAR\nid INTEGER\n FOREIGN KEY (nome, id) REFERENCES B(marca, id)', 'Domanda 2');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (11, 0.0000, 'Nella tabella B:\nmarca VARCHAR NOT NULL,\nid INTEGER NOT NULL\nFOREIGN KEY (marca, id) REFERENCES A(nome, id\nNella tabella A:\nnome VARCHAR\nid SERIAL\n PRIMARY KEY (nome, id)', 'Domanda 2');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (12, 0.0000, 'Sono entrambi due valori TIME e rappresentano un istante: in primo le 6 del 2020-05-01, il secondo le 18 del 2020-04-03 ', 'Domanda 3');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (13, 0.5000, 'Sono entrambi due valori INTERVAL e rappresentano il numero di secondi dal 01/01/1970 dell''istante determinato dalle operazioni ', 'Domanda 3');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (14, 0.0000, 'Non sono nulla perché non è possibile eseguire le due operazioni', 'Domanda 3');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (15, 1.0000, 'Non sono nulla Sono entrambi due valori TIMESTAMP WITHOUT TIME ZONE e rappresentano un istante: in primo le 6 del 2020-05-01, il secondo le 18 del 2020-04-03  non è possibile eseguire le due operazioni', 'Domanda 3');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (16, 0.0000, 'SELECT matricola, AVG(voto)\nFROM PROVE_DI_ESAME\nWHERE count(*) >= 3 AND EXTRACT(YEAR FROM data) = 2019\nGROUP BY matricola;', 'Domanda 4');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (17, 0.0000, 'SELECT matricola, AVG(voto)\nFROM PROVE_DI_ESAME\nGROUP BY matricola\n HAVING count(*) >= 3 AND EXTRACT(YEAR FROM data) = 2019;', 'Domanda 4');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (18, 0.5000, 'SELECT matricola, AVG(voto)\nFROM PROVE_DI_ESAME\nWHERE EXTRACT(YEAR FROM data) = 2019\nGROUP BY matricola\nHAVING count(distinct inserogato)>=3;', 'Domanda 4');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (19, 1.0000, 'SELECT matricola, AVG(voto)\nFROM PROVE_DI_ESAME\nWHERE EXTRACT(YEAR FROM data) = 2019\nGROUP BY matricola\nHAVING count(*)>=3;', 'Domanda 4');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (20, 1.0000, 'apertura TIME WITH TIME ZONE,', 'Domanda 5');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (21, 0.0000, 'apertura TIME,', 'Domanda 5');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (22, 0.0000, 'apertura TIMESTAMP,', 'Domanda 5');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (23, 0.5000, 'apertura TIMESTAMP WITH TIME ZONE,', 'Domanda 5');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (24, 0.0000, 'i1 è un indice che può essere usato per risolvere selezioni del tipo nome > espressione1 OR cognome > espressione2 in qualsiasi tipo di base di dati.', 'Domanda 6');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (25, 1.0000, 'i1 è un indice che può essere usato per risolvere selezioni del tipo nome = espressione1 AND cognome = espressione2 in qualsiasi tipo di base di dati.', 'Domanda 6');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (26, 0.5000, 'i1 è un indice che può essere usato per risolvere selezioni del tipo nome = espressione1 AND cognome = espressione2 in basi di dati con locale uguale a C.', 'Domanda 6');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (27, 0.5000, 'i1 è un indice che può essere usato per risolvere selezioni del tipo nome = espressione1, cognome = espressione2 in qualsiasi combinazione in qualsiasi tipo di base di dati.', 'Domanda 6');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (28, 1.0000, 'ALTER TABLE A ADD CONSTRAINT nonneg_check CHECK (prezzoUnitario >= 0 AND quantita >= 0);', 'Domanda 7');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (29, 0.5000, 'ALTER TABLE A ADD CONSTRAINT nonneg_check CHECK (prezzoUnitario * quantita >= 0);', 'Domanda 7');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (30, 0.0000, 'ALTER TABLE A ADD CONSTRAINT CHECK (prezzoUnitario >= 0 AND quantita >= 0);', 'Domanda 7');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (31, 0.0000, 'Nessuna delle precedenti è corretta.', 'Domanda 7');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (32, 0.0000, 'Si verifica un errore perché il numero totale di cifre è 6 mentre importo può avere max 5 cifre in totale.', 'Domanda 8');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (33, 1.0000, 'importo assume il valore 101.11', 'Domanda 8');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (34, 0.0000, 'Il sistema chiede come arrotondare all''utente, perché il valore deve essere esatto e non lo può inferire in autonomia.', 'Domanda 8');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (35, 0.5000, 'importo assume il valore 101.10', 'Domanda 8');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (36, 0.0000, '(Query 1)', 'Domanda 9');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (37, 0.0000, '(Query 2)', 'Domanda 9');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (38, 0.5000, '(Query 3)', 'Domanda 9');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (39, 1.0000, '(Query 4)', 'Domanda 9');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (40, 0.0000, 'Entrambi gli assegnamenti rappresentano il valore ''falso'' ma il secondo è più versatile perché può assumere il valore NULL', 'Domanda 10');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (41, 0.5000, 'Entrambi gli assegnamenti richiedono lo stesso spazio in memoria.', 'Domanda 10');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (42, 0.0000, 'L''assegnamento a stato è errato perchè deve essere scritto FALSE', 'Domanda 10');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (43, 1.0000, 'Uno rappresenta il valore falso, l''altro il carattere ''f''', 'Domanda 10');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (44, 0.5000, 'nome VARCHAR,\ncognome VARCHAR,\nUNIQUE (nome, cognome)', 'Domanda 11');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (45, 0.0000, 'nome VARCHAR,\ncognome VARCHAR,\nPRIMARY KEY (nome, cognome)', 'Domanda 11');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (46, 0.0000, 'nome VARCHAR,\ncognome VARCHAR,\nUNIQUE (nome, cognome),\nNOT NULL (nome, cognome)', 'Domanda 11');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (47, 0.0000, 'nome VARCHAR,\ncognome VARCHAR,\nUNIQUE (nome, cognome),\nNOT NULL (nome, cognome)', 'Domanda 11');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (48, 1.0000, 'nome VARCHAR NOT NULL,\ncognome VARCHAR NOT NULL,\nUNIQUE (nome, cognome)', 'Domanda 11');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (49, 0.0000, 'Si genera un errore perché la sotto query deve essere scritta come SELECT b FROM B', 'Domanda 12');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (50, 0.5000, 'La query ritorna una tabella di una riga con valore null', 'Domanda 12');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (51, 0.0000, 'La query ritorna una tabella di 2 righe, ciascuna con valore null', 'Domanda 12');
INSERT INTO risposta (id, punteggio, testo, domanda) VALUES (52, 1.0000, 'La query ritorna una tabella vuota (nessuna riga)', 'Domanda 12');