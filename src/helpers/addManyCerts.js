const addManyCerts = () => {
  // numero:modelo_abr:modelo
  const infoCerts = ``

  const infoCertsArray = infoCerts.split('\n');

  const infoObjectsArray = infoCertsArray.map((item) => {
    const modelInfo = item.split(':');
    
    return {
      numero: modelInfo[0],
      modelo_abr: modelInfo[1],
      modelo: modelInfo[2],
    }
  })

  infoObjectsArray.forEach((item) => {
    addCertificate( item.modelo, item.modelo_abr, item.numero ).then( res => {
      console.log( res );
    });
  })
}