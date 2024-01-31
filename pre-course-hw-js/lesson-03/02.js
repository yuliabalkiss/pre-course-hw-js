// const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
//
// function findOrange(){
//     console.log(words.indexOf("апельсин") ? "Ура! нашел" : "Придется поискать в другом магазине...")
// }
//
// findOrange(words)


const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
if (words.indexOf("апельсин") !== -1) {
    console.log("Ура! нашел");
} else {
    console.log("Придется поискать в другом магазине…");
}