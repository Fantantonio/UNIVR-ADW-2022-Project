import React from 'react'
import RiassuntoDomandaRisposta from './RiassuntoDomandaRisposta'

const PaginaFineTest = ({setPage, userRole, userId}) => {

  return (
    <>
    <div className="card my-4">
        <div className="card-body">
            <RiassuntoDomandaRisposta />
            <hr />
            <RiassuntoDomandaRisposta />
            <hr />
            <RiassuntoDomandaRisposta />
            <hr />
            <RiassuntoDomandaRisposta />
            <hr />

            <button className="btn btn-success">Torna alla pagina iniziale</button>
        </div>
    </div>
    </>
  )
}

export default PaginaFineTest