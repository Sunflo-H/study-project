const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach(container => {
  container.addEventListener("dragover", e => {
    e.preventDefault();
    // console.log();
    console.log(e.clientX);
    const afterElement = getDragAfterElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
    console.log(afterElement);
  });
});

function getDragAfterElement(container, x) {
  const draggableElements = [ // 드래그존에 남아있는 아이템들의 배열
    ...container.querySelectorAll('.draggable:not(.dragging)')
  ]
  return draggableElements.reduce(
    (pre, cur) => {
      console.log(pre);
      console.log(cur);
      const box = cur.getBoundingClientRect(); 
      const offset = x - box.left - box.width /2;
      console.log(box);
      console.log(offset);
      if(offset < 0 && offset>pre.offset){
        return {offset:offset, element:cur};
      } else {
        return pre;
      }
    },
    {offset:Number.NEGATIVE_INFINITY}
  ).element;
}

const students = [
	{name : '병준',score : 100},
	{name : '다정',score : 0},
	{name : '푸딩',score : 50},
]

const result = students.reduce((prev,cur)=>{
	console.log(prev); // {name :'병준',score : 100}
	console.log(cur);  //	{name : '다정',score : 0}
	return cur  // 값이 다음 reduce의 prev로 들어간다.
});

const result2 = students.reduce((prev,cur)=>{
	// console.log(prev); //0
	// console.log(cur); //{name :'병준',score : 100}
	return cur;
},0); // 첫 prev에 0을 직접 넣는 방법이다. 
//0을 첫 prev에 넣는 대신 첫번째 배열이 첫 cur에 들어간다.

console.log(result2);