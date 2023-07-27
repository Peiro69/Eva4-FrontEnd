'use client'
//import Image from 'next/image'
import styles from './page.module.css'
import { BrowserRouter } from '../../node_modules/react-router-dom/dist/index' 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { AppRouter } from './router/AppRouter'

export default function Home() {
  return (
    <>
    <div className='bg-success-subtle'>
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
    </div>
    </>

  )
}
