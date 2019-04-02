'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./src.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      index: 1
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.refs.aa.style.width = this.props.D;
      this.refs.aa.style.height = this.props.E;
      this.refs.c.style.height = this.props.E;
      var B = this.refs.c.length;
      this.refs.c.style.width = B * 500 + 'px';
      this.time = setTimeout(this.loop.bind(this), this.props.B);
      this.refs.c.addEventListener('transitionend', function () {
        _this2.time = setTimeout(_this2.loop.bind(_this2), _this2.props.B);
        if (_this2.state.index == 4) {
          _this2.refs.c.style.transition = '0s';
          _this2.refs.c.style.transform = 'translateX(0px)';
          _this2.state.index = 1;
        }
      });
    }
  }, {
    key: 'loop',
    value: function loop() {
      if (this.state.index < 4) {
        this.refs.c.style.transition = this.props.C;
        this.refs.c.style.transform = 'translateX(' + -this.state.index * 500 + 'px)';
      }
      this.setState(function (prevState) {
        return {
          index: prevState.index + 1
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'a', ref: 'aa' },
        _react2.default.createElement(
          'div',
          { className: 'b', ref: 'c' },
          this.props.list.map(function (item) {
            return _react2.default.createElement('img', { src: item.text, style: { width: _this3.props.D }, className: 'd', onClick: function onClick() {
                window.open(item.href);
              } });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'round-container' },
          this.props.list.map(function (item, index) {
            if (index == _this3.props.list.length - 1) {
              return null;
            }
            if (_this3.state.index - 1 === index && _this3.state.index !== _this3.props.list.length) {
              return _react2.default.createElement('div', { className: 'yello' });
            }
            if (_this3.state.index == _this3.props.list.length && index == 0) {
              return _react2.default.createElement('div', { className: 'yello' });
            }

            return _react2.default.createElement('div', { className: 'red', onClick: function onClick() {
                clearTimeout(_this3.time);_this3.setState({ index: index });_this3.time = setTimeout(_this3.loop.bind(_this3), 0);
              } });
          })
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;