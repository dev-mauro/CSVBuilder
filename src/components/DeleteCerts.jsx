import { useEffect, useState } from "react"
import { getCerts } from "../helpers/getCerts"
import { CertListItem } from "./CertListItem";

export const DeleteCerts = () => {
  const [ certs, setCerts ] = useState( [] );

  const updateCerts = () => {
    getCerts()
      .then( certs => setCerts( certs ) )
      .catch( err => console.log( err ) )
  }


  useEffect(() => {
    updateCerts();
  }, []);

  return (
    <div className="delete-certs__wrapper">
      <h3>Eliminar Certificado</h3>
      <div className="delete-certs__container">
      {
        certs.map( cert => <CertListItem info={cert} allowRemove onRemove={ updateCerts } key={ cert.numero }/> )
      }
      </div>
    </div>
  )
}
