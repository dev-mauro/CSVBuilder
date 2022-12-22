import getCSV from "../utils/getCSV"

export const useDownload = () => {

  const download = (data, fileName) => {
    const file = getCSV(data);

    const link = document.createElement("a")

    link.href = file;
    link.download = `${fileName}.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return download;
}