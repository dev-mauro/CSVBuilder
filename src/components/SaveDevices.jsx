import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { InfoContext } from "../context/InfoContext"

import { useDownload } from "../hook/useDownload";
import { useForm } from "../hook/useForm";
import setSortedDevices from "../utils/setSavedDevices";
import { sortSavedDevices } from "../utils/sortDevices";

// Obtiene el estado de la propiedad fixedStatus del localStorage
const getFixedStatus = () => {
  const localFixedStatus = localStorage.getItem('fixedStatus') || true;

  if( localFixedStatus === 'true' || localFixedStatus == true )
    return true;

  else return false
}

// Guarda el estado de la propiedad fixedStatus del localStorage
const setFixedStatus = ( status ) => {
  localStorage.setItem('fixedStatus', status);
}

export const SaveDevices = ( ) => {
  const { devices, setDevices, onInputChange, fileName } = useContext(InfoContext);
  const download = useDownload('.csv');

  // Estado que controla si el input esta fijo (true) o no (false)
  const [ fixed, setFixed ] = useState( () => getFixedStatus() );

  // Estado que controla si se intento guardar un archivo sin nombre
  const [ noNameFileTry, setNoNameFileTry ] = useState( false );

  const input = useRef();

  const onToggleFixedButtonClick = () => {
    setFixedStatus( !fixed )
    setFixed( !fixed );
  } 

  const onButtonClick = () => {
    if( fileName === undefined ) {
      setNoNameFileTry( true );
      return;
    }

    // Obtiene array con los dispositivos marcados
    const selectedDevices = devices.filter(device => device.selected);

    if(selectedDevices.length == 0) return;

    // Genera un unico objeto con todos los IMEI de los dispositivos seleccionados
    const unifiedList = selectedDevices
      .map(device => device.imeiList)
      .flat(1);

    //Descarga el archivo
    download(unifiedList, fileName);
    // Cambia la propiedad saved de los dispositivos
    const devicesCopy = setSortedDevices(devices, selectedDevices);
    // Ordena los dispositivos guardados
    sortSavedDevices(devicesCopy);
    // Setea el array con los cambios realizados
    setDevices(devicesCopy);
    setNoNameFileTry( false );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  const onInputClick = () => {
    input.current.select();
  }
  

  return (
    <div className={`save-devices ${(fixed) ? 'fixed' : ''}`}>

      <form action="" onSubmit={onFormSubmit}>
        <button
          type="button"
          className="toggle-fixed-button"
          onClick={ onToggleFixedButtonClick }
        >
          { (fixed) ? '🔻' : '🔺' }
        </button>

        <input 
          className={`${(noNameFileTry) ? 'no-name-file-try' : ''}`}
          type="text"
          value={fileName}
          placeholder="Nombre del archivo..."
          name={"fileName"}
          onChange={onInputChange}
          ref={input}
          onClick={onInputClick}
          autoComplete="off"
        />

        <button
          type="submit"
          className="save-button"
          onClick={ onButtonClick }
        >
          Guardar
        </button>
      </form>

    </div>
  )
}