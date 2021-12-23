import noUiSlider, { target } from 'nouislider';
import filter from './filter';
import configType from '../types/config';

export default function addSliders(defaultArray:object[], config: configType) {
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
        config.category.numberStart = ((<target>item).noUiSlider.get() as number[])[0];
        config.category.numberEnd = ((<target>item).noUiSlider.get() as number[])[1];
      } else {
        config.category.yearStart = ((<target>item).noUiSlider.get() as number[])[0];
        config.category.yearEnd = ((<target>item).noUiSlider.get() as number[])[1];
      }
      filter(defaultArray as HTMLElement[], config);
    });
  });
}
