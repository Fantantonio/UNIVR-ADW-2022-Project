import { gql } from "@apollo/client";

export const ADD_TEST = gql`
    mutation ($nome:String!, $dataTest:String!, $ordinecasuale:Boolean, $domandeconnumero:Boolean) {
        addTest(test: { nome:$nome, data:$dataTest, ordinecasuale:$ordinecasuale, domandeconnumero:$domandeconnumero}){
          nome,
          data,
          ordinecasuale,
          domandeconnumero
        }
    }
`; 

export const ADD_INTEST = gql`
  mutation ($idDomanda:String!, $dataTest:String!, $nomeTest:String!) {
  addInTest(inTest: {idDomanda:$idDomanda, dataTest:$dataTest, nomeTest:$nomeTest}){
    datatest,
    nometest
  }
}
`;

export const ADD_DOMANDA = gql`
mutation addDomanda($nome:String!, $testo:String!, $punti:Int!, $ordinecasuale:Boolean, $risposteconnumero:Boolean) {
  addDomanda(domanda: { nome:$nome, testo:$testo, punti:$punti, ordinecasuale:$ordinecasuale, risposteconnumero:$risposteconnumero}){
    nome,
    ordinecasuale
    risposteconnumero
  }
}
`;

export const ADD_RISPOSTA = gql`
mutation addRisposta($testo:String!, $punteggio:Float!, $idDomanda:String!) {
  addRisposta(risposta: {testo:$testo,punteggio:$punteggio, idDomanda:$idDomanda}){
    testo,
    punteggio
    
  }
}
`;