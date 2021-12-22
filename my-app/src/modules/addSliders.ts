import noUiSlider, { target } from 'nouislider';

import filter from './filter';

export default function addSliders(defaultArray, config) {
  const sliders = document.querySelectorAll('.number-slider, .year-slider');

  sliders.forEach((item, index) => {
    const min = index === 0 ? 1 : 1940;
    const max = index === 0 ? 12 : 2020;
    const sliderStep = index === 0 ? 1 : 10;
    noUiSlider.create(item as target, {
      start: [min, max],
      tooltips: true,
      connect: true,
      range: {
        min,
        max,
      },
      format: {
        to(value) {
          return Math.floor(Number(value));
        },
        from(value) {
          return Math.floor(Number(value));
        },
      },
      step: sliderStep,
    });

    (item as target).noUiSlider.on('slide', () => {
      if (index === 0) {
        config.category.numberStart = (item as target).noUiSlider.get()[0];
        config.category.numberEnd = (item as target).noUiSlider.get()[1];
      } else {
        config.category.yearStart = (item as target).noUiSlider.get()[0];
        config.category.yearEnd = (item as target).noUiSlider.get()[1];
      }
      filter(defaultArray, config);
    });
  });
}
