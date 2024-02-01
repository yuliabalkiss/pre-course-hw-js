const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
function foo(arr){
    return  arr.indexOf("апельсин") !== -1 ? "Ура! нашел" : "Придется поискать в другом магазине…"
}
console.log(foo(words))


