const removeImeisFromList = (textAreaValue, imeisToRemove) => {

  if (!imeisToRemove) return textAreaValue;

  const devices = textAreaValue.split('\n');

  for(let imei of imeisToRemove) {
    
    for(let i in devices) {
      if (devices[i].includes(imei)) {
        devices[i] = devices[i].replace(imei, '');
        break;
      }
    }

  }

  return devices.join('\n');
}

export { removeImeisFromList };