import { collection, getDocs } from "firebase/firestore/lite";

import { db } from "../firebase";

// Retorna información de los certificados guardados en Firebase
// => [{ numero, modelo, modelo_abr }, ...]
const getCerts = async () => {

  const collectionRef = collection( db, 'certificados');
  const certsQuery = await getDocs( collectionRef );

  const certs = certsQuery.docs.map( (doc) => {
    return doc.data();
  } );

  return certs;

}

export { getCerts }