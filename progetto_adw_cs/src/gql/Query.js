import { gql } from "@apollo/client";


export const GET_RISPOSTE = gql`
query GetRisposte{
    tutteRisposte {
      id
    }
  } 
`
;

export const GET_RANDOM_RISPOSTE = gql`
query GetRandom{
    RandomRisposte {
      testo
    }
  } 
`
;

export const GET_TEST = gql`
query GetTest{
  tuttiTest{
    data,
    nome,
    ordinecasuale,
    domandeconnumero
  }
}
`;

export const GET_DOMANDE = gql`
query GetDomande{
  tutteDomande{
   nome,
   testo,
   punti,
   ordinecasuale,
   risposteconnumero     
 }
}`;
