import garland from './garland';
import intervalKill from './intervalKill';
import snowFlake from './snowflake';
import GameConfigType from '../types/gameConfigType';

export default function gameConfigFunction(gameConfig: GameConfigType) {
  const {
    background, tree, snow, volume,
  } = gameConfig;

  // background
  const center = document.querySelector('.center') as HTMLElement;
  center.style.backgroundImage = `url("../../assets/bg/${background}.jpg")`;

  // tree
  const treeImg = document.querySelector('.main-tree') as HTMLImageElement;
  treeImg.src = `../../assets/tree/${tree}.png`;

  garland(gameConfig);

  // snow
  const snowButton = document.querySelector('.snow');
  if (snow) {
    setInterval(snowFlake, 50);
    snowButton.classList.remove('no-active');
  } else {
    intervalKill();
    snowButton.classList.add('no-active');
  }

  // volume
  const audio = document.querySelector('.audio') as HTMLAudioElement;
  const volumeButton = document.querySelector('.volume');
  if (volume) {
    audio.play();
    volumeButton.classList.remove('no-active');
  } else {
    audio.pause();
    audio.currentTime = 0;
    volumeButton.classList.add('no-active');
  }
}
