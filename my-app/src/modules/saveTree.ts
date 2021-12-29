import html2canvas from 'html2canvas';
import dragAndDrop from './dragAndDrop';
import GameConfigType from '../types/gameConfigType';

export default function saveTree(gameConfig: GameConfigType) {
  const center = document.querySelector('.center');
  const decoratedContainer = document.querySelector('.decorated-items');

  const dataMain = center.innerHTML;
  const toysContainer = document.querySelector('.toys-game-items');
  const dataToys = toysContainer.innerHTML;
  gameConfig.decorated.push({ dataMain, dataToys });

  html2canvas(center as HTMLElement).then((canvas) => {
    const newItem = document.createElement('div');
    const index = decoratedContainer.childElementCount;

    newItem.classList.add('decorated-item');
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    newItem.appendChild(canvas);
    decoratedContainer.appendChild(newItem);

    newItem.addEventListener('click', () => {
      center.innerHTML = gameConfig.decorated[index].dataMain;
      toysContainer.innerHTML = gameConfig.decorated[index].dataToys;
      dragAndDrop();
    });
  });
}
