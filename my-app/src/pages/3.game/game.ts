import './game.scss';
import gameHTML from './gameHTML';

import {
  dragAndDrop, setLocalStorage, getLocalStorage, gameConfigFunction, saveTree,
} from '../../modules';

import { GameConfigType } from '../../types';

const gameConfig: GameConfigType = {
  name: 'gameConfig',
  background: 1,
  tree: 1,
  isGarlandActive: false,
  garlandColor: 'multicolor',
  toys: [],
  snow: false,
  volume: false,
  decorated: [],
  presets: '',
};

window.addEventListener('beforeunload', () => setLocalStorage(gameConfig));
window.addEventListener('hashchange', () => setLocalStorage(gameConfig));
window.addEventListener('load', () => {
  getLocalStorage(gameConfig);
  gameConfig.decorated = [];
});

const Game = {
  render: async () => gameHTML(gameConfig),
  after_render: async () => {
    const backgroundItems = document.querySelectorAll('.background-item');
    const treeItems = document.querySelectorAll('.tree-item');
    const garlandItems = document.querySelectorAll('.garland-item');
    const snowButton = document.querySelector('.snow');
    const garlandSwitchButton = document.getElementById('garlandSwitch') as HTMLInputElement;
    const volumeButton = document.querySelector('.volume');
    const saveButton = document.querySelector('.save-button');

    gameConfigFunction(gameConfig);
    dragAndDrop();

    saveButton.addEventListener('click', () => saveTree(gameConfig));

    garlandSwitchButton.addEventListener('click', () => {
      gameConfig.isGarlandActive = garlandSwitchButton.checked;
      gameConfigFunction(gameConfig);
    });

    backgroundItems.forEach((item) => {
      item.addEventListener('click', () => {
        const backgroundNum = (<HTMLElement>item).dataset.number;
        gameConfig.background = +backgroundNum;
        gameConfigFunction(gameConfig);
      });
    });

    treeItems.forEach((item) => {
      item.addEventListener('click', () => {
        const treeNum = (<HTMLElement>item).dataset.number;
        gameConfig.tree = +treeNum;
        gameConfigFunction(gameConfig);
      });
    });

    garlandItems.forEach((item) => {
      item.addEventListener('click', () => {
        const { color } = (<HTMLElement>item).dataset;
        gameConfig.garlandColor = color;
        gameConfigFunction(gameConfig);
      });
    });

    snowButton.addEventListener('click', () => {
      gameConfig.snow = !gameConfig.snow;
      gameConfigFunction(gameConfig);
    });

    volumeButton.addEventListener('click', () => {
      gameConfig.volume = !gameConfig.volume;
      gameConfigFunction(gameConfig);
    });

    document.addEventListener('click', () => {
      if (gameConfig.volume) {
        gameConfigFunction(gameConfig);
      }
    });
  },
};

export default Game;
