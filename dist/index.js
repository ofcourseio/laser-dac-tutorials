"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _core = require("@laser-dac/core");

var _simulator = require("@laser-dac/simulator");

var _draw = require("@laser-dac/draw");

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var dac, scene, step;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          step = function _step() {
            var rect = new _draw.Rect({
              width: 0.2,
              height: 0.2,
              x: 0.4,
              y: 0.4,
              color: [1, 1, 0]
            });
            scene.add(rect);
          };

          console.log(process.env);
          dac = new _core.DAC();
          dac.use(new _simulator.Simulator());
          _context.next = 6;
          return dac.start();

        case 6:
          scene = new _draw.Scene({
            resolution: 500
          });
          scene.start(step);
          dac.stream(scene);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();