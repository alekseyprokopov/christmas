interface Coords {
  downX?: number;
  downY?: number;
}

export default function dragAndDrop() {
  const toysItems = document.querySelectorAll('.toys-game-item-img') as NodeListOf<HTMLElement>;
  document.ondragover = (e) => e.preventDefault();

  toysItems.forEach((item: HTMLElement) => {
    const startCoords = {} as Coords;

    function drag(event: DragEvent) {
      if (!startCoords.downX) startCoords.downX = event.pageX;
      if (!startCoords.downY) startCoords.downY = event.pageY;
      event.dataTransfer.setData('id', (event.target as HTMLElement).id);
      (event.target as HTMLElement).hidden = true;
    }

    function drop(event: DragEvent) {
      const itemId = event.dataTransfer.getData('id');
      const parentId = itemId.split('.')[0];
      const element = document.getElementById(itemId);
      const parent = document.getElementById(`parent${parentId}`);

      if ((event.target as HTMLElement).closest('map')) {
        (event.target as HTMLElement).closest('map').append(element);
        element.style.position = 'absolute';
        element.style.zIndex = '1000';
        element.style.transform = 'translate(0, 0)';
        element.style.left = `${event.pageX - element.offsetWidth / 2}px`;
        element.style.top = `${event.pageY - element.offsetHeight / 2 - 50}px`;
      } else {
        element.style.left = '50%';
        element.style.top = '50%';
        element.style.transform = 'translate(-50%, -50%)';
        parent.appendChild(element);
      }
      parent.previousElementSibling.innerHTML = `${parent.childElementCount}`;
    }

    item.ondragstart = drag;
    document.ondrop = drop;
  });
}
