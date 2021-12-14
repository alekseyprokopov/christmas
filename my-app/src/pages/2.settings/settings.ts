import './settings.scss';
import noUiSlider from 'nouislider';
import {TargetElement} from 'nouislider';
// // functions
// import eventClicker from '../../modules/eventClicker';
// import getLocalStorage from '../../modules/localStorageGet';
// import setLocalStorage from '../../modules/localStorageSet';

const getData = async () => {
  let url = '../../assets/data.json';
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};

const Settings = {
  render: async () => {
    const toysArray = await getData()
    let toysString = toysArray.map(item=>{
      console.log(item)
      return `
                <div class="toy-card">
                    <p class="toy-card-name">${item.name}</p>
                    <div class="toy-card-image" style="background-image: url('../../assets/toys/${item.num}.png')"></div>
                    <p>Количество: <span class = 'toy-card-number'>${item.count}</span></p>
                    <p>Год покупки: <span class = 'toy-card-year'>${item.year}</span> год</p>
                    <p>Форма игрушки: <span class = 'toy-card-form'>${item.shape}</span></p>
                    <p>Цвет игрушки: <span class = 'toy-card-color'>${item.color}</span></p>
                    <p>Размер игрушки: <span class = 'toy-card-size'>${item.size}</span></p>
                    <p>Любимая: <span class = 'toy-card-lovely'>${item.favorite?'Да':'Нет'}</span></p>
                </div>
              `
    }).join('\n');


    const view = /* html */ `
      <div class="container settings-container">
        <div class="toy-config">
            <div class="toy-config-header">
                <button class="volume"></button>
                <button class="snow"></button>
                <form>
                  <input type="text" placeholder="Искать здесь...">
                  <button type="submit"></button>
                </form>
            </div>
            <div class="toy-config-sort">
                <p class="toy-config-title">Сортировать</p>
                <select name="sort-by" id="">
                  <option>По возрастанию</option>
                  <option>По убыванию</option>
                  <option>По названию от А</option>
                  <option>По названию от Я</option>
                </select>               
            </div>
            <div class="toy-config-category">
                <p class="toy-config-title">Категории</p>
                <div>
                  <input type="checkbox" id="category" name="category" checked>
                  <label for="category">Все</label>
                </div>
            </div>
            
                <div class="form">
                    <p class="category-title">Форма</p>
                    <div class="form-items">
                    
                      <div class="form-item bell">
                        <div class="form-item-picture bell-picture"></div>
                        <p class="form-item-title">Колокол</p>
                      </div>
                    
                      <div class="form-item ball">
                          <div class="form-item-picture ball-picture"></div>
                          <p class="form-item-title">Шар</p>
                      </div>
                    
                      <div class="form-item pine">
                          <div class="form-item-picture pine-picture"></div>
                          <p class="form-item-title">Шишка</p>
                      </div>
                    
                      <div class="form-item star">
                          <div class="form-item-picture star-picture"></div>
                          <p class="form-item-title">Звезда</p>
                      </div>
                    
                      <div class="form-item snowflake">
                          <div class="form-item-picture snowflake-picture"></div>
                          <p class="form-item-title">Снежинка</p>
                      </div>
                    
                      <div class="form-item figure">
                          <div class="form-item-picture figure-picture"></div>
                          <p class="form-item-title">Фигурка</p>
                      </div>
                    </div>
                </div>
                <div class="number">
                    <p class="category-title">Количество экземпляров</p>
                    <div type="text" class="number-slider" id="number-slider"></div>
                </div>
                <div class="year">
                    <p class="category-title">Год приобретения</p>
                    <div type="text" class="year-slider" id="year-slider"></div>
                </div>
                <div class="color">
                    <p class="category-title">Цвет</p>
                    <div class="color-container">
                        <button style="background: rgba(255, 255, 255, 1)"></button>
                        <button style="background: rgba(253, 215, 0, 1)"></button>
                        <button style="background: rgba(253, 0, 0, 1)"></button>
                        <button style="background: rgba(34, 153, 235, 1)"></button>
                        <button style="background: rgba(8, 170, 5, 1)"></button>
                    </div>
                </div>
                
                <div class="size">
                    <p class="category-title">Размер</p>
                    <div class="size-container">
                        <div class="size-item">
                          <input type="checkbox" id="big" name="big" checked>
                          <label class="form-item-title" for="big">Большой</label>
                        </div>
                        
                        <div class="size-item">
                          <input type="checkbox" id="middle" name="middle" checked>
                          <label class="form-item-title" for="middle">Средний</label>
                        </div>
                        
                        <div class="size-item">
                          <input type="checkbox" id="small" name="small" checked>
                          <label class="form-item-title" for="small">Маленький</label>
                        </div>
                    </div>
                </div>
                
                
                <div class="lovely">
                  <input type="checkbox" id="lovely" name="lovely" checked>
                  <label class="category-title just-lovely" for="lovely">Только любимые</label>
                </div>

            <div class="toy-config-reset">
                <button class="reset-button reset-filter-button">Сбросить фильтры</button>
                <button class="reset-button reset-settings-button">Сбросить настройки</button>
            </div>
        </div>
        
        <div class="toy-container">
            <div class="toy-container-header"> 
              <p class="toy-container-title" >Игрушки</p>
              <a class="button" href="#/game">Играть</a>
            </div>
            
            <div class="toy-card-container">
                ${toysString}
            </div>
        </div>
        
      </div>
    `;
    return view;
  },
  after_render: async () => {

    const numberSlider= document.getElementById('number-slider')
    const yearSlider= document.getElementById('year-slider')

    noUiSlider.create(numberSlider as TargetElement, {
      start: [1, 12],
      tooltips:true,
      connect: true,
      range: {
        'min': 1,
        'max': 12
      },
      format: {
        to: function ( value ) {

          return Math.floor(Number(value));
        },
        from: function ( value ) {
          return Math.floor(Number(value));

        }
      },
      step: 1,
    });

    noUiSlider.create(yearSlider as TargetElement, {
      start: [1940, 2020],
      tooltips:true,
      connect: true,
      range: {
        'min': 1940,
        'max': 2020
      },
      format: {
        to: function ( value ) {

          return Math.floor(Number(value));
        },
        from: function ( value ) {
          return Math.floor(Number(value));

        }
      },
      step: 10,
    });



  },
};

export default Settings;
