const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    console.log(toDos);
    const newToDos = toDos.filter(item=>{
        if(item.id != li.id){
            return item;
        }
    });
    toDos = newToDos;
    saveToDos();
    li.remove();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="x";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    li.id = newTodoObj.id;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    console.log('저장소에서 가져오기 실행');
    const parseToDos=JSON.parse(savedToDos);
    toDos=parseToDos;
    parseToDos.forEach(paintToDo);
}