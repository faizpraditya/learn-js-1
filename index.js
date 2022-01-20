// console.log("Hello World!")
// const nama = "Mason Mount";
// var nama = "Mason Mount";
// let nama = "Mason Mount";
// let memperbaiki behavior2 var yang bisa memunculkan bug
// console.log(nama);

// run time error
// nama = "tes";
// console.log(nama);

// undefined
// console.log(x)
// var x = 5
// console.log(x)

// run time error
// console.log(y)
// let y = 5
// console.log(y)


// run time error
// let z
// console.log(z)
// z = 5
// console.log(z)

// data type
// let number = 1
// let word = "string"
// let bool = true
// let arr = []
// null != undefined
// let value = null
// let val // undefined, sebuah variable yang belum diassign value

// arr[0] = 1
// arr[1] = "tes"

// console.log(typeof(number))
// console.log(typeof(word))
// console.log(typeof(bool))
// console.log(typeof(arr))
// console.log(typeof(arr[0]))
// console.log(typeof(arr[1]))
// console.log(typeof(value))
// console.log(typeof(val))

// let numberA = 5
// let numberB = 7
// let r1 = numberA+numberB
// let r2 = numberA*numberB
// let r3 = numberA/numberB

// // modulo
// let r4 = numberA%numberB

// let a = 2
// let b = 3

// // exponen / pangkat
// let resEx = a**b
// console.log(resEx)

// [numberA, numberB] = [numberB, numberA] // destructuring
// numberA = numberA + numberB;
// numberB = numberA - numberB;
// numberA = numberA - numberB;
// numberA; // => 2
// numberB; // => 1
// console.log(numberA,numberB)

// let aa = 1;
// let bb = 2;
// [aa, bb] = [bb, aa];
// aa; // => 2
// bb; // => 1

// console.log(aa)
// console.log(bb)

// console.log(++numberA)
// console.log(numberA)
// console.log(numberB--)
// console.log(numberB)


// let a = 5
// let b = 7
// a = a+b
// a += b
// console.log(a)

// =, assignment
// ==, !=, compare value
// ===, !==, compare value dan data type
// >=

// falsy thruty
// 2 equal (==)
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy 

// &&
// ||
// !

// index start from 0, element start from 1
// let arr = new Array()
// let arr2 = []

// console.log(typeof(arr),typeof(arr2));
// console.log(arr.length);

// let tes = ["phil", "foden", 10, 100.2, false, {"id":"001"}]

// tes.push("lha pie")
// console.log(tes);

// // remove last
// tes.pop()
// console.log(tes);

// // remove first
// tes.shift()
// console.log(tes);

// // concat harus ditampung dulu
// let tes2 = ["tes concat"]
// tes = tes.concat(tes2)
// console.log(tes);

// // add element ke index yang diinginkan
// tes.splice(2,0,"bellingham")
// console.log(tes);

// let tesz = tes.slice(2,4)
// console.log(tesz);

// let word = "ken miles"
// console.log(word.length);
// console.log(word.toUpperCase());
// console.log(word.toLowerCase());

// let greet = "hi " +word
// console.log(greet);

// // string interpolation
// let greets = `hi ${word}!`
// console.log(greets);

// condition,if,else if,else.

// let time = 11;
// // dengan scope
// if (time<5) {
//     console.log("tes");
// } else {
//     console.log("else");
// }

// // tanpa scope (satu line dibawah)
// if (time<10)
// console.log("tes");
// else
// console.log("else");

// // ternary operator
// let time = 4;

// time < 5 ? console.log("Waktu belajar") : console.log("istirahat");

// if (time<5) {
//     console.log("study");
// } else {
//     console.log("rest");
// }

// // switchcase, dikasih break kalau udah ketemu
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);   
// }

// let arr = [1,2,3,4,"tes"]

// iterator tu indexnya, tipedata iteratornya string
// for(let iterator in arr) {
//     console.log(arr[iterator]);
// }

// iterator tu elementnya
// for (const iterator of arr) {
//     console.log(iterator);
// }

let i = 0
// cek kondisi dulu
// while (i<5) {
//     console.log(i);
//     i++
// }

// minimal 1 kali eksekusi dulu
do {
    console.log(i);
    i++
} while (i<0);