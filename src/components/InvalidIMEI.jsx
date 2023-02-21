const listItemStyle = {
  margin: '5px 0'
}

const spanStyle = {
  fontWeight: 'bold',
}

export const InvalidIMEI = ({device}) => {
  const {imei, model} = device;
  const imeiLength = ('' + imei).length;

  return (
    <>
      <li style={listItemStyle}>
      {
        `${imei} - ${model} `
      }
        <span style={spanStyle}>
        {
          `(${imeiLength} dígitos)`  
        }
        </span>
      </li>
      
    </>
  )
}