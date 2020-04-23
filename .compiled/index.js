"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _usingBable = require("./usingBable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//////////////// Example 1
var msg = "Hello world";
console.log(msg);

//////////////// Example 2
sayHello();
function sayHello() {
    console.log("Hello World 2 - standalone function");
}
//////////////// Example 3
function HelloWorld3() {}
HelloWorld3.prototype.sayHello = function () {
    console.log("Hello World 3 - function part of prototype");
};
new HelloWorld3().sayHello();
//////////////// Example 4

var HelloWorld = function () {
    function HelloWorld() {
        _classCallCheck(this, HelloWorld);
    }

    _createClass(HelloWorld, [{
        key: "sayHello",
        value: function sayHello() {
            console.log("Hello World 4");
        }
    }]);

    return HelloWorld;
}();

new HelloWorld().sayHello();
//////////////// Example 5
var meaningLessName = require('./helloWorld'); // assiging value to constant using require|| We dont mentioned extension of the file
new meaningLessName().sayHello();

//////////////// Example 6 : Using "bable" Transpiler [ES6 support]

new _usingBable.HelloWorld6().sayHello();
//# sourceMappingURL=index.js.map