webpackHotUpdate_N_E("pages/notes",{

/***/ "./pages/notes/index.jsx":
/*!*******************************!*\
  !*** ./pages/notes/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\cijgr\\Documents\\web-development\\jimgo\\repos\\learning\\course-frontendmasters-nextjs\\pages\\notes\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Note = function Note() {
  var notes = new Array(15).fill(1).map(function (e, i) {
    return {
      id: i,
      title: "Note: ".concat(i)
    };
  });
  console.log(notes);
  return __jsx("div", null, __jsx("h1", null, "Notes"), __jsx("div", null, __jsx("ul", null, notes.map(function (note, i) {
    return __jsx("li", {
      key: i
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/notes/[id]",
      as: "/notes/".concat(note.id)
    }, __jsx("a", null, __jsx("strong", null, "Test", note.title))));
  }))));
};

_c = Note;
/* harmony default export */ __webpack_exports__["default"] = (Note);

var _c;

$RefreshReg$(_c, "Note");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm90ZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIk5vdGUiLCJub3RlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImUiLCJpIiwiaWQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJub3RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUNYQyxJQURXLENBQ04sQ0FETSxFQUVYQyxHQUZXLENBRVAsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVztBQUFFQyxRQUFFLEVBQUVELENBQU47QUFBU0UsV0FBSyxrQkFBV0YsQ0FBWDtBQUFkLEtBQVg7QUFBQSxHQUZPLENBQWQ7QUFHQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQVo7QUFFQSxTQUNFLG1CQUNFLDBCQURGLEVBRUUsbUJBQ0Usa0JBQ0dBLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNPLElBQUQsRUFBT0wsQ0FBUDtBQUFBLFdBQ1Q7QUFBSSxTQUFHLEVBQUVBO0FBQVQsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBRSxtQkFBWUssSUFBSSxDQUFDSixFQUFqQjtBQUEzQixPQUNFLGlCQUNFLDhCQUFhSSxJQUFJLENBQUNILEtBQWxCLENBREYsQ0FERixDQURGLENBRFM7QUFBQSxHQUFWLENBREgsQ0FERixDQUZGLENBREY7QUFrQkQsQ0F4QkQ7O0tBQU1SLEk7QUEwQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25vdGVzLjVjYmFkY2RiM2E1ZmM3NDY1NGNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTm90ZSA9ICgpID0+IHtcclxuICBjb25zdCBub3RlcyA9IG5ldyBBcnJheSgxNSlcclxuICAgIC5maWxsKDEpXHJcbiAgICAubWFwKChlLCBpKSA9PiAoeyBpZDogaSwgdGl0bGU6IGBOb3RlOiAke2l9YCB9KSk7XHJcbiAgY29uc29sZS5sb2cobm90ZXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk5vdGVzPC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bm90ZXMubWFwKChub3RlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9ub3Rlcy9baWRdJyBhcz17YC9ub3Rlcy8ke25vdGUuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UZXN0e25vdGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==