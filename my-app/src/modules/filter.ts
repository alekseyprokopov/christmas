import animation from './animation';
import configType from '../types/config';

export default function filter(array: HTMLElement[], config:configType) {
  const parent = document.querySelector('.toy-card-container');

  const filterArray = array.filter((item) => {
    const yearFilter = (+item.dataset.year >= config.category.yearStart)
    && (+item.dataset.year <= config.category.yearEnd);

    const numberFilter = (+item.dataset.number >= config.category.numberStart)
    && (+item.dataset.number <= config.category.numberEnd);
    const favoriteFilter = !config.category.favorite ? (item.dataset.favorite === 'true') : true;

    const { shape, color, size } = config.category;

    const shapeFilter = shape[item.dataset.shape];
    const colorFilter = color[item.dataset.color];
    const sizeFilter = size[item.dataset.size];
    const searchFilter = item.dataset.name.toLowerCase().search(config.search) !== -1;

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
  if (filterArray.length === 0) parent!.innerHTML = '<p style="font-size:20px; font-weight: lighter;color: white;text-align: center;width: 100%;"> &#10060; cовпадений нет...</p>';

  filterArray.forEach((item) => parent?.appendChild(item));
}
