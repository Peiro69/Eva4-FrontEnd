import { Socio } from "../Interfaces/IFormulario";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./FirebaseApp";


export const registrarSocios = async(s:Socio)=>{
    
    
      const docRef = await addDoc(collection(db, "personas"), s)

}

export const obtenerSocios = async()=>{
      const querySnapshot = await getDocs(collection(db, "personas"));
      console.log("chao")
      var socios:Socio[] = []
      querySnapshot.forEach((d)=>{
            console.log(d.id)
            console.log(d.data())
            var s:Socio = {
                  nombre:d.data().nombre,
                  correo:d.data().correo,
                  contrasenia:d.data().contrasenia,
                  telefono:d.data().telefono,
                  edad:parseInt(d.data().edad),
                  genero:d.data().genero,
                  producto_fav:d.data().producto_fav,
                  terminos_condiciones:d.data().terminos_condiciones,
                  idSocio:d.id
            }
            socios.push(s) 
      })
      return socios

}

export const obtenerSocio = async (idSocio:string)=>{
      const docRef = doc(db,"personas",idSocio);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()){
            const s:Socio = {
                  nombre:docSnap.data().nombre,
                  correo:docSnap.data().correo,
                  contrasenia:docSnap.data().contrasenia,
                  telefono:docSnap.data().telefono,
                  edad:docSnap.data().edad,
                  genero:docSnap.data().genero,
                  producto_fav:docSnap.data().producto_fav,
                  terminos_condiciones:docSnap.data().terminos_condiciones,
                  idSocio:docSnap.id
                  //nombre:docSnap.data().nombre,
                  //apellido:docSnap.data().apellido,
                  //edad:docSnap.data().edad,
                  //idPersona:docSnap.id
            }
            return s
      }else{
            return undefined
      }
}
export const actualizarSocio = async(idSocio:string,s:Socio)=>{
      const docRef = doc(db,"personas",idSocio);
      await updateDoc(docRef,{...s});
}
export const eliminarPersona =async (idPersona:string) => {
      await deleteDoc(doc(db,"personas",idPersona))
}