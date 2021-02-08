module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		21: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+ZGN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFBMTIwODNDRkFCMTFFOUE5RjdDRUZCOTc4RDMzQ0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFBMTIwODJDRkFCMTFFOUE5RjdDRUZCOTc4RDMzQ0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ycCA1AAAA+ElEQVR42qSTvQ7BYBSGv3YRYiQGJG5AwtBZuRBxA0azmI1uQFxI6dxBEzcgwSCMQiziOcmpdEBbTvL0JO37nu/nnFomFtXG2CY50IIa5OEGewghOGwnj0hvxYwV0gDKIIIdXKAIdZDCJ5hT4Pgyq3EIOfDBQ3CNFS6QetCBO8ykgKVbHUEJFrzcmA+Btknqwxmm0Rllq/43o4R+91XviLmtZ/RMuvBU3xJzVS4nfsaE1a96mTVb23Ex2UL0eVv7WMxoFv1NzAfpo7YjMVQnfd+Lea0D0E25alf1oTwCnRxX+2gS+uyqPng3YStYppqwv2f717/qKcAAAANl1ADqJKUAAAAASUVORK5CYII="

/***/ }),

/***/ "+mC9":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/experience-f46e43b2acc7466f4d0cb7f1cf29e26d.png";

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Yqi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("X1+5");


/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4s6J":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAFyBAMAAAB1l9JSAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFmElEQVR4nO3Zy2/bRhDA4SFFijxqVb+OYpIiPkpN0/ZIJUaao6WiPktoAOcouYDPVnrpn9198SGTitIALtng9wEWVyYXmMFyZ5eUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6LbrI/8s9dcJ+Nf/6Kbv+9gRo9bi6UUt99pssnfV5dNv59rFsHdlVyvjk0savVwR6JPa82IrEqjI5360JWJeebCxvl6cEec5fPxaPkjnXrQKzK5HwzVerl1Z1SD4e6zNRp/utajfeTO9qtA/MqOd8cqjP9uT54g0VK5TavzV5yx7p1YVYl55s7dSIm05MDPRJ3663VVKK/na26PtqtA6kq51zRnOmoTeU8NHsGLv6tmpT/Wp8d79aBUG2L5IpmZqdNaubUgS4rc5hXhSgx6R7r1oHFWVAE6ZuRDy8zM8sI3eK1K264wA6RBFVyb/Rd2ejWvUhdFEEWzcQvxDOzkBmJLSB6jl2774FrzKvbcjZu6da9gZoWyRXN2M+aRZGMHoxp/X6Lf8/NYVvWxdQteY+7dW6n8iK5ojlQ5/b71t199syFuTnP97uWI6lPTdu6dS47LedO0RyaVMSktPIX2RWsXhyNWJWTa2tazW5di3XEPrmyGZZRTvxVkdl2ZPtbj/fraiQzM9ua3bo21xH75Mpm6KtivWCoVWL3H4XUb5wtuxC0devY7Kws6WUzKKMsS/1cXYR7Ow+TXDlwQ3sjtnTrVmoCCvxu+aRMzkVXW8diNV7s1Qk7cj/6Lzt7w7Z061ZoCp6Lpmq2RZkptbc22+TG/j/rcf3y3iS3MGG5aKpm2/21bTynvV8Wz6WpO9W32zKy88bvucpmW2UIVaNMRGtfHv0+um8FpagEo71mW01PVHNT9cbvtwI3gn1bCmqVoNZsW40HLe9GYr84bN1OpW+L+LZ8jj6pNdv2UTvlQ68pNpszV2r6tv1qT65tB7xWtce0317Zg9632KMfwL5tnNuTK55d1tU009uTrPo2c0mJS86/dJCWbp1qT67lqVMXi9q+eeFO+Ot8sezjw6rsrbrBgdcM+tEtrBa6rRsbv9sMiqx7+JqhJbniTU/5ZjzScSfVFmXuSsbQpVtWx0a3Pmgk13hHZ4v+uqyCoXoh4h9hawWkh6/2WpJrvF2dmzTK90N+gUszd8G6eM7r40vZZnKN9+IzE/CwfKDTa8Dtw/uZv6C8Xfv4Or2Z3ONfNFIbf1qF7c67C6KqgPTwh5CW5B79FjV0NWJWe6di2bmWVk/offwJq5mc+dGgVvT8bJtXz97mvHppm3FtqPa79VX0k/rs77/RTfvPxke6AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCXC/zfN+kbSE6Nfzxw5lFyI/0tUErJWCQcma/a2+xW5J36IMFEJHvaSL/CKHp14ExLcvbz7EHufXLR9/lf+uNqmQcfJVk/fbT/0kjeyA/PJcwT3YifTSVYjsxh8GyhzwbL5zLc6DO15M5XcuuTG1y7j3ga3Mtw22UerXRy8Yd314PNXP6Um6vXEnywh5srMxCBPpVO5LXUkhtdphOfXJi7j2gShA+f+jdB9W0Z5tEknS43v8gLPUZBbg8vZK7PBvqU3Oo/PTnNfLPJ3Q83Prmg+BgFyeq2f8npgmIHZHK5mpgETKzmMCrm3Eg+DTZSH7nwTpojJy8n/UtuZKIzw7P6uNLDZTMwh9rIhUt/oU8uPpXmnJPFdS+TM3NOlpu7a7nP35oMzKGac5Kc+wt9cvaL/axVS+njomiC1NVSdvk8lyS7NCGaQ1UtJZn4C+vJuVv3rSrWOeljcl9guOk6gid013UATyi47DoCAMD/zD/iVdXhli1RzwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6FUu":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape2-da90972d30f0de42587285db6090b93a.png";

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8XMI":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTQ5Ljg5MSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBFOTJCIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZBOCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoMTMyIDgxLjYyNyAxNjYuMTY0KSIgZD0iTTIgMzIzbDEwLjU5OCAxM0wyMyAzMjN6IiBzdHJva2U9InVybCgjYSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjY1OSIvPjwvc3ZnPg=="

/***/ }),

/***/ "8fC8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/case-studies-2-2785d41562d2576810dfac8ad96ef9a4.jpg";

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Cc5c":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-d78e6355605cf2d2e92506c9873489e6.png";

/***/ }),

/***/ "FaDq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape1-be69cb10518caacee473e269e65be94c.png";

/***/ }),

/***/ "FmRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0Yqi");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class NavbarStyleTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      searchForm: false
    });

    _defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      id: "navbar",
      className: "navbar-area fixed-top navbar-two"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md"
    }, __jsx("div", {
      className: "container"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: __webpack_require__("Cc5c"),
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "icon-bar top-bar"
    }), __jsx("span", {
      className: "icon-bar middle-bar"
    }), __jsx("span", {
      className: "icon-bar bottom-bar"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "#",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home One"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Two"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index3",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Three"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index4",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Four"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index5",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Five "))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index6",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Six"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index7",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Seven"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/index8",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home Eight"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/about",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "About"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "#",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Services ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/services",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Services Style One"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/services2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Services Style Two"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/service-details",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Service Details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Projects ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/projects",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Projects Style One"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/projects2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Projects Style Two"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/project-details",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Project Details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pages ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/team",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Team"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/pricing",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pricing"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/faq",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "FAQ"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "User ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/signin",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Sign In"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/signup",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Sign Up"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/error",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "404 Error Page"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/coming-soon",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Coming Soon"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/terms-conditions",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Terms & Conditions"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/privacy-policy",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Privacy Policy"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/blog",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog Grid"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/blog2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog Right Sidebar"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/blog-details",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog Details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/contact",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact")))), __jsx("div", {
      className: "others-options"
    }, __jsx("div", {
      className: "option-item"
    }, __jsx("i", {
      onClick: this.handleSearchForm,
      className: "search-btn flaticon-search",
      style: {
        display: this.state.searchForm ? 'none' : 'block'
      }
    }), __jsx("i", {
      onClick: this.handleSearchForm,
      className: `close-btn flaticon-cancel ${this.state.searchForm ? 'active' : ''}`
    }), __jsx("div", {
      className: "search-overlay search-popup",
      style: {
        display: this.state.searchForm ? 'block' : 'none'
      }
    }, __jsx("div", {
      className: "search-box"
    }, __jsx("form", {
      className: "search-form"
    }, __jsx("input", {
      className: "search-input",
      name: "search",
      placeholder: "Search",
      type: "text"
    }), __jsx("button", {
      className: "search-button",
      type: "submit"
    }, __jsx("i", {
      className: "flaticon-search"
    })))))), __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      href: "/signin"
    }, __jsx("a", {
      className: "default-btn"
    }, "Sign In"))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (NavbarStyleTwo);

/***/ }),

/***/ "GgTj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uQVn");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class FaqsContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "faq-section"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Frequently ", __jsx("span", null, "Asked"), " Questions"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."), __jsx("div", {
      className: "bar"
    })), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "faq-accordion"
    }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "What access do I have on the free plan?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "What access do I have on a free trial?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Does the price go up as my team gets larger?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "How can I cancel my subscription?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"], null, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"], null, "Can I pay via an Invoice?")), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "faq-image"
    }, __jsx("img", {
      src: __webpack_require__("u3Ed"),
      alt: "image"
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FaqsContent);

/***/ }),

