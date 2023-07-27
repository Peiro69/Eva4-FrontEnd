'use client'
import React, { useState }  from 'react'
import { registrarSocios } from '../Firebase/Promesas'
import {Socio} from '../Interfaces/IFormulario'

export const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [telefono, setTelefono] = useState("")
    const [edad, setEdad] = useState("")
    const [genero, setGenero] = useState("")
    const [producto_fav, setProducto_fav] = useState("")
    const [terminos_condiciones, setTerminos_condiciones] = useState("")


    const registrar = ()=>{

        const s:Socio = {
            nombre,
            correo,
            contrasenia,
            telefono,
            edad:parseInt(edad),
            genero,
            producto_fav,
            terminos_condiciones
        }
        console.log(s)
        registrarSocios(s)


    } 

  return (
    <form className='text-center'>
        <label htmlFor="">Nombre</label><br />
        <input type="text" 
        onChange={(e)=>setNombre(e.target.value)} 
        value={nombre}/><br />
        
        <label htmlFor="">Correo</label><br />
        <input type="email"  
        onChange={(e)=>setCorreo(e.target.value)}
        value={correo} /><br />
        
        <label htmlFor="">Contrasenia</label><br />
        <input type="password"   
        onChange={(e)=>setContrasenia(e.target.value)}
        value={contrasenia}/><br />

        <label htmlFor="">Telefono</label><br />
        <input type="tel"
        onChange={(e)=>setTelefono(e.target.value)}       
        value={telefono}/><br />

        <label htmlFor="">Edad</label><br />
        <input type="number"  
        onChange={(e)=>setEdad(e.target.value)}
        value={edad}/><br />

        <label htmlFor="">Genero</label><br />
        <input type="radio" name="check" id="g1" value="Hombre" />
        <label htmlFor="g1">Hombre</label><br />

        <input type="radio" name="check" id="g2" value="Mujer"/>
        <label htmlFor="g2">Mujer</label><br />

        <input type="radio" name="check" id="g3" value="Reservado"/>
        <label htmlFor="g3">Prefiero no decirlo</label><br />

        <label htmlFor="producto">Producto Favorito</label><br/>
            <select name="producto" id="producto" >
                <option value="Jockey">Jockey</option>
                <option value="Gorro">Gorro</option>
                <option value="Polera">Polera</option>
            </select><br/>

        <input type="checkbox"      value={terminos_condiciones}/>
        <label htmlFor="">Acepta terminos y condiciones</label>
        <br />
        <a type="button" id="boton" className="btn btn-success mt-3" onClick={registrar}>Registro</a>


    </form>
  )
}
