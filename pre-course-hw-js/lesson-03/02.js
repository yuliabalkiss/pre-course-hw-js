const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange(){
     return words.indexOf("апельсин") ? 'Ура! нашел' : 'Придется поискать в другом магазине'


}

console.log(findOrange(words))
