const listItemStyle = {
  margin: '5px 0'
}

export const InvalidIMEI = ({device}) => {
  const {imei, model} = device;

  return (
    <li style={listItemStyle}>{`${imei} - ${model}`}</li>
  )
}