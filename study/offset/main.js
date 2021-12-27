const target = document.getElementById('target'); // 요소의 id 값이 target이라 가정
const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.
const zone = document.querySelector('#zone');
const btn = document.querySelectorAll('#btn');
console.log(target);
console.log(clientRect);
console.log(relativeTop);
console.log(zone);
const btn_clientRect0 = btn[0].getBoundingClientRect();
const btn_clientRect1 = btn[1].getBoundingClientRect();
console.log(btn_clientRect0);
console.log(btn_clientRect1);
