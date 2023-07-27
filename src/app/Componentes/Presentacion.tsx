import React from 'react'
import corona from "../imagenes/Logos/corona.png"
import gorro from "../imagenes/Logos/gorra.png"

export const Presentacion = () => {
  return (
    <div>
      <div className="col-md-6 my-auto">
      <h1 className="fw-bold">
          <img src={gorro.src} alt="Cap" title="Cap" width="30" height="30" className="d-inline-block align-top-text"/>
          ¿Quienes somos?
          <img src={corona.src} alt="Kingdom" title="Kingdom" width="30" height="30" className="d-inline-block align-top-text"/>
      </h1>
      <h3 className="mediano-p">
          Como Cap Kingdom te queremos dar la bienvenida y agradecerte por visitar nuestro sitio.<br/>
          Somos una tienda en donde puedes encontrar una gran variedad de productos, principalmete gorras y poleras.
      </h3>
      </div>
      <div className="col-md-6 my-5">
          <img src="assets/imagenes/la-tienda-de-las-gorras.jpg" alt="Tienda" width="512px" height="470px"/>
      </div>
    </div>
  )
}
