require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-photo-gallery":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
				value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Gallery = (function (_React$Component) {
				_inherits(Gallery, _React$Component);

				function Gallery() {
								_classCallCheck(this, Gallery);

								_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this);
								this.state = {
												containerWidth: 0
								};
								this.handleResize = this.handleResize.bind(this);
				}

				_createClass(Gallery, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
												this.setState({ containerWidth: Math.floor(this._gallery.clientWidth) });
												window.addEventListener('resize', this.handleResize);
								}
				}, {
								key: 'componentDidUpdate',
								value: function componentDidUpdate() {
												if (this._gallery.clientWidth !== this.state.containerWidth) {
																this.setState({ containerWidth: Math.floor(this._gallery.clientWidth) });
												}
								}
				}, {
								key: 'componentWillUnmount',
								value: function componentWillUnmount() {
												window.removeEventListener('resize', this.handleResize, false);
								}
				}, {
								key: 'handleResize',
								value: function handleResize(e) {
												this.setState({ containerWidth: Math.floor(this._gallery.clientWidth) });
								}
				}, {
								key: 'render',
								value: function render() {
												var _this = this;

												var cols = this.props.cols,
												    photoPreviewNodes = [];
												var contWidth = this.state.containerWidth - cols * 4; /* 4px for margin around each image*/
												contWidth = Math.floor(contWidth); // add some padding to prevent layout prob
												var remainder = this.props.photos.length % cols;
												if (remainder) {
																// there are fewer photos than cols num in last row
																var lastRowWidth = Math.floor(this.state.containerWidth / cols * remainder - remainder * 4);
																var lastRowIndex = this.props.photos.length - remainder;
												}
												// loop thru each set of  cols num
												// eg. if cols is 3 it will  loop thru 0,1,2, then 3,4,5 to perform calculations for the particular set
												for (var i = 0; i < this.props.photos.length; i += cols) {
																var totalAr = 0,
																    commonHeight = 0;

																// get the total aspect ratio of the row
																for (var j = i; j < i + cols; j++) {
																				if (j == this.props.photos.length) {
																								break;
																				}
																				this.props.photos[j].aspectRatio = this.props.photos[j].width / this.props.photos[j].height;
																				totalAr += this.props.photos[j].aspectRatio;
																}
																if (i === lastRowIndex) {
																				commonHeight = lastRowWidth / totalAr;
																} else {
																				commonHeight = contWidth / totalAr;
																}
																// run thru the same set of items again to give the width and common height

																var _loop = function (k) {
																				if (k == _this.props.photos.length) {
																								return 'break';
																				}

																				var src = _this.props.photos[k].src,
																				    srcset = undefined,
																				    sizes = undefined;
																				if (_this.props.photos[k].srcset) {
																								srcset = _this.props.photos[k].srcset.join();
																				}
																				if (_this.props.photos[k].sizes) {
																								sizes = _this.props.photos[k].sizes.join();
																				}

																				if (_this.props.onClickPhoto) {
																								photoPreviewNodes.push(_react2['default'].createElement(
																												'div',
																												{ key: k, style: style },
																												_react2['default'].createElement(
																																'a',
																																{ href: '#', className: k, onClick: function (e) {
																																								return _this.props.onClickPhoto(k, e);
																																				} },
																																_react2['default'].createElement('img', { src: src, srcSet: srcset, sizes: sizes, style: { display: 'block', border: 0 }, height: commonHeight, width: commonHeight * _this.props.photos[k].aspectRatio, alt: _this.props.photos[k].alt })
																												)
																								));
																				} else {
																								photoPreviewNodes.push(_react2['default'].createElement(
																												'div',
																												{ key: k, style: style },
																												_react2['default'].createElement('img', { src: src, srcSet: srcset, sizes: sizes, style: { display: 'block', border: 0 }, height: commonHeight, width: commonHeight * _this.props.photos[k].aspectRatio, alt: _this.props.photos[k].alt })
																								));
																				}
																};

																for (var k = i; k < i + cols; k++) {
																				var _ret = _loop(k);

																				if (_ret === 'break') break;
																}
												}
												return this.renderGallery(photoPreviewNodes);
								}
				}, {
								key: 'renderGallery',
								value: function renderGallery(photoPreviewNodes) {
												var _this2 = this;

												if (this.props.disableLightbox) {
																return _react2['default'].createElement(
																				'div',
																				{ id: 'Gallery', className: 'clearfix', ref: function (c) {
																												return _this2._gallery = c;
																								} },
																				photoPreviewNodes
																);
												} else {
																return _react2['default'].createElement(
																				'div',
																				{ id: 'Gallery', className: 'clearfix', ref: function (c) {
																												return _this2._gallery = c;
																								} },
																				photoPreviewNodes
																);
												}
								}
				}]);

				return Gallery;
})(_react2['default'].Component);

