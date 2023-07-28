import React, { useState, useEffect} from 'react'
import { useParams } from '../../../node_modules/react-router-dom/dist/index'
import { eliminarSocio, obtenerSocio } from '../Firebase/Promesas'
import { Socio } from '../Interfaces/IFormulario'

export const Eliminar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")
    const [telefono, setTelefono] = useState("")
    const [edad, setEdad] = useState("")
    const [genero, setGenero] = useState("")
    const [producto_fav, setProducto_fav] = useState("")
    const [terminos_condiciones, setTerminos_condiciones] = useState("")
    const [idSocio, setIdSocio] = useState("")

    useEffect(() => {
      if (params.idSocio!=undefined){
          obtenerSocio(params.idSocio).then((v)=>{
            if (v!=undefined && v.idSocio!=undefined){
                setNombre(v.nombre),
                setCorreo(v.correo),
                setContrasenia(v.contrasenia),
                setTelefono(v.telefono),
                setEdad(""+v.edad),
                setGenero(""+v.genero),
                setProducto_fav(""+v.producto_fav),
                setTerminos_condiciones(""+v.terminos_condiciones),
                setIdSocio(v.idSocio)
            }
          })
      }
    }, [])
    

    console.log("hola "+nombre)

    
    
    const eliminar = ()=>{

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
        eliminarSocio(idSocio).then(()=>{
            alert("Eliminado")
        })
    } 

    console.log("hola "+genero)
    console.log("XD "+terminos_condiciones)
    return (
    <form className='text-center'>
        <label htmlFor="">Nombre</label><br />
        <input type="text" 
        value={nombre}
        /><br />
        
        <label htmlFor="">Correo</label><br />
        <input type="email"  
        value={correo} 
        /><br />
        
        <label htmlFor="">Contrasenia</label><br />
        <input type="password"   
        value={contrasenia}
        /><br />

        <label htmlFor="">Telefono</label><br />
        <input type="tel"     
        value={telefono}/><br />

        <label htmlFor="">Edad</label><br />
        <input type="number"  
        value={edad}/><br />

        <label htmlFor="">Genero</label><br />

        <input type="radio" 
        name="check" 
        id="g1" 
        value="Hombre" 
        checked={genero == "Hombre" ? true:false}
        />
        <label htmlFor="g1">Hombre</label><br />

        <input type="radio" 
        name="check" 
        id="g2" 
        value="Mujer"
        checked={genero == "Mujer" ? true:false}
        />
        <label htmlFor="g2">Mujer</label><br />

        <input type="radio" 
        name="check" 
        id="g3" 
        value="Reservado"
        checked={genero == "Reservado" ? true:false}
        />





    <label htmlFor="g3">Prefiero no decirlo</label><br />

        <label htmlFor="producto">Producto Favorito</label><br/>
        <select name="producto" id="producto" >
            <option value={producto_fav}>{producto_fav}</option>
        </select><br/>





        <input type="checkbox" 
         value='si'
         checked={terminos_condiciones == "si" ? true:false}
         />
        <label htmlFor="">Acepta terminos y condiciones</label>
        <br />
        <a type="button" id="boton" className="btn btn-success mt-3" onClick={eliminar}>Eliminar</a>


    </form>
  )
}
