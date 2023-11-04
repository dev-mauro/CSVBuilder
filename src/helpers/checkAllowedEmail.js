// Función revisa que el email que se recibe como parámetro
// se encuentra en la lista de emails permitidos de firestore

import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebase";

const checkAllowedEmail = async ( email ) => {

  const q = query(
    collection(db, 'allowed_emails'),
    where('email', '==', email)
  );

  const querySnap = await getDocs( q );

  return !querySnap.empty;
}

export { checkAllowedEmail };