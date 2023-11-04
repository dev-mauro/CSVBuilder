import { getBotInfoFiles } from "../utils/getBotInfoFiles";
import getCSV from "../utils/getCSV"

export const useDownload = ( extension = '' ) => {

  const fileGeneratorFunction = ( extension == '.csv' ) ? getCSV : getBotInfoFiles;

  const download = ( data, fileName ) => {
    const file = fileGeneratorFunction(data);

    const link = document.createElement("a")

    link.href = file;
    link.download = `${fileName}${extension}`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return download;
}