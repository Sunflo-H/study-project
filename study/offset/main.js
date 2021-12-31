const target = document.getElementById('target'); // 요소의 id 값이 target이라 가정
const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.
const zone = document.querySelector('#zone');
const btn = document.querySelectorAll('#btn');
const btn_clientRect0 = btn[0].getBoundingClientRect();
const btn_clientRect1 = btn[1].getBoundingClientRect();

function a(){
    
    console.log(target);
    console.log(clientRect);
    console.log(clientRect.x);
    console.log(clientRect.width);
    console.log(clientRect.right);
    console.log(clientRect.clientX);
    console.log(target.offsetLeft);
    // console.log(zone);
    // console.log(btn_clientRect0);
    // console.log(btn_clientRect1);
}
a();


let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}