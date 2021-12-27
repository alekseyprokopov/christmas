import configType from '../types/config';
import SelectedItem from '../types/selectedItem';

export default function setLocalStorage(object: configType | SelectedItem[]) {
  let name;
  if (Array.isArray(object)) {
    name = 'selected';
  } else {
    name = 'config';
  }
  localStorage.setItem(name, JSON.stringify(object));
}
