import React from 'react'
import instagraam from "../imagenes/logos_footer/instagram.png"
import face from "../imagenes/logos_footer/facebook.png"
import tw from "../imagenes/logos_footer/twitter.png"
import correo from "../imagenes/logos_footer/email.png"
import tel from "../imagenes/logos_footer/telefono.png"

export const Footer = () => {
  return (
    
    <div class="row">
      <div class="col-md-4">
          <h4 class="my-3">Redes sociales</h4>
          <a class="pb-2 text-black fw-bold" href="https://www.instagram.com/tienda.cap.kingdom/" target="_blank">
              <img src={instagraam.src} alt="Ig" title="Instagram" width="30px" height="30px" class="text-center d-inline-block align-top-text"/>Instagram</a>
          <br/>
          <a class="py-2 text-black fw-bold" href="https://web.facebook.com/profile.php?id=100066757963253" target="_blank">
              <img src={face.src} alt="Fc" title="Facebook" width="30px" height="30px" class="text-center d-inline-block align-top-text"/>Facebook</a>
          <br/>
          <a class="py-2 text-black fw-bold" href="https://twitter.com/KapKingdom38985" target="_blank">
              <img src={tw.src} alt="Tw" title="Twitter" width="30px" height="30px" class="text-center d-inline-block align-top-text"/>Twitter</a>
      </div>
      <div class="row col-md-4">
          <h4 class="my-3">Otros medios</h4>
          <a class="text-black fw-bold" href="mailto:contacto.cap.kingdom@gmail.com"><img src={correo.src} alt="Correo" width="20px" height="20px"/>contacto.cap.kingdom@gmail.com</a>
          <br/>
          <a class="text-black fw-bold" href="tel:+56947974930"><img src={tel.src} alt="Telefono" width="20px" height="20px"/>+56947974930</a>
      </div>
      <div class="row col-md-4 my-3">
          &copy 2023
      </div>
    </div>

  )
}
