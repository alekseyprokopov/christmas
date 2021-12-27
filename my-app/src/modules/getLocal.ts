import configType from '../types/config';
import SelectedItem from '../types/selectedItem';

export default function getLocalStorage(object: configType | SelectedItem[]) {
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
