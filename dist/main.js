"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuestos["default"](210400, 2001);
var cliente1 = new _cliente["default"]("Fruna", impuesto1);
console.log(cliente1.calcularImpuesto());