/***/ "HCcI":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/main-img7-3f3fcd420ecd40c017b9bcac170e5ecf.png";

/***/ }),

/***/ "Hk3F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class TeamStyleOne extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "team-section pt-100 pb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our Expert Team"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."), __jsx("div", {
      className: "bar"
    })), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-team"
    }, __jsx("div", {
      className: "image"
    }, __jsx("img", {
      src: __webpack_require__("pS2V"),
      alt: "image"
    })), __jsx("div", {
      className: "content"
    }, __jsx("h3", null, "David Jon Korola"), __jsx("span", null, "Web Developer"), __jsx("ul", {
      className: "social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-twitter"
    })))))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-team"
    }, __jsx("div", {
      className: "image"
    }, __jsx("img", {
      src: __webpack_require__("nfT7"),
      alt: "image"
    })), __jsx("div", {
      className: "content"
    }, __jsx("h3", null, "Alex Maxwel"), __jsx("span", null, "Software Engineer"), __jsx("ul", {
      className: "social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-twitter"
    })))))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "single-team"
    }, __jsx("div", {
      className: "image"
    }, __jsx("img", {
      src: __webpack_require__("HmO6"),
      alt: "image"
    })), __jsx("div", {
      className: "content"
    }, __jsx("h3", null, "Louis Pasteur"), __jsx("span", null, "App Developer"), __jsx("ul", {
      className: "social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-twitter"
    })))))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (TeamStyleOne);

/***/ }),

/***/ "HmO6":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB6gFtAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKx77z77UDZxPsjRcuf8/WgDYorAaCfRpIpRNvhZsMOn6Vo6pdPbwKkX+tlO1aAL1FYL6TdQxG4W4JmA3EDOfz71rWU7XFnHIwwxGG+tAFiisKCC9vvNlS8dF8wgDeav2Npc28jNPctKCMAEk4/OgC9RRRQAUUUUAFFFYGsXLTSeWn+qiYBj6sc/4GgDfoqK5mFvbSSnnauceprFi0651BPtMtxtLcqCM/8A6qAN+is/TJpf3trcHMsJxn1FQX8k13fCxgfYoGZD/n/PNAGvRWD5U+jTxOZd8DnDdh+Vb1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVC6RwCW4WMb9pJPc4qaqsF6Jrue3KbWiPXOcigDIkvv7TuIYZNsMO7Jyc5P1qxqk4h1O2ZhuCKWC+p7fyFTa1FEbEyFVEikbT3+lRSjOoabJL/EgBJ9cf4mgCJrzVof38sX7rqV2jA/qK1orpJrP7QnTaTj0xUku3yX3/c2nd9KzdJkEOkvJJnYGJ6Z4oAo2cuoG1CWkeEUklsDk/jWnpt+9wzwTrtnTrxjNXLeSOWBZIvuN04xWc2P+EjXZ/zz+f8AL/8AVQBq1j3I/s7U0uVGIZuH9j/nn862KzNZlBgS2Vd0srDaPTnrQBGg/tPVTJ1t7fgehP8An+Va9ZejSBI5LV1CyxsSR6/5/wAK1KAKmoXRtrf5OZZDtQe9Z2oWwtNJhj6sZQWPqcGptSt7176Oa1TOxMAkrwcnsfwqhff2l5K/a/8AV7xj7vXB9PxoA29RjaTT5lXrtz+XNQWGoW32GNXlRGRQpDHHT+dPtpbmC0klv85U5GAOn4VENLsbvbcIHCvzhTgGgCKwuBca1cSJnYyce+MCpNP+bVL9zyQwXP4n/Ck09FOp3TxgCNAI1x0/zxS2R8rWbyJur/MP8/jQBLrK7tNkP90g/rj+tWrdt1rEx6lAf0qnrcgWw2d3YAD9avQoUgjQ9VUD9KAH0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZd9YXBuhdWb7ZCMMM4zWpRQBipp99eTK18+I1OduRz+XFX7+zF5bhFO11OUPoat0UAYRs9VnHkTS4i7ksDn8uTWvHbRx2otwP3e3aff1qaigDCFjqdozR2sm6InjkfyNXdOsHti807b536nOcCtCigAqhFZSnUnu52Q4GI1Uk4/wA/1q/RQBn3FjKdQju7dkDDhwxIz/kVoUUUAFU9StJLy3SOMqCHDfMfY/41cooAZLGs0Txt91hg1irZapbgwQSfuj0IYf15H4Vu0UAVrG0FnbCPO5icsfU1X1CwlmlS5tm2zpx1xmtGigDHgsLu4uUmv3ysfIXI5/LitiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKjWeFpDGsqFxwVDDP5VJVGKOWVcbUEazs27cS3Dk9McfnQBeoqhbyEyQ4ldpTnzkJJC8enbnAphuJowwBJEWYjnklj90/+g/99UAaVFZ9yXjkRDJiMRjDPKUy31wcnpUhV5ZbZXkYZiZm2MV3H5fx70AXKZJII1DHOCwXj3IH9aoiSX7XhnVX8zAUynJXPZcY6d6SV1LgPK4m+0KPL3HG3eMcemMHNAF+SQRqGOcFgvHuQP60+q1+QLQkkqN6cjqPmFMiHmidIZmMeBsfcThuc89+1AFyk3DcVyMgZIqvayPcHzmBVQNoXtnufz4/CkYSm+k8p0X90mdyFu7e4oAme4hjOJJo0OcfMwH+eooW4hZQyzRkFtoIYcn0+tVHDi01EOys3zZKjA/1Y7ZNS3kYlMCE4zIeR2+RuaALBdVZVLAM33QTyfpShgwyCCM44qiEla5t5Z1Cvv2gA542Nk/if6VJbXEKq0ZmjD+a42lhn757UAWmdUUs7BVHUk4FIkiSLuR1ZfUHIqvNJGZYpWOYVLgkjgMDjJ/IiiZkmtXMOHUsN2z+IZGfrxQBPHNFLny5EfHXawOKUSRtH5iupTGdwPH51WEkM1zCbcqxXO4r2XHQ/jjj2qC2gkNtBGB+4kRHY56ccj8ePzNAGirBlDKQQRkEd6WoLL/jxt/+uS/yqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKa6l0Kh2Qn+JcZH506igBqIscaoowqjAp1FFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z"

/***/ }),

/***/ "IuHH":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB4CAYAAAAE9le0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0RERjU0MDc3QzFGMTFFQTg5RTlERkIzREI3QUZGNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0RERjU0MDY3QzFGMTFFQTg5RTlERkIzREI3QUZGNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDREOTcwNjQ3QzBGMTFFQTk5MDI5NEE3ODYzQzU0QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDREOTcwNjU3QzBGMTFFQTk5MDI5NEE3ODYzQzU0QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZaLo7AAAJkklEQVR42uyd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"

/***/ }),

/***/ "J13o":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape9-34ae07556a0177d7ff6cfc174ff9a937.png";

/***/ }),

/***/ "OctE":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ps4L":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape6-4a6157be45e88d6c077d856fea788318.png";

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SBcq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tech-8ac2f806bb011f0bdb305bc1b46fc9ba.png";

/***/ }),

/***/ "Stbh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/case-studies-1-240f4cc17c0d66ff2bfe7928f800c3b5.jpg";

/***/ }),

/***/ "X1+5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/NavbarStyleTwo.js
var NavbarStyleTwo = __webpack_require__("FmRj");

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/HomeSeven/Banner.js
var __jsx = external_react_default.a.createElement;




