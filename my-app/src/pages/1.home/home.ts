import './home.scss';

const Home = {
  render: async () => {
    const view = /* html */ `
      <div class="container home-container">
        <p class="title">Помогите бабушке нарядить ёлку</p>
        <a class="button" href="http://">Начать</a>
      </div>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
