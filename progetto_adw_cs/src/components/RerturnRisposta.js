import { GET_RISPOSTE } from "../gql/Query";
import { GET_RANDOM_RISPOSTE } from "../gql/Query";
import { useQuery } from '@apollo/client'


function ReturnRisposta(){

const { loading, error, data } = useQuery(GET_RANDOM_RISPOSTE);
console.log(data);


return(
  <div>
    {data.RandomRisposte.map((Risposta: any) => {
        return(
            <p> {Risposta.testo} </p>
        );
    })}
  </div>  
);




/*
return(
  <div>
    {data.tutteRisposte.map((Risposta) => {
        return(
            <p> {Risposta.testo} </p>
        );
    })}
  </div>  
);
*/
}
        
        
          
export default ReturnRisposta
