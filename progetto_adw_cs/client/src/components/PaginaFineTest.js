import React, { Component } from 'react'
import RiassuntoDomandaRisposta from './RiassuntoDomandaRisposta'

class PaginaFineTest extends Component {

  render() {
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
}

export default PaginaFineTest