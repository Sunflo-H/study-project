'use strict';
let toDoApp = document.querySelector('.todoapp');
let newToDo = toDoApp.querySelector('.new-todo');
let addBtn = toDoApp.querySelector('.addButton');

let main = toDoApp.querySelector('.main');
let todoList = main.querySelector('.todo-list');

//추가버튼 이벤트
addBtn.addEventListener('click',()=>{
    let text = newToDo.value;
    let item = `<li>
                    <div class="view">
                        <input type="checkbox" id="checkbox">
                        <span class="update">${text}</span>
                        <input class="delButton" type="button" value="X">
                    </div>
                </li>`
    todoList.insertAdjacentHTML('beforeend',item);
    let delBtn = main.querySelectorAll('.delButton');
    let updateText = main.querySelectorAll('.update');
    let checkbox = main.querySelectorAll('#checkbox');
    console.log(checkbox);
    //삭제버튼 이벤트
    //이벤트 발생 지점의 li를 찾아 삭제
    for(let i =0; i<delBtn.length;i++){        
        delBtn[i].addEventListener('click',(event)=>{
            let listToDelete = event.target.parentNode.parentNode;
            listToDelete.remove();
        })
    }
    //업데이트 이벤트
    for(let i =0; i<updateText.length;i++){        
        updateText[i].addEventListener('click',(event)=>{
            let newText = prompt("새로운 내용을 입력하세요");
            //prompt확인=공백값 === ""
            //prompt취소 === null
            //공백이 아니고 취소가 아닌경우 새로운 텍스트로 변경
            if(newText !== ""&& newText !==null)
                event.target.innerText = newText;
        })
    }
    //완료 이벤트
    for(let i =0; i<checkbox.length;i++){        
        checkbox[i].addEventListener('click',(event)=>{
            event.target.parentNode.classList.toggle('complete');
        })
    }
})


function addTodo(){

}

function delTodo(){

}

function updateTodo(){

}

function completeTodo(){

}