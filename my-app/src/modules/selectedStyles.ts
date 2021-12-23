export default function selectedStyles(defaultArray: HTMLElement[], selected: string[]) {
  defaultArray.forEach((item) => {
    const numberOfItem = item.dataset.num.toString();
    if (selected.includes(numberOfItem)) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}
