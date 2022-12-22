const getDevicesNames = async() => {
  const fileURL = "https://gist.githubusercontent.com/dev-mauro/4d778304c264eea5ab5f42e0a2d0f8e5/raw/4ffac9bde527741f65f770b379d37dcb53cf1474/devices";

  const response = await fetch(fileURL);
  const data = await response.json();

  return data;
}

export default getDevicesNames;

