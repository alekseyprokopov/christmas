import configType from '../types/config';

export default function setLocalStorage(object: configType | string[]) {
  let name;
  if (Array.isArray(object)) {
    name = 'selected';
  } else {
    name = 'config';
  }
  localStorage.setItem(name, JSON.stringify(object));
}
