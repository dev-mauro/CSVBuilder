import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

export const LogInButton = () => {

  const { onLogIn } = useContext( InfoContext ); 

  return (
    <button onClick={ onLogIn } className="button">
      Iniciar sesión con Google
    </button>
  )
}