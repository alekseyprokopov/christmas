import configType from '../types/config';
import SelectedItem from '../types/selectedItem';
import GameConfigType from '../types/gameConfigType';

export default function setLocalStorage(object: configType | SelectedItem[] | GameConfigType) {
  let itemName;
  if (Array.isArray(object)) {
    itemName = 'selected';
  } else {
    itemName = object.name;
  }
  localStorage.setItem(itemName, JSON.stringify(object));
}
