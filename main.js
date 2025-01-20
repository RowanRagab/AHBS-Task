(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@layout/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/@layout/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background-color: #024e95;\r\n    text-align: center;\r\n    padding: 3px 0;\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-size: 14px;\r\n    color: white;\r\n    font-weight: 600;\r\n    font-family: Arial, sans-serif;\r\n  }\r\n  \r\n  .footer-content {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGxheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9AbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ZTk1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/@layout/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/@layout/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer-content\">\n    <p>&copy; 2025 AHBS. All Rights Reserved.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/@layout/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/@layout/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/@layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/@layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@layout/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/@layout/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title{\r\n  cursor: pointer;\r\n}\r\n.title span:nth-child(1) {\r\n    color: #7ef0f3;\r\n    font-weight: bold;\r\n  }\r\n.title span:nth-child(2) {\r\n    color: #0357A8;\r\n    font-weight: bold;\r\n  }\r\n.search-container {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 300px;\r\n  }\r\n.search-container input {\r\n    width: 100%;\r\n    padding: 10px 40px 10px 15px;\r\n    border: none;\r\n    border-radius: 20px;\r\n    outline: none;\r\n    background-color: #7eeff329;\r\n    font-size: 16px;\r\n  }\r\n.search-container i {\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    color: #7eeff3f9;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n  }\r\n.start-div{\r\n    width:35%;\r\n  }\r\n/* Centering the div */\r\n.centered-div {\r\n  width: 40%;\r\n  text-align: center;\r\n}\r\n/* Styling the list items */\r\n.centered-div ul li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-weight: normal;\r\n  position: relative;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n/* Hover effect */\r\n.centered-div ul li a:hover,\r\n.centered-div ul li a.active-link {\r\n  color: #0357A8;\r\n  font-weight: bold;\r\n}\r\n/* Underline effect on hover and active */\r\n.centered-div ul li a::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -2px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #0357A8;\r\n  transition: width 0.3s ease-in-out;\r\n}\r\n.centered-div ul li a:hover::after,\r\n.centered-div ul li a.active-link::after {\r\n  width: 100%;\r\n}\r\n/* Breadcrumb */\r\n.breadcrumb {\r\n    background-color: #0357A8;\r\n    padding: 2px 10px;\r\n    border-radius: 5px;\r\n  }\r\n.breadcrumb-item a {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n.breadcrumb-item.active {\r\n    font-weight: bold;\r\n    color: white;\r\n  }\r\n/* Dropdown Container */\r\n.custom-dropdown {\r\n  margin: 0 10px;\r\n  position: relative;\r\n  border: none;\r\n  display: inline-block;\r\n}\r\n/* Dropdown Button */\r\n.dropdown-btn {\r\n  background: transparent;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n  font-size: 16px;\r\n}\r\n.dropdown-btn:hover {\r\n  background-color: #f0f0f0;\r\n}\r\n/* Dropdown Menu */\r\n.dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  z-index: 1000;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 5px 0 0;\r\n  min-width: 120px;\r\n}\r\n/* Show Dropdown */\r\n.custom-dropdown .dropdown-menu.show {\r\n  display: block;\r\n}\r\n/* Dropdown Item */\r\n.dropdown-item {\r\n  padding: 10px 15px;\r\n  text-decoration: none;\r\n  color: #333;\r\n  display: block;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n.dropdown-item:hover {\r\n  background-color: #f0f0f0;\r\n  color: #000;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGxheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtBQUNGO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUVBLHNCQUFzQjtBQUN0QjtFQUNBLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDO0FBRUEsaUJBQWlCO0FBQ2pCOztFQUVFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDO0FBRUE7O0VBRUUsV0FBVztBQUNiO0FBRUUsZUFBZTtBQUNmO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7QUFDQSx1QkFBdUI7QUFDekI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvQGxheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpdGxle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGl0bGUgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgY29sb3I6ICM3ZWYwZjM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbi50aXRsZSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICBjb2xvcjogIzAzNTdBODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlZWZmMzI5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWNvbnRhaW5lciBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjb2xvcjogIzdlZWZmM2Y5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuc3RhcnQtZGl2e1xyXG4gICAgd2lkdGg6MzUlO1xyXG4gIH1cclxuXHJcbiAgLyogQ2VudGVyaW5nIHRoZSBkaXYgKi9cclxuICAuY2VudGVyZWQtZGl2IHtcclxuICB3aWR0aDogNDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU3R5bGluZyB0aGUgbGlzdCBpdGVtcyAqL1xyXG4uY2VudGVyZWQtZGl2IHVsIGxpIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLyogSG92ZXIgZWZmZWN0ICovXHJcbi5jZW50ZXJlZC1kaXYgdWwgbGkgYTpob3ZlcixcclxuLmNlbnRlcmVkLWRpdiB1bCBsaSBhLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogIzAzNTdBODtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogVW5kZXJsaW5lIGVmZmVjdCBvbiBob3ZlciBhbmQgYWN0aXZlICovXHJcbi5jZW50ZXJlZC1kaXYgdWwgbGkgYTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTJweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM1N0E4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC1kaXYgdWwgbGkgYTpob3Zlcjo6YWZ0ZXIsXHJcbi5jZW50ZXJlZC1kaXYgdWwgbGkgYS5hY3RpdmUtbGluazo6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC8qIEJyZWFkY3J1bWIgKi9cclxuICAuYnJlYWRjcnVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM1N0E4O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5icmVhZGNydW1iLWl0ZW0gYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAvKiBEcm9wZG93biBDb250YWluZXIgKi9cclxuLmN1c3RvbS1kcm9wZG93biB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xyXG4uZHJvcGRvd24tYnRuIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBNZW51ICovXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogNXB4IDAgMDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4vKiBTaG93IERyb3Bkb3duICovXHJcbi5jdXN0b20tZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIEl0ZW0gKi9cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICBjb2xvcjogIzAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/@layout/navbar/navbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/@layout/navbar/navbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"container-fluid py-4 d-flex justify-content-between align-items-center bg-white\">\n  <div class=\"start-div d-flex justify-content-between align-items-center\">\n    <div class=\"title h3\" (click)=\"goHome()\">\n      <span>DOT</span>\n      <span>CARE</span>\n    </div>\n    <div class=\"search-container\">\n      <input type=\"text\" [placeholder]=\"'Search' | translate\" />\n      <i class=\"fa fa-search\"></i>\n    </div>\n  </div>\n  <div class=\"centered-div\">\n    <ul class=\"d-flex justify-content-around\">\n      <li>\n        <a routerLink=\"/home\" routerLinkActive=\"active-link\" aria-current=\"page\">{{'Home' | translate }}</a>\n      </li>\n      <li>\n        <a routerLink=\"/product\" routerLinkActive=\"active-link\">{{'Products' | translate }}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"end-div d-flex justify-content-between align-items-center\">\n    <div class=\"lang\">\n      <div class=\"custom-dropdown\" (click)=\"toggleDropdown($event)\">\n        <button class=\"dropdown-btn\">\n          <i class=\"fa fa-globe fa-lg text-primary\"></i>\n        </button>\n        <ul class=\"dropdown-menu\" [class.show]=\"isDropdownOpen\">\n          <li><a class=\"dropdown-item\" (click)=\"selectLanguage('ar')\">{{'AR' | translate}}</a></li>\n          <li><a class=\"dropdown-item\" (click)=\"selectLanguage('en')\">{{'EN' | translate}}</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"user d-flex justify-content-between align-items-center\">\n      <div class=\"user-img\">\n        <img src=\"../../../assets/imgs/home/profile.png\"  alt=\"\">\n      </div>\n      <div class=\"user-name px-2\">\n        <span>Rowan</span>\n      </div>\n  </div>\n  </div>\n</nav>\n\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li *ngFor=\"let crumb of breadcrumbs; let last = last\" class=\"breadcrumb-item\" \n        [class.active]=\"last\" [attr.aria-current]=\"last ? 'page' : null\">\n      <a *ngIf=\"!last\" [routerLink]=\"crumb.url\">{{ crumb.label | translate }}</a>\n      <span *ngIf=\"last\">{{ crumb.label | translate }}</span>\n    </li>\n  </ol>\n</nav>"

/***/ }),

