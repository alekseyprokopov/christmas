import { target } from 'nouislider';
import noActive from './noActive';
import filter from './filter';
import defaultConfig from './defaultConfig';
import configType from '../types/config';

export default function reset(config: configType, defaultArray: HTMLElement[]) {
  const defaults = JSON.parse(JSON.stringify(defaultConfig));
  const sliders = document.querySelectorAll('.number-slider, .year-slider');

  Object.assign(config.category, defaults.category);
  filter(defaultArray, config);
  sliders.forEach((item, index) => {
    const {
      numberStart, numberEnd, yearStart, yearEnd,
    } = config.category;
    if (index === 0) (item as target).noUiSlider.set([numberStart, numberEnd]);
    if (index === 1) (item as target).noUiSlider.set([yearStart, yearEnd]);
  });

  noActive(config);
}
