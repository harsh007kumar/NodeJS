//////////////// Example 1
var msg = "Hello world";
console.log(msg);

//////////////// Example 2
sayHello();
function sayHello()
{
    console.log("Hello World 2 - standalone function");
}
//////////////// Example 3
function HelloWorld3(){}
HelloWorld3.prototype.sayHello = function()
{
    console.log("Hello World 3 - function part of prototype");
}
new HelloWorld3().sayHello();
//////////////// Example 4
class HelloWorld
{
    sayHello()
    {
        console.log("Hello World 4");
    }
}
new HelloWorld().sayHello();
//////////////// Example 5
const meaningLessName= require('./helloWorld');     // assiging value to constant using require|| We dont mentioned extension of the file
new meaningLessName().sayHello();

//////////////// Example 6 : Using "bable" Transpiler [ES6 support]
import {HelloWorld6} from "./usingBable";
new HelloWorld6().sayHello();