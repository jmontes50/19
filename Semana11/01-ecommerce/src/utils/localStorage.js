const getStorage = (name) => {
  const data = localStorage.getItem(name);
  const dataJs = JSON.parse(data); //string a JS
  return dataJs;
};

const saveStorage = (name, data) => {
  const dataString = JSON.stringify(data); //JS a string
  localStorage.setItem(name, dataString);
};

const remoteStorage = (name) => {
  localStorage.removeItem(name);
};

export { getStorage, saveStorage, remoteStorage };