;
Gallery.displayName = 'Gallery';
Gallery.propTypes = {
				photos: function photos(props, propName, componentName) {
								return _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
												src: _react2['default'].PropTypes.string.isRequired,
												width: _react2['default'].PropTypes.number.isRequired,
												height: _react2['default'].PropTypes.number.isRequired,
												alt: _react2['default'].PropTypes.string,
												srcset: _react2['default'].PropTypes.array,
												sizes: _react2['default'].PropTypes.array
								})).isRequired.apply(this, arguments);
				},
				onClickPhoto: _react2['default'].PropTypes.func,
				cols: _react2['default'].PropTypes.number
};
Gallery.defaultProps = {
				cols: 3
};
// Gallery image style
var style = {
				display: 'block',
				margin: 2,
				backgroundColor: '#e3e3e3',
				float: 'left'
};

exports['default'] = Gallery;
module.exports = exports['default'];

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2N0YXZpYS9kZXYvcmVhY3QtcGhvdG8tZ2FsbGVyeS9zcmMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDQWtCLE9BQU87Ozs7SUFFbkIsT0FBTztjQUFQLE9BQU87O0FBQ0UsYUFEVCxPQUFPLEdBQ0k7OEJBRFgsT0FBTzs7QUFFWixtQ0FGSyxPQUFPLDZDQUVKO0FBQ1IsWUFBSSxDQUFDLEtBQUssR0FBRztBQUNULDBCQUFjLEVBQUUsQ0FBQztTQUNwQixDQUFDO0FBQ0YsWUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7aUJBUEMsT0FBTzs7ZUFRUSw2QkFBRTtBQUN0QixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFBO0FBQy9ELGtCQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDs7O2VBQ2lCLDhCQUFFO0FBQ3ZCLGdCQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFDO0FBQ3hELG9CQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDMUU7U0FDRzs7O2VBQ21CLGdDQUFFO0FBQ3hCLGtCQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUQ7OztlQUNXLHNCQUFDLENBQUMsRUFBQztBQUNYLGdCQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDMUU7OztlQUNLLGtCQUFFOzs7QUFDSixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUN0QixpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDM0IsZ0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFJLElBQUksR0FBRyxDQUFDLEFBQUMsQ0FBQztBQUN2RCxxQkFBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsZ0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDaEQsZ0JBQUksU0FBUyxFQUFFOztBQUNiLG9CQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLEFBQUMsQUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUksU0FBUyxHQUFLLFNBQVMsR0FBRyxDQUFDLEFBQUMsQ0FBRSxDQUFDO0FBQ3BHLG9CQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2FBQ3pEOzs7QUFHRCxpQkFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLElBQUUsSUFBSSxFQUFDO0FBQzVDLG9CQUFJLE9BQU8sR0FBQyxDQUFDO29CQUNiLFlBQVksR0FBRyxDQUFDLENBQUM7OztBQUdqQixxQkFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUM7QUFDeEIsd0JBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQztBQUM5Qiw4QkFBTTtxQkFDVDtBQUNmLHdCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUM1RiwyQkFBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztpQkFDakM7QUFDRCxvQkFBSSxDQUFDLEtBQUssWUFBWSxFQUFFO0FBQ3RCLGdDQUFZLEdBQUcsWUFBWSxHQUFHLE9BQU8sQ0FBQztpQkFDdkMsTUFBTTtBQUNMLGdDQUFZLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQztpQkFDcEM7OztzQ0FFUSxDQUFDO0FBQ04sd0JBQUksQ0FBQyxJQUFJLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7QUFDOUIsdUNBQU07cUJBQ1Q7O0FBRWYsd0JBQUksR0FBRyxHQUFHLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO3dCQUFFLE1BQU0sWUFBQTt3QkFBRSxLQUFLLFlBQUEsQ0FBQztBQUNsRCx3QkFBSSxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDO0FBQzVCLDhCQUFNLEdBQUcsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDL0M7QUFDRCx3QkFBSSxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDO0FBQzNCLDZCQUFLLEdBQUcsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDN0M7O0FBRUQsd0JBQUksTUFBSyxLQUFLLENBQUMsWUFBWSxFQUFDO0FBQ3hCLHlDQUFpQixDQUFDLElBQUksQ0FDeEI7OzhCQUFLLEdBQUcsRUFBRSxDQUFDLEFBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxBQUFDOzRCQUN2Qjs7a0NBQUcsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsQ0FBQyxBQUFDLEVBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQzsrQ0FBSyxNQUFLLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQ0FBQSxBQUFDO2dDQUMzRSwwQ0FBSyxHQUFHLEVBQUUsR0FBRyxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEFBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQUFBQyxFQUFDLE1BQU0sRUFBRSxZQUFZLEFBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxHQUFHLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEFBQUMsRUFBQyxHQUFHLEVBQUUsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQUFBQyxHQUFHOzZCQUN6TDt5QkFDRCxDQUNILENBQUM7cUJBQ0wsTUFDRztBQUNBLHlDQUFpQixDQUFDLElBQUksQ0FDeEI7OzhCQUFLLEdBQUcsRUFBRSxDQUFDLEFBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxBQUFDOzRCQUN2QiwwQ0FBSyxHQUFHLEVBQUUsR0FBRyxBQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sQUFBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEFBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQUFBQyxFQUFDLE1BQU0sRUFBRSxZQUFZLEFBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxHQUFHLE1BQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEFBQUMsRUFBQyxHQUFHLEVBQUUsTUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQUFBQyxHQUFHO3lCQUM3TCxDQUNILENBQUM7cUJBQ0w7OztBQTVCUyxxQkFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUM7cUNBQW5CLENBQUM7OzBDQUVGLE1BQU07aUJBMkJiO2FBQ0o7QUFDUixtQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQ2hDO1NBQ0w7OztlQUNZLHVCQUFDLGlCQUFpQixFQUFDOzs7QUFDbkMsZ0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUM7QUFDM0IsdUJBQ0g7O3NCQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsVUFBQyxDQUFDO21DQUFLLE9BQUssUUFBUSxHQUFHLENBQUM7eUJBQUEsQUFBQztvQkFDaEUsaUJBQWlCO2lCQUNoQixDQUNEO2FBQ0wsTUFDRztBQUNBLHVCQUNIOztzQkFBSyxFQUFFLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFFLFVBQUMsQ0FBQzttQ0FBSyxPQUFLLFFBQVEsR0FBRyxDQUFDO3lCQUFBLEFBQUM7b0JBQ2hFLGlCQUFpQjtpQkFDaEIsQ0FDRDthQUNMO1NBQ0c7OztXQXZHQyxPQUFPO0dBQVMsbUJBQU0sU0FBUzs7QUF3R3BDLENBQUM7QUFDRixPQUFPLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHO0FBQ2hCLFVBQU0sRUFBRSxnQkFBUyxLQUFLLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQztBQUNuRCxlQUFPLG1CQUFNLFNBQVMsQ0FBQyxPQUFPLENBQzFCLG1CQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDekIsZUFBRyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN0QyxpQkFBSyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN4QyxrQkFBTSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN6QyxlQUFHLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDM0Isa0JBQU0sRUFBRSxtQkFBTSxTQUFTLENBQUMsS0FBSztBQUM3QixpQkFBSyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FDTCxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQy9CO0FBQ0QsZ0JBQVksRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUNsQyxRQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07Q0FDL0IsQ0FBQztBQUNGLE9BQU8sQ0FBQyxZQUFZLEdBQUc7QUFDbkIsUUFBSSxFQUFFLENBQUM7Q0FDVixDQUFBOztBQUVELElBQU0sS0FBSyxHQUFHO0FBQ1gsV0FBTyxFQUFFLE9BQU87QUFDaEIsVUFBTSxFQUFFLENBQUM7QUFDVCxtQkFBZSxFQUFDLFNBQVM7QUFDekIsU0FBSyxFQUFFLE1BQU07Q0FDZixDQUFBOztxQkFFYyxPQUFPIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcblx0c3VwZXIoKTtcblx0dGhpcy5zdGF0ZSA9IHtcblx0ICAgIGNvbnRhaW5lcldpZHRoOiAwXG5cdH07XG5cdHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblx0dGhpcy5zZXRTdGF0ZSh7Y29udGFpbmVyV2lkdGg6IE1hdGguZmxvb3IodGhpcy5fZ2FsbGVyeS5jbGllbnRXaWR0aCl9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcblx0aWYgKHRoaXMuX2dhbGxlcnkuY2xpZW50V2lkdGggIT09IHRoaXMuc3RhdGUuY29udGFpbmVyV2lkdGgpe1xuXHQgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGFpbmVyV2lkdGg6IE1hdGguZmxvb3IodGhpcy5fZ2FsbGVyeS5jbGllbnRXaWR0aCl9KTtcblx0fVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuXHQgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplLCBmYWxzZSk7XG4gICAgfVxuICAgIGhhbmRsZVJlc2l6ZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGFpbmVyV2lkdGg6IE1hdGguZmxvb3IodGhpcy5fZ2FsbGVyeS5jbGllbnRXaWR0aCl9KTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHZhciBjb2xzID0gdGhpcy5wcm9wcy5jb2xzLFxuICAgICAgICAgICAgcGhvdG9QcmV2aWV3Tm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIGNvbnRXaWR0aCA9IHRoaXMuc3RhdGUuY29udGFpbmVyV2lkdGggLSAoY29scyAqIDQpOyAvKiA0cHggZm9yIG1hcmdpbiBhcm91bmQgZWFjaCBpbWFnZSovXG4gICAgICAgIGNvbnRXaWR0aCA9IE1hdGguZmxvb3IoY29udFdpZHRoKTsgLy8gYWRkIHNvbWUgcGFkZGluZyB0byBwcmV2ZW50IGxheW91dCBwcm9iXG4gICAgICAgIHZhciByZW1haW5kZXIgPSB0aGlzLnByb3BzLnBob3Rvcy5sZW5ndGggJSBjb2xzO1xuICAgICAgICBpZiAocmVtYWluZGVyKSB7IC8vIHRoZXJlIGFyZSBmZXdlciBwaG90b3MgdGhhbiBjb2xzIG51bSBpbiBsYXN0IHJvd1xuICAgICAgICAgIHZhciBsYXN0Um93V2lkdGggPSBNYXRoLmZsb29yKCAoKHRoaXMuc3RhdGUuY29udGFpbmVyV2lkdGggLyBjb2xzKSAqIHJlbWFpbmRlcikgLSAocmVtYWluZGVyICogNCkgKTtcbiAgICAgICAgICB2YXIgbGFzdFJvd0luZGV4ID0gdGhpcy5wcm9wcy5waG90b3MubGVuZ3RoIC0gcmVtYWluZGVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxvb3AgdGhydSBlYWNoIHNldCBvZiAgY29scyBudW1cbiAgICAgICAgLy8gZWcuIGlmIGNvbHMgaXMgMyBpdCB3aWxsICBsb29wIHRocnUgMCwxLDIsIHRoZW4gMyw0LDUgdG8gcGVyZm9ybSBjYWxjdWxhdGlvbnMgZm9yIHRoZSBwYXJ0aWN1bGFyIHNldFxuICAgICAgICBmb3IgKHZhciBpPTA7aTx0aGlzLnByb3BzLnBob3Rvcy5sZW5ndGg7aSs9Y29scyl7XG4gICAgICAgICAgICB2YXIgdG90YWxBcj0wLFxuICAgICAgICAgICAgY29tbW9uSGVpZ2h0ID0gMDtcblxuXHQgICAgLy8gZ2V0IHRoZSB0b3RhbCBhc3BlY3QgcmF0aW8gb2YgdGhlIHJvd1xuICAgICAgICAgICAgZm9yICh2YXIgaj1pOyBqPGkrY29sczsgaisrKXtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSB0aGlzLnByb3BzLnBob3Rvcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cdFx0dGhpcy5wcm9wcy5waG90b3Nbal0uYXNwZWN0UmF0aW8gPSB0aGlzLnByb3BzLnBob3Rvc1tqXS53aWR0aCAvIHRoaXMucHJvcHMucGhvdG9zW2pdLmhlaWdodDtcdFxuXHRcdHRvdGFsQXIgKz0gdGhpcy5wcm9wcy5waG90b3Nbal0uYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PT0gbGFzdFJvd0luZGV4KSB7XG4gICAgICAgICAgICAgIGNvbW1vbkhlaWdodCA9IGxhc3RSb3dXaWR0aCAvIHRvdGFsQXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb21tb25IZWlnaHQgPSBjb250V2lkdGggLyB0b3RhbEFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcnVuIHRocnUgdGhlIHNhbWUgc2V0IG9mIGl0ZW1zIGFnYWluIHRvIGdpdmUgdGhlIHdpZHRoIGFuZCBjb21tb24gaGVpZ2h0XG4gICAgICAgICAgICBmb3IgKGxldCBrPWk7IGs8aStjb2xzOyBrKyspe1xuICAgICAgICAgICAgICAgIGlmIChrID09IHRoaXMucHJvcHMucGhvdG9zLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXHRcdGxldCBzcmMgPSB0aGlzLnByb3BzLnBob3Rvc1trXS5zcmMsIHNyY3NldCwgc2l6ZXM7XG5cdFx0aWYgKHRoaXMucHJvcHMucGhvdG9zW2tdLnNyY3NldCl7XG5cdFx0ICAgIHNyY3NldCA9IHRoaXMucHJvcHMucGhvdG9zW2tdLnNyY3NldC5qb2luKCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnByb3BzLnBob3Rvc1trXS5zaXplcyl7XG5cdFx0ICAgIHNpemVzID0gdGhpcy5wcm9wcy5waG90b3Nba10uc2l6ZXMuam9pbigpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLm9uQ2xpY2tQaG90byl7XG5cdFx0ICAgIHBob3RvUHJldmlld05vZGVzLnB1c2goXG5cdFx0XHQgPGRpdiBrZXk9e2t9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e2t9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2tQaG90byhrLCBlKX0+XG5cdFx0XHRcdDxpbWcgc3JjPXtzcmN9IHNyY1NldD17c3Jjc2V0fSBzaXplcz17c2l6ZXN9IHN0eWxlPXt7ZGlzcGxheTonYmxvY2snLCBib3JkZXI6MH19IGhlaWdodD17Y29tbW9uSGVpZ2h0fSB3aWR0aD17Y29tbW9uSGVpZ2h0ICogdGhpcy5wcm9wcy5waG90b3Nba10uYXNwZWN0UmF0aW99IGFsdD17dGhpcy5wcm9wcy5waG90b3Nba10uYWx0fSAvPlxuXHRcdFx0ICAgIDwvYT5cblx0XHRcdCA8L2Rpdj5cblx0XHQgICAgKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHQgICAgcGhvdG9QcmV2aWV3Tm9kZXMucHVzaChcblx0XHRcdCA8ZGl2IGtleT17a30gc3R5bGU9e3N0eWxlfT5cblx0XHRcdCAgICA8aW1nIHNyYz17c3JjfSBzcmNTZXQ9e3NyY3NldH0gc2l6ZXM9e3NpemVzfSBzdHlsZT17e2Rpc3BsYXk6J2Jsb2NrJywgYm9yZGVyOjB9fSBoZWlnaHQ9e2NvbW1vbkhlaWdodH0gd2lkdGg9e2NvbW1vbkhlaWdodCAqIHRoaXMucHJvcHMucGhvdG9zW2tdLmFzcGVjdFJhdGlvfSBhbHQ9e3RoaXMucHJvcHMucGhvdG9zW2tdLmFsdH0gLz5cblx0XHRcdCA8L2Rpdj5cblx0XHQgICAgKTtcblx0XHR9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0cmV0dXJuKFxuXHQgICAgdGhpcy5yZW5kZXJHYWxsZXJ5KHBob3RvUHJldmlld05vZGVzKVxuICAgICAgICApO1xuICAgIH1cbiAgICByZW5kZXJHYWxsZXJ5KHBob3RvUHJldmlld05vZGVzKXtcblx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZUxpZ2h0Ym94KXtcblx0ICAgIHJldHVybihcblx0XHQ8ZGl2IGlkPVwiR2FsbGVyeVwiIGNsYXNzTmFtZT1cImNsZWFyZml4XCIgcmVmPXsoYykgPT4gdGhpcy5fZ2FsbGVyeSA9IGN9PlxuXHRcdCAgICB7cGhvdG9QcmV2aWV3Tm9kZXN9XG5cdFx0PC9kaXY+XG5cdCAgICApO1xuXHR9XG5cdGVsc2V7XG5cdCAgICByZXR1cm4oXG5cdFx0PGRpdiBpZD1cIkdhbGxlcnlcIiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiIHJlZj17KGMpID0+IHRoaXMuX2dhbGxlcnkgPSBjfT5cblx0XHQgICAge3Bob3RvUHJldmlld05vZGVzfVxuXHRcdDwvZGl2PlxuXHQgICAgKTtcblx0fVxuICAgIH1cbn07XG5HYWxsZXJ5LmRpc3BsYXlOYW1lID0gJ0dhbGxlcnknO1xuR2FsbGVyeS5wcm9wVHlwZXMgPSB7XG4gICAgcGhvdG9zOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpe1xuXHRyZXR1cm4gUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoXG5cdCAgICBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuXHRcdHNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0aGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdFx0YWx0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHRcdHNyY3NldDogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuXHRcdHNpemVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlcblx0ICAgIH0pXG5cdCkuaXNSZXF1aXJlZC5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBvbkNsaWNrUGhvdG86IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNvbHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5HYWxsZXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xzOiAzXG59XG4vLyBHYWxsZXJ5IGltYWdlIHN0eWxlXG5jb25zdCBzdHlsZSA9IHtcbiAgIGRpc3BsYXk6ICdibG9jaycsXG4gICBtYXJnaW46IDIsXG4gICBiYWNrZ3JvdW5kQ29sb3I6JyNlM2UzZTMnLFxuICAgZmxvYXQ6ICdsZWZ0J1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl19