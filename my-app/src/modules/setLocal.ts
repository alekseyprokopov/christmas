export default function setLocalStorage(object) {
  let { name } = object;
  if (Array.isArray(object)) name = 'selected';
  localStorage.setItem(name, JSON.stringify(object));
}
