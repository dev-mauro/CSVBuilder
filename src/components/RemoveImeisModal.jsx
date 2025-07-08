import { useRef } from "react";

import { removeImeisFromList } from "../utils/removeImeisFromList";

export const RemoveImeisModal = ({ textAreaValue, setFormState, isOpen, onCloseModal }) => {
  
  const textAreaRef = useRef();

  const onRemoveImeis = ()  => {
    const imeisToRemove = textAreaRef.current.value;

    if( !imeisToRemove )
      onCloseModal();

    const imeisToRemoveList = imeisToRemove.split('\n').map( imei => imei.split('\t')).flat();

    const newTextAreaValue = removeImeisFromList(textAreaValue, imeisToRemoveList);

    setFormState({
      textAreaValue: newTextAreaValue
    })

    textAreaRef.current.value = '';
    onCloseModal();
  }
  
  return (
    <div className={`remove-imeis_modal ${(isOpen) ? 'open' : 'closed'}`}
    >
      <textarea
        className="imei-input"
        name=""
        id=""
        ref={textAreaRef}
        placeholder="Ingrese los imeis a eliminar..."
      ></textarea>

      <div>
        <button className="button" onClick={onCloseModal}>Cerrar</button>      
       <button className="button" onClick={onRemoveImeis}>Borrar</button>
      </div>
    </div>
  )
}
