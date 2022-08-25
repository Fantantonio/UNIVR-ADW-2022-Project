INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 1', false, true, 2.00, 'Si consideri il (Piano 1) ed il (Piano 2).\nSi selezioni l''affermazione corretta circa l''analisi dei piani.');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 2', false, true, 2.00, 'Dato il vincolo (A.nome, A.id) -> (B.marca, B.id) indicare qual è la corretta dichiarazione');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 3', false, true, 2.00, 'Si considerino i seguenti attributi e assegnamenti in una base di dati PostgreSQL:\ninizio = ''06:00:00'' e data = ''2020-05-01''\nQuali sono i valori (con il loro dominio) che si ottengono dalle seguenti operazioni:\n1. inizio + data\n2. data - inizio');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 4', false, true, 2.00, 'Data la tabella\nPROVE_DI_ESAME (\nmatricola INTEGER,\ninserogato INTEGER,\nvoto DECIMAL(4, 2),\ndata DATE)\nsi scelga la query più efficiente che, per ogni studente con almeno 3 prove nel 2019, visualizza la media dei voti ottenuti.');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 5', false, true, 2.00, 'Si scelga qual è la migliore dichiarazione per un attributo che deve rappresentare l''orario di apertura di un ufficio di una compagnia internazionale.');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 6', false, true, 2.00, 'Data l''istruzione CRETE INDEX i1 ON spese(nome, cognome), dove entrambi nome e cognome hanno dominio VARCHAR(80), selezionare qual è l''alternativa corretta.');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 7', false, true, 2.00, 'Si consideri la seguente dichiarazione PostgreSQL:\n(CREATE Query 1)\nSi vuole garantire che i due valori numerici siano non negativi e che il loro prodotto sia inferiore a 1E7.\nIndicare qual è l''alternativa corretta. ');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 8', false, true, 2.00, 'In PostgreSQL, data la dichiarazione\nimporto NUMERIC(5, 2)\ncosa succede se si assegna il valore 101.101 a importo?');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 9', false, true, 2.00, 'Scegliere la query più efficiente che determina i docenti che hanno insegnato per un numero totale di crediti di lezione maggiore o uguale di quello dei colleghi limitando l''analisi all''anno accademico 2010/2011. ');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 10', false, true, 2.00, 'In PostgreSQL, date le dichiarazioni\nstato BOOLEAN, stato1 CHAR(1)\ne gli assegnamenti da fare, per esempio, in un istruzione UPDATE\nstato = ''0''\nstato1 = ''f''\nScegliere l''unica risposta che descrive correttamente le proprietà dei due attributi.');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 11', false, true, 2.00, 'Indicare la dichiarazione corretta che permetta di rappresentare una chiave non primaria (nome, cognome) ');
INSERT INTO domanda (nome, risposteconnumero, ordinecasuale, punti, testo) VALUES ('Domanda 12', false, true, 2.00, 'Si assume che ci siano le tabelle A e B così costituite in una base di dati di tipo PostgreSQL:\n(Tabella A)\n\n(Tabella B)\nSi consideri quindi la seguente query\nselect a\nfrom A\nwhere a > any (\n\tselect * from B\n);\nIndicare la risposta corretta.');
