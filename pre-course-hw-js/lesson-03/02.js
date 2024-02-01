// const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
// function foo(arr){
//     return  arr.indexOf("апельсин") !== -1 ? console.log("Ура! нашел") : console.log("Придется поискать в другом магазине…")
// }
//
// foo(words)



const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
function foo(arr){
    return  arr.indexOf("апельсин") === -1 ? "Придется поискать в другом магазине…" : "Ура! нашел"  ;
}

console.log(foo(words));