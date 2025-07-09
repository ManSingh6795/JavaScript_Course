let onj1 = {
    1 : "a",
    2: "b"
}
let onj2 = {
    3 : "c",
    4: "d"
}

//console.log(Object.assign(onj1,onj2))
let obj3 = {...onj1, ...onj2}
//console.log(obj3)
console.log(Object.keys(onj1))
console.log(Object.values(onj1))
console.log(onj1.hasOwnProperty("1"))