class Banner_Banner extends external_react_["Component"] {
  render() {
    return __jsx("div", {
      className: "main-banner-area-seven"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container-fluid mt-50"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "main-banner-content"
    }, __jsx("span", null, "Digital Marketing"), __jsx("h1", null, "Digital Service With Excellent Quality"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing."), __jsx("div", {
      className: "banner-btn"
    }, __jsx(link_default.a, {
      href: "/contact"
    }, __jsx("a", {
      className: "default-btn"
    }, "Get Started"))))), __jsx("div", {
      className: "col-lg-6 pr-0"
    }, __jsx("div", {
      className: "banner-image"
    }, __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__("FaDq"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__("6FUu"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "fadeInLeft"
    }, __jsx("img", {
      src: __webpack_require__("tVdz"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__("x0a9"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "bounceIn"
    }, __jsx("img", {
      src: __webpack_require__("he7F"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "fadeInDown"
    }, __jsx("img", {
      src: __webpack_require__("Ps4L"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__("e1wa"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__("i/tm"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "rotateIn"
    }, __jsx("img", {
      src: __webpack_require__("J13o"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "fadeInUp"
    }, __jsx("img", {
      src: __webpack_require__("IuHH"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__("d5Nf"),
      alt: "image"
    })), __jsx(external_react_wow_default.a, {
      delay: ".1s",
      animation: "zoomIn"
    }, __jsx("img", {
      src: __webpack_require__("HCcI"),
      alt: "image"
    })))))))), __jsx("div", {
      className: "default-shape"
    }, __jsx("div", {
      className: "shape-1"
    }, __jsx("img", {
      src: __webpack_require__("+ZGN"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-2 rotateme"
    }, __jsx("img", {
      src: __webpack_require__("gSvT"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-3"
    }, __jsx("img", {
      src: __webpack_require__("8XMI"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-4"
    }, __jsx("img", {
      src: __webpack_require__("vDBV"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-5"
    }, __jsx("img", {
      src: __webpack_require__("kyF1"),
      alt: "image"
    }))));
  }

}

/* harmony default export */ var HomeSeven_Banner = (Banner_Banner);
// CONCATENATED MODULE: ./components/HomeSeven/Features.js
var Features_jsx = external_react_default.a.createElement;


class Features_Features extends external_react_["Component"] {
  render() {
    return Features_jsx("div", {
      className: "more-features-section pt-100 pb-70"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row"
    }, Features_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Features_jsx("div", {
      className: "more-features-content"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "flaticon-report"
    })), Features_jsx("h3", null, "SEO Consultancy"), Features_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), Features_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Features_jsx("div", {
      className: "more-features-content bg-f0fffc"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "flaticon-laptop"
    })), Features_jsx("h3", null, "Social Media Marketting"), Features_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), Features_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Features_jsx("div", {
      className: "more-features-content bg-fceee2"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "flaticon-software"
    })), Features_jsx("h3", null, "Competitor Analysis"), Features_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))), Features_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Features_jsx("div", {
      className: "more-features-content bg-fde2ee"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "flaticon-project-management"
    })), Features_jsx("h3", null, "Creative Idea"), Features_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."))))));
  }

}

/* harmony default export */ var HomeSeven_Features = (Features_Features);
// CONCATENATED MODULE: ./components/HomeSeven/AboutTech.js
var AboutTech_jsx = external_react_default.a.createElement;



class AboutTech_AboutTech extends external_react_["Component"] {
  render() {
    return AboutTech_jsx("section", {
      className: "tech-section ptb-100"
    }, AboutTech_jsx("div", {
      className: "container"
    }, AboutTech_jsx("div", {
      className: "row align-items-center"
    }, AboutTech_jsx("div", {
      className: "col-lg-6"
    }, AboutTech_jsx("div", {
      className: "tech-content"
    }, AboutTech_jsx("h3", null, "Awesome Things About Tech"), AboutTech_jsx("div", {
      className: "bar"
    }), AboutTech_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dood tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.typesetting, remaining essentially unchanged."), AboutTech_jsx("div", {
      className: "tech-btn"
    }, AboutTech_jsx(link_default.a, {
      href: "#"
    }, AboutTech_jsx("a", {
      className: "default-btn"
    }, "Discover More"))))), AboutTech_jsx("div", {
      className: "col-lg-6"
    }, AboutTech_jsx("div", {
      className: "tech-image"
    }, AboutTech_jsx("img", {
      src: __webpack_require__("SBcq"),
      alt: "image"
    }))))));
  }

}

/* harmony default export */ var HomeSeven_AboutTech = (AboutTech_AboutTech);
// CONCATENATED MODULE: ./components/HomeSeven/DigitalMarketing.js
var DigitalMarketing_jsx = external_react_default.a.createElement;



class DigitalMarketing_DigitalMarketing extends external_react_["Component"] {
  render() {
    return DigitalMarketing_jsx("section", {
      className: "digital-section ptb-100"
    }, DigitalMarketing_jsx("div", {
      className: "container"
    }, DigitalMarketing_jsx("div", {
      className: "row align-items-center"
    }, DigitalMarketing_jsx("div", {
      className: "col-lg-6"
    }, DigitalMarketing_jsx("div", {
      className: "digital-image"
    }, DigitalMarketing_jsx("img", {
      src: __webpack_require__("jEMA"),
      alt: "image"
    }))), DigitalMarketing_jsx("div", {
      className: "col-lg-6"
    }, DigitalMarketing_jsx("div", {
      className: "digital-content"
    }, DigitalMarketing_jsx("h3", null, "Digital ", DigitalMarketing_jsx("span", null, "Marketing")), DigitalMarketing_jsx("div", {
      className: "bar"
    }), DigitalMarketing_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices  Lorem Ipsum is simply dummy tex printing and typesetting industry. Lorem Ipsum has been the industry"), DigitalMarketing_jsx("ul", {
      className: "digital-list"
    }, DigitalMarketing_jsx("li", null, DigitalMarketing_jsx("i", {
      className: "flaticon-check"
    }), "SEO Marketing"), DigitalMarketing_jsx("li", null, DigitalMarketing_jsx("i", {
      className: "flaticon-check"
    }), "Email Marketing"), DigitalMarketing_jsx("li", null, DigitalMarketing_jsx("i", {
      className: "flaticon-check"
    }), "Youtube Marketing"), DigitalMarketing_jsx("li", null, DigitalMarketing_jsx("i", {
      className: "flaticon-check"
    }), "Social Marketing"), DigitalMarketing_jsx("li", null, DigitalMarketing_jsx("i", {
      className: "flaticon-check"
    }), "Facebook Marketing"), DigitalMarketing_jsx("li", null, DigitalMarketing_jsx("i", {
      className: "flaticon-check"
    }), "Page Ranking")), DigitalMarketing_jsx("div", {
      className: "digital-btn"
    }, DigitalMarketing_jsx(link_default.a, {
      href: "#"
    }, DigitalMarketing_jsx("a", {
      className: "default-btn"
    }, "Learn More"))))))));
  }

}

/* harmony default export */ var HomeSeven_DigitalMarketing = (DigitalMarketing_DigitalMarketing);
// CONCATENATED MODULE: ./components/HomeSeven/Services.js
var Services_jsx = external_react_default.a.createElement;



class Services_Services extends external_react_["Component"] {
  render() {
    return Services_jsx("section", {
      className: "agency-services-section pt-100 pb-70"
    }, Services_jsx("div", {
      className: "container"
    }, Services_jsx("div", {
      className: "section-title"
    }, Services_jsx("h2", null, "SEO  Agency ", Services_jsx("span", null, "Services")), Services_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."), Services_jsx("div", {
      className: "bar"
    })), Services_jsx("div", {
      className: "row"
    }, Services_jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, Services_jsx("div", {
      className: "single-agency"
    }, Services_jsx("div", {
      className: "image"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("img", {
      src: __webpack_require__("dcTg"),
      alt: "image"
    })))), Services_jsx("div", {
      className: "content"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("h3", null, "Creative Web Develop"))), Services_jsx("span", null, "Web Design")))), Services_jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, Services_jsx("div", {
      className: "single-agency"
    }, Services_jsx("div", {
      className: "image"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("img", {
      src: __webpack_require__("OctE"),
      alt: "image"
    })))), Services_jsx("div", {
      className: "content"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("h3", null, "Digital Services"))), Services_jsx("span", null, "Agency")))), Services_jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, Services_jsx("div", {
      className: "single-agency"
    }, Services_jsx("div", {
      className: "image"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("img", {
      src: __webpack_require__("flP+"),
      alt: "image"
    })))), Services_jsx("div", {
      className: "content"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("h3", null, "Complex Design"))), Services_jsx("span", null, "Solutions")))), Services_jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, Services_jsx("div", {
      className: "single-agency"
    }, Services_jsx("div", {
      className: "image"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("img", {
      src: __webpack_require__("4s6J"),
      alt: "image"
    })))), Services_jsx("div", {
      className: "content"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("h3", null, "Software Engineers"))), Services_jsx("span", null, "Analysis")))), Services_jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, Services_jsx("div", {
      className: "single-agency"
    }, Services_jsx("div", {
      className: "image"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("img", {
      src: __webpack_require__("fJzi"),
      alt: "image"
    })))), Services_jsx("div", {
      className: "content"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("h3", null, "Marketing Agency"))), Services_jsx("span", null, "Marketing")))), Services_jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, Services_jsx("div", {
      className: "single-agency"
    }, Services_jsx("div", {
      className: "image"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("img", {
      src: __webpack_require__("t6EI"),
      alt: "image"
    })))), Services_jsx("div", {
      className: "content"
    }, Services_jsx(link_default.a, {
      href: "/service-details"
    }, Services_jsx("a", null, Services_jsx("h3", null, "Data Analysis"))), Services_jsx("span", null, "Explanation")))))));
  }

}

/* harmony default export */ var HomeSeven_Services = (Services_Services);
// CONCATENATED MODULE: ./components/HomeSeven/WhyChooseUs.js
var WhyChooseUs_jsx = external_react_default.a.createElement;


