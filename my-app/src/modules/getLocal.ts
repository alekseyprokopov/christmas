import configType from '../types/config';
import SelectedItem from '../types/selectedItem';
import GameConfigType from '../types/gameConfigType';

export default function getLocalStorage(object: configType | SelectedItem[] | GameConfigType) {
  let result;
  const itemName = Array.isArray(object) ? 'selected' : object.name;

  if (localStorage.getItem(itemName)) result = JSON.parse(localStorage.getItem(itemName));
  Object.assign(object, result);
}
