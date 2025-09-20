function fanOffKor() {
    console.log('bosha thake uthe dara');
    console.log('walk toward the switch');
    console.log('click the switch to off of the fan');
}
fanOffKor();
//
function vatkhao(){
    console.log('hand wash kore asho');
    console.log('bosho');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');

}
vatkhao();
//
function am_khao(){
    console.log('ei nao am khao');
}
am_khao();
//
function familyMem(){
    console.log('Tanjila');
    console.log('Sathy');
    console.log('Feeha');
}
familyMem();
//
function doubleIt (number){
    const doubled = number * 2;
    console.log(doubled);
}
doubleIt(15);
doubleIt(88);
doubleIt(873);
//
function square (number){
    const borgo = number * number;
    console.log('square of', number, 'is:', borgo);
}
square(4);
square(12);
//
function add (num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}
add(5,71);
//
function addAll(a,b,c,d,e){
    const total = a + b+ c+ d+ e;
    console.log(total);
}
addAll(3,4,5,6,7);
//
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge,myAge);
//
function addNumbers (a,b){
    return a + b;
}
const result = addNumbers (5,8,9,6);
console.log(result);
//
function addNum (a,b){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    }
    console.log(sum);
}
addNum(5,8,9,6);
//
function SUM(fAge, sAge){
    const totalAge = fAge + sAge;
    console.log(totalAge)
}
SUM(45,15);
//
function calculator(x,y){
    const adD = x * y;
    console.log(adD);
}
calculator(20,15);
//
function sub (a,b,c){
    const marks = a + b + c;
    console.log(marks);
}
sub(60,70,80);
//
function calculateAge(birthYear){
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return age;
}
console.log('Your age is:', calculateAge(2004), 'years');
//
function tenTimes(number){
    const result = number * 10;
    return result;
}
const output = tenTimes(5);
console.log(output);