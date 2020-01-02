"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { mount } from 'enzyme';
describe('test App ', function () {
  it('renders the App', function () {
    var appComponent = _reactTestRenderer.default.create(_react.default.createElement(_App.default, null));

    var tree = appComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});