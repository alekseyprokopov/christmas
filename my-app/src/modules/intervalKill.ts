export default function intervalKill() {
  const highestTimeoutId = setTimeout(';');
  for (let i = 0; i < highestTimeoutId; i++) {
    clearInterval(i);
  }
}
