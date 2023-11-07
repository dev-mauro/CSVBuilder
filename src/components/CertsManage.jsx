import { useContext, useRef } from "react";
import { AddCert } from "./AddCert"
import { InfoContext } from "../context/InfoContext";
import { DownloadCertsButton } from "./DownloadCertsButton";
import { DownloadModelButton } from "./DownloadModelButton";
import { DeleteCerts } from "./DeleteCerts";

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
        <div class="download-buttons__container">
          <DownloadCertsButton />
          <DownloadModelButton />
        </div>

        <AddCert/>
        <DeleteCerts/>

        {/* <h3>Eliminar certificados</h3> */}


        <button
          onClick={ toggleManageCerts }
          className="close-button"
        >
          x
        </button>

      </div>
    </div>
  )
}
