import './Navbar.scss';

const Navbar = {
  render: async () => {
    const view = /* html */ `
    <div class="nav container nav-container">
      <a class="home-logo"  href="#/"></a>
      <a href="#/settings">Игрушки</a>
      <a  href="#/game">Ёлка</a>
    </div>
      `;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
