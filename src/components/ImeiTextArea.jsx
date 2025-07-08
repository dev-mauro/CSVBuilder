import { createRef, memo, useContext } from "react"
import { InfoContext } from "../context/InfoContext"



export const ImeiTextArea = memo(({ value, onChange }) => {
  const { onSetImei } = useContext( InfoContext );
  const textRef = createRef();

  const onButtonClick = () => {
    const info = textRef.current.value;
    onSetImei(info);
  }

  return (
    <div
      className="imei-textArea__container" 
    >
      <textarea
        ref={textRef}
        type="text"
        className="imei-input"
        autoCapitalize="none"
        value={ value }
        onChange={ onChange }
        name="textAreaValue"
        placeholder="Ingrese los imeis a revisar..."
      />
      <button
      className="button"
        onClick={onButtonClick}
      > Revisar </button>
    </div>
  )
})