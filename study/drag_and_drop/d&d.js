const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", () => {
    console.log(event.target);
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    console.log(event.target);
    draggable.classList.remove("dragging");
  });
});

containers.forEach(container => {
  container.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientX);
    console.log(afterElement)
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
    console.log('dragover');
    console.log(afterElement);
    console.log(draggable);
  });
});

function getDragAfterElement(container, x) {
    const draggableElements = [
        ...container.querySelectorAll('.draggable:not(.dragging)'),
    ];
    console.log(draggableElements);
    return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = x - box.left - box.width / 2;
          // console.log(offset);
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY },
      ).element;
}