import { useContext } from "react"
import { InfoContext } from "../context/InfoContext"
import { InvalidIMEI } from "./InvalidIMEI"


export const InvalidImeiContainer = () => {
  const { invalidIMEI } = useContext(InfoContext)

  if (invalidIMEI.length > 0)
    return (
      <div className="invalid-imei__container">
        <h3>IMEI no incluidos</h3>
        <hr/>
        <ul>
          {
            invalidIMEI.map(device => <InvalidIMEI device={device}/>)
          }
        </ul>
      </div>
    )

  return (<></>)
}