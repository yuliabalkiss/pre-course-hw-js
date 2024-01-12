let str = "zzzzyzz";
function findSymbol (str){
    let symbol = str.includes('y') ? 'нашел' : 'заблудился'
   console.log(symbol)
    return symbol

}
findSymbol(str);
