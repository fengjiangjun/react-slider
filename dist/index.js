'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

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
      index: 1,
      width: 0,
      height: 0
    };
    _this.container = _react2.default.createRef();
    _this.imgWrapper = _react2.default.createRef();
    _this.list = _this.props.list;

    _this.list.push(_this.props.list[0]);

    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.list) {
        return;
      }
      var parent = this.container.current.parentNode;
      this.setState({
        width: this.props.width || parent.clientWidth,
        height: this.props.height || parent.clientHeight
      }, function () {
        _this2.container.current.style.width = _this2.state.width + "px";
        _this2.container.current.style.height = _this2.state.height + "px";
        _this2.imgWrapper.current.style.height = _this2.state.height + "px";
        var count = _this2.list.length;
        _this2.imgWrapper.current.style.width = count * _this2.state.width + 'px';
        _this2.time = setTimeout(_this2.loop.bind(_this2), _this2.props.intervalTime || 2000);
        _this2.imgWrapper.current.addEventListener('transitionend', function () {
          _this2.time = setTimeout(_this2.loop.bind(_this2), _this2.props.intervalTime || 2000);
          if (_this2.state.index == count) {
            _this2.imgWrapper.current.style.transition = '0s';
            _this2.imgWrapper.current.style.transform = 'translateX(0px)';
            _this2.state.index = 1;
          }
        });
      });
    }
  }, {
    key: 'loop',
    value: function loop() {
      if (this.state.index < this.list.length) {
        this.imgWrapper.current.style.transition = this.props.transitionTime || '2s';
        this.imgWrapper.current.style.transform = 'translateX(' + -this.state.index * this.state.width + 'px)';
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
        { className: 'container', ref: this.container },
        _react2.default.createElement(
          'div',
          { className: 'img-wrapper', ref: this.imgWrapper },
          this.list.map(function (item) {
            return _react2.default.createElement('img', { src: item.text, style: { width: _this3.state.width }, className: 'img-item', onClick: function onClick() {
                window.open(item.href);
              } });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'round-container' },
          this.list.map(function (item, index) {
            if (index == _this3.list.length - 1) {
              return null;
            }
            if (_this3.state.index - 1 === index && _this3.state.index !== _this3.list.length) {
              return _react2.default.createElement('div', { className: (_this3.props.roundActiveClassName || '') + " yello" });
            }
            if (_this3.state.index == _this3.list.length && index == 0) {
              return _react2.default.createElement('div', { className: (_this3.props.roundActiveClassName || '') + " yello" });
            }

            return _react2.default.createElement('div', { className: (_this3.props.roundClassName || '') + " red", onClick: function onClick() {
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