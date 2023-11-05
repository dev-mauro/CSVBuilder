import { useContext } from "react"
import { InfoContext } from "../context/InfoContext";

export const ManageCertsButton = () => {
  
  const { toggleManageCerts } = useContext( InfoContext );
  
  return (
    <button
      className="adm-certs__button"
      onClick={ toggleManageCerts }
    >
      Administrar certificados
    </button> 
  )
}
