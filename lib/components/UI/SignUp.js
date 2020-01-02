"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = function SignUp() {
  return _react.default.createElement("form", null, _react.default.createElement(_core.TextField, {
    label: "Email Address"
  }), _react.default.createElement(_core.TextField, {
    label: "User Name"
  }), _react.default.createElement(_core.TextField, {
    label: "Password"
  }));
};

var _default = SignUp;
exports.default = _default;