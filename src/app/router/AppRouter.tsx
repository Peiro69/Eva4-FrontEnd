'use client'
import React from 'react'
import { Routes, Route } from '../../../node_modules/react-router-dom/dist/index'
import { Formulario } from '../Componentes/Formulario'
import { Introduccion } from '../Componentes/Introduccion'
import { Mapa } from '../Componentes/Mapa'
import { Modificar } from '../Componentes/Modificar'
import { Presentacion } from '../Componentes/Presentacion'
import { Productos } from '../Componentes/Productos'
import { Registros } from '../Componentes/Registros'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Introduccion/>}/>
        <Route path='presentacion' element={<Presentacion/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/mapa' element={<Mapa/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/modificar/:idSocio' element={<Modificar/>}/>
        <Route path='/eliminar/:idSocio' />
    </Routes>
  )
}
