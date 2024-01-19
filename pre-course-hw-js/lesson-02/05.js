let passport = {
    name: "Petr",
    surname: "Petrov",
};
 let myPassport = structuredClone(passport)
myPassport.name = 'Ivan'

console.log(passport.name)
console.log(myPassport.name)