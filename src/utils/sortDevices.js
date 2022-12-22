
// Ordena la lista de devices en función de su propiedad saved
const sortSavedDevices = (deviceList) => {
  deviceList.sort( (x, y) => {
    if(x.saved == true && y.saved == false)
      return -1

    if(x.saved == false && y.saved == true)
      return 1

    return 0;
  });
}

// Ordena los elementos de la lista en función de su modelo
const sortDevicesByModel = (deviceList) => {
  deviceList.sort( (x, y) => {
    if(x.model > y.model)
      return 1

    if(x.model < y.model)
      return -1

    return 0;
  });
}

export {sortSavedDevices, sortDevicesByModel};