(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_location_1 = require("./get-location");
console.log(get_location_1.sayHello("TypeScript"));
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript");

},{"./get-location":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9nZXQtbG9jYXRpb24udHMiLCJqcy92bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQWdCLFFBQVEsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sZ0JBQWMsSUFBTSxDQUFDO0FBQzdCLENBQUM7QUFGRCw0QkFFQzs7Ozs7QUNGRCwrQ0FBMEM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFFcEMsU0FBUyxLQUFLLENBQUMsUUFBZ0I7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxRQUFVLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZykge1xuXHRyZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XG59XG4iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dldC1sb2NhdGlvblwiO1xuXG5jb25zb2xlLmxvZyhzYXlIZWxsbyhcIlR5cGVTY3JpcHRcIikpO1xuXG5mdW5jdGlvbiBoZWxsbyhjb21waWxlcjogc3RyaW5nKSB7XG5cdGNvbnNvbGUubG9nKGBIZWxsbyBmcm9tICR7Y29tcGlsZXJ9YCk7XG59XG5cbmhlbGxvKFwiVHlwZVNjcmlwdFwiKTtcbiJdfQ==
