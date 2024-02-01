const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
function findOrange(arr){
    if(arr.indexOf("апельсин") !== -1){
        console.log("Ура! нашел")
    }else{
        console.log("Придется поискать в другом магазине…")
    }
}
 findOrange(words);

