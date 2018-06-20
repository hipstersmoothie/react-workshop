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
/******/ 		"00-Hello-World-lecture": 0
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
/******/ 	deferredModules.push(["./subjects/00-Hello-World/lecture.js","vendors~00-Hello-World-lecture"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./subjects/00-Hello-World/lecture.js":
/*!********************************************!*\
  !*** ./subjects/00-Hello-World/lecture.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");

var _jquery2 = _interopRequireDefault(_jquery);

var _searchWikipedia = __webpack_require__(/*! ./utils/searchWikipedia */ "./subjects/00-Hello-World/utils/searchWikipedia.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = "\n<div>\n  <h1>Wikipedia</h1>\n  <form id=\"form\">\n    <input id=\"input\" value=\"taco\"/>\n    <button type=\"submit\">Search</button>\n  </form>\n  <div id=\"loading\">Loading...</div>\n  <div id=\"meta\">\n    <p>Results for: <span id=\"title\"></span><p>\n    <p>\n      <label>\n        <input type=\"checkbox\" id=\"descending\">\n        Sort Descending\n      </label>\n    </p>\n  </div>\n  <ul id=\"results\"></ul>\n</div>\n";

(0, _jquery2.default)("#app").html(html); // <-- component

(0, _jquery2.default)("#form").on("submit", function (event) {
  // <-- state change
  event.preventDefault();
  var term = (0, _jquery2.default)("#input").val(); // <-- state
  (0, _jquery2.default)("#loading").show(); // <-- time
  (0, _jquery2.default)("#meta").hide(); // <-- time
  (0, _jquery2.default)("#results").empty(); // <-- time
  (0, _searchWikipedia.search)(term, function (err, results) {
    (0, _jquery2.default)("#loading").hide(); // <-- time
    (0, _jquery2.default)("#meta").show(); // <-- time
    (0, _jquery2.default)("#title").html(term); // <-- time
    results.forEach(function (result) {
      var li = (0, _jquery2.default)("<li/>");
      var html = "\n<div>\n  " + result.title + "\n  <button>show more</button>\n</div>\n<div class=\"toggler\" style=\"display: none\">\n  <p>" + result.description + "</p>\n</div>\n";
      li.html(html); // <-- time
      if ((0, _jquery2.default)("#descending").is(":checked")) {
        // <-- state
        li.prependTo((0, _jquery2.default)("#results")); // <-- time
      } else {
        li.appendTo((0, _jquery2.default)("#results")); // <-- time
      }
      li.find("button").on("click", function () {
        // <-- component
        li.find(".toggler").toggle(); // <-- time
        var isHidden = li.find(".toggler").is(":hidden"); // <-- state
        li.find("button").html(isHidden ? "show more" : "hide"); // <-- time
      });
    });
  });
}).trigger("submit"); // <-- state change

(0, _jquery2.default)("#descending").on("click", function (event) {
  // <-- state change
  (0, _jquery2.default)("#results li").each(function (i, li) {
    (0, _jquery2.default)("#results").prepend(li); // <-- time
  });
});

// What's awesome:
//
// I can still bang out this code even after not using jQuery for
// 4 years.
//
// What's not awesome:
//
// When our code...
//
// - is written as flows
// - doesn't call out state
// - has no entry point to change state
//
// ...it gets really hard to deal with. After you identify state,
// and how to change it, you must write code to connect every state
// to nearly every other state. Every feature requires changes to code
// in multiple places. Also, it's just too hard to think about for most
// of us, leading to lots of bugs.

////////////////////////////////////////////////////////////////////////////////

// import Backbone from "backbone";
// import $ from "jquery";
// import _ from "underscore";
// import { search } from "./utils/searchWikipedia";

// const appTemplate = _.template(`
// <div>
//   <h1><%= title %></h1>
//   <form id="form">
//     <input id="input" value="taco"/>
//     <button type="submit">Search</button>
//   </form>
//   <% if (loading) { %>
//     <div id="loading">Loading...</div>
//   <% } else { %>
//     <div id="meta">
//       <p>Results for: <span id="title"><%= term %></span><p>
//       <p>
//         <label>
//         <input type="checkbox" id="descending" <%= descending ? 'checked' : '' %>>
//         Sort Descending
//         </label>
//       </p>
//     </div>
//   <% } %>
//   <ul id="results">
//     <% results.forEach(function(result) { %>
//       <li class="toggleView"></li>
//     <% }) %>
//   </ul>
// </div>
// `);

// const AppView = Backbone.View.extend({
//   template: appTemplate,

//   events: {
//     // <-- delegated state changes
//     "submit #form": "handleSubmit",
//     "click #descending": "handleDescending"
//   },

//   initialize() {
//     this.listenTo(this.model, "all", this.render);
//     this.listenTo(this.model, "change:term", this.search);
//     this.render();
//     this.search();
//   },

//   handleSubmit(event) {
//     event.preventDefault();
//     this.model.set("term", this.$el.find("#input").val()); // KVO Web
//   },

//   search() {
//     this.model.set({
//       // KVO web
//       loading: true,
//       results: [],
//       descending: false // cascading update!
//     });
//     search(this.model.get("term"), (err, results) => {
//       this.model.set({
//         // KVO web
//         loading: false,
//         results: results
//       });
//     });
//   },

//   handleDescending() {
//     this.model.set(
//       // <-- KVO web
//       "descending",
//       !this.model.get("descending")
//     );
//   },

//   render() {
//     const state = this.model.toJSON();
//     if (state.descending)
//       state.results = state.results.slice(0).reverse();
//     this.$el.html(this.template(state)); // DOM Bomb!
//     this.$el.find("#results li").each((index, el) => {
//       new ToggleView({
//         // <-- imperative (re)composition!
//         el: el,
//         model: new Backbone.Model(state.results[index])
//       }).render();
//     });
//   }
// });

// const ToggleView = Backbone.View.extend({
//   template: _.template(`
// <div>
//   <%= title %>
//   <button>show more</button>
// </div>
// <% if (isOpen) { %>
// <div>
//   <p><%= description %></p>
// </div>
// <% } %>
// `),

//   events: {
//     "click button": "toggle"
//   },

//   initialize() {
//     this.model.set("isOpen", false, { silent: true }); // <-- model ownership?
//     this.listenTo(this.model, "change:isOpen", this.render);
//   },

//   toggle() {
//     this.model.set("isOpen", !this.model.get("isOpen")); // <-- KVO web
//   },

//   render() {
//     this.$el.html(this.template(this.model.toJSON()));
//   }
// });

// new AppView({
//   el: "#app",
//   model: new Backbone.Model({
//     title: "Wikipedia",
//     loading: false,
//     term: "tacos",
//     descending: false,
//     results: []
//   })
// });

// What's awesome
//
// - Moved state to models so we can identify what state changes
//   the app.
// - Moved creating UI into templates, one step closer to being
//   declarative.
//
// What's not so awesome
//
// - DOM Bombs
//   - kill focus for assistive devices
//   - non-performant
//
// - KVO Web
//   - can't predict what will happen if you change state
//     > Events complect communication and flow of control.
//     > ... their fundamental nature, ... is that upon an event
//     > an arbitrary amount of other code is run
//     > http://clojure.com/blog/2013/06/28/clojure-core-async-channels.html
//
//   - leads to cascading updates
//     - non-performant
//     - to fix leads to knowing how your app changes over time intimately
//
// - imperative composition
//   - non-performant
//   - to fix
//     - have to know how your app changes over time intimately
//     - lots of code to manage instances
//     - lots of mistakes

////////////////////////////////////////////////////////////////////////////////

// import angular from "angular";
// import { search } from "./utils/searchWikipedia";

// document.documentElement.setAttribute("ng-app", "wikipedia");

// document.getElementById("app").innerHTML = `
// <div ng-controller="MainController as main">
//   <h1>Wikipedia</h1>
//   <form ng-submit="main.handleSubmit()">
//     <input ng-model="main.term"/>
//     <button type="submit">Search</button>
//   </form>
//   <div ng-if="main.loading">Loading...</div>
//   <div>
//     <p>{{main.sortedResults().length}} results for: {{main.term}}<p>
//     <p>
//       <label>
//         <input
//         type="checkbox"
//         ng-model="main.descending"
//         > Sort Descending
//       </label>
//     </p>
//   </div>
//   <ul id="results">
//     <li ng-repeat="result in main.sortedResults() track by result.title">
//       <toggler title="{{result.title}}">
//         <p>{{result.description}}</p>
//       </toggler>
//     </li>
//   </ul>
// </div>
// `;

// const app = angular.module("wikipedia", []);

// app.controller("MainController", function($rootScope) {
//   const main = this;
//   main.term = "taco"; // <-- shared state!
//   main.results = [];
//   main.loading = false;
//   main.descending = false;

//   main.getFriends = () => {
//     return [{ name: "Sarah" }, { name: "Max" }];
//   };

//   main.handleSubmit = () => {
//     main.loading = true;
//     search(main.term, (err, results) => {
//       main.results = results;
//       main.loading = false;
//       $rootScope.$digest(); // <-- time!
//     });
//   };

//   main.sortedResults = () => {
//     return main.descending
//       ? main.results.slice(0).reverse()
//       : main.results;
//   };

//   main.handleSubmit();
// });

// app.directive("toggler", () => {
//   // <-- Global!
//   return {
//     restrict: "E", // WTH?
//     scope: {
//       title: "@" // WTH?
//     },
//     controller($scope) {
//       $scope.isOpen = false;
//       $scope.toggle = () => {
//         $scope.isOpen = !$scope.isOpen;
//       };
//     },
//     replace: true,
//     transclude: true, // WTH?
//     template: `
// <div>
//   <div>
//     {{title}}
//     <button ng-click="toggle()">show more</button>
//   </div>
//   <div ng-if="isOpen" ng-transclude></div>
// <div>
// `
//   };
// });

// What's awesome
//
// - fully declarative templates
// - declarative component composition
//
// What's not so awesome
//
// - directives and filters are globals
// - have to think about time with $apply/$watch, etc.
// - rendering assumptions require you to keep object identity
//   and therefore think about time
// - and the real kicker: shared mutable state
//
// > July 7, 2014
// >
// > Vojta brought up some points that we don’t yet have plans to solve
// > some problems we see in larger apps.  In particular, how developers
// > can reason about data flow within an app.
// >
// > Key points: scope hierarchy is a huge pile of shared state that many
// > components from the application because of two way data-binding it's
// > not clear what how the data flows because it can flow in all
// > directions (including from child components to parents) - this makes
// > it hard to understand the app and understand of impact of model
// > changes in one part of the app on another (seemingly unrelated) part
// > of it.
//   https://twitter.com/teozaurus/status/518071391959388160

/***/ }),

/***/ "./subjects/00-Hello-World/utils/searchWikipedia.js":
/*!**********************************************************!*\
  !*** ./subjects/00-Hello-World/utils/searchWikipedia.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.search = search;

var _jsonp = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json";

function search(term, cb) {
  (0, _jsonp2.default)(API + "&search=" + term, function (err, data) {
    if (err) {
      cb(err);
    } else {
      var _data = _slicedToArray(data, 4),
          searchTerm = _data[0],
          titles = _data[1],
          descriptions = _data[2],
          urls = _data[3];

      cb(null, titles.sort().map(function (title, index) {
        return {
          title: title,
          description: descriptions[index],
          url: urls[index]
        };
      }));
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=00-Hello-World-lecture.js.map