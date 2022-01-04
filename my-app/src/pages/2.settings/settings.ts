import './settings.scss';
import settingsHTML from './settingsHTML';
// functions
import {
  sort,
  filter,
  reset,
  addSliders,
  noActive,
  selectedStyles,
  setLocalStorage,
  getLocalStorage,
  defaultConfig,
} from '../../modules';

// types
import { SelectedItem } from '../../types';

const config = JSON.parse(JSON.stringify(defaultConfig));
let selected: SelectedItem[] = [];

const Settings = {
  render: async () => settingsHTML(selected),

  after_render: async () => {
    const select = document.querySelector('.sort-by') as HTMLSelectElement;
    const parent = document.querySelector('.toy-card-container');
    const children = parent?.children;
    const defaultArray = Array.prototype.slice.call(children);
    const resetFilter = document.querySelector('.reset-filter-button');
    const resetSettings = document.querySelector('.reset-settings-button');
    const filterItems = document?.querySelectorAll('.form-item, .color-item, .size-item, .favorite');
    const toyCardItems = document.querySelectorAll('.toy-card');
    const selectedCounter = document.querySelector('.selected-counter');
    const search = document.querySelector('.search-input');
    const searchClear = document.querySelector('.search-clear');

    (search as HTMLInputElement).focus();
    (search as HTMLInputElement).select();
    addSliders(defaultArray, config);
    noActive(config);
    filter(defaultArray, config);
    selectedStyles(defaultArray, selected);

    select.addEventListener('change', () => {
      config.sortSelect = select?.selectedOptions[0].value;
      sort(parent as HTMLElement, config);
    });

    filterItems.forEach((item) => item.addEventListener('click', () => {
      const { shape, color, size } = config.category;

      if (item.hasAttribute('data-name')) {
        const itemName = (<HTMLElement>item).dataset.name as string;
        shape[itemName] = !shape[itemName];
      }

      if (item.hasAttribute('data-color')) {
        const itemColor = (<HTMLElement>item).dataset.color as string;
        color[itemColor] = !color[itemColor];
        item.classList.toggle('no-active');
      }

      if (item.hasAttribute('data-size')) {
        const itemSize = (<HTMLElement>item).dataset.size as string;
        size[itemSize] = !size[itemSize];
      }

      if (item.classList.contains('favorite')) {
        config.category.favorite = !config.category.favorite;
      }
      noActive(config);
      filter(defaultArray, config);
    }));

    resetFilter.addEventListener('click', () => reset(config, defaultArray));
    resetSettings.addEventListener('click', () => {
      selected = [];
      selectedStyles(defaultArray, selected);
      reset(config, defaultArray);
      selectedCounter.innerHTML = selected.length.toString();

      localStorage.clear();
    });
    toyCardItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (selected.length < 20) {
          const itemNumber = (item as HTMLElement).dataset.num;
          const itemCount = +(item as HTMLElement).dataset.number;
          if (!selected.some((selectItem) => selectItem.number === itemNumber)) {
            selected.push({ number: itemNumber, count: itemCount });
          } else {
            const index = selected.findIndex((selectItem) => selectItem.number === itemNumber);
            selected.splice(index, 1);
          }

          selectedStyles(defaultArray, selected);
          selectedCounter.innerHTML = selected.length.toString();
        } else {
          const selectedError = document.querySelector('.selected-error');
          selectedError.classList.add('error-active');
          setTimeout(() => selectedError.classList.remove('error-active'), 1000);
        }
      });
    });

    search.addEventListener('input', function cb(this: HTMLInputElement) {
      config.search = this.value.toLowerCase();
      filter(defaultArray, config);
    });
    searchClear.addEventListener('click', () => {
      (<HTMLInputElement>search).value = '';
      config.search = (<HTMLInputElement>search).value;
      filter(defaultArray, config);
    });
  },
};

export default Settings;

// localStorage
window.addEventListener('beforeunload', () => setLocalStorage(config));
window.addEventListener('hashchange', () => setLocalStorage(config));
window.addEventListener('load', () => {
  getLocalStorage(config);
});

window.addEventListener('beforeunload', () => setLocalStorage(selected));
window.addEventListener('hashchange', () => setLocalStorage(selected));
window.addEventListener('load', () => {
  getLocalStorage(selected);
});
