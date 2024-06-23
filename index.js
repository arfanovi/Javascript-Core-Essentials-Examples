
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
console.log(reverseString('Arfan H Ovi'));


// Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(inputNumbers){
    let oddNumbers = [];
    for(const num of inputNumbers){
        if (num % 2 !==0){
            oddNumbers.push(num)
        }
    }
    return oddNumbers;
}
console.log(filterOddNumbers([1,-2,4,8,9,7,6,-10]));



// Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.


function sumArray(inputNumbers){
    let sum = 0;
    for(const num of inputNumbers){
        sum += num;
    }
    return sum;
}
const sumArr = sumArray([5,5,10,10,15,15,20,20,]);
console.log(sumArr);


// Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order


function sortArray(arrayNumbers){
    let sortArray = [...arrayNumbers];
    sortArray.sort((a, b) => a - b);
    return sortArray;
}

const sortNumbers = (sortArray([1,3,2,5,4,6,9,8,7,10]));
console.log(sortNumbers)