'use client'
import React from 'react'
import { Link } from '../../../node_modules/react-router-dom/dist/index'
export const Header = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/presentacion"}>Presentacion</Link>
        <Link to={"/productos"}>Productos</Link>
        <Link to={"/mapa"}>Ubicacion</Link>
        <Link to={"/formulario"}>Registrate</Link>
        <Link to={"/mostrar"}>Socios</Link>
    </nav>
  )
}
