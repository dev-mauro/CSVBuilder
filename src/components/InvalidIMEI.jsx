const listItemStyle = {
  margin: '5px 0'
}

const spanStyle = {
  fontSize: '14px',
  color: 'rgb(209, 209, 209)'
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