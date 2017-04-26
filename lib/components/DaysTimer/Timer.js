'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var propTypes = {
    endDate: _react.PropTypes.string.isRequired
};

var DaysTimer = function (_React$Component) {
    _inherits(DaysTimer, _React$Component);

    function DaysTimer() {
        _classCallCheck(this, DaysTimer);

        // set initial time:y

        var _this = _possibleConstructorReturn(this, (DaysTimer.__proto__ || Object.getPrototypeOf(DaysTimer)).call(this));

        _this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            close: false
        };

        return _this;
    }

    _createClass(DaysTimer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // update time every second
            this.timer = setInterval(function () {
                _this2.renderMatchCounter();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.clearInterval(this.timer);
        }
    }, {
        key: 'renderMatchCounter',
        value: function renderMatchCounter() {

            var days = void 0,
                hours = void 0,
                minutes = void 0,
                seconds = void 0;
            var now = (0, _moment2.default)();
            //if we have to close 1 hour before endDate
            var endDate = (0, _moment2.default)(this.props.endDate);

            // let timer = setInterval(function(){
            //if now & endDate are same , means we have to close timer
            if ((0, _moment2.default)(now).isSame(endDate)) {
                window.clearInterval(this.timer);
                this.setState({ close: true });
            }
            if ((0, _moment2.default)(now).isBefore(endDate)) {
                var _now = (0, _moment2.default)();
                var diff = _moment2.default.duration((0, _moment2.default)(endDate).diff((0, _moment2.default)(_now)));
                days = parseInt(diff.asDays(), 10);
                hours = parseInt(diff.asHours(), 10) - days * 24;
                minutes = parseInt(diff.asMinutes(), 10) - (days * 24 * 60 + hours * 60);
                seconds = parseInt(diff.asSeconds(), 10) - (days * 24 * 60 * 60 + minutes * 60 + hours * 60 * 60);
                this.setState({
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'timer-head', style: this.props.style.parentDiv },
                    _react2.default.createElement(
                        'div',
                        { className: 'td-timer', style: this.props.style.value },
                        this.state.days,
                        '  - Days'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'td-timer', style: this.props.style.value },
                        this.state.hours,
                        ' - hours'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'td-timer', style: this.props.style.value },
                        this.state.minutes,
                        ' - Min'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'td-timer', style: this.props.style.value },
                        this.state.seconds,
                        ' - Sec'
                    )
                )
            );
        }
    }]);

    return DaysTimer;
}(_react2.default.Component);

DaysTimer.propTypes = propTypes;

exports.default = DaysTimer;