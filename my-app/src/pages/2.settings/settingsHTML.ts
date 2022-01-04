import { getData } from '../../modules';
import { SelectedItem, ToyItem } from '../../types';

export default async function settingsHTML(selected: SelectedItem[]) {
  const toysArray = await getData();
  const toysString = toysArray.map(
    (item: ToyItem) => `
              <div class="toy-card" data-num="${item.num}" data-year="${item.year}" data-name="${
  item.name
}" data-number = "${item.count}" data-year ="${item.year}" data-shape="${item.shape}" data-color = "${
  item.color
}" data-size = "${item.size}" data-favorite ="${item.favorite}">
                  <p class="toy-card-name">${item.name}</p>
                  <div class="toy-card-image" style="background-image: url('../../assets/toys/${item.num}.png')"></div>
                  <p>Количество: <span class = 'toy-card-number'>${item.count}</span></p>
                  <p>Год покупки: <span class = 'toy-card-year'>${item.year}</span> год</p>
                  <p>Форма игрушки: <span class = 'toy-card-form'>${item.shape}</span></p>
                  <p>Цвет игрушки: <span class = 'toy-card-color'>${item.color}</span></p>
                  <p>Размер игрушки: <span class = 'toy-card-size'>${item.size}</span></p>
                  <p>Любимая: <span class = 'toy-card-lovely'>${item.favorite ? 'Да' : 'Нет'}</span></p>
              </div>
            `,
  );

  const view = `
    <div class="container settings-container">
      <div class="toy-config">
          <div class="toy-config-header">
              <p class="toy-config-title ">Поиск: </p>
              <form class="search-form">
                <input class="search-input" type="text" placeholder="Искать здесь..." autocomplete="off">
                <button class="search-clear" type="submit" ></button>
              </form>
          </div>
          <div class="toy-config-sort">
              <p class="toy-config-title toy-config-title-sort">Сортировать</p>
              <select name="sort-by" class="sort-by">
                <option value="yearPlus">Год (По возрастанию)</option>
                <option value="yearMinus">Год (По убыванию)</option>
                <option value="namePlus">По названию от А</option>
                <option value = "nameMinus">По названию от Я</option>
              </select>
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
              <button class="reset-button reset-settings-button">Сбросить настройки</button>
          </div>
      </div>

      <div class="toy-container">
          <div class="toy-container-header">
            <p class="toy-container-title toy-container-title-toys" >Игрушки</p>
            <p class="toy-container-title " >Избранное: <span class="selected-counter">${selected.length}</span></p>

            <a class="button" href="#/game">Играть</a>
          </div>
          <p class="selected-error" >место кончилось...</p>
          <div class="toy-card-container">
              ${toysString.join('\n')}
          </div>
      </div>

    </div>
  `;
  return view;
}
