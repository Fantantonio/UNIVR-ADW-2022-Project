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

  