export default function createSnowFlake() {
  const snowFlake = document.createElement('i');
  snowFlake.classList.add('fas');
  snowFlake.classList.add('fa-snowflake');
  snowFlake.style.left = Math.random() * window.innerWidth + 'px';
  snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
  snowFlake.style.opacity = `${Math.random()}`;
  snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

  document.querySelector('.center').appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}
