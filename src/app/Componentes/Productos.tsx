import React from 'react'
import corona from "../imagenes/Logos/corona.png"
import gorro from "../imagenes/Logos/gorra.png"

export const Productos = () => {
  return (
    
    <div className="container text-center">
        <div className="row">
            <h1 className="mediano-h1 fw-bold">
                <img src={gorro.src} alt="Cap" title="Cap" width="30" height="30" class="d-inline-block align-top-text"/>
                Marcas principales
                <img src={corona.src} alt="Kingdom" title="Kingdom" width="30" height="30" class="d-inline-block align-top-text"/>
            </h1>
            <h3 className="mb-4 mediano-p">Las principales marcas que se pueden encontrar<br/>en nuestra tienda son:</h3>
        </div>
        <div className="row pt-3 ">
            <div className="col col-md-4">
                <a href="https://newerachile.cl/?utm_source=google&utm_medium=cpc&utm_campaign=marca&gad=1&gclid=CjwKCAjwo7iiBhAEEiwAsIxQEZex1L1uPg6P9HSVZDoDItmoyBMyDXhTiSsfBQQt7vVW1heMQARvxxoCOBUQAvD_BwE" target="_blank">
                <img src="assets/imagenes/new-era-logo.png" alt="New Era" title="New Era" width="215px" height="150px"/>
                </a>
                <p className="mediano-p my-3">New Era</p>
            </div>
            <div className="col col-md-4">
                <a href="https://www.47brand.com/" target="_blank">
                    <img src="assets/imagenes/'47_logo.svg.png" alt="'47" title="'47 Brand" width="158px" height="158px"/>
                </a>
                <p className="mediano-p my-3">'47 (brand)</p>
            </div>
            <div className="col col-md-4">
                <a href="https://www.vans.cl/?gclid=CjwKCAjwo7iiBhAEEiwAsIxQEcfiaaEHH2gOxfbk2iXzHModuM-LpwubfdvpTMRHCrID6x6FSaLfbxoCuAwQAvD_BwE" target="_blank" >
                    <img src="assets/imagenes/vanss.png" alt="Vans" title="Vans" width="215px" height="150px"/>
                </a>
                <p className="mediano-p my-3">Vans</p>
            </div>
            <div className="col col-md-4">
                <a href="https://www.nike.cl/" target="_blank">
                <img src="assets/imagenes/Nike-logo.png" alt="Nike" title="Nike" width="215px" height="180px"/>
                </a>
                <p className="mediano-p my-3">Nike</p>
            </div>
            <div className="col col-md-4">
                <a href="https://www.adidas.cl/" target="_blank">
                <img src="assets/imagenes/Original_Adidas_logo.svg.png" alt="Adidas" title="Adidas" width="200px" height="200px"/>
                </a>
                <p className="mediano-p my-3">Adidas</p>
            </div>
            <div className="col col-md-4">
                <a href="https://cl.puma.com/?utm_source=GGL&utm_medium=BS&gclid=CjwKCAjwo7iiBhAEEiwAsIxQEa8p4GYn_bDr_aULVrSldElu7uE0Ck_MgDNexOKfeSmUFB8lMs9whhoCyN0QAvD_BwE" target="_blank">
                <img src="assets/imagenes/PUMA-logo.png" alt="Puma" title="Puma" width="215px" height="200px"/>
                </a>
                <p className="mediano-p my-3">Puma</p>
            </div>
        </div>
    </div>

  )
}
