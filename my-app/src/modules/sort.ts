export default function sort(parent, config) {
  const children = parent?.children;
  const typeOfSort = config.sortSelect;
  const arrProt = Array.prototype.slice.call(children);

  switch (typeOfSort) {
    case 'yearPlus':
      arrProt.sort((a, b) => a.dataset.year.localeCompare(b.dataset.year))
        .forEach((item) => parent?.appendChild(item));
      break;

    case 'yearMinus':
      arrProt.sort((a, b) => b.dataset.year.localeCompare(a.dataset.year))
        .forEach((item) => parent?.appendChild(item));
      break;

    case 'namePlus':
      arrProt.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name))
        .forEach((item) => parent?.appendChild(item));
      break;

    case 'nameMinus':
      arrProt.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name))
        .forEach((item) => parent?.appendChild(item));
      break;
    default:
  }
}
