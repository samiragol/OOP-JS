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

//-----------------------------------------------------------------------

//youtube: https://www.youtube.com/watch?v=tiRhFGnCltw
//closure
let name = "Samira";

greetMeWithDelay();

name = "Ehsan";

function greetMeWithDelay() {
    console.log("name", name) //Samira
    setTimeout(function() {
        console.log("name", name) // Ehsan
    }, 0);
}

//the output here is "Ehsan", becasue clousers in javascript closed over the 
//variavle names, the memorise the variavle names not the variable value.
//so the value is only look up when the function ctually runs. 


//----------------------------------------------------------------------------
//proptotype: prototypes are fallback objects in javascript, to look up missing functionalities.
const person = {kind: "human"} //has default prototype as every object has

const user = Object.create(person); //creating object called `user` and add person as its prototype.

Object.setPrototypeOf(user, {kind : "mammal", angry: "reason"}) //change/modify user prototype

//if we define an array, each array has some properties such as push, filter, etc.
//prototype concept helps to not have all these functions/properties created for each array that 
//has been declared. instead its is linked to root/parent prototype in higher level in chain that keeps
//all those functions.