class WhyChooseUs_WhyChooseUs extends external_react_["Component"] {
  render() {
    return WhyChooseUs_jsx("section", {
      className: "experience-section ptb-100"
    }, WhyChooseUs_jsx("div", {
      className: "container-fluid"
    }, WhyChooseUs_jsx("div", {
      className: "row align-items-center"
    }, WhyChooseUs_jsx("div", {
      className: "col-lg-6"
    }, WhyChooseUs_jsx("div", {
      className: "experience-inner-area"
    }, WhyChooseUs_jsx("div", {
      className: "experience-content"
    }, WhyChooseUs_jsx("h3", null, "Why Choose Us"), WhyChooseUs_jsx("div", {
      className: "bar"
    }), WhyChooseUs_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.")), WhyChooseUs_jsx("div", {
      className: "experience-inner-content"
    }, WhyChooseUs_jsx("div", {
      className: "icon"
    }, WhyChooseUs_jsx("i", {
      className: "flaticon-check"
    })), WhyChooseUs_jsx("h3", null, "First Working Process"), WhyChooseUs_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.")), WhyChooseUs_jsx("div", {
      className: "experience-inner-content"
    }, WhyChooseUs_jsx("div", {
      className: "icon"
    }, WhyChooseUs_jsx("i", {
      className: "flaticon-check"
    })), WhyChooseUs_jsx("h3", null, "Dedicated Team Member"), WhyChooseUs_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.")), WhyChooseUs_jsx("div", {
      className: "experience-inner-content"
    }, WhyChooseUs_jsx("div", {
      className: "icon"
    }, WhyChooseUs_jsx("i", {
      className: "flaticon-check"
    })), WhyChooseUs_jsx("h3", null, "24/7 Support"), WhyChooseUs_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.")))), WhyChooseUs_jsx("div", {
      className: "col-lg-6 pr-0"
    }, WhyChooseUs_jsx("div", {
      className: "experience-image"
    }, WhyChooseUs_jsx("img", {
      src: __webpack_require__("+mC9"),
      alt: "image"
    }))))));
  }

}

/* harmony default export */ var HomeSeven_WhyChooseUs = (WhyChooseUs_WhyChooseUs);
// EXTERNAL MODULE: ./components/Common/DigitalExperience.js
var DigitalExperience = __webpack_require__("mlNF");

// EXTERNAL MODULE: ./components/Common/TeamStyleOne.js
var TeamStyleOne = __webpack_require__("Hk3F");

// EXTERNAL MODULE: ./components/Faqs/FaqsContent.js
var FaqsContent = __webpack_require__("GgTj");

// EXTERNAL MODULE: ./components/Common/FeedbackStyleTwo.js
var FeedbackStyleTwo = __webpack_require__("sstd");

// EXTERNAL MODULE: ./components/Common/BlogPost.js
var BlogPost = __webpack_require__("azCz");

// EXTERNAL MODULE: ./components/Layout/Footer.js
var Footer = __webpack_require__("v6Hh");

// CONCATENATED MODULE: ./pages/index7.js
var index7_jsx = external_react_default.a.createElement;















