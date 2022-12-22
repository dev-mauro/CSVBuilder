import { useState } from "react";
import { SavedIndicator } from "./SavedIndicator";

export const DeviceRow = ({device, onSelectedChange, setPopupInfo}) => {
  const { model, imeiList, saved, selected } = device;

  const isSaved = saved ? "saved" : "";
  const isSelected = selected ? "selected" : "";

  const onQuantityClick = () => {
    setPopupInfo({model, imeiList, visible: true});
  }

  return (
    <>
      <tr className={isSaved + isSelected}>
        <td>{ model.toUpperCase() }</td>
        <td style={{cursor: 'help'}} onClick={onQuantityClick}>{ imeiList.length }</td>
        <td>
          <SavedIndicator saved={ saved }/>
        </td>

        <td 
          style={{position: 'relative'}}
          className="checkbox"
        >

          <label
            htmlFor={model}
            style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}>
          </label>

          <input
            type="checkbox"
            id={model}
            checked={selected}
            onChange={() => onSelectedChange(model)}
            disabled={saved}
          />

        </td>
      </tr>
    </>
    
  )
}