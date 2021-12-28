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
    <div class="garland-tree-container">
  <ul class="lightrope" style="width: 120px; height: 120px">
    <li class="blue" style="transform: rotate(65deg) translate(60px) rotate(-65deg)"></li>
    <li class="blue" style="transform: rotate(77deg) translate(60px) rotate(-77deg)"></li>
    <li class="blue" style="transform: rotate(89deg) translate(60px) rotate(-89deg)"></li>
    <li class="blue" style="transform: rotate(101deg) translate(60px) rotate(-101deg)"></li>
    <li class="blue" style="transform: rotate(113deg) translate(60px) rotate(-113deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 170px; height: 170px">
    <li class="blue" style="transform: rotate(60deg) translate(85px) rotate(-60deg)"></li>
    <li class="blue" style="transform: rotate(70deg) translate(85px) rotate(-70deg)"></li>
    <li class="blue" style="transform: rotate(80deg) translate(85px) rotate(-80deg)"></li>
    <li class="blue" style="transform: rotate(90deg) translate(85px) rotate(-90deg)"></li>
    <li class="blue" style="transform: rotate(100deg) translate(85px) rotate(-100deg)"></li>
    <li class="blue" style="transform: rotate(110deg) translate(85px) rotate(-110deg)"></li>
    <li class="blue" style="transform: rotate(120deg) translate(85px) rotate(-120deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 230px; height: 230px">
    <li class="blue" style="transform: rotate(60deg) translate(115px) rotate(-60deg)"></li>
    <li class="blue" style="transform: rotate(68deg) translate(115px) rotate(-68deg)"></li>
    <li class="blue" style="transform: rotate(76deg) translate(115px) rotate(-76deg)"></li>
    <li class="blue" style="transform: rotate(84deg) translate(115px) rotate(-84deg)"></li>
    <li class="blue" style="transform: rotate(92deg) translate(115px) rotate(-92deg)"></li>
    <li class="blue" style="transform: rotate(100deg) translate(115px) rotate(-100deg)"></li>
    <li class="blue" style="transform: rotate(108deg) translate(115px) rotate(-108deg)"></li>
    <li class="blue" style="transform: rotate(116deg) translate(115px) rotate(-116deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 300px; height: 300px">
    <li class="blue" style="transform: rotate(60deg) translate(150px) rotate(-60deg)"></li>
    <li class="blue" style="transform: rotate(66deg) translate(150px) rotate(-66deg)"></li>
    <li class="blue" style="transform: rotate(72deg) translate(150px) rotate(-72deg)"></li>
    <li class="blue" style="transform: rotate(78deg) translate(150px) rotate(-78deg)"></li>
    <li class="blue" style="transform: rotate(84deg) translate(150px) rotate(-84deg)"></li>
    <li class="blue" style="transform: rotate(90deg) translate(150px) rotate(-90deg)"></li>
    <li class="blue" style="transform: rotate(96deg) translate(150px) rotate(-96deg)"></li>
    <li class="blue" style="transform: rotate(102deg) translate(150px) rotate(-102deg)"></li>
    <li class="blue" style="transform: rotate(108deg) translate(150px) rotate(-108deg)"></li>
    <li class="blue" style="transform: rotate(114deg) translate(150px) rotate(-114deg)"></li>
    <li class="blue" style="transform: rotate(120deg) translate(150px) rotate(-120deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 380px; height: 380px">
    <li class="blue" style="transform: rotate(55deg) translate(190px) rotate(-55deg)"></li>
    <li class="blue" style="transform: rotate(59deg) translate(190px) rotate(-59deg)"></li>
    <li class="blue" style="transform: rotate(63deg) translate(190px) rotate(-63deg)"></li>
    <li class="blue" style="transform: rotate(67deg) translate(190px) rotate(-67deg)"></li>
    <li class="blue" style="transform: rotate(71deg) translate(190px) rotate(-71deg)"></li>
    <li class="blue" style="transform: rotate(75deg) translate(190px) rotate(-75deg)"></li>
    <li class="blue" style="transform: rotate(79deg) translate(190px) rotate(-79deg)"></li>
    <li class="blue" style="transform: rotate(83deg) translate(190px) rotate(-83deg)"></li>
    <li class="blue" style="transform: rotate(87deg) translate(190px) rotate(-87deg)"></li>
    <li class="blue" style="transform: rotate(91deg) translate(190px) rotate(-91deg)"></li>
    <li class="blue" style="transform: rotate(95deg) translate(190px) rotate(-95deg)"></li>
    <li class="blue" style="transform: rotate(99deg) translate(190px) rotate(-99deg)"></li>
    <li class="blue" style="transform: rotate(103deg) translate(190px) rotate(-103deg)"></li>
    <li class="blue" style="transform: rotate(107deg) translate(190px) rotate(-107deg)"></li>
    <li class="blue" style="transform: rotate(111deg) translate(190px) rotate(-111deg)"></li>
    <li class="blue" style="transform: rotate(115deg) translate(190px) rotate(-115deg)"></li>
    <li class="blue" style="transform: rotate(119deg) translate(190px) rotate(-119deg)"></li>
    <li class="blue" style="transform: rotate(123deg) translate(190px) rotate(-123deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 465px; height: 465px">
    <li class="blue" style="transform: rotate(55deg) translate(232.5px) rotate(-55deg)"></li>
    <li class="blue" style="transform: rotate(58.5deg) translate(232.5px) rotate(-58.5deg)"></li>
    <li class="blue" style="transform: rotate(62deg) translate(232.5px) rotate(-62deg)"></li>
    <li class="blue" style="transform: rotate(65.5deg) translate(232.5px) rotate(-65.5deg)"></li>
    <li class="blue" style="transform: rotate(69deg) translate(232.5px) rotate(-69deg)"></li>
    <li class="blue" style="transform: rotate(72.5deg) translate(232.5px) rotate(-72.5deg)"></li>
    <li class="blue" style="transform: rotate(76deg) translate(232.5px) rotate(-76deg)"></li>
    <li class="blue" style="transform: rotate(79.5deg) translate(232.5px) rotate(-79.5deg)"></li>
    <li class="blue" style="transform: rotate(83deg) translate(232.5px) rotate(-83deg)"></li>
    <li class="blue" style="transform: rotate(86.5deg) translate(232.5px) rotate(-86.5deg)"></li>
    <li class="blue" style="transform: rotate(90deg) translate(232.5px) rotate(-90deg)"></li>
    <li class="blue" style="transform: rotate(93.5deg) translate(232.5px) rotate(-93.5deg)"></li>
    <li class="blue" style="transform: rotate(97deg) translate(232.5px) rotate(-97deg)"></li>
    <li class="blue" style="transform: rotate(100.5deg) translate(232.5px) rotate(-100.5deg)"></li>
    <li class="blue" style="transform: rotate(104deg) translate(232.5px) rotate(-104deg)"></li>
    <li class="blue" style="transform: rotate(107.5deg) translate(232.5px) rotate(-107.5deg)"></li>
    <li class="blue" style="transform: rotate(111deg) translate(232.5px) rotate(-111deg)"></li>
    <li class="blue" style="transform: rotate(114.5deg) translate(232.5px) rotate(-114.5deg)"></li>
    <li class="blue" style="transform: rotate(118deg) translate(232.5px) rotate(-118deg)"></li>
    <li class="blue" style="transform: rotate(121.5deg) translate(232.5px) rotate(-121.5deg)"></li>
    <li class="blue" style="transform: rotate(125deg) translate(232.5px) rotate(-125deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 555px; height: 555px">
    <li class="blue" style="transform: rotate(58deg) translate(277.5px) rotate(-58deg)"></li>
    <li class="blue" style="transform: rotate(61deg) translate(277.5px) rotate(-61deg)"></li>
    <li class="blue" style="transform: rotate(64deg) translate(277.5px) rotate(-64deg)"></li>
    <li class="blue" style="transform: rotate(67deg) translate(277.5px) rotate(-67deg)"></li>
    <li class="blue" style="transform: rotate(70deg) translate(277.5px) rotate(-70deg)"></li>
    <li class="blue" style="transform: rotate(73deg) translate(277.5px) rotate(-73deg)"></li>
    <li class="blue" style="transform: rotate(76deg) translate(277.5px) rotate(-76deg)"></li>
    <li class="blue" style="transform: rotate(79deg) translate(277.5px) rotate(-79deg)"></li>
    <li class="blue" style="transform: rotate(82deg) translate(277.5px) rotate(-82deg)"></li>
    <li class="blue" style="transform: rotate(85deg) translate(277.5px) rotate(-85deg)"></li>
    <li class="blue" style="transform: rotate(88deg) translate(277.5px) rotate(-88deg)"></li>
    <li class="blue" style="transform: rotate(91deg) translate(277.5px) rotate(-91deg)"></li>
    <li class="blue" style="transform: rotate(94deg) translate(277.5px) rotate(-94deg)"></li>
    <li class="blue" style="transform: rotate(97deg) translate(277.5px) rotate(-97deg)"></li>
    <li class="blue" style="transform: rotate(100deg) translate(277.5px) rotate(-100deg)"></li>
    <li class="blue" style="transform: rotate(103deg) translate(277.5px) rotate(-103deg)"></li>
    <li class="blue" style="transform: rotate(106deg) translate(277.5px) rotate(-106deg)"></li>
    <li class="blue" style="transform: rotate(109deg) translate(277.5px) rotate(-109deg)"></li>
    <li class="blue" style="transform: rotate(112deg) translate(277.5px) rotate(-112deg)"></li>
    <li class="blue" style="transform: rotate(115deg) translate(277.5px) rotate(-115deg)"></li>
    <li class="blue" style="transform: rotate(118deg) translate(277.5px) rotate(-118deg)"></li>
    <li class="blue" style="transform: rotate(121deg) translate(277.5px) rotate(-121deg)"></li>
    <li class="blue" style="transform: rotate(124deg) translate(277.5px) rotate(-124deg)"></li>
    <li class="blue" style="transform: rotate(127deg) translate(277.5px) rotate(-127deg)"></li>
  </ul>
  <ul class="lightrope" style="width: 650px; height: 650px">
    <li class="blue" style="transform: rotate(58deg) translate(325px) rotate(-58deg)"></li>
    <li class="blue" style="transform: rotate(60.5deg) translate(325px) rotate(-60.5deg)"></li>
    <li class="blue" style="transform: rotate(63deg) translate(325px) rotate(-63deg)"></li>
    <li class="blue" style="transform: rotate(65.5deg) translate(325px) rotate(-65.5deg)"></li>
    <li class="blue" style="transform: rotate(68deg) translate(325px) rotate(-68deg)"></li>
    <li class="blue" style="transform: rotate(70.5deg) translate(325px) rotate(-70.5deg)"></li>
    <li class="blue" style="transform: rotate(73deg) translate(325px) rotate(-73deg)"></li>
    <li class="blue" style="transform: rotate(75.5deg) translate(325px) rotate(-75.5deg)"></li>
    <li class="blue" style="transform: rotate(78deg) translate(325px) rotate(-78deg)"></li>
    <li class="blue" style="transform: rotate(80.5deg) translate(325px) rotate(-80.5deg)"></li>
    <li class="blue" style="transform: rotate(83deg) translate(325px) rotate(-83deg)"></li>
    <li class="blue" style="transform: rotate(85.5deg) translate(325px) rotate(-85.5deg)"></li>
    <li class="blue" style="transform: rotate(88deg) translate(325px) rotate(-88deg)"></li>
    <li class="blue" style="transform: rotate(90.5deg) translate(325px) rotate(-90.5deg)"></li>
    <li class="blue" style="transform: rotate(93deg) translate(325px) rotate(-93deg)"></li>
    <li class="blue" style="transform: rotate(95.5deg) translate(325px) rotate(-95.5deg)"></li>
    <li class="blue" style="transform: rotate(98deg) translate(325px) rotate(-98deg)"></li>
    <li class="blue" style="transform: rotate(100.5deg) translate(325px) rotate(-100.5deg)"></li>
    <li class="blue" style="transform: rotate(103deg) translate(325px) rotate(-103deg)"></li>
    <li class="blue" style="transform: rotate(105.5deg) translate(325px) rotate(-105.5deg)"></li>
    <li class="blue" style="transform: rotate(108deg) translate(325px) rotate(-108deg)"></li>
    <li class="blue" style="transform: rotate(110.5deg) translate(325px) rotate(-110.5deg)"></li>
    <li class="blue" style="transform: rotate(113deg) translate(325px) rotate(-113deg)"></li>
    <li class="blue" style="transform: rotate(115.5deg) translate(325px) rotate(-115.5deg)"></li>
    <li class="blue" style="transform: rotate(118deg) translate(325px) rotate(-118deg)"></li>
    <li class="blue" style="transform: rotate(120.5deg) translate(325px) rotate(-120.5deg)"></li>
    <li class="blue" style="transform: rotate(123deg) translate(325px) rotate(-123deg)"></li>
    <li class="blue" style="transform: rotate(125.5deg) translate(325px) rotate(-125.5deg)"></li>
    <li class="blue" style="transform: rotate(128deg) translate(325px) rotate(-128deg)"></li>
  </ul>
</div>
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
