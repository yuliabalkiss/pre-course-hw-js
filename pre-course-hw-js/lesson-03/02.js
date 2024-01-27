const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange(){
    console.log(words.indexOf("апельсин") ? "Ура! нашел" : "Придется поискать в другом магазине...")
}

findOrange(words)
