//function funcName(message, value2){
    //console.log("This function works properly "+ message);
    //alert("It's a function "+ value2);
//}


//let message = "test";








//function myFunction(value){
    //if(value < 25){
        //alert("Less than needed");
    //} else if(value == 25){
    //    alert("You win");
    //} else{
    //    alert("More than needed");
    //}
//}

//myFunction(25);






// let global = 3
// function calculator(a, b){
//     let local = a + b + global;
//     return local;
// }



// let result = calculator(2, 4);
// console.log(result);

// let result = null

// function calcPlus(operation, a, b){
//     if (operation == "+") {
//         result = a + b;
//         console.log(result);
//     }

// }

// calcPlus("+", 1, 2);


// function calcMinus(operation, a, b){
//     if (operation == "-") {
//         result = a - b;
//         console.log(result);
//     }
// }

// calcMinus("-", 4, 3);


// function calcMultiply(operation, a, b){
//     if (operation == "*") {
//         result = a * b;
//         console.log(result);
//     }
// }

// calcMultiply("*", 5, 6);

// function calcDiv(operation, a, b){
//     if (operation == "/") {
//         result = a / b;
//         console.log(result);
//     }
// }

// calcDiv("/", 8, 4);


// let result = null

// function calcPlus(a, b){
//     return a + b;
// }
// function calcMinus(a, b){
//     return a - b;
// }
// function calcMultiply(a, b){
//     return a * b;
// }
// function calcDiv(a, b){
//     return a / b;
// }

// function mainFunction(operation, a, b){
//     if(operation == "+"){
//         result = calcPlus(a, b);
//         console.log(result);
//     } else if(operation == "-"){
//         result = calcMinus(a, b);
//         console.log(result);
//     } else if(operation == "*"){
//         result = calcMultiply(a, b);
//         console.log(result);
//     } else{
//         result = calcMinus(a, b);
//         console.log(result);
//     }
// }

// mainFunction("+", 1, 2);



// let Emptyarray = []; 
// let ArraywithValue = ['Red', 'Green', 'Blue'];
// console.log(ArraywithValue);
// console.log(ArraywithValue[0]);
// console.log(ArraywithValue[1]);
// console.log(ArraywithValue[2]);
// console.log(ArraywithValue.length);



// for (let i = 0; i < ArraywithValue.length; i++){
//     console.log(ArraywithValue[i]);
// }


// for (let element of ArraywithValue){
//     console.log(element);
// }



let array = ['1'];
array.push("2"); // add smth at the end of an array
array.unshift(0); // add smth at the start of an array 
array.pop(); // delete last element 
array.shift(); // delete first element
console.log(array);







let multidimensional = [
/*0*/    [1, 2, 3],
/*1*/    [4, 5, 6],
/*2*/    [7, 8, 9]
];     //, 0, 1, 2 - index

console.log(multidimensional[0][0]); // 1

for (let i = 0; i < multidimensional.length; i++){
    for (let j = 0; j < multidimensional.length; j++){
        console.log(multidimensional[i][j]);
    }
}