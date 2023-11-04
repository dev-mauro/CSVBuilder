import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

export const LogOutButton = () => {

  const { onLogOut } = useContext( InfoContext ); 

  return (
    <button onClick={ onLogOut } className="button">
      Cerrar Sesión
    </button>
  )
}