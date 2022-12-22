const getCSV = (data) => {
  let csv = "data:text/csv:charset=utf-8,";

  const stringData = data.join('\r\n');

  return csv + stringData;
}

export default getCSV;