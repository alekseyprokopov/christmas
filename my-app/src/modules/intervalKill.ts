let intervalID;

export default function intervalKill() {
  intervalID = window.setInterval(() => {}, 99999);
  for (let i = 0; i < intervalID; i += 1) window.clearInterval(i);
}
