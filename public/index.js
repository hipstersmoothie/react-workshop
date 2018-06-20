/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./subjects/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./subjects/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/css-loader!./subjects/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".index-header {\n  max-width: 800px;\n  margin: 30px auto 40px;\n  text-align: center;\n}\n.index-header img {\n  width: 300px;\n}\n@media (max-width: 600px) {\n  .index-header {\n    margin: 10px auto 20px;\n  }\n}\n\n.index-subjectsTable {\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.index-subjectsTable a:link,\n.index-subjectsTable a:visited {\n  color: blue;\n}\n.index-subjectsTable tr:nth-child(even) {\n  background: #eef;\n}\n.index-subjectsTable td {\n  padding: 10px;\n  text-align: left;\n}\n\n.index-subjectNumber {\n  font-size: 1.5em;\n  color: #aaa;\n}\n\n.index-lecture {\n  font-size: 1.5em;\n}\n.index-lecture a:link,\n.index-lecture a:visited {\n  color: black;\n}\n\n.index-exercise {\n  padding-left: 20px;\n}\n\n.index-footer {\n  max-width: 800px;\n  margin: 40px auto 60px;\n  text-align: center;\n  font-size: 0.8em;\n  color: #ccc;\n}\n.index-footer a:link,\n.index-footer a:visited {\n  color: #ccc;\n}\n@media (max-width: 600px) {\n  .index-footer {\n    margin: 20px auto 40px;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./subjects/index.js":
/*!***************************!*\
  !*** ./subjects/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./styles.css */ "./subjects/styles.css");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _logo = __webpack_require__(/*! ./logo.png */ "./subjects/logo.png");

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Index() {
  var subjects = (window.__DATA__ || {}).subjects || [];

  return _react2.default.createElement(
    "div",
    { className: "index" },
    _react2.default.createElement(
      "header",
      { className: "index-header" },
      _react2.default.createElement(
        "a",
        { href: "https://reacttraining.com" },
        _react2.default.createElement("img", { src: _logo2.default, alt: "React Training" })
      )
    ),
    _react2.default.createElement(
      "table",
      {
        className: "index-subjectsTable",
        cellSpacing: 0,
        cellPadding: 0
      },
      _react2.default.createElement(
        "tbody",
        null,
        subjects.map(function (subject, index) {
          return _react2.default.createElement(
            "tr",
            { key: index },
            _react2.default.createElement(
              "td",
              { className: "index-subjectNumber" },
              subject.number
            ),
            _react2.default.createElement(
              "td",
              { className: "index-lecture" },
              subject.lecture ? _react2.default.createElement(
                "a",
                {
                  href: subject.lecture,
                  title: subject.name + " lecture"
                },
                subject.name
              ) : subject.name
            ),
            _react2.default.createElement(
              "td",
              { className: "index-exercise" },
              subject.exercise && _react2.default.createElement(
                "a",
                {
                  href: subject.exercise,
                  title: subject.name + " exercise"
                },
                "exercise"
              )
            ),
            _react2.default.createElement(
              "td",
              { className: "index-solution" },
              subject.solution && _react2.default.createElement(
                "a",
                {
                  href: subject.solution,
                  title: subject.name + " solution"
                },
                "solution"
              )
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      "footer",
      { className: "index-footer" },
      "\xA9 2015-",
      new Date().getFullYear(),
      " ",
      _react2.default.createElement(
        "a",
        { href: "https://reacttraining.com", title: "React Training" },
        "React Training LLC"
      ),
      ", all rights reserved"
    )
  );
}

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("app"));

/***/ }),

/***/ "./subjects/logo.png":
/*!***************************!*\
  !*** ./subjects/logo.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c5b291234db3f28eb49a445a259b0b3c.png";

/***/ }),

/***/ "./subjects/styles.css":
/*!*****************************!*\
  !*** ./subjects/styles.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./styles.css */ "./node_modules/css-loader/index.js!./subjects/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map