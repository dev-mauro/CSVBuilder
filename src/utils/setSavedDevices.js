// Setea la propiedad saved = true y selected = false
// De todos los devices que se encuentran también en el array selectedDevices

const setSortedDevices = (devices, selectedDevices) => {

  const devicesCopy = [...devices];
  let i = 0;

  for(let j in devices) {
    if( devices[j].model == selectedDevices[i].model ) {
      devicesCopy[j].saved = true;
      devicesCopy[j].selected = false;
      i++;

      if(i == selectedDevices.length) break;
    }
  }

  return devicesCopy;
}

export default setSortedDevices;