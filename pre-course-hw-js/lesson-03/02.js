const words =["яблоко", "банан", "апельсин", "манго", "киви"];
function foo(arr) {
    if (arr.indexOf("апельсин") !== -1) {
        return "Ура! нашел"
    } else {
        return "Придется поискать в другом магазине…"
    }
}
console.log(foo(words));


