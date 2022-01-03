const container = document.querySelector('.image-container');
const startButton = document.querySelector('.start-button');
const gameText = document.querySelector('.game-text');
const playTime = document.querySelector('.play-time');

const TILE_COUNT = 16;

let tiles = [];
const dragged = {
    el:null,
    class:null,
    index:null,
}
let isPlaying = false;
let timeInterval = null;
let time = 0;

// 모든 타일의 인덱스와 해당 data-index 값이 같으면 게임 종료
function setGame(){
    isPlaying = true;
    container.innerHTML="";
    gameText.style.display = "none";
    clearInterval(timeInterval);
   
    tiles = createImageTiles();
    tiles.forEach(tile=>container.appendChild(tile));
    setTimeout(()=>{
        container.innerHTML="";
        shuffle(tiles).forEach(tile => container.appendChild(tile));
        timeInterval = setInterval(()=>{
            playTime.innerText = time;
            time ++;
        },1000);
    },2000);
}


function createImageTiles(){
    const tempArray = [];
    Array(TILE_COUNT).fill().forEach((item,index) => {
        const li = document.createElement("li");
        li.setAttribute('data-index',index);
        li.setAttribute('draggable',true);
        li.classList.add(`list${index}`);
        tempArray.push(li);
        console.log(tempArray);
    });
    return tempArray;
}

function shuffle(array){
    let index = array.length -1; //16-1
    while(index>0){
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index], array[randomIndex]] = [array[randomIndex],array[index]];
        console.log([array[index], array[randomIndex]]);
        index--;
    }
    return array
}
// 드롭 한뒤 현재의 이미지들이 가지고 있는 인덱스를 구하고
// 이미지가 가지고 있는 인덱스와 filter의 인덱스(=원래순서대로의 인덱스)를 비교하여
// 다른것들만 unMatchedList에 저장한다. 
// unMatchedList의 길이가 0이되면 게임 성공
function checkStatus(){
    
    const currentList = [...container.children];
    const unMatchedList = currentList.filter((child,index)=>{
        // console.log(Number(child.getAttribute("data-index")));
        return Number(child.getAttribute("data-index")) !== index
    })
    if(unMatchedList.length ===0) {
        //game finish
        gameText.style.display="block";
        isPlaying = false;
        
    }
}

// event
container.addEventListener('dragstart', e=>{
    if(!isPlaying) return;
    const obj = e.target;
    const obj_brothers = obj.parentNode.children;
    dragged.el = obj;
    dragged.class = obj.className;
    dragged.index = [...obj_brothers].indexOf(obj)
})
container.addEventListener('dragover', e=>{
    e.preventDefault();
})
container.addEventListener('drop', e=>{
    const obj = e.target;
    const obj_brothers = obj.parentNode.children;

    
    if(obj.className !== dragged.class){
        let originPlace;
        let isLast = false;

        if(dragged.el.nextSibling){ //nextSibling이 있다면 == 마지막번째엘리멘트가 아니면
            originPlace = dragged.el.nextSibling;
        } else {
            originPlace = dragged.el.previousSibling;
            isLast = true;
        }
        const droppedIndex = [...obj_brothers].indexOf(obj);
        // 드래그 중인 인덱스가 드롭존의 인덱스보다 크면 before(앞) 작으면 after(뒤)에 넣는다.
        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el);
        isLast ? originPlace.after(obj) : originPlace.before(obj);
    }
    checkStatus();
})

startButton.addEventListener('click',e=>{
    setGame();
})