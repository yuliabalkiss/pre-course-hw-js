const users2 = [
    {
        id: 1,
        user: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        user: 'Jane',
        surName: 'Smith',
        address: '456 Elm St'
    },
    {
        id: 3,
        user: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    },
];

const newObj = {
    id: 4,
    user: 'Ivan',
    surName: 'Susanin',
    address: 'Unknown'
}


function foo (obj1, obj2){
 return {...obj1, obj2}
}
console.log(foo(users2, newObj))