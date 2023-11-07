import { deleteCert } from "../helpers/DeleteCertFunction";

const formatModel = ( model, charNumber = 12 ) => {
  if ( model.length > charNumber ) {
    return model.slice( 0, charNumber ) + '...';
  }
  return model;
}

export const CertListItem = ({ info, onRemove, allowRemove }) => {
  // info = [0] => numero, [1] => modelo, [2] => modelo_abr

  const { numero, modelo, modelo_abr } = info;

  const onRemoveClick = () => {
    const userConfirm = confirm(`¿Eliminar el certificado ${modelo_abr}?`);

    if ( !userConfirm )
      return;

    deleteCert( numero );
    onRemove();
  }

  return (
    <div className="cert-listItem">
      <div className="cert-model__item">
        { formatModel( modelo ) }
        <div className="cert-listItem__tip">{modelo}</div>
      </div>
      <div className="cert-modelabr__item">{ modelo_abr }</div>
      <div className="cert-number__item">{ numero }</div>
      {
        allowRemove &&
        <button className="remove-cert__button" onClick={ onRemoveClick }>
          <i className="fa-solid fa-xmark"></i>
        </button>
      }
    </div>
  )
}
