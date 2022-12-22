import { createRef, useContext } from "react"
import { InfoContext } from "../context/InfoContext"

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  width: '500px',
  margin: '0 auto'
}

const textAreaStyle = {
  width: '500px',
  height: '400px',
  resize: 'vertical',
}

const buttonStyle = {
  width: '150px',
  height: '50px',
}

export const ImeiTextArea = () => {

  const { setImei } = useContext( InfoContext );
  const textRef = createRef();

  const onButtonClick = () => {
    const info = textRef.current.value;
    setImei(info);
  }

  return (
    <div style={ containerStyle }>
      <textarea
        ref={textRef}
        type="text"
        className="imei-input"
        autoCapitalize="none"
        style={ textAreaStyle }
      />
      <button
        style={ buttonStyle }
        onClick={onButtonClick}
      > Revisar </button>
    </div>
  )
}