/***/ "./src/app/@layout/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/@layout/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, activatedRoute, _translationService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._translationService = _translationService;
        this.breadcrumbs = [];
        this.isDropdownOpen = false;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.breadcrumbs = _this.createBreadcrumbs(_this.activatedRoute.root);
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleDropdown = function (event) {
        this.isDropdownOpen = !this.isDropdownOpen;
        event.stopPropagation(); // Prevent closing when clicking inside the dropdown
    };
    NavbarComponent.prototype.goHome = function () {
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.selectLanguage = function (lang) {
        this._translationService.setLanguage(lang);
        this.isDropdownOpen = false;
    };
    NavbarComponent.prototype.closeDropdown = function (event) {
        if (!event.target || !event.target.closest('.custom-dropdown')) {
            this.isDropdownOpen = false;
        }
    };
    NavbarComponent.prototype.createBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            if (routeURL !== '') {
                url += "/" + routeURL;
            }
            var breadcrumbs_1 = [{
                    label: 'Home',
                    url: '/home'
                }];
            if (child.snapshot.data['breadcrumb'] && child.snapshot.data['breadcrumb'] !== 'Home') {
                breadcrumbs_1.push({
                    label: child.snapshot.data['breadcrumb'],
                    url: url
                });
            }
            return this.createBreadcrumbs(child, url, breadcrumbs_1);
        }
        return breadcrumbs;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NavbarComponent.prototype, "closeDropdown", null);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/@layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/@layout/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { breadcrumb: 'Home' } },
    { path: 'product', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], data: { breadcrumb: 'Products' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content{\r\n    height: 90vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main-content w-100\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ahbs';
        this.gridData = [
            {
                ProductID: 1,
                ProductName: "Chai",
                UnitPrice: 18,
                Category: {
                    CategoryID: 1,
                    CategoryName: "Beverages",
                },
            },
            {
                ProductID: 2,
                ProductName: "Chang",
                UnitPrice: 19,
                Category: {
                    CategoryID: 1,
                    CategoryName: "Beverages",
                },
            },
            {
                ProductID: 3,
                ProductName: "Aniseed Syrup",
                UnitPrice: 10,
                Category: {
                    CategoryID: 2,
                    CategoryName: "Condiments",
                },
            },
        ];
        this.listItems = [
            { text: "", value: 0 },
            { text: "Small", value: 1 },
            { text: "Medium", value: 2 },
            { text: "Large", value: 3 },
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-label */ "./node_modules/@progress/kendo-angular-label/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-icons */ "./node_modules/@progress/kendo-angular-icons/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@layout/navbar/navbar.component */ "./src/app/@layout/navbar/navbar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@layout/footer/footer.component */ "./src/app/@layout/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm5/index.js");
/* harmony import */ var _shared_modules_app_translate_app_translate_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/modules/app-translate/app-translate.module */ "./src/app/shared/modules/app-translate/app-translate.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _progress_kendo_angular_label__WEBPACK_IMPORTED_MODULE_7__["LabelModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"],
                _progress_kendo_angular_icons__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_11__["InputsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
                        useFactory: _shared_modules_app_translate_app_translate_module__WEBPACK_IMPORTED_MODULE_19__["httpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]
                    }
                }),
                _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_18__["TreeViewModule"],
                _shared_modules_app_translate_app_translate_module__WEBPACK_IMPORTED_MODULE_19__["AppTranslateModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"img-container d-flex flex-column justify-content-center align-items-center\">\n    <img src=\"../../../assets/imgs/home/welcome.png\" alt=\"Welcome message\">\n    <p>{{'Welcome to our werehouse' | translate }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.fw{\r\n    font-weight: 700;\r\n}\r\nh5{\r\n    font-weight: 800;\r\n    padding: 10px;\r\n}\r\n.product-title{\r\n    text-align: start;\r\n}\r\nh4{\r\n    font-weight: 700;\r\n}\r\n.sub-title{\r\n    padding: 10px 0;\r\n    display: flex;\r\n    border-bottom: 1px solid #68a7c984;\r\n    margin-bottom: 15px;\r\n}\r\n.sub-title i{\r\n    padding: 1px 10px;\r\n    font-size: 2rem;\r\n    color: #75dde0;\r\n}\r\nlabel,\r\nkendo-label{\r\n    font-weight: 600 !important;\r\n}\r\n::ng-deep .k-input{\r\n    background: #7eeff31f !important;\r\n}\r\n[dir=\"rtl\"] label,\r\n[dir=\"rtl\"] kendo-label {\r\n    font-weight: 600 !important;\r\n    color: red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBOztJQUVJLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5md3tcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuaDV7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucHJvZHVjdC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uc3ViLXRpdGxle1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjhhN2M5ODQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zdWItdGl0bGUgaXtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICM3NWRkZTA7XHJcbn1cclxubGFiZWwsXHJcbmtlbmRvLWxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuay1pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6ICM3ZWVmZjMxZiAhaW1wb3J0YW50O1xyXG59XHJcbltkaXI9XCJydGxcIl0gbGFiZWwsXHJcbltkaXI9XCJydGxcIl0ga2VuZG8tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"product-title\">\n    <h5>{{ 'Products' | translate }}</h5>\n  </div>\n  <div class=\"card p-4 rounded-5\">\n    <div class=\"basic-info\">\n      \n      <div class=\"filter-container\">\n        <div class=\"sub-title\">\n          <i class=\"fa fa-newspaper\"></i>\n          <h4>{{ 'Basic Information' | translate }}</h4>\n          <hr>\n        </div>\n        <!-- Filter start -->\n        <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div style=\"text-align: start;\">\n                  <label>{{'Warehouse' | translate}}</label>\n                <span class=\"text-danger px-2\">*</span>\n                </div>\n                <div class=\"k-form-field-wrap\">\n                  <kendo-dropdownlist\n                    [data]=\"werehouses\"\n                    textField=\"text\"\n                    valueField=\"value\"\n                    [valuePrimitive]=\"true\"\n                    formControlName=\"wereHouse\"\n                    [allowClear]=\"true\"\n                    style=\"border: 1px solid #ccc; border-radius: 5px; width: 80%;display: block;\">\n                  </kendo-dropdownlist>\n                </div>\n              </div>\n        \n              <div class=\"col-md-4\">\n                <div style=\"text-align: start;\">\n                  <label>{{'Type' | translate}}</label>\n                <span class=\"text-danger px-2\">*</span>\n                </div>\n                <div class=\"k-form-field-wrap\">\n                  <kendo-dropdownlist\n                    #type\n                    [data]=\"types\"\n                    textField=\"name\"\n                    valueField=\"value\"\n                    [valuePrimitive]=\"true\"\n                    formControlName=\"type\"\n                    [disabled]=\"!filterForm.get('wereHouse').value\"\n                    style=\"border: 1px solid #ccc; border-radius: 5px; width: 80%;display: block;\">\n                  </kendo-dropdownlist>\n                </div>\n              </div>\n        \n              <div class=\"col-md-4 d-flex align-items-center pt-4\">\n                <div class=\"form-check\">\n                  <input \n                    class=\"form-check-input\" \n                    type=\"checkbox\" \n                    formControlName=\"zeroBalance\" \n                    id=\"flexCheckChecked\">\n                  <label class=\"form-check-label px-4\" for=\"flexCheckChecked\">\n                    {{ 'Zero Balance' | translate }}\n                  </label>\n                </div>\n              </div>\n        \n              <div class=\"col-md-4 pt-5 d-block\">\n                <div class=\"d-block\" style=\"text-align: start;\">\n                  <label class=\"fw \">{{ 'Product Classifications' | translate }}</label>\n                </div>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"form-check\">\n                    <input \n                      class=\"form-check-input\" \n                      type=\"radio\" \n                      formControlName=\"classification\" \n                      [value]=\"'all'\" \n                      id=\"flexRadioDefault1\">\n                    <label class=\"form-check-label px-4\" for=\"flexRadioDefault1\">\n                      {{ 'All products' | translate }}\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <input \n                      class=\"form-check-input\" \n                      type=\"radio\" \n                      formControlName=\"classification\" \n                      [value]=\"'specific'\" \n                      id=\"flexRadioDefault2\">\n                    <label class=\"form-check-label px-4\" for=\"flexRadioDefault2\">\n                      {{ 'Specific products' | translate }}\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-4 pt-5\" *ngIf=\"filterForm.get('classification').value === 'specific'\">\n                <div class=\"d-block\" style=\"text-align: start;\">\n                  <label class=\"fw \">{{ 'Product' | translate }}<span class=\"text-danger px-2\">*</span></label>\n                </div>\n                <kendo-multiselect\n                    [data]=\"productsArray\"\n                    formControlName=\"products\"\n                    style=\"border: 1px solid #ccc; border-radius: 5px; width: 80%;display: block;\"\n                  ></kendo-multiselect>\n              </div>\n              <div class=\"col-md-12 d-flex justify-content-end\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"filterForm.invalid\">\n                  {{ 'Search' | translate }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n        <!-- Filter end -->\n      </div>\n      <div class=\"products-details\">\n        <div class=\"sub-title\">\n          <i class=\"fa fa-newspaper\"></i>\n          <h4>{{ 'Products Details' | translate }}</h4>\n          <hr>\n        </div>\n        <!-- Products table start -->\n        <div>\n          <kendo-grid [data]=\"filteredProducts\" [selectable]=\"{ mode: 'multiple' }\" [pageSize]=\"10\"\n            [pageable]=\"true\" [sortable]=\"true\" [reorderable]=\"true\" [resizable]=\"true\" [height]=\"300\"\n            [columnMenu]=\"{ filter: true }\" [kendoGridBinding]=\"filteredProducts\">\n              <kendo-grid-column field=\"id\" [title]=\"'ID' | translate\"></kendo-grid-column>\n              <kendo-grid-column field=\"name\" [title]=\"'Name' | translate\"></kendo-grid-column>\n              <kendo-grid-column field=\"quantity\" [title]=\"'On Hand' | translate\"></kendo-grid-column>\n              <kendo-grid-column field=\"type\" [title]=\"'Type' | translate\"></kendo-grid-column>\n          </kendo-grid>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");




var ProductComponent = /** @class */ (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.products = [];
        this.productsArray = [];
        this.types = [];
        this.filteredProducts = [];
        this.allTypes = {};
        this.werehouses = [
            { text: 'Warehouse 1', value: 'wh1' },
            { text: 'Warehouse 2', value: 'wh2' }
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Initialize Form
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            wereHouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            zeroBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: false, disabled: true }),
            classification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 'all', disabled: true }),
            products: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
        this.getAllProducts();
        this.getAllTypes();
        // Listen for changes to the warehouse selection
        this.filterForm.get('wereHouse').valueChanges.subscribe(function (selectedWarehouse) {
            _this.updateTypes(selectedWarehouse);
        });
        this.filterForm.valueChanges.subscribe(function () {
            setTimeout(function () {
                var wereHouseSelected = _this.filterForm.get('wereHouse').valid;
                var typeSelected = _this.filterForm.get('type').valid;
                var classification = _this.filterForm.get('classification').value;
                if (wereHouseSelected && typeSelected) {
                    _this.filterForm.get('zeroBalance').enable();
                    _this.filterForm.get('classification').enable();
                }
                else {
                    _this.filterForm.get('zeroBalance').disable();
                    _this.filterForm.get('classification').disable();
                }
                if (classification === 'specific') {
                    _this.filterForm.get('products').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                }
                else {
                    _this.filterForm.get('products').clearValidators();
                }
                _this.filterForm.get('products').updateValueAndValidity();
            }, 0);
        });
    };
    // Get all products
    ProductComponent.prototype.getAllProducts = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (res) {
            _this.products = res;
            _this.productsArray = res.map(function (product) { return product.name; });
            _this.filteredProducts = _this.products;
        });
    };
    // Get all types and group them by warehouse
    ProductComponent.prototype.getAllTypes = function () {
        var _this = this;
        this._productService.getTypes().subscribe(function (res) {
            _this.types = res;
            _this.allTypes = res.reduce(function (acc, type) {
                (acc[type.warehouse] = acc[type.warehouse] || []).push(type);
                return acc;
            }, {});
            console.log('Grouped types:', _this.allTypes);
        });
    };
    ProductComponent.prototype.updateTypes = function (selectedWarehouse) {
        if (!selectedWarehouse) {
            this.types = [];
            this.productsArray = [];
            return;
        }
        this.types = this.allTypes[selectedWarehouse] || [];
        this.productsArray = this.products
            .filter(function (product) { return product.warehouse === selectedWarehouse; })
            .map(function (product) { return product.name; });
        this.filterForm.get('type').setValue(null);
        this.filterForm.get('products').setValue(null);
    };
    ProductComponent.prototype.onSubmit = function () {
        var _a = this.filterForm.value, wereHouse = _a.wereHouse, type = _a.type, zeroBalance = _a.zeroBalance, classification = _a.classification, products = _a.products;
        this.filteredProducts = this.products.filter(function (p) {
            var isMatch = true;
            // Filter by Type
            if (type.name && p.type !== type.name) {
                isMatch = false;
            }
            // Filter by Warehouse
            if (wereHouse && p.warehouse !== wereHouse) {
                isMatch = false;
            }
            // Filter by Zero Balance
            if (zeroBalance && p.quantity !== 0) {
                isMatch = false;
            }
            // Filter by Product Classification
            if (classification === 'specific' && products && products.length > 0) {
                if (!products.includes(p.name)) {
                    isMatch = false;
                }
            }
            return isMatch;
        });
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/app-translate/app-translate.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modules/app-translate/app-translate.module.ts ***!
  \**********************************************************************/
/*! exports provided: httpLoaderFactory, translateCompilerFactory, AppTranslateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateCompilerFactory", function() { return translateCompilerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTranslateModule", function() { return AppTranslateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_translate_messageformat_compiler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-translate-messageformat-compiler */ "./node_modules/ngx-translate-messageformat-compiler/fesm5/ngx-translate-messageformat-compiler.js");






