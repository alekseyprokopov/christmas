export default function getLocalStorage(object) {
  let result;
  let { name } = object;
  if (Array.isArray(object)) name = 'selected';
  if (localStorage.getItem(name)) {
    result = JSON.parse(localStorage.getItem(name));
  }
  Object.assign(object, result);
}
