let log = Symbol("key1")
let userJs = {
    name : "Man",
    age : 29,
    email: "man@gmail.com",
    [log]: "log1"
}
// console.log(userJs)
// console.log(userJs.name)
// console.log(userJs['email'])
//console.log(userJs[log])
userJs.fun1 = function(){
    console.log("Hello")
}
console.log(userJs.fun1())