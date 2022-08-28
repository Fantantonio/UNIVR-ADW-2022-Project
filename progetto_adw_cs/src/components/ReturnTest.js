import { GET_TEST } from "../gql/Query";
import { useQuery } from '@apollo/client'


function RerturnTest(){

const { loading, error, data } = useQuery(GET_TEST);


console.log(data);
return <tuttiTest test={data.test} />

/*
return(
  <div>
    {data.RandomRisposte.map((Risposta: any) => {
        return(
            <p> {Risposta.testo} </p>
        );
    })}
  </div>  
);*/
}

export default RerturnTest