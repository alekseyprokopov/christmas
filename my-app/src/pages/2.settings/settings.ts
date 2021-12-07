import './settings.scss';

// // functions
// import eventClicker from '../../modules/eventClicker';
// import getLocalStorage from '../../modules/localStorageGet';
// import setLocalStorage from '../../modules/localStorageSet';

const Settings = {
  render: async () => {
    const view = /* html */ `
    <section class="section settings">
      <div class="container settings-container">

      </div>
    </section>
    `;
    return view;
  },
  after_render: async () => {},
};

export default Settings;
