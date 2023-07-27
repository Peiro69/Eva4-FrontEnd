import React from 'react'
import corona from "../imagenes/Logos/corona.png"
import gorro from "../imagenes/Logos/gorra.png"

export const Mapa = () => {
  return (

    <div className="text-center">
        <h1 className="mediano-h1 fw-bold text-center">
          <img src={gorro.src} alt="Cap" title="Cap" width="30" height="30" className="d-inline-block align-top-text"/>
          Dirección de la tienda
          <img src={corona.src} alt="Kingdom" title="Kingdom" width="30" height="30" className="d-inline-block align-top-text"/>
        </h1>
        <p className="mb-5">
        Nuestra tienda la puedes encontrar en la galería coimbra en Copiapó.
        ¡TE ESPERAMOS EN EL LOCAL 27!
        </p>
        <iframe className="border" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.276775846849!2d-70.33721272572105!3d-27.36707031233902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969804760da921b7%3A0xce56ad994949498a!2sGaler%C3%ADa%20Coimbra!5e0!3m2!1ses!2scl!4v1682911826671!5m2!1ses!2scl" 
        width="600" height="450" 
        loading="lazy">

        </iframe>
    </div>
  
  )
}
