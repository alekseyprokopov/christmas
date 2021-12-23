import configType from '../types/config';

export default function getLocalStorage(object: configType | string[]) {
  let result;
  let name;
  if (Array.isArray(object)) {
    name = 'selected';
  } else {
    name = 'config';
  }
  if (localStorage.getItem(name)) {
    result = JSON.parse(localStorage.getItem(name));
  }
  Object.assign(object, result);
}
