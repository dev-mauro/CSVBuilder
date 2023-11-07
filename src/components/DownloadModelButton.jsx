import { getCerts } from "../helpers/getCerts";
import { useDownload } from "../hook/useDownload";

export const DownloadModelButton = () => {

  const download = useDownload();

  const onButtonClick = async () => {
    const certsInfo = await getCerts();

    // Array con el numero de los certificados
    const certsModel = certsInfo.map(e => e.modelo);

    // Array con el modelo abreviado de los certificados
    const certsModelAbr = certsInfo.map(e => e.modelo_abr);

    download( [certsModelAbr, certsModel], 'MODELOS' );
  }

  return (
    <button
      className="button models-button"
      onClick={ onButtonClick }
    >
      Descargar modelos
    </button>
  )
}
