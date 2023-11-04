import { signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"

import { auth } from "./config"

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup( auth, googleProvider );

    const user = result.user;

    return { ok: true, result: user };

  } catch(e) {
    
    const errorMessage = e.message;

    return {
      ok: false,
      result: {
        errorMessage,
      }
    }
  }
}

const logoutUser = async() => {
  try {

    const resp = await signOut( auth );

    return {ok: true}

  } catch(error) {

    const {message: errorMessage} = error;
    return {ok: false, errorMessage}

  }


}

export { logoutUser, signInWithGoogle };