class index7_Index7 extends external_react_["Component"] {
  render() {
    return index7_jsx(external_react_default.a.Fragment, null, index7_jsx(NavbarStyleTwo["a" /* default */], null), index7_jsx(HomeSeven_Banner, null), index7_jsx(HomeSeven_Features, null), index7_jsx(HomeSeven_AboutTech, null), index7_jsx(HomeSeven_DigitalMarketing, null), index7_jsx(HomeSeven_Services, null), index7_jsx(HomeSeven_WhyChooseUs, null), index7_jsx(DigitalExperience["a" /* default */], null), index7_jsx(TeamStyleOne["a" /* default */], null), index7_jsx("div", {
      className: "pb-100"
    }, index7_jsx(FaqsContent["a" /* default */], null)), index7_jsx(FeedbackStyleTwo["a" /* default */], null), index7_jsx(BlogPost["a" /* default */], null), index7_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var index7 = __webpack_exports__["default"] = (index7_Index7);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Zz5W":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tab-1557f54faa52ec8fcedd6e5312367bd0.png";

/***/ }),

/***/ "azCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BlogPost extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "blog-section pb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Case Studies"), __jsx("p", null, "We have the expertise in supporting business across industries"), __jsx("div", {
      className: "bar"
    })), __jsx("div", {
      className: "row landing-page-section"
    }, __jsx("div", {
      className: "col-lg-5 col-md-6"
    }, __jsx("div", {
      className: "single-blog"
    }, __jsx("div", {
      className: "image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("Stbh"),
      alt: "image",
      className: "image-custom-border"
    })))), __jsx("div", {
      className: "content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Last mile Rural Distribution & Logistics Company"))), __jsx("p", null, "Helped redraw strategies & execution plans for 10x growth")))), __jsx("div", {
      className: "col-lg-5 col-md-6"
    }, __jsx("div", {
      className: "single-blog"
    }, __jsx("div", {
      className: "image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("8fC8"),
      alt: "image",
      className: "image-custom-border"
    })))), __jsx("div", {
      className: "content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "AI Technology startup"))), __jsx("p", null, "Product ideas converted into Go To Market models \u2013 new Customer pipes")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "view-more"
    }, __jsx("button", {
      type: "button"
    }, "View More")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (BlogPost);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d5Nf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape11-7c49d5672d4642fa7007b0ff38e750ed.png";

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dcTg":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "e1wa":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape7-e6005e06ee826013c0744df6b39f1673.png";

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fJzi":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "flP+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gSvT":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "he7F":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJFOEE1NTM3QzFFMTFFQTlERERDOTE2NEQ1RjRCRDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJFOEE1NTI3QzFFMTFFQTlERERDOTE2NEQ1RjRCRDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU0NEVBQ0I3QzBGMTFFQUIyQkRBRTA5REVGNzkzODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU0NEVBQ0M3QzBGMTFFQUIyQkRBRTA5REVGNzkzODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VgOUPAAAbF0lEQVR42uxdCbAl1Vnuv7e7vDdvnQVmhmGTCFEpcEKcACKiJGWJQkgBoyGpEC1DGLBCBaESLUowqSTGoGSxJCYUZUiMEkEIoaQoxCGEJASHzQEjw0CFALO8eetdezv+53b37dOnl9t3e3Pvfeev6neX17f73j7f+f7v/89/TsPOnTslYWvHth1/ymeXl49cPT294YJX9/90T7/OI4tLvTbMMO1jNm065uE333jtxuWlxcm33vzZj3K54ucEsIR1bIqifHZycuK1gwcPvNuyTHAcR6rVqpphVG+cmpo9BCC/VwBLWGbTc8VTx9dNvkEIualaKef4/+P70uLikQ2apn5nZnb9bgEsYam2slKaOXbzcd8mjrW3tLK0mTJUqps0DHn+yNx569ZNlEFW/0QAS1isHbft5PvfevP1K0zTkNsD5HIRJOeOmdmNLxomOVcASxjHQLXjO/0sZbf5I4dOm5necLcAlrAIProHZ3VKAEsYb9D1AUB2BLCEhaO9HgCrcRQBLGE9xERPDiGAJSzRGQpgCeP5put2BeEKhfVDvJPuCEsAayT5ijjdR4UILQEsYb1X70K8C+uHK8QjCMYSNnjgFMAaSY1F4KiiSgBLWL9kmgDWSDJWD9INgrGEDSJlCWCNKGUJ8S5s4CK6Bjad7kq6BLBG04l1DSzHsQVjCes9YwlXOKImy/IVXWgstQe4EsAaJavXjV8rFIpL+PSf8/n8vKblT2v3GFpu7NHuSUtEhSNjY2PjjyKYflitViYcx4FarTZt28beqamZR9s5TqV05H0E1GsVVa93zFeyvlcAa8gNAXBLLperlsulC/iSFwqwxcX5CzQtV8Hmuj4zMIj5Fdsy8qqW+zEAZKYfAMW0LLjZNEpnCWANqS0uLhURUK87tnlzvV7Pp+1rmvUC4uO2fL6wv51zWGZ9R6VSvyRXGFtIBxRIqlb8MSG2rqrkr7rWiKJ50+3IkfncwsJCsR/H3rBx40EE1FaSMaFJ96vVqicqimJblvPFrOcpFPQH6tXyjKLl7pZlJZKgUhStXKmYOy2zsqNnwYeATrpt3brt+Y0bNy4hUywDyPuIBHsIgQdxux23y1CMHNuxPHY6u/62bcuqKl+n5/KHHUc6J/PnzPoH0N3+HjABH4C+27bN8UJB/ZdeXjdVQCdq6J6ecYj0hmnUL6rXqyc4jq2aprkO/7Wu0SQgnUmjcXx+XaONQHGwsQyQoYKM8BZuz6mKvLtUWvnH1F6tqIuSVe+YDY16bb2iyt9Hwf94tVI5P2Maw/ZCPqDaa2lp/vqJifGeX0MBrBCgip9wHPMWdE8aXvQz6oZzfiEvkwS/1Mhwe25MoR5HsnGTzFl8/su4vR+3r1J2QKBZ6L4MRVGXVE19+dDBAw/h517X9HzXLpaguEdQ/Yam6TVkoyt0Xb8/3Z2G2xyBSRn3GQGsPlitVt8yPj72o3q9spXVM7KsjUtdTiqgx7FtS6WbJCE7VaVjC4XCeQ1BbtR69htM08jpudy/63rulUq5fKqqKlbWQLAf11QWLFX8t2Kx+LplWVtjYDEA0xLaQjF1jyfrOb1eLI595Wh+lTULLHQd52PvLiNLXdrtgOugmYPivlIpX5PPj/00mlaQbJ+lelEQKFxhKLxWnrYsc3uGMH+oARe3ThZGttvCP1DuC7msKcbK5Qo3IKhMDNe3k+zFcEMLrjhGkmU4lZD+O/g1wVim5ZwwOTG+u1KpbGv3syBJw6WzWncKM6wihXjv7AfK8n05Xd3fEajQT/RTh6wCZ2Uhk778vpFlLE3TdjiEPGZbVr5jEUyk+gheGuA6T04wVkYbG1+3x7KsH3YDqkav05QNQy7g4Wi1+WgBC+A2muUul1bO7IVALebV23qx1tSAu0rhClu4vkOmaW5wiN070W+aE8OtsY5elDv0vdG2nS8DgENB1fP+7DjqUMeE8SBaFWANNWNhxHcJXqdd/crLOI4zim5QFlFhnDAfG7vZtu3fQVAdZxjGRsexJGFt5RugdUZiDQCrXC5vQft9BNOV6O5+ETdaagL4qOF7isBOGqrIUZM/AwssZKTLVVW9olgsno3gmg4Hf2CPqJtafY0FIK8JYKGru9WyrMvw6WZkpDy6OwLc3EmHELkXi4sJsGEHBqkvrD8Qvb5SqZwwPj7+xUKhcBCBdAOy0UlISXlaOktBRTwpQDU6FepEsFVGX0gUZP19y8vLKsP2MosxxyF7Rw5Y6O5O0TTt7tnZ2adrtdpHUDdNed+JUAQ1QNRAk4cqt5qTvi8qXzMasv/JU1NTdbzWX/IiXRKATCLFYn7PSAELGepbuq4/iSC5zJuo4Hig8dfQhIC2CbAUjv8XjNVm2gS3a5G9FunIRHAdVy+n0VdDVtKnp6dvpS6vXq+/F3vThDdLlzDAATYSbkxYYNwg/c6rUU80ouw1qSjyR0cqKsTo7ioU5n9RKpW2UEby9BOJE5Qkml8B7w3Hth1NQGTwre/AwshuEt3eA9hbfhXpWPcEZOMhjnnct6jro6CLi/xENNhDdQ+Kov3Mts1tvT5yX13hxMTE1QiqfaihdrigchmqKcoTfmwKgESaoecd3zwOA0XbMOwtAw8sBNEGdH2Poaa6jVYIBHKJQPA8lFcBWkWQBBpfZzlCtPcpK+GgpoddAw0sDGsvQpbaYxjG2QgwhRPmBF2j7jSqBpoRoMdeCROO/VvnuQpeAKtv4OpttWxPG2pqaupvNE37JoJqE8dMDgUT6qwcZSUKOAowyVs/IF5nMaAK0gzCDfYruCrkr0dCePvAAWvdunWPlMvlXXQYRnJzUs1zWPiex14hkOC+dCBZ9VmNeC6xCaJIZCisj6mIdUgIT+Tz+RsHAli6rk8WCoVnqtXqeVziktDUAH5hLS0TRz9D2csT836aHYLEA2nqANH8/dVZqIcnsS3+Er3O7UcVWKqqnoRf4jn8Qr8UxgpREFD5dsBAXaVbsRnLUI7Itq8GuAgFVwHbYhd6oO8cFWChSD8L2eoH9Xp9M6OlGqDy3FsnPwwaAHNBRJjeJJKiq5qCsJVSqXQpaq7dqwosbPyzcrncgwiqWQYAvjaSe9FzKEAZoAl9tfrsBZVK5VwE18OrAixE88ljY2MPoNCb9iM6wqQGSA9/GAWXaOKjZ3TwGrXzbxaLxaf6CqxarbYBEfwogmq2CSp3dBi88haQxPjwyBl6pjMxQHusL8BCUI3PzMx8H0G1mYKKK28JOEvYSBq2+znoqb7cc2CtX7/+ETz4SY3qMCJxgBI26pKLtjcy14eRuXb1DFgTExNfR8Y6MzgJafEdhI2WkG9G/DSh/RkE1zu7Bha6vQ+igNtJ9yVuyXDSyQWDjS6o2LHeAj7e2xWwMNyc1HX9CxSpUjBNDWI4CmK+hLAhN3dNeAIenzTBRScKI2s90DGwNm7ceB8t1JOaVcEkHlQBiQlQjYiBLDthXUPY1f/AsqwLi8XiH7QNLFVVr0GxtoMZrUsBldBVo8ZU4BYShBdpCx4ITVzj9rflcrmYGVhIdToC68/pNCtI0FUBepn0qADYcLMUyDaCyorzPsyk4WaDm6Y5g17tHzIDa/369Xci1a0PZFPExQGr7ISNAqj8hHejdCnS1klNjeC6BHX4qS2BhfR2fK1W+90APNHvQEjSmUDMzBoBjCXEh97tg8JG6+80Tft6S2ChIPsCgqsYQCqkrRLGAt1ZN45ja2IWzUiAKpa1kkCHrHU6Auy3EoGFTEUXl//tgP5IjPuLy3U4Cl8hKmxYjSSRCIS1dYi1cpOTk59JBNb09PTHcSeGrbiJpCRyct//CZYaDVARicsvcP9PLDLAgO801GlTSa7wothTpH8VAaoRBhiJ11p8xEjTD3o+n78jAizUVrswEpxitJUUr61IGsqFjZ5LbBVNeiggMj4/FzFUDAELBdgH/MK62KEZkiz0RCOMnnhn251k8FTeytXTdCXGJrDQP65XFOXE9sJPYWuXteL9F7pDDUX8ZSxjXYiifSLpSMLXrXFwkRR9TSKstb0JLETZRan15USw2Bp2iywESAIogEk9TKD3e1tjmhb6xTPCu5OsCBMAGwFKilvmoAuTc7nclaon3I8Rfm9NkRHhFqJucb9Pb6EgiE9MsMeiOU2MDM+Wx8fHL8EXOSnLXQwES40GrCBzkAZZ2p7P0COeNlPaugwAQIBHWAcxYqxyQo01JRuGcXrKkAwRseHaFewxUCD8G4w8A+Z9XUZ/OCsYSlhnhBX/f5phkD19xVQIkmz0J2ztsVnyemU8JlTZq2ZIrRIUJtxjVPSD/zrxFmOt3CARen60Ug2dRZKZ278xa1rl32jnw8ItjkyqoWtAeYBoTrSQW/lMEFkIYR2Ie1lRlJr/j9bgFAS1lqiNY6u2Gp8WZ1FgOZ0iFECw2EjqdZKt/RPcJ52fKJe93APv7kinflnYSASBHbspBJZFh3T2+XcyTTkIEeAaBe8GmZOcbUaW7NANNICFT55kXWEDQNHp1B64BLo6aKxhEd5x6U/SZnTp3lBSlkvyvn37Po/P7Sj6ICtVClANaeQWfS+TWG/JeoZhLMgzMzMVVVXnAyEOPCKJANdIM1W89Gn/88TNxgNBxnq2kcfSNO0VrsKBJAh5Iq3xTDx3Z9hhVOZEarU0ELTMRCTob9Koe8cn9zWAZVnWf8VcLO8DabVdQASghua7O1nFOSQzU6rOpqod2aqG9lADWAsLC48pilLNQpXpLlK4vQH87hlzlNCiXYGnKjaP6a7Bh15P1/XXGgKe/sEXT6LOOujeBDwCJNKKCkcUT6TXLLWaAGVYqr0xXUgCVVR38WCh51teXv6PJrCo2bb9uOyuOxn3gWiGPSimIO4iqMPr3hK2oXWpHEu1Barsop1nOCIjOZURR98IAWtxcfFmb3gnyZeGVrAJyy+gNxU20cM6QwKpo85E/QAXA9p2axhafYJkVPevoKT63xCwcrncAdxeZNfE4teddN0id1MKYD2HxK5hOcDubbQCAsbtdRAkhsgiRva4BX2QmGJo7mdiENi8gWZoGSPHcb7EuLX4lAMk4rY5w4yCaxDd46COHHQDMAZQkDFHlZmwYob5iF85GlxKt8k1TZszTfNbscCam5u7F1nrVeb9yP28wE9DMMlUKT4tQbWXOSKJxIGLPjlxzoIp4/LVwMORZOmEfFbABRnY9Xr9a+x+IWDl83kDd/hrBIQRPn00x+WBjuI3QqlcasOCIRX3ffPH7m34mlu77JXAUs3yFO9GonLGm5KSFFAljRWzd9SVdV0/gKL9U4nAomYYxj+hun85RJAxqIb0L0k4kFP2sjrTAWsHaG0ALMJSDJjaKS8nKXKBcGmXWNag7YqgupP/Xyyia7Xan9LKUo/mXD5q/EjgwZVGvaTzZJ0AGNuo6R/JzEyhqJjVVjHTcNgIjiTpVRroobZ6DfHyqUzAQgQ+USwWH5FiRqQZcIXYi56nETXC2ryVYVZ9lIVR2H2S9vdAKLfZeQkPKrZdIUIIQCCG5Xz2QvIxFhcXr4s7USLSDx069EeIxsONbLx/MIjzx2HcceKe9KpB1howk4CTBDYKKLrxnwm/hngdA3FzBCNpGcIlygkGeg8hRv6zLWChzlpG+wSN7JpRHkCYSpMTZ01x34q90EuvFXFPWrGVBw7SJiAdn6VSXCLwndyvufOljhRfl0WStBfi460DBw4k3m011Tcj1d09Njb2CHOmuASjR48+cwGbegvYK21U3Mt9jbIGy5hDgywAY4adnIyIDi0oBFFfyIOKpIwHA9XfCKyPolw60hGwqM3Pz1+K4eQrfG9IHFMDKTIKDv7GXSwWpMS/oC7ARtE9tvObwOvETpy79Jgv6zBLNA8VZNPjAi/Cub5QG9OcFbrAO1ZWVh5OO0+maAIF2iXoSxeD6gcgUqRGx32PizAIEw4Dvccd35Mcd+1TAmxsArI9jOzVRfactIr2vH1IvHZKB653p9SmR4H4/UNtGndM2s6IgyeWlpZuavWbMgELaW9fqVT6uFezBXHRIeMGKUgaG13OBiNMnW4UVHEagziO7N5U0ab/V6AZiLpVE4PMXnyis4tbvxA+JxUT6RE+6vP28/UTxF0rL03kj/EmpYeY4TtIzKEhqF4tl8vvyfKDMuc/sJG/aRjGLfhYT16Ey9MSQFMWls4zVJaGQoAphDiyLzY992iPgntMaHi2ZgoSQMV/xg6D21EkN9UT0mauVmsERhAmgHim86RwbNIUyeXw3Nzc5Znx0s6FQaDcbprm3yNzWUEPiUQQjm1Zejc3bnLdgANh2dYtuHqeWyNZS7PZMT0WKMxzEpc1T5ED4AGGZX7F/4xfBJCh0C9gKlbOQLgjYHsvoxzaWSgUXugLsLzk6SfxAnxDlqk8olP0mTEk7Em27ei9uBuYu+48MDcLot5VdroCGECv7jPMlhGRjKgmcSmCOL2UNeLjrwUFFwnCvfBICUQGkEng+rxb1Tf3c90hbUdkqhIK9Q+hYP9BOxdI7uSq1uv1XXjiexSl0WtkPw0hN76MI/eOEoLopyk5Xb62vcbpNjprY+ZvvD7xOhZp5eITzgdpeipjZwmDFDUrdY3AZa0h0qGa7ESYJKmfq2wwKGqqBaqpEFwPtXuROwZBrVa7CinyLjaBKnW2uEirpE5UGLh1FXguaCs1AVJMoWIKewUpldZgbTeKTXB9draOEUnbOGyS2YvAFf/SJSZAIaAybiyYToo4hATyh9i+/91J23XFLojma5EiP42IrnV7rBbKiEgBXZPm1XIvjA0NF5kRYAlDmX44z9a98/mfVgzJu7gUrRRXyWBLaWWU/A1OoclERGIqSHhwcakh/7ONawjNZKg7Juj9PAqqNxFU70Jd81in7dY1GJaWlj6HP+hqZK8FqT+jzwTYzhViniCu8NwjaamLwnm20ESRLK414z4Ou8XkqIADnRMPKmDFEduh/Jwh4UW4oqgGl0iVuPpxL/HpukGu7JimFP4HQXWWZVk/76bResIypVLpX1HgXYxRw/5eYgs4Nwg8i7NPSEOFUnDFAKw5yAosaXVaqtxdiTOkvBmiU8K8JGynAokpsPQ6hg8W/mZbTXfY7EDhRDbTqex8Pv899ELvwMj/SLdt1zP3he7wJ4uLC9vHx8ef7lXOp+EeSFM8x4KLQQo7EmAFPZMmWltqMdJncCXOHOeSnGFQSQEzhYZfIKg7DxVv4afcPCCBpKx6k/SY64HeplQsFm9dXl5+X8/w0GNFZK2sLL9T03LPWlbqHS9agkp2c2V+wg686wb+rT2Jjyj/NaeiGCEMLToQP3wB7YCLkCy3ePT1UXwpDL1OCH76U0iMQyQxzBtzHpAcx9L4Y6NL0xRVNWVaUiOFJkg08pB05nK1Wr0ctxd6iYS+CG7TrJ+Rz4/fKctKR/PtsAeZEBNhgqszWH1B+F7NjalBC0CRlPcz5brC5SSh4ZOQa2uo65RKT+YuWv5vYfJlTVfXEcuSRoQYSs/QkmIT9dQ9KGNOQ5H+Qq8x0BdgUatWV/64Wq2dXCiu24NRW6vJAQ1AoTs1caszaYvIYChfyxo/sTaRjTpxfSRlYyLKTKKetIhRWIqPFNZJbZaCR9OC7jnwGv8cAXUx6qkP9qv9VamPlstpr1YrK9tzudwUUu73DMM402oM97iokD0d5c6gJk2dwOGFClKpWVZBfBfkpLkkEpfx7iKRmsR+oXE23itG18FoVHjG3smWLm/g/4YWnSU2gUtdqeNAWjEhnQJfwmPfX6lUPozP+9n0/WMs1jB8XcSo8Ryk3GtQ3P+frmtVXdOq6PtrfklHyH8B5+aYEpwgTI7UCbXqxa1cWxZGIOkJ1fAWB4BWidQEhkr5vuDXw1AmMhICKxM79hOGUb+Agmo12nxVgMUIybv279//KwimO+g6lZJXagJesg4kv64eWglsSWKSe1LswnDhBgh0CpBIBNYZq2WcFBoqV5FS1rdgfwtJOE6owLL5PNBiVJ/aYVDpFdu2fh1d34W27Ty3Wm29qsCiNjs7a2OvuQG3Y/Ei3EPHo5ge7w+hxI3NkTBQgjE6iCQ7w58FiK0dix1ADrLuvACP3UjC6+D7g5eDan5HKbI6j/s6dc3X8LheMyXhCnrqBn2pQCtPkJ2qdAaNLKsvYXQ+hoD6yWq386oDizUE11VLS0vvQHDdlcvph8AVKnLgVgKWSVkunO/hTWAGDBWTgQeeDcLulMlM++CILDcQOr8/9Q2AhJKWbB7dPw3qKQoACihFUZlVegI/yjArCe4SAezQk8vxYZ9r5vP5l9ALfAxlR85xrLcfrbZVpaNsdLYH0vQ1qMPWb9269SPVavVDeFE24qbFuAqQokMikifuPe1L2EbkbybFVBkANxczeUnMUGoJ+GNBuuCnJyEksrvbWVCwN9JbTXyQqPiHSPEdc29JcJeQkunkhhfn5+c/iQHSbmkATJYGxDBynDt8+PCnEWSn4IW6Env0U8hky14PlcNsExkoZlxFavUCN4idqLKzCHjHZacQo7Gk49c5BUsBhWcek+aoDcStsw7NUpa4bD8dcMbr8xY+Poid8G143c5BF7h7UNpTlQbQyuXyd/Hhu0hBpyPA3o+R5LuxJ56Ar/Ne/iGsM9w0BQkmDEgSUwLFTl2LFzEsXXjHaSNyy5KO4NZagNQ6hrRIEJmpgo978Xrciyz/d9KAmioNsGEDPu84zvPLy8s30cHRzZs3X46R5cXYQzchuLRGTsjzf+xkDolZQ4wGnh4BQKuGg/CftH2hvXwZhPxdBhCxncGm8/hwewWBdMfc3NzjY2NjL0sDbqo0JIYX82kU+nSA+0ak/C3Yc/8MAXYOuoNjEXzjCLicm0AlCaujhJP3EPgYwqRikwZvgcNOZH6kp/OYNRf4iQmQJVkLXs16FbcV/H378Hd+GzvVV5nrMBTtNTTAYg3dwBu4fYw+r9Vq49ibd2IDnFsoFE7Fxthsmua0P0MocI2hRGr85P8gjxQUNIWi0eQ1A/iolQse+OehfT1GmsONDrU8hW89jt//QS+5PIxNNJzA4hq0hI3wNQQa3ag+24Lv/cKmTZt2YK9/FzLZKQi0WXyvQDVvUKbSCAhkKX7ohgAr2Nr8SqHjMElPr+KC5rFWcDuEbPssAunRhYWFlyqVyrM0xyeNiKnSiBm6ijfw4Y2VlRU+QpotFovvQWBtRyCeiAx2DOJmCpkuT7UabnR2kQauX9N8YCSUxQQezx05aC7qS2vB8IFuNQQ0pZvD+N5B3Pbi9mi1Wn2SPwgybWMbJft/AQYA3C+I1dX+tRUAAAAASUVORK5CYII="

/***/ }),

