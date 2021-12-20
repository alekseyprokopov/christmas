export default () => {
  const content = document.querySelector('.toy-card-container');
  content!.classList.remove('run-animation');
  void (content as HTMLInputElement).offsetWidth;
  content!.classList.add('run-animation');
};
