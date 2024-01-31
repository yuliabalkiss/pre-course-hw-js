const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
function findOrange(arr){
    if(arr.indexOf("апельсин") !== -1 ){
        return "Ура! нашел";
    }else{
       return "Придется поискать в другом магазине…"
    }

}
 findOrange(words);

