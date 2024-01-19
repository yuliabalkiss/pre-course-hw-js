let passport = {
    name: "Petr",
    surname: "Petrov",
};
 let myPassport = structuredClone(passport)
myPassport.name = 'Ivan'
console.log(myPassport.name)
console.log(passport.name)