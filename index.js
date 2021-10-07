//youtube: https://www.youtube.com/watch?v=PFmuCDHHpwk

//two patterns for creating object in javascript:
//1- Factory function
//2- Constructor Function


//Factory Function
function createCircle(radius) {
    return {
        radius, 
        draw: function() {
            //console.log("draw!!!")
        }
    } 
}

const cisrcle = createCircle(2);
cisrcle.draw();

//Constructor Function
function Circle(redius) {
    this.redius = redius;
    let defaultLocation = {x:0, y:0};
    let defaultRedius = 4;

    // this.getDefaultLocation = function() {
    //     return defaultLocation;
    // }

    Object.defineProperty(this, "defaultRedius", {
        get: function() {
            return defaultRedius;
        }
        // set: function(value) {
        //     if(typeof value !== "number") 
        //         throw new Error("invalid radius")
        //     defaultRedius= value;
        // }
        //without setter the "defaultRadius" property is read only.
    })
    this.draw = function() {
        console.log("draw :)")
    }
}

const anotherCircle = new Circle(3);
anotherCircle.draw();


//P.S. `new` keyword create a new empty object that `this` 
//will point to that empty object.

//Note: when we create object, javascript engine will traslate that to:
 
let s = {}; 
//let s = new Object();
//so every object has built-n constructor property


Circle.call({}, 1);
const cir = new Circle(1);
//line 41 and 42 is same. `call` function make `this` to point to the first 
//argument with is {} in this example. 

//in case the second argument is an array instead of `call`, we can use `apply`
Circle.apply({}, [1, 2, 3])

//important: in JavaScript functions are actually objects!

//-----------------------------------------------------------------------

//Primitives are copied by their value. (Value Types)
let x = 20;
let y = x;
x = 30; // y is 20;

//Objects are copied by their reference.(Reference Types)
let z = {value: 20};
let w = z;
z = {value: 30}; // w is {value: 30}

//Value Types: Number, String, Boolean, Symbol, undefined, null
//Reference Types: Object, Function, Array

//------------------------------------------------------------------------

//iterating over object:
const cirtcle1 = new Circle(1);

for(let key in cirtcle1) {
    //console.log(key, cirtcle1[key], ">>>");
}

if("redius" in cirtcle1) {
    //console.log("circle has redius!")
}

