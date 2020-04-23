class HelloWorld5
{
    sayHello()
    {
        console.log("Hello World 5 - from class declared in helloWorld.js file");
    }
}

// this module exports HelloWorld5 class, Not instance just the structure to export any class by exporting constructor
module.exports = HelloWorld5;