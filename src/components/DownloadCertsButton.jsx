import { getCerts } from "../helpers/getCerts";
import { useDownload } from "../hook/useDownload";

export const DownloadCertsButton = () => {

  const download = useDownload();

  const onButtonClick = async () => {
    const certsInfo = await getCerts();

    // Array con el numero de los certificados
    const certsNumber = certsInfo.map(e => e.numero);

    // Array con el modelo abreviado de los certificados
    const certsModelAbr = certsInfo.map(e => e.modelo_abr);

    download( [certsModelAbr, certsNumber], 'CERTIFICADOS' );
  }

  return (
    <button
      className="button"
      onClick={ onButtonClick }
    >
      Descargar certificados
    </button>
  )
}
