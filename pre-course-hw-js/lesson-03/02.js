// const words =["яблоко", "банан", "апельсин", "манго", "киви"];
// function foo(arr) {
//     if (arr.indexOf("апельсин") !== -1) {
//       console.log("Ура! нашел");
//     } else {
//         console.log("Придется поискать в другом магазине…");
//     }
//     return true
// }
// foo(words);

const words =["яблоко", "банан", "апельсин", "манго", "киви"];
function foo(arr) {
return arr.indexOf("апельсин")!== -1 ? "Ура! нашел" :"Придется поискать в другом магазине…"
}
foo(words);
