import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
import { useContext, useEffect } from "react";
import { InfoContext } from "../context/InfoContext";
import { AUTH } from "../utils/constants";

/*
Observer que chequea el estado de el login del usuario. Ejecuta callback cada vez que este estado cambia.
*/

export const useCheckCredentials = () => {

  const { user, setUser } = useContext( InfoContext );

  useEffect(() => {
    onAuthStateChanged(auth, ( user ) => {
      // usuario está logeado
      if( user ) {
        const { displayName, photoURL, email } = user;
        setUser({
          authState: AUTH.authenticated,
          email: email,
          photoURL: photoURL,
          displayName: displayName,
        });
  
      } else {
        setUser({
          authState: AUTH.notAuthenticated,
          email: null,
          photoURL: null,
          displayName: null,
        })
      }
  
    });
  }, [])

  return { user };

}
