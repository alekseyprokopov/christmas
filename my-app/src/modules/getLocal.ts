export default function getLocalStorage(object) {
    let result;
    if (localStorage.getItem('config')) {
        result = JSON.parse(localStorage.getItem('config'));
    }
    Object.assign(object, result);
}