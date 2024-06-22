
// 1. Write a function named 'calculateSum' that takes two arguments and return their Sum.

function calculateSum(number1 , number2){
    return number1 + number2;
}
console.log(calculateSum(5, 5))

//Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(numbers){
    if (numbers % 2 ===0){
        return true;
    } else {
        return false;
    }
}
const number = isEven(3);
console.log(number)


// Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numbersOfArr) {
    if (numbersOfArr.length === 0){
        return 'give valid array';
    }
    return Math.max(...numbersOfArr);

}
let arr = (findMax([1,2,3,7,-5,4,6,9,8,-10,10]))
console.log(arr);


// Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(string) {
    return string.split('').reverse().join()
}
console.log(reverseString('Arfan H Ovi'))