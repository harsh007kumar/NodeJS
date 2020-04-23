"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelloWorld5 = function () {
    function HelloWorld5() {
        _classCallCheck(this, HelloWorld5);
    }

    _createClass(HelloWorld5, [{
        key: "sayHello",
        value: function sayHello() {
            console.log("Hello World 5 - from class declared in helloWorld.js file");
        }
    }]);

    return HelloWorld5;
}();

// this module exports HelloWorld5 class, Not instance just the structure to export any class by exporting constructor


module.exports = HelloWorld5;
//# sourceMappingURL=helloWorld.js.map