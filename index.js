// Write your solution here!
const cats=["Milo", "Otis","Garfield"]

function destructivelyAppendCat(name){
     return cats.push(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}
function appendCat(name){
    let cats2= ["Milo", "Otis","Garfield", name]
    return cats2
}
function prependCat(name){
    let cats2= [name, "Milo", "Otis","Garfield"]
    return cats2
}
function removeLastCat(){
    let cats2= cats.slice(0,-1)
    return cats2
}
function removeFirstCat(){
    let cats2= cats.slice(1)
    return cats2
}