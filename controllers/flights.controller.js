"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var pool = require("../db"); // SELECT DISTINCT B.name NomClient, B.nPersones, C.flight_day DiaVol
// FROM client_flight A
// INNER JOIN clients B ON A.client_id = B.id
// INNER JOIN flights C ON A.flight_id = C.id


var getAllFlights = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pool.query("SELECT DATE_FORMAT(A.flight_day, '%Y-%m-%d') Dia, B.Nom NomGlobo FROM flights A INNER JOIN balloons B ON (A.balloon_id = B.id) ORDER BY flight_day DESC");

          case 3:
            result = _context.sent;
            res.json(result);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAllFlights(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  getAllFlights: getAllFlights
};