"use strict";
(self["webpackChunkimageslider"] = self["webpackChunkimageslider"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider.js */ "./src/modules/slider.js");


/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/1.jpg */ "./src/images/1.jpg");
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/2.jpg */ "./src/images/2.jpg");
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/3.jpg */ "./src/images/3.jpg");
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/4.jpg */ "./src/images/4.jpg");





const gallery = [_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _images_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_4_jpg__WEBPACK_IMPORTED_MODULE_3__]

const galleryHolder = document.createElement('div');
galleryHolder.classList.add('gallery')
gallery.forEach(image => {
    imageHolder = createElement('img');
    imageHolder.setAttribute('src', `${image}`);
    imageHolder.classList.add(`image-${indexOf.image}`)
})

console.log(galleryHolder)

/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c471b3dea44be3aa35e.jpg";

/***/ }),

/***/ "./src/images/2.jpg":
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76876728d1da8a69cb0d.jpg";

/***/ }),

/***/ "./src/images/3.jpg":
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a7a05ca253871066111.jpg";

/***/ }),

/***/ "./src/images/4.jpg":
/*!**************************!*\
  !*** ./src/images/4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b572612c1461a4979cf.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ0E7QUFDQTtBQUNBOztBQUVwQyxpQkFBaUIsMENBQU0sRUFBRSwwQ0FBTSxFQUFFLDBDQUFNLEVBQUUsMENBQU07O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0MsdUNBQXVDLGNBQWM7QUFDckQsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlc2xpZGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ltYWdlc2xpZGVyLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbGlkZXIgZnJvbSAnLi9tb2R1bGVzL3NsaWRlci5qcyciLCJpbXBvcnQgaW1hZ2UxIGZyb20gJy4uL2ltYWdlcy8xLmpwZydcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vaW1hZ2VzLzIuanBnJ1xuaW1wb3J0IGltYWdlMyBmcm9tICcuLi9pbWFnZXMvMy5qcGcnXG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4uL2ltYWdlcy80LmpwZydcblxuY29uc3QgZ2FsbGVyeSA9IFtpbWFnZTEsIGltYWdlMiwgaW1hZ2UzLCBpbWFnZTRdXG5cbmNvbnN0IGdhbGxlcnlIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdhbGxlcnlIb2xkZXIuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpXG5nYWxsZXJ5LmZvckVhY2goaW1hZ2UgPT4ge1xuICAgIGltYWdlSG9sZGVyID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2VIb2xkZXIuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtpbWFnZX1gKTtcbiAgICBpbWFnZUhvbGRlci5jbGFzc0xpc3QuYWRkKGBpbWFnZS0ke2luZGV4T2YuaW1hZ2V9YClcbn0pXG5cbmNvbnNvbGUubG9nKGdhbGxlcnlIb2xkZXIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9