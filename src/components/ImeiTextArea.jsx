import { createRef, memo, useContext } from "react"
import { InfoContext } from "../context/InfoContext"



export const ImeiTextArea = memo(() => {
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
      />
      <button
      className="button"
        onClick={onButtonClick}
      > Revisar </button>
    </div>
  )
})