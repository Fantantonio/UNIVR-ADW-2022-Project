import { gql } from "@apollo/client";


export const GET_RISPOSTE = gql`
query TestQuery {
  tutteRisposte {
    id
  }
}
`