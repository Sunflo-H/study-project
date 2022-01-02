const container = document.querySelector('.image-container');
const startButton = document.querySelector('.start-button');
const gameText = document.querySelector('.game-text');
const playTime = document.querySelector('.play-tiem');

const TILE_COUNT = 16;

let tiles = [];
const dragged = {
    el:null,
    class:null,
    index:null,
}


setGame();
// 모든 타일의 인덱스와 해당 data-index 값이 같으면 게임 종료
function setGame(){
    container.innerHTML="";
    tiles = createImageTiles();
    tiles.forEach(tile=>container.appendChild(tile));
    setTimeout(()=>{
        container.innerHTML="";
        shuffle(tiles).forEach(tile => container.appendChild(tile));
    },000);
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

// event
container.addEventListener('dragstart', e=>{
    const obj = e.target;
    dragged.el = obj;
    dragged.class = obj.className;
    dragged.index = [...obj.parentNode.children].indexOf(obj)
})
container.addEventListener('dragover', e=>{
    e.preventDefault();
})
container.addEventListener('drop', e=>{
    console.log('drop');
})
