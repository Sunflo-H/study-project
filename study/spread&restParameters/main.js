function showName(name){
    console.log(name);
}
showName('a');
showName('a','b');
showName();

/*
arguments
함수로 넘어 온 모든 인자에 접근
함수 내에서 이용 가능한 지역 변수
length와 index가 있는 Array 형태의 객체
그러나 배열의 내장 함수는 없다(forEach, map 등등)
*/

/*나머지 매개변수(rest parameters) */
// arguments의 응용 => 따라서 배열의 형태이다.
function showName2(...names){
    console.log(names);
}
showName2('a');
showName2('a','b');
showName2();

/*
 * 전달받은 모든 매개변수를 더하라
 * rest parameters 사용
*/
function add(...num){
    let result = num.reduce((prev,cur)=>prev+cur);    
    return result;
}

console.log(add(1,2,3));

/*
 * user 객체를 만들어주는 생성자 함수
*/
function User(name,age,...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('hbj',29,'html','css');
const user2 = new User('ydj',28,'html','css');

console.log(user1);
console.log(user2);


// spread
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];

arr1 = [...arr2,...arr1];
console.log(arr1);
let na = 'hbj';
let age = 29;
let obj = Object.assign(na,age);
obj.na = na;
obj.age = age;
console.log(obj);