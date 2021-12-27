import './game.scss';

import SelectedItem from '../../types/selectedItem';
import snowFlake from '../../modules/snowflake';
import intervalKill from '../../modules/intervalKill';

interface GameConfigType {
  name: string;
  background: number;
  tree: number;
  isGarlandActive: boolean;
  garlandColor: string;
  toys: SelectedItem[];
  snow: boolean;
  volume: boolean;
}
const gameConfig: GameConfigType = {
  name: 'gameConfig',
  background: 1,
  tree: 1,
  isGarlandActive: false,
  garlandColor: 'yellow',
  toys: [],
  snow: false,
  volume: false,
};

const Game = {
  render: async () => {
    if (localStorage.getItem('selected') && localStorage.getItem('selected') !== '[]') {
      gameConfig.toys = JSON.parse(localStorage.getItem('selected'));
    }

    let toysString: string = '<p>Вы ничего не выбрали...</p>';
    toysString = gameConfig.toys
      .map(
        (item) => `
    <div class="toys-game-item" data-number="${item.number}">
      <p class="toys-game-item-count">${item.count}</p>
      <img class="toys-game-item-img" src="../../assets/toys/${item.number}.png" alt="toy" draggable="true">
    </div>`,
      )
      .join('\n');

    const view = /* html */ `
    <div class="container game-container">

        <div class="left">
            <div class="toy-config-header">
                <button class="volume"></button>
                <button class="snow"></button>
            </div>

            <div class="tree-container">
                <p class="option-title">Выберите ёлку</p>
                <div class="tree-items">
                    <div data-number="1" class="tree-item tree-item1"></div>
                    <div data-number="2" class="tree-item tree-item2"></div>
                    <div data-number="3" class="tree-item tree-item3"></div>
                    <div data-number="4" class="tree-item tree-item4"></div>
                </div>
            </div>

            <div class="background-container">
                <p class="option-title">Выберите фон</p>
                <div class="background-items">
                    <div data-number="1" class="background-item background-item1"></div>
                    <div data-number="2" class="background-item background-item2"></div>
                    <div data-number="3" class="background-item background-item3"></div>
                    <div data-number="4" class="background-item background-item4"></div>
                    <div data-number="5" class="background-item background-item5"></div>
                    <div data-number="6" class="background-item background-item6"></div>
                    <div data-number="7" class="background-item background-item7"></div>
                    <div data-number="8" class="background-item background-item8"></div>
                </div>
            </div>

            <div class="garland-container">
                <div class="garland-container-head">
                  <p class="option-title">Гирлянда</p>
                  <label class="switch">
                          <input type="checkbox" name="timeGame" id="timeGame" />
                          <span class="slider round"></span>
                      </label>
                  </div>
                <div class="garland-items">
                    <div class="garland-item garland-yellow" style="background: linear-gradient(
                      124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8)"></div>
                    <div class="garland-item garland-yellow" style="background: rgba(253, 215, 0, 1)"></div>
                    <div class="garland-item garland-red" style="background: rgba(253, 0, 0, 1)"></div>
                    <div class="garland-item garland-blue" style = "background: rgba(34, 153, 235, 1)"></div>
                    <div class="garland-item garland-green" style = "background: rgba(8, 170, 5, 1)"></div>
                </div>
            </div>

        </div>


  <div class="center" style ="background-image: url('../../assets/bg/1.jpg')">
    <img src="assets/tree/1.png" class="main-tree">
  </div>

        <div class="right">

            <div class="toys-game-container">
              <p class="option-title">Игрушки</p>
              <div class="toys-game-items">
                  ${gameConfig.toys.length > 0 ? toysString : '*Вы ничего не выбрали...'}

              </div>
            </div>

            <div class="decorated-container">
              <p class="option-title">Вы нарядили</p>
              <div class="decorated-items">
                <div class="decorated-item"></div>
              </div>
            </div>
        </div>

    </div>
    `;
    return view;
  },
  after_render: async () => {
    const center = document.querySelector('.center') as HTMLElement;
    const backgroundItems = document.querySelectorAll('.background-item');
    const treeItems = document.querySelectorAll('.tree-item');
    const treeImg = document.querySelector('.main-tree') as HTMLImageElement;
    const snowButton = document.querySelector('.snow');

    const audio = document.querySelector('.audio') as HTMLAudioElement;
    const volumeButton = document.querySelector('.volume');

    backgroundItems.forEach((item) => {
      item.addEventListener('click', () => {
        const backgroundNum = (<HTMLElement>item).dataset.number;
        gameConfig.background = +backgroundNum;
        center.style.backgroundImage = `url("../../assets/bg/${backgroundNum}.jpg")`;
      });
    });

    treeItems.forEach((item) => {
      item.addEventListener('click', () => {
        const treeNum = (<HTMLElement>item).dataset.number;
        gameConfig.tree = +treeNum;
        treeImg.src = `../../assets/tree/${treeNum}.png`;
      });
    });

    snowButton.addEventListener('click', () => {
      gameConfig.snow = !gameConfig.snow;

      if (gameConfig.snow) {
        setInterval(snowFlake, 50);
      } else {
        intervalKill();
      }
    });

    volumeButton.addEventListener('click', () => {
      gameConfig.volume = !gameConfig.volume;

      if (gameConfig.volume) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  },
};

export default Game;
