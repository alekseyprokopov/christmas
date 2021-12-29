import garland from './garland';
import GameConfigType from '../../types/gameConfigType';
import intervalKill from '../../modules/intervalKill';
import snowFlake from '../../modules/snowflake';

export default function gameConfigFunction(gameConfig: GameConfigType) {
  // background
  const center = document.querySelector('.center') as HTMLElement;
  center.style.backgroundImage = `url("../../assets/bg/${gameConfig.background}.jpg")`;

  // tree
  const treeImg = document.querySelector('.main-tree') as HTMLImageElement;
  treeImg.src = `../../assets/tree/${gameConfig.tree}.png`;

  garland(gameConfig);

  // snow
  if (gameConfig.snow) {
    setInterval(snowFlake, 50);
  } else {
    intervalKill();
  }

  // volume
  const audio = document.querySelector('.audio') as HTMLAudioElement;

  if (gameConfig.volume) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
