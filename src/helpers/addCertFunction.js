import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../firebase";

async function addCertificate(model, modelShort, modelNumber) {
  try {
    // Referencia a la colección 'certificados'
    const collectionRef = collection(db, "certificados");

    // Agrega un documento con los datos del certificado
    const docRef = await addDoc(collectionRef, {
      modelo: model,
      modelo_abr: modelShort,
      numero: modelNumber
    });

    return true;
  } catch (e) {
    console.error("Error al agregar documento: ", e);
    return false;
  }
}

export { addCertificate };