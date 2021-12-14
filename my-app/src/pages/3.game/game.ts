import './game.scss';

// functions
// import eventClicker from '../../modules/eventClicker';
// import getLocalStorage from '../../modules/localStorageGet';
// import setLocalStorage from '../../modules/localStorageSet';

// components:
// const getData = async () => {
//   const url = '../assets/image-data-master/images.json';
//   const response = await fetch(url);
//   const data = await response.json();
// };

const Game = {
  render: async () => {
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
                    <div class="tree-item tree-item1"></div>
                    <div class="tree-item tree-item2"></div>
                    <div class="tree-item tree-item3"></div>
                    <div class="tree-item tree-item4"></div>
                </div>
            </div>
            
            <div class="background-container">
                <p class="option-title">Выберите фон</p>
                <div class="background-items">
                    <div class="background-item background-item1"></div>
                    <div class="background-item background-item2"></div>
                    <div class="background-item background-item3"></div>
                    <div class="background-item background-item4"></div>
                    <div class="background-item background-item5"></div>
                    <div class="background-item background-item6"></div>
                </div>
            </div>
            
            <div class="garland-container">
                <p class="option-title">Гирлянда</p>
                <div class="garland-items">
                    <div class="garland-item garland-yellow" style="background: rgba(253, 215, 0, 1)"></div>
                    <div class="garland-item garland-red" style="background: rgba(253, 0, 0, 1)"></div>
                    <div class="garland-item garland-blue" style = "background: rgba(34, 153, 235, 1)"></div>
                    <div class="garland-item garland-green" style = "background: rgba(8, 170, 5, 1)"></div>
                    <label class="switch">
                        <input type="checkbox" name="timeGame" id="timeGame" />
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            
        </div>
        
        <div class="center"></div>
        
        <div class="right">
        
            <div class="toys-game-container">
              <p class="option-title">Игрушки</p>
              <div class="toys-game-items">
                  <div class="toys-game-item"></div>
                                    <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>
                  <div class="toys-game-item"></div>

              </div>
            </div>
            
            <div class="decorated-container">
              <p class="option-title">Вы нарядили</p>
              <div class="decorated-items">
                <div class="decorated-item"></div>
                <div class="decorated-item"></div>
                <div class="decorated-item"></div>
                <div class="decorated-item"></div>

              </div>
            </div>
        </div>
        
    </div>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Game;
