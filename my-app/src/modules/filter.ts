import animation from './animation';
import configType from '../types/config';

export default function filter(array: HTMLElement[], config:configType) {
  const parent = document.querySelector('.toy-card-container');

  const filterArray = array.filter((item) => {
    const {
      yearStart, yearEnd, numberStart, numberEnd, favorite, shape, color, size,
    } = config.category;
    const { dataset } = item;

    const yearFilter = (+item.dataset.year >= yearStart)
    && (+item.dataset.year <= yearEnd);

    const numberFilter = (+item.dataset.number >= numberStart)
    && (+item.dataset.number <= numberEnd);
    const favoriteFilter = !favorite ? (item.dataset.favorite === 'true') : true;

    const shapeFilter = shape[dataset.shape];
    const colorFilter = color[dataset.color];
    const sizeFilter = size[dataset.size];
    const searchFilter = dataset.name.toLowerCase().search(config.search) !== -1;

    return yearFilter
    && numberFilter
    && shapeFilter
    && colorFilter
    && sizeFilter
    && favoriteFilter
    && searchFilter;
  });
  animation();

  parent!.innerHTML = '';
  if (filterArray.length === 0) {
    const notMatchMessage = '<p style="font-size:20px; font-weight: lighter;color: white;text-align: center;width: 100%;"> &#10060; cовпадений нет...</p>';
    parent!.innerHTML = notMatchMessage;
  }

  filterArray.forEach((item) => parent?.appendChild(item));
}
