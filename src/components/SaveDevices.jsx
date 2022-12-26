import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { InfoContext } from "../context/InfoContext"

import { useDownload } from "../hook/useDownload";
import { useForm } from "../hook/useForm";
import setSortedDevices from "../utils/setSavedDevices";
import { sortSavedDevices } from "../utils/sortDevices";

export const SaveDevices = () => {
  const { devices, setDevices } = useContext(InfoContext);
  const download = useDownload();
  const {onInputChange, fileName} = useForm();

  const input = useRef();

  const onButtonClick = () => {
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
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  const onInputClick = () => {
    input.current.select();
  }
  

  return (
    <div style={{width: '100%', margin: '10px auto 0', maxWidth: '800px'}} className="fixed">

      <form action="" onSubmit={onFormSubmit}>
        <input 
          type="text"
          style={{width: 'calc(100% - 100px)', height: '25px', textAlign: 'right', paddingRight: '10px'}}
          value={fileName}
          name={"fileName"}
          onChange={onInputChange}
          ref={input}
          onClick={onInputClick}
          autoComplete="off"
        />

        <button
          onClick={onButtonClick}
          style={{width: '100px', height: '25px'}}
        >
          Guardar
        </button>
      </form>

    </div>
  )
}