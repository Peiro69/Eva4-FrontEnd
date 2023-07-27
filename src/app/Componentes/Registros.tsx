import React, { useEffect, useState } from 'react'
import { Link } from '../../../node_modules/react-router-dom/dist/index'
import { obtenerSocios } from '../Firebase/Promesas'
import { Socio } from '../Interfaces/IFormulario'

export const Registros = () => {
  const [socios, setSocios] = useState<Socio[]>([])
  useEffect(()=>{
      obtenerSocios().then((listado)=>{
        setSocios(listado)
      })
  },[])
  const renderizarDatos = ()=>{
      var r = socios.map((s)=>{
          return <tr>
          <td>{s.nombre}</td>
          <td>{s.correo}</td>
          <td>{s.contrasenia}</td>
          <td>{s.telefono}</td>
          <td>{s.edad}</td>
          <td>{s.genero}</td>
          <td>{s.producto_fav}</td>
          <td>{s.terminos_condiciones}</td>
          <td><Link to={"/modificar/"+s.idSocio}>Modificar</Link></td>
          <td><Link to={"/eliminar/"+s.idSocio}>Eliminar</Link></td>
        </tr>
      })
      return r
  }
  
  
    return (
    <>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Contrasenia</th>
            <th>Telefono</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Producto Favorito</th>
            <th>Acepta Terminos</th>
            <th>Accion 1</th>
            <th>Accion 2</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
    


    
    
    </>
  )
}
