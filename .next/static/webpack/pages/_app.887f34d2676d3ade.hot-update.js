"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./components/layout/navbar.js\");\n/* harmony import */ var react_sticky_el__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sticky-el */ \"./node_modules/react-sticky-el/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_sticky_el__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        topOffset: 100,\n        __source: {\n            fileName: \"G:\\\\rizwan\\\\decorzone\\\\components\\\\layout\\\\header.js\",\n            lineNumber: 5,\n            columnNumber: 13\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"site-header\",\n            __source: {\n                fileName: \"G:\\\\rizwan\\\\decorzone\\\\components\\\\layout\\\\header.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"G:\\\\rizwan\\\\decorzone\\\\components\\\\layout\\\\header.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                        className: \"header-left\",\n                        href: '/',\n                        title: \"home page\",\n                        __source: {\n                            fileName: \"G:\\\\rizwan\\\\decorzone\\\\components\\\\layout\\\\header.js\",\n                            lineNumber: 8,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: \"/decore-logo.png\",\n                            alt: \"logo\",\n                            __source: {\n                                fileName: \"G:\\\\rizwan\\\\decorzone\\\\components\\\\layout\\\\header.js\",\n                                lineNumber: 8,\n                                columnNumber: 67\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        __source: {\n                            fileName: \"G:\\\\rizwan\\\\decorzone\\\\components\\\\layout\\\\header.js\",\n                            lineNumber: 9,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUNPO0FBRXJCLFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDOUIsTUFBTSxzRUFBR0QsdURBQU07UUFBQ0UsU0FBUyxFQUFFLEdBQUc7Ozs7Ozs7dUZBQzNCQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzRGQUN6QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7O3lGQUN2QkMsQ0FBQzt3QkFBQ0QsU0FBUyxFQUFDLENBQWE7d0JBQUNFLElBQUksRUFBRSxDQUFHO3dCQUFFQyxLQUFLLEVBQUMsQ0FBVzs7Ozs7Ozt1R0FBRUMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQWtCOzRCQUFDQyxHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7O3lGQUM3RlgsK0NBQU07Ozs7Ozs7Ozs7OztBQUlmLENBQUM7S0FUcUJFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLmpzPzkyZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3ktZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuICg8U3RpY2t5IHRvcE9mZnNldD17MTAwfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiIGhyZWY9eycvJ30gdGl0bGU9XCJob21lIHBhZ2VcIj48aW1nIHNyYz1cIi9kZWNvcmUtbG9nby5wbmdcIiBhbHQ9XCJsb2dvXCIgLz48L2E+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdGlja3k+KVxyXG4gIH0iXSwibmFtZXMiOlsiTmF2YmFyIiwiU3RpY2t5IiwiSGVhZGVyIiwidG9wT2Zmc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ0aXRsZSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/header.js\n");

/***/ })

});