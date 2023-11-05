import { useContext, useRef } from "react";
import { AddCert } from "./AddCert"
import { InfoContext } from "../context/InfoContext";

export const CertsManage = () => {

  const { manageCertsVisible, toggleManageCerts } = useContext( InfoContext );
  const containerRef = useRef();

  const handleClickOutside = ( e ) => {
    if( e.target === containerRef.current )
      toggleManageCerts();
  }

  return (
    <div
      onClick={ handleClickOutside }
      ref={ containerRef }
      className={`cert-manage__container ${ manageCertsVisible ? '' : 'hidden'}`}
    >
      <div className="cert-manage">

        <h2>Administrar certificados</h2>

        <AddCert/>

        {/* <h3>Eliminar certificados</h3> */}

        <button
          onClick={ toggleManageCerts }
          class="close-button"
        >
          x
        </button>

      </div>
    </div>
  )
}
