const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
  function foo (arr){
      let newArr = []
for(let value of  arr){
  for(let key of value){
     if(key % 2 === 0){
         newArr.push(key)
     }

  }

}
return newArr;
  }

console.log(foo(numbers))