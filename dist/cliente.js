"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cliente = /*#__PURE__*/function () {
  function cliente(nombre, impuesto) {
    _classCallCheck(this, cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var resultado = (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
      return "El impuesto a pagar es ".concat(resultado);
    }
  }]);

  return cliente;
}();

exports["default"] = cliente;