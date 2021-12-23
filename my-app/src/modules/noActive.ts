import { target } from 'nouislider';
import configType from '../types/config';

export default function noActive(config: configType) {
  const sliders = document.querySelectorAll('.number-slider, .year-slider');

  const noActiveItems = document?.querySelectorAll('.form-item, .color-item, .favorite, .size-item');
  noActiveItems.forEach((item) => {
    const { shape, color, size } = config.category;
    const shapeItem = (item as HTMLElement).dataset.name as string;
    const colorItem = (item as HTMLElement).dataset.color as string;
    const sizeItem = (item as HTMLElement).dataset.size as string;

    if (shapeItem) {
      if (!shape[shapeItem]) {
        item.classList.add('no-active');
      } else {
        item.classList.remove('no-active');
      }
    }

    if (colorItem) {
      if (!color[colorItem]) {
        item.classList.add('no-active');
      } else {
        item.classList.remove('no-active');
      }
    }

    if (sizeItem) {
      if (!size[sizeItem]) {
        item.classList.add('no-active');
      } else {
        item.classList.remove('no-active');
      }
      (item.firstElementChild as HTMLInputElement).checked = config.category.size[sizeItem];
    }
  });

  sliders.forEach((item, index) => {
    const {
      numberStart, numberEnd, yearStart, yearEnd,
    } = config.category;
    if (index === 0) (item as target).noUiSlider.set([numberStart, numberEnd]);
    if (index === 1) (item as target).noUiSlider.set([yearStart, yearEnd]);
  });
}
