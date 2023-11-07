import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebase";

const deleteCert = async (certId) => {
  // Crea la consulta para buscar el certificado por su número
  const q = query(
    collection(db, 'certificados'),
    where('numero', '==', certId)
  );

  // Obtén los documentos que coinciden con la consulta
  const querySnapshot = await getDocs(q);

  // Asegúrate de que sólo hay un documento
  if (querySnapshot.docs.length >= 1) {
    if (querySnapshot.docs.length > 1) {
      console.error('Se encontró más de un documento para el mismo ID de certificado.')
    }
    // Obtiene la referencia del único documento encontrado
    const docRef = querySnapshot.docs[0].ref;
    // Elimina el documento
    await deleteDoc(docRef);
    return true; // Confirmación de que el documento ha sido eliminado
  } else if (querySnapshot.empty) {
    return false; // No se encontró el documento
  }
}

export { deleteCert }