// Factory function for HTTP Loader
function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
// Factory function for Message Format Compiler
function translateCompilerFactory() {
    return new ngx_translate_messageformat_compiler__WEBPACK_IMPORTED_MODULE_5__["TranslateMessageFormatCompiler"]();
}
// Providers
var translateLoader = {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
    useFactory: httpLoaderFactory,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
};
var translateCompiler = {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateCompiler"],
    useFactory: translateCompilerFactory
};
var AppTranslateModule = /** @class */ (function () {
    function AppTranslateModule() {
    }
    AppTranslateModule_1 = AppTranslateModule;
    AppTranslateModule.forRoot = function () {
        return {
            ngModule: AppTranslateModule_1,
            providers: [translateLoader, translateCompiler]
        };
    };
    AppTranslateModule.forChild = function () {
        return {
            ngModule: AppTranslateModule_1,
            providers: [translateLoader, translateCompiler],
        };
    };
    var AppTranslateModule_1;
    AppTranslateModule = AppTranslateModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        })
    ], AppTranslateModule);
    return AppTranslateModule;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productsUrl = 'assets/files/json/products.json';
        this.typesUrl = 'assets/files/json/types.json';
        this.http = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl);
    };
    ProductService.prototype.getTypes = function () {
        return this.http.get(this.typesUrl);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/translation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/translation.service.ts ***!
  \********************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var TranslationService = /** @class */ (function () {
    function TranslationService(_translateServ) {
        this._translateServ = _translateServ;
    }
    TranslationService.prototype.setDefaultLang = function (lang) {
        this._translateServ.setDefaultLang(lang);
        this.setLanguage(lang);
    };
    TranslationService.prototype.setLanguage = function (lang) {
        this._translateServ.use(lang);
        this.updateDirection(lang);
    };
    TranslationService.prototype.updateDirection = function (lang) {
        var htmlTag = document.documentElement;
        if (lang.toLowerCase() === 'ar') {
            htmlTag.setAttribute('dir', 'rtl');
            htmlTag.setAttribute('lang', 'ar');
        }
        else {
            htmlTag.setAttribute('dir', 'ltr');
            htmlTag.setAttribute('lang', 'en');
        }
    };
    TranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslationService);
    return TranslationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\AHBS\ahbs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map