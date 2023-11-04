import { useContext, useEffect, useState } from "react"
import { InfoContext } from "../context/InfoContext"
import { DeviceRow } from "./DeviceRow"

import './table.css'


const createString = (popupInfo) => {
  return popupInfo.map(info => <tr> <td>{info}</td> </tr>);
}

export const ResultContainer = () => {
  const { devices, onSelectedChange } = useContext( InfoContext );
  const [popupInfo, setPopupInfo] = useState({model: "", imeiList: [], visible: false});

  return (
    <div className="result-container">
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Cantidad</th>
            <th>Guardado</th>
            <th>Seleccionado</th>
          </tr>
        </thead>
        <tbody>
        {
          devices.map( device =>
            <DeviceRow key={device.model} device={device} onSelectedChange={onSelectedChange} setPopupInfo={setPopupInfo}/>
          )
        }
        </tbody>
      </table>

      <div className="imei-tableContainer" hidden={!popupInfo.visible}>
        <table>
          <thead><tr>{popupInfo.model.toUpperCase()}</tr></thead>
          <div>
          { createString(popupInfo.imeiList) }
          </div>
        </table>
        <button
          onClick={() => setPopupInfo({...popupInfo, visible: false})}
        >X</button>
      </div>
    </div>
  )
}