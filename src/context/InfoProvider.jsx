import { useEffect, useState } from "react";
import { InfoContext } from "./InfoContext";

import extractImeiInfo from "../utils/extractImeiInfo";
import { sortDevicesByModel } from "../utils/sortDevices";

export const InfoProvider = ({children}) => {

  // Lista de IMEI escritos en el TextBlock. String.
  const [imei, setImei] = useState();

  // Lista de IMEI agrupados por modelo. Array de objects.
  // { model: "", imeiList: [ 13123,123123, 123123 ], saved: false, selected: false}
  const [devices, setDevices] = useState([]);

  const [invalidIMEI, setInvalidIMEI] = useState([])

  // Cambia el estado de selección de los embarques de equipos
  const onSelectedChange = (model) => {
    const devicesCopy = [...devices];

    for(let e of devicesCopy)
      if(e.model == model){
        e.selected = !e.selected;
        break;
      }

    setDevices(devicesCopy);
  }

  const onSetImei = (imeiInfo) => {
    setImei(imeiInfo);

    if( !imeiInfo ) return;

    const {devices, invalidIMEI} = extractImeiInfo(imeiInfo);

    sortDevicesByModel(devices);

    setDevices(devices);
    setInvalidIMEI(invalidIMEI);
  }
  

  const value = {
    imei, onSetImei,
    devices, setDevices,
    onSelectedChange,
    invalidIMEI,
  }

  return (
    <InfoContext.Provider value={ value }>
      { children }
    </InfoContext.Provider>
  )
}