import { gql } from "@apollo/client";


export const GET_ALL_RISPOSTE = gql`
query GetRisposte{
    tutteRisposte {
      id
      testo
    }
  } 
`
;

export const GET_ALL_TEST = gql`
query GetTest{
  tuttiTest{
    data,
    nome,
    ordinecasuale,
    domandeconnumero
  }
}
`;

export const GET_ALL_DOMANDE = gql`
query GetDomande{
  tutteDomande{
   nome,
   testo,
   punti,
   ordinecasuale,
   risposteconnumero     
 }
}`;


export const GET_DOMANDA = gql`
query ($nome: String){
	getDomanda(nome: $nome) {
    nome
    testo
    punti
    ordinecasuale
    risposteconnumero
  }
}`;

export const GET_DOMANDE_OF_TEST = gql`
query ($datatest: String, $nometest: String) {
	getDomandeOfTest(datatest: $datatest, nometest:$nometest) {
    domanda {
      nome,
      testo,
      punti,
      ordinecasuale,
      risposteconnumero,
    }
  }
}`;


export const GET_RISPOSTA = gql`
query($idDomanda: String){
	getRisposta(idDomanda: $idDomanda) {
    id,
    punteggio,
		testo
  }
}`;

