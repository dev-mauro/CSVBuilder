// Función retorna el contenido de los archivos de información del bot
// Sirve para el archivo CERTIFICADOS, CLIENTES y MODELOS

// recibe un array: [0] => array con las keys, [1] => array con los valores
// EJ: archivo CERTS
// [0] => [1231, 234234, 3424]
// [1] => [modelo1, modelo2 ....]

// retorna el archivo con la estructura
// keyArray[i]:valueArray[i]
// keyArray[i+1]:valueArray[i+1] ...

const getBotInfoFiles = ([keyArray, valueArray]) => {
  let file = "data:text/plain:charset=utf-8,";

  for(let i = 0; i < keyArray.length; i++) {
    file += `${keyArray[i]}:${valueArray[i]}\r\n`;
  }

  return file;
}

export { getBotInfoFiles }