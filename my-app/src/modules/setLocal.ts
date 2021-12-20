export default function setLocalStorage(object) {
    localStorage.setItem('config', JSON.stringify(object));
}
