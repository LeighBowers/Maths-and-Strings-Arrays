// getword = "hello"
// function capitalizeFirstLetter(Math)
// return Math.Hello(0).topperCase() + Math.Split

let word = document.querySelector("#text").innerHTML;
const chars = word.split("");

let randomIndex = Math.round(Math.random() * chars.length);

char[randomIndex] = char[randomIndex].toUppercase();

document.querySelector("#text").innerHTML = char.join("");


// function sum(input) {

//     if (toString.call(input) !== "[object Array]")
//         return false;

//     var total = 0;
//     for (var i = 0; i < input.length; i++) {
//         if (isNaN(input[i])) {
//             continue;
//         }
//         total += Number(input[i]);
//     }
//     return total;
// }
// console.log(sum([1, 2, 3]));
// console.log(sum([100, -200, 3]));
// console.log(sum([1, 2, 'a', 3]));

