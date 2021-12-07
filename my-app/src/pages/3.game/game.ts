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
    <section class="container categories categories-container">
    </section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Game;
