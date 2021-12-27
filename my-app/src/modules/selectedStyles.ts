import SelectedItem from '../types/selectedItem';

export default function selectedStyles(defaultArray: HTMLElement[], selected: SelectedItem[]) {
  defaultArray.forEach((item) => {
    const numberOfItem = item.dataset.num.toString();

    if (selected.some((selectItem) => selectItem.number === numberOfItem)) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });
}