/***/ "i/tm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/home-se-shape8-7352eb105a094adf4c1ada9caefafb12.png";

/***/ }),

/***/ "jEMA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/digital-55d8d17c2420f6852c90c8e7e2a92392.png";

/***/ }),

/***/ "kyF1":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZFRDkxOEVDRkFCMTFFOTg3MEZCQzAwQURCMTA1MEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZFRDkxOERDRkFCMTFFOTg3MEZCQzAwQURCMTA1MEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7FL9NdAAAAi0lEQVR42mJkgAJphXpxIOUCxGpAzA3EX4H4FhDvefqg8SVIzf///xkYoYr1gFQUELMwYII/QLwMqOkSSAMT1GRcihmg4lFQdQxMUGfgUoysyQWmQY2BOKAG08BNpAZumIavRGr4CtNwi0gNt2Aa9kCDDh/4A1XHwASNlGV4NMHiARx5jKTGNECAAQCHmTEL8KnfYwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "mlNF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class DigitalExperience extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });
  }

  render() {
    return __jsx("section", {
      className: "tab-section"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Outstanding Digital Experience"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."), __jsx("div", {
      className: "bar"
    })), __jsx("div", {
      className: "tab schedule-list-tab"
    }, __jsx("ul", {
      className: "tabs"
    }, __jsx("li", {
      className: "current",
      onClick: e => this.openTabSection(e, 'tab1')
    }, __jsx("span", null, __jsx("i", {
      className: "flaticon-analysis"
    }), "Real-Time Analytics")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab2')
    }, __jsx("span", null, __jsx("i", {
      className: "flaticon-optimize"
    }), "Pay-Per-Click")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab3')
    }, __jsx("span", null, __jsx("i", {
      className: "flaticon-software"
    }), "Online Marketing")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab4')
    }, __jsx("span", null, __jsx("i", {
      className: "flaticon-internet"
    }), "Email Marketing")), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab5')
    }, __jsx("span", null, __jsx("i", {
      className: "flaticon-data"
    }), "Social Marketing"))), __jsx("div", {
      className: "tab_content"
    }, __jsx("div", {
      id: "tab1",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-content"
    }, __jsx("h3", null, "Real-Time Analytics"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis."), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Super Responsive"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "High Security"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Optimal Choice"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-image"
    }, __jsx("img", {
      src: __webpack_require__("Zz5W"),
      alt: "image"
    }))))), __jsx("div", {
      id: "tab2",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-content"
    }, __jsx("h3", null, "Pay-Per-Click"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis."), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Super Responsive"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "High Security"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Optimal Choice"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-image"
    }, __jsx("img", {
      src: __webpack_require__("Zz5W"),
      alt: "image"
    }))))), __jsx("div", {
      id: "tab3",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-content"
    }, __jsx("h3", null, "Online Marketing"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis."), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Super Responsive"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "High Security"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Optimal Choice"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-image"
    }, __jsx("img", {
      src: __webpack_require__("Zz5W"),
      alt: "image"
    }))))), __jsx("div", {
      id: "tab4",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-content"
    }, __jsx("h3", null, "Email Marketing"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis."), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Super Responsive"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "High Security"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Optimal Choice"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-image"
    }, __jsx("img", {
      src: __webpack_require__("Zz5W"),
      alt: "image"
    }))))), __jsx("div", {
      id: "tab5",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-content"
    }, __jsx("h3", null, "Social Marketing"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis."), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Super Responsive"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "High Security"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "tab-inner-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tick"
    }), __jsx("h3", null, "Optimal Choice"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "tab-image"
    }, __jsx("img", {
      src: __webpack_require__("Zz5W"),
      alt: "image"
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (DigitalExperience);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nfT7":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB6gFtAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKx77z77UDZxPsjRcuf8/WgDYorAaCfRpIpRNvhZsMOn6Vo6pdPbwKkX+tlO1aAL1FYL6TdQxG4W4JmA3EDOfz71rWU7XFnHIwwxGG+tAFiisKCC9vvNlS8dF8wgDeav2Npc28jNPctKCMAEk4/OgC9RRRQAUUUUAFFFYGsXLTSeWn+qiYBj6sc/4GgDfoqK5mFvbSSnnauceprFi0651BPtMtxtLcqCM/8A6qAN+is/TJpf3trcHMsJxn1FQX8k13fCxgfYoGZD/n/PNAGvRWD5U+jTxOZd8DnDdh+Vb1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVC6RwCW4WMb9pJPc4qaqsF6Jrue3KbWiPXOcigDIkvv7TuIYZNsMO7Jyc5P1qxqk4h1O2ZhuCKWC+p7fyFTa1FEbEyFVEikbT3+lRSjOoabJL/EgBJ9cf4mgCJrzVof38sX7rqV2jA/qK1orpJrP7QnTaTj0xUku3yX3/c2nd9KzdJkEOkvJJnYGJ6Z4oAo2cuoG1CWkeEUklsDk/jWnpt+9wzwTrtnTrxjNXLeSOWBZIvuN04xWc2P+EjXZ/zz+f8AL/8AVQBq1j3I/s7U0uVGIZuH9j/nn862KzNZlBgS2Vd0srDaPTnrQBGg/tPVTJ1t7fgehP8An+Va9ZejSBI5LV1CyxsSR6/5/wAK1KAKmoXRtrf5OZZDtQe9Z2oWwtNJhj6sZQWPqcGptSt7176Oa1TOxMAkrwcnsfwqhff2l5K/a/8AV7xj7vXB9PxoA29RjaTT5lXrtz+XNQWGoW32GNXlRGRQpDHHT+dPtpbmC0klv85U5GAOn4VENLsbvbcIHCvzhTgGgCKwuBca1cSJnYyce+MCpNP+bVL9zyQwXP4n/Ck09FOp3TxgCNAI1x0/zxS2R8rWbyJur/MP8/jQBLrK7tNkP90g/rj+tWrdt1rEx6lAf0qnrcgWw2d3YAD9avQoUgjQ9VUD9KAH0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZd9YXBuhdWb7ZCMMM4zWpRQBipp99eTK18+I1OduRz+XFX7+zF5bhFO11OUPoat0UAYRs9VnHkTS4i7ksDn8uTWvHbRx2otwP3e3aff1qaigDCFjqdozR2sm6InjkfyNXdOsHti807b536nOcCtCigAqhFZSnUnu52Q4GI1Uk4/wA/1q/RQBn3FjKdQju7dkDDhwxIz/kVoUUUAFU9StJLy3SOMqCHDfMfY/41cooAZLGs0Txt91hg1irZapbgwQSfuj0IYf15H4Vu0UAVrG0FnbCPO5icsfU1X1CwlmlS5tm2zpx1xmtGigDHgsLu4uUmv3ysfIXI5/LitiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKjWeFpDGsqFxwVDDP5VJVGKOWVcbUEazs27cS3Dk9McfnQBeoqhbyEyQ4ldpTnzkJJC8enbnAphuJowwBJEWYjnklj90/+g/99UAaVFZ9yXjkRDJiMRjDPKUy31wcnpUhV5ZbZXkYZiZm2MV3H5fx70AXKZJII1DHOCwXj3IH9aoiSX7XhnVX8zAUynJXPZcY6d6SV1LgPK4m+0KPL3HG3eMcemMHNAF+SQRqGOcFgvHuQP60+q1+QLQkkqN6cjqPmFMiHmidIZmMeBsfcThuc89+1AFyk3DcVyMgZIqvayPcHzmBVQNoXtnufz4/CkYSm+k8p0X90mdyFu7e4oAme4hjOJJo0OcfMwH+eooW4hZQyzRkFtoIYcn0+tVHDi01EOys3zZKjA/1Y7ZNS3kYlMCE4zIeR2+RuaALBdVZVLAM33QTyfpShgwyCCM44qiEla5t5Z1Cvv2gA542Nk/if6VJbXEKq0ZmjD+a42lhn757UAWmdUUs7BVHUk4FIkiSLuR1ZfUHIqvNJGZYpWOYVLgkjgMDjJ/IiiZkmtXMOHUsN2z+IZGfrxQBPHNFLny5EfHXawOKUSRtH5iupTGdwPH51WEkM1zCbcqxXO4r2XHQ/jjj2qC2gkNtBGB+4kRHY56ccj8ePzNAGirBlDKQQRkEd6WoLL/jxt/+uS/yqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKa6l0Kh2Qn+JcZH506igBqIscaoowqjAp1FFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z"

/***/ }),

