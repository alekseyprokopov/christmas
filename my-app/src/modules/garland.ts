import GameConfigType from '../types/gameConfigType';

const garlandLight = (color: string, rotate: number, translate: number) => `
  <li class="${color}" style="transform: rotate(${rotate}deg) translate(${translate}px) rotate(-${rotate}deg)"></li>`;

const lightRope = (
  size: number,
  inititalRotate: number,
  step: number,
  count: number,
  translate: number,
  color: string,
) => {
  const lights = new Array(count)
    .fill('')
    .map((_, idx) => {
      const rotate = inititalRotate + idx * step;
      return garlandLight(color, rotate, translate);
    })
    .join('');

  return `<ul class="lightrope" style="width: ${size}px; height: ${size}px">${lights}</ul>`;
};

const garlandConfig = [
  {
    size: 120, rotate: 65, step: 12, count: 5, translate: 60,
  },
  {
    size: 170, rotate: 60, step: 10, count: 7, translate: 85,
  },
  {
    size: 230, rotate: 60, step: 8, count: 8, translate: 115,
  },
  {
    size: 300, rotate: 60, step: 6, count: 11, translate: 150,
  },
  {
    size: 380, rotate: 55, step: 4, count: 18, translate: 190,
  },
  {
    size: 465, rotate: 55, step: 3.5, count: 21, translate: 232.5,
  },
  {
    size: 555, rotate: 58, step: 3, count: 24, translate: 277.5,
  },
  {
    size: 650, rotate: 58, step: 2.5, count: 29, translate: 325,
  },
];

export default function garlandActive(config: GameConfigType) {
  const garlandDiv = document.querySelector('.garland') as HTMLElement;
  const garlandColors = document.querySelector('.garland-items');
  const garlandSwitchButton = document.getElementById('garlandSwitch') as HTMLInputElement;

  const garland = garlandConfig
    .map((light) => {
      const {
        size, rotate, step, count, translate,
      } = light;
      return lightRope(size, rotate, step, count, translate, config.garlandColor);
    })
    .join('');

  const string = `<div class="garland-tree-container">${garland}</div>`;

  if (config.isGarlandActive) {
    garlandDiv!.innerHTML = string;
    garlandColors.classList.add('active');
    garlandSwitchButton.checked = true;
  } else {
    garlandDiv!.innerHTML = '';
    garlandColors.classList.remove('active');
    garlandSwitchButton.checked = false;
  }
}
