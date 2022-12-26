import { useContext } from "react"
import { InfoContext } from "../context/InfoContext"
import { InvalidIMEI } from "./InvalidIMEI"


const containerStyle = {
  width: '500px',
  margin: '0 auto',
  padding: '10px',
  backgroundColor: 'pink',
  border: '1px solid red',
  borderRadius: '10px',
  marginTop: '30px'
}

const listStyle = {
  paddingLeft: '12px',
  marginTop: '10px',
}

const hrStyle = {
  backgroundColor: 'red',
  borderColor: 'red',
  margin: '15px 0',
  borderWidth: '1px',
}

export const InvalidImeiContainer = () => {
  const { invalidIMEI } = useContext(InfoContext)

  if (invalidIMEI.length > 0)
    return (
      <div style={containerStyle}>
        <h3>Los siguientes IMEI no fueron incluidos:</h3>
        <hr style={hrStyle}/>

        <ul style={listStyle}>
          {
            invalidIMEI.map(device => <InvalidIMEI device={device}/>)
          }
        </ul>
      </div>
    )

  return (<></>)
}