import './settings.scss';
import noUiSlider from 'nouislider';
import {API, target,TargetElement} from 'nouislider';
// // functions
// import getLocalStorage from '../../modules/localStorageGet';
// import setLocalStorage from '../../modules/localStorageSet';
import sort from '../../modules/sort';
import filter from '../../modules/filter';
import  noActive from '../../modules/noActive';
import defaultConfig from  '../../modules/defaultConfig'

const getData = async () => {
  let url = '../../assets/data.json';
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};

let config = {
  sortSelect: 'yearPlus',
  category:{
    shape: {
      'колокольчик': true,
      'шар': true,
      'шишка': true,
      'снежинка': true,
      'фигурка': true,
    },
    numberStart:1,
    numberEnd:12,
    yearStart: 1940,
    yearEnd: 2020,
    color:{
      'белый':true,
      'желтый':true,
      'красный':true,
      'синий':true,
      'зелёный':true,
    },
    size:{
      'большой': true,
      'средний': true,
      'малый': true,
    },
    favorite:true,
  }
}

const Settings = {
  render: async () => {
    const toysArray = await getData()
    let toysString = toysArray.map(item=>{
      return `
                <div class="toy-card" data-year="${item.year}" data-name="${item.name}" data-number = "${item.count}" data-year ="${item.year}" data-shape="${item.shape}" data-color = "${item.color}" data-size = "${item.size}" data-favorite ="${item.favorite}">
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
    });

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
                <select name="sort-by" class="sort-by">
                  <option value="yearPlus">Год (По возрастанию)</option>
                  <option value="yearMinus">Год (По убыванию)</option>
                  <option value="namePlus">По названию от А</option>
                  <option value = "nameMinus">По названию от Я</option>
                </select>               
            </div>
            <div class="toy-config-category">
                <p class="toy-config-title">Отфильтровать по категорям: </p>
            </div>
            
                <div class="form">
                    <p class="category-title">Форма</p>
                    <div class="form-items">
                    
                      <div class="form-item bell" data-name = "колокольчик">
                        <div class="form-item-picture bell-picture"></div>
                        <p class="form-item-title">Колокол</p>
                      </div>
                    
                      <div class="form-item ball" data-name = "шар">
                          <div class="form-item-picture ball-picture"></div>
                          <p class="form-item-title">Шар</p>
                      </div>
                    
                      <div class="form-item pine" data-name = "шишка">
                          <div class="form-item-picture pine-picture"></div>
                          <p class="form-item-title">Шишка</p>
                      </div>
                    
                      <div class="form-item snowflake" data-name = "снежинка">
                          <div class="form-item-picture snowflake-picture"></div>
                          <p class="form-item-title">Снежинка</p>
                      </div>
                    
                      <div class="form-item figure" data-name = "фигурка">
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
                        <button class="color-item" data-color = "белый" style="background: rgba(255, 255, 255, 1)"></button>
                        <button class="color-item" data-color = "желтый" style="background: rgba(253, 215, 0, 1)"></button>
                        <button class="color-item" data-color = "красный" style="background: rgba(253, 0, 0, 1)"></button>
                        <button class="color-item" data-color = "синий" style="background: rgba(34, 153, 235, 1)"></button>
                        <button class="color-item" data-color = "зелёный" style="background: rgba(8, 170, 5, 1)"></button>
                    </div>
                </div>
                
                <div class="size">
                    <p class="category-title">Размер</p>
                    <div class="size-container">
                        <div class="size-item" data-size = "большой">
                          <input type="checkbox" id="big" name="big" checked>
                          <label class="form-item-title" for="big" onclick="event.stopPropagation()">Большой</label>
                        </div>
                        
                        <div class="size-item" data-size = "средний">
                          <input type="checkbox" id="middle" name="middle" checked>
                          <label class="form-item-title" for="middle" onclick="event.stopPropagation()">Средний</label>
                        </div>
                        
                        <div class="size-item" data-size = "малый">
                          <input type="checkbox" id="small" name="small" checked>
                          <label class="form-item-title" for="small" onclick="event.stopPropagation()">Маленький</label>
                        </div>
                    </div>
                </div>
                
                
                <div class="favorite">
                  <input type="checkbox" id="favorite" name="favorite" >
                  <label class="category-title just-lovely" for="favorite" onclick="event.stopPropagation()">Только любимые</label>
                </div>

            <div class="toy-config-reset">
                <button class="reset-button reset-filter-button">Сбросить фильтры</button>
            </div>
        </div>
        
        <div class="toy-container">
            <div class="toy-container-header"> 
              <p class="toy-container-title" >Игрушки</p>
              <a class="button" href="#/game">Играть</a>
            </div>
            
            <div class="toy-card-container">
                ${toysString.join('\n')}
            </div>
        </div>
        
      </div>
    `;
    return view;
  },
  after_render: async () => {



    const sliders = document.querySelectorAll('.number-slider, .year-slider')

    sliders.forEach((item,index)=> {
      let min = index == 0 ? 1 : 1940;
      let max = index == 0 ? 12 : 2020;
      let sliderStep = index == 0 ? 1 : 10;
      noUiSlider.create(item as target, {
        start: [min, max],
          tooltips:true,
          connect: true,
          range: {
            'min': min,
            'max': max
          },
          format: {
            to: function ( value ) {

              return Math.floor(Number(value));
            },
            from: function ( value ) {
              return Math.floor(Number(value));

            }
          },
          step: sliderStep,
        });

      (item as target).noUiSlider.on('slide', ()=>{
        if (index==0) {
          config.category.numberStart =(item as target).noUiSlider.get()[0]
          config.category.numberEnd =(item as target).noUiSlider.get()[1]
        } else {
          config.category.yearStart =(item as target).noUiSlider.get()[0]
          config.category.yearEnd =(item as target).noUiSlider.get()[1]
        }
        filter(defaultArray, config)
      });
    })


    let bell =document.querySelector('.bell');
    let select = document.querySelector('.sort-by') as HTMLSelectElement
    let parent = document.querySelector('.toy-card-container');
    let children = parent?.children
    let defaultArray = Array.prototype.slice.call(children)
    let resetFilter = document.querySelector('.reset-filter-button')

    select.addEventListener('change',()=> {
      config.sortSelect = select?.selectedOptions[0].value
      sort(parent,config)
    })

    let filterItems = document?.querySelectorAll('.form-item, .color-item, .size-item, .favorite')

    filterItems.forEach(item=>item.addEventListener('click',()=>{

      if( item.hasAttribute('data-name')){
        const itemName = (<HTMLElement>item).dataset.name as string;
        config.category.shape[itemName] = !config.category.shape[itemName]
      }

      if( item.hasAttribute('data-color')) {
        const itemColor = (<HTMLElement>item).dataset.color as string;
        config.category.color[itemColor] = !config.category.color[itemColor]
        item.classList.toggle('no-active')

      }

      if( item.hasAttribute('data-size')) {
        const itemSize = (<HTMLElement>item).dataset.size as string;
        config.category.size[itemSize] = !config.category.size[itemSize]
      }

      if (item.classList.contains('favorite')){
        config.category.favorite = !config.category.favorite
      }
      noActive(config)
      filter(defaultArray, config)
    }))

    resetFilter.addEventListener('click',()=>{
      let defaults = JSON.parse(JSON.stringify(defaultConfig))
      // const sliders = document.querySelectorAll('.number-slider, .year-slider')

      Object.assign(config.category,defaults.category)
      filter(defaultArray, config)
      sliders.forEach((item,index)=>{
        if (index===0) (item as target).noUiSlider.set([config.category.numberStart ,config.category.numberEnd])
        if (index===1) (item as target).noUiSlider.set([config.category.yearStart ,config.category.yearEnd])
      })

      noActive(config)
    })

  },
};

export default Settings;



