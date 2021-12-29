import configType from '../types/config';
import SelectedItem from '../types/selectedItem';
import GameConfigType from '../types/gameConfigType';

export default function getLocalStorage(object: configType | SelectedItem[] | GameConfigType) {
  let result;
  let itemName;
  if (Array.isArray(object)) {
    itemName = 'selected';
  } else {
    itemName = object.name;
  }
  if (localStorage.getItem(itemName)) {
    result = JSON.parse(localStorage.getItem(itemName));
  }
  Object.assign(object, result);
}
