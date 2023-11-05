import { useState } from "react";
import { addCertificate } from "../helpers/addCertFunction";
import { useForm } from "../hook/useForm"

export const AddCert = () => {
  const { model, modelShort, certNumber, onInputChange, onFormReset } = useForm({
    model: '',
    modelShort: '',
    certNumber: null
  }, true);

  const [ addResult, setAddResult ] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setAddResult();

    if( model === '' || modelShort === '' || certNumber === null ){
      setAddResult( false );
      return;
    };

    addCertificate( model, modelShort, certNumber ).then( res => {
      setAddResult( res );
      onFormReset();
    });
  }

  return (
    <div className="add-cert__container">
      <h3>Añadir certificado</h3>

      <form 
        className="add-cert__form"
        onSubmit={ onFormSubmit }
      >
        <label>Modelo</label>
        <input
          type="text"
          placeholder="Samsung Galaxy S10"
          name="model"
          value={ model }
          onChange={ onInputChange }
          autoComplete="off"
        />

        <label>Modelo abreviado</label>
        <input 
          type="text"
          placeholder="s10"
          name="modelShort"
          value={ modelShort }
          onChange={ onInputChange }
          autoComplete="off"
        />

        <label>Numero certificado</label>
        <input 
          type="number"
          placeholder="13847299348..."
          name="certNumber"
          value={ ( certNumber ) ? certNumber : '' }
          onChange={ onInputChange }
          autoComplete="off"
        />

        <button className="button">Añadir</button>

        <span
          hidden={ addResult == null }
          className={`add-result ${(addResult) ? 'success' : 'error'}`}
        >
          {
            (addResult) 
              ? `Certificado añadido exitosamente` 
              : `Error al añadir el certificado`
          }
        </span>
      </form>
    </div>
  )
}
