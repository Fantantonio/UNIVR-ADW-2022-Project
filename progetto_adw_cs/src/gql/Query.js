import { gql } from "@apollo/client";


export const GET_ALL_RISPOSTE = gql`
query GetRisposte{
    tutteRisposte {
      id
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

export const GET_LAST_DOMANDA = gql`
query GetDomande{
  tutteDomande{
   nome,
  
 }
}`;