/***/ "pS2V":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB6gFtAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKx77z77UDZxPsjRcuf8/WgDYorAaCfRpIpRNvhZsMOn6Vo6pdPbwKkX+tlO1aAL1FYL6TdQxG4W4JmA3EDOfz71rWU7XFnHIwwxGG+tAFiisKCC9vvNlS8dF8wgDeav2Npc28jNPctKCMAEk4/OgC9RRRQAUUUUAFFFYGsXLTSeWn+qiYBj6sc/4GgDfoqK5mFvbSSnnauceprFi0651BPtMtxtLcqCM/8A6qAN+is/TJpf3trcHMsJxn1FQX8k13fCxgfYoGZD/n/PNAGvRWD5U+jTxOZd8DnDdh+Vb1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVC6RwCW4WMb9pJPc4qaqsF6Jrue3KbWiPXOcigDIkvv7TuIYZNsMO7Jyc5P1qxqk4h1O2ZhuCKWC+p7fyFTa1FEbEyFVEikbT3+lRSjOoabJL/EgBJ9cf4mgCJrzVof38sX7rqV2jA/qK1orpJrP7QnTaTj0xUku3yX3/c2nd9KzdJkEOkvJJnYGJ6Z4oAo2cuoG1CWkeEUklsDk/jWnpt+9wzwTrtnTrxjNXLeSOWBZIvuN04xWc2P+EjXZ/zz+f8AL/8AVQBq1j3I/s7U0uVGIZuH9j/nn862KzNZlBgS2Vd0srDaPTnrQBGg/tPVTJ1t7fgehP8An+Va9ZejSBI5LV1CyxsSR6/5/wAK1KAKmoXRtrf5OZZDtQe9Z2oWwtNJhj6sZQWPqcGptSt7176Oa1TOxMAkrwcnsfwqhff2l5K/a/8AV7xj7vXB9PxoA29RjaTT5lXrtz+XNQWGoW32GNXlRGRQpDHHT+dPtpbmC0klv85U5GAOn4VENLsbvbcIHCvzhTgGgCKwuBca1cSJnYyce+MCpNP+bVL9zyQwXP4n/Ck09FOp3TxgCNAI1x0/zxS2R8rWbyJur/MP8/jQBLrK7tNkP90g/rj+tWrdt1rEx6lAf0qnrcgWw2d3YAD9avQoUgjQ9VUD9KAH0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZd9YXBuhdWb7ZCMMM4zWpRQBipp99eTK18+I1OduRz+XFX7+zF5bhFO11OUPoat0UAYRs9VnHkTS4i7ksDn8uTWvHbRx2otwP3e3aff1qaigDCFjqdozR2sm6InjkfyNXdOsHti807b536nOcCtCigAqhFZSnUnu52Q4GI1Uk4/wA/1q/RQBn3FjKdQju7dkDDhwxIz/kVoUUUAFU9StJLy3SOMqCHDfMfY/41cooAZLGs0Txt91hg1irZapbgwQSfuj0IYf15H4Vu0UAVrG0FnbCPO5icsfU1X1CwlmlS5tm2zpx1xmtGigDHgsLu4uUmv3ysfIXI5/LitiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKjWeFpDGsqFxwVDDP5VJVGKOWVcbUEazs27cS3Dk9McfnQBeoqhbyEyQ4ldpTnzkJJC8enbnAphuJowwBJEWYjnklj90/+g/99UAaVFZ9yXjkRDJiMRjDPKUy31wcnpUhV5ZbZXkYZiZm2MV3H5fx70AXKZJII1DHOCwXj3IH9aoiSX7XhnVX8zAUynJXPZcY6d6SV1LgPK4m+0KPL3HG3eMcemMHNAF+SQRqGOcFgvHuQP60+q1+QLQkkqN6cjqPmFMiHmidIZmMeBsfcThuc89+1AFyk3DcVyMgZIqvayPcHzmBVQNoXtnufz4/CkYSm+k8p0X90mdyFu7e4oAme4hjOJJo0OcfMwH+eooW4hZQyzRkFtoIYcn0+tVHDi01EOys3zZKjA/1Y7ZNS3kYlMCE4zIeR2+RuaALBdVZVLAM33QTyfpShgwyCCM44qiEla5t5Z1Cvv2gA542Nk/if6VJbXEKq0ZmjD+a42lhn757UAWmdUUs7BVHUk4FIkiSLuR1ZfUHIqvNJGZYpWOYVLgkjgMDjJ/IiiZkmtXMOHUsN2z+IZGfrxQBPHNFLny5EfHXawOKUSRtH5iupTGdwPH51WEkM1zCbcqxXO4r2XHQ/jjj2qC2gkNtBGB+4kRHY56ccj8ePzNAGirBlDKQQRkEd6WoLL/jxt/+uS/yqegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKa6l0Kh2Qn+JcZH506igBqIscaoowqjAp1FFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z"

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "sstd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  items: 1,
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 0,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right'></i>"]
};

class FeedbackStyleTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("section", {
      className: "clients-section bg-background ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "What Our Clients Says"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."), __jsx("div", {
      className: "bar"
    })), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "clients-slider owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "clients-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-left-quotes-sign"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"), __jsx("div", {
      className: "clients-content"
    }, __jsx("h3", null, "Moris Jacker"), __jsx("span", null, "Web Developer"))), __jsx("div", {
      className: "clients-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-left-quotes-sign"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"), __jsx("div", {
      className: "clients-content"
    }, __jsx("h3", null, "Alex Maxwel"), __jsx("span", null, "Agent Management"))), __jsx("div", {
      className: "clients-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-left-quotes-sign"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"), __jsx("div", {
      className: "clients-content"
    }, __jsx("h3", null, "Edmond Halley"), __jsx("span", null, "Web Designer")))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (FeedbackStyleTwo);

/***/ }),

/***/ "t6EI":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "tVdz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDhCMDREMjU3QzFGMTFFQUJBREVBRDREMDYzNTFBOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDhCMDREMjQ3QzFGMTFFQUJBREVBRDREMDYzNTFBOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZFMTJFRjc3QzBGMTFFQTk1RkJFQkI1OEYwNjg5RjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZFMTJFRjg3QzBGMTFFQTk1RkJFQkI1OEYwNjg5RjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4AWoLHAAAOsUlEQVR42uyd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"

/***/ }),

/***/ "u3Ed":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faq-e13ac86c68a54ece5a00a5bd6263c782.png";

/***/ }),

/***/ "uQVn":
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "v6Hh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
      className: "footer-section pt-100 pb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "subscribe-area"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "subscribe-content"
    }, __jsx("h2", null, "Think We Can Help You?"))), __jsx("div", {
      className: "col-lg-6 col-md-6 newsletter-form-container"
    }, __jsx("form", {
      className: "newsletter-form"
    }, __jsx("button", {
      type: "submit"
    }, "Enquire Now"))))), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "About Us")), __jsx("p", null, "Our work would be guided & recognized by our philosophy of trust, integrity and respect."), __jsx("ul", {
      className: "footer-social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "flaticon-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "flaticon-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "flaticon-pinterest"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "flaticon-instagram"
    }))))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "Important Links")), __jsx("ul", {
      className: "footer-quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/growth-tips"
    }, __jsx("a", null, "Growth Tips"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services"
    }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Case Studies"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact")))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "footer-heading"
    }, __jsx("h3", null, "Contact")), __jsx("div", {
      className: "footer-info-contact"
    }, __jsx("i", {
      className: "flaticon-phone-call"
    }), __jsx("h3", null, "Phone"), __jsx("span", null, "+123(456)123")), __jsx("div", {
      className: "footer-info-contact"
    }, __jsx("i", {
      className: "flaticon-envelope"
    }), __jsx("h3", null, "Email"), __jsx("span", null, "hello@luzon.com")), __jsx("div", {
      className: "footer-info-contact"
    }, __jsx("i", {
      className: "flaticon-pin"
    }), __jsx("h3", null, "Address"), __jsx("span", null, "Scaleupinc Services Pvt Ltd,"), __jsx("br", null), __jsx("span", null, "B24 Sarita Vihar,"), __jsx("br", null), __jsx("span", null, "New Delhi 110076")))))), __jsx("div", {
      className: "lines"
    }, __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    }))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "copyright-area-content"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright @", currentYear, " Luzon. All Rights Reserved by ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "https://envytheme.com/"
    }, __jsx("a", {
      target: "_blank"
    }, "EnvyTheme")))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/terms-conditions"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/privacy-policy"
    }, __jsx("a", null, "Privacy Policy"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "vDBV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTA2NjJDRTJDRkFCMTFFOTkxRDhENjk4NzU3Q0E0NTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTA2NjJDRTFDRkFCMTFFOTkxRDhENjk4NzU3Q0E0NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7n29L9AAABJUlEQVR42qyUsUoDURBF304WrNzCFCJYJWWK9Kn3HwRBsEgpFn6IhVhaCIKQf9h6+xRbJlUgWMQiVgElnoGrhCfortmBwyve3LvDvJlNQxTr88uEYwBD6EP2dQUzmEKVPT9ud3VJZHLKcQYn8A5zWOm6Cz1IYQkTzBY/jDDxKi7gAwooSdxEHzrgGEEOHXgip/o2UiVX8AYPXL6EX4L8Y44xHMK9V5aoJzdwBHd/mURm1/AKt6bGek+KuiYeyi2kHZhexxtbhuZRSjs0PfE8bmzNqjZ62b5pTlbh/+HazEJLYZrY7h4erl2bxr6nYWsU0vi0z0y7k2pim8ZI2qkbVdqdXEMWGgxkLm1l2uKJdmdcx2xnRTpa3m27S9vqb2TfH9unAAMAznd8GeFGdb8AAAAASUVORK5CYII="

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x0a9":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDIzMjA2MEY3QzFGMTFFQUIzREVGMTU3MDhBM0M4MUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDIzMjA2MEU3QzFGMTFFQUIzREVGMTU3MDhBM0M4MUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUUzNTVFODk3QzBGMTFFQUJGNTM5RkU3MjhDOTNCOTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUUzNTVFOEE3QzBGMTFFQUJGNTM5RkU3MjhDOTNCOTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5K6o7ZAAANhUlEQVR42uyd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"

/***/ })

/******/ });