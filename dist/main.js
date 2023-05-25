/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#backgroundRed {\n    background-color: rgb(102, 0, 0);\n}\n#backgroundBlue {\n    background-color: rgb(21, 0, 141);\n}\n#backgroundGreen {\n    background-color: rgb(0, 54, 0);\n}\n#backgroundYellow {\n    background-color: rgb(80, 78, 0);\n}\n#backgroundPurple {\n    background-color: rgb(51, 0, 80);\n}\n#backgroundWhite {\n    background-color: rgb(255, 255, 255);\n}\n\n#mainDropdown{\n    text-align: center;\n    background-color: rgb(161, 150, 211);\n    color: rgb(37, 3, 70);\n    display: flex;\n    flex-direction: column;\n    width: clamp(96px, 166px, 218px);\n    padding: 6px;\n    gap: 6px;\n    font-size: 1.3rem;\n    position: absolute;\n}\n\n\n.dropdownOption {\n    display: none;\n    border: 0;\n    font-size: 1rem;\n    color: rgb(37, 3, 70);\n}\n\n.dropdownOption:hover {\n    background-color: rgb(139, 63, 211);\n}\n\n.dropdownVisible {\n    display: block;\n    animation: growDown 300ms ease-in-out forwards;\n    transform-origin: top center;\n\n}\n\n@keyframes growDown {\n    0% {\n        transform: scaleY(0);\n    }\n    80% {\n        transform: scaleY(1.1);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n\nbody {\n    overflow: hidden;\n}\n\n.content {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n#imageSliderContainer {\n    display: flex;\n    height: 70vh;\n    width: 70vh;\n    overflow: hidden;\n\n}\n\n#imageSliderContainerHolder {\n    height: 78vh;\n    width: 80vh;\n\n    align-self: center;\n    justify-self: center;\n    margin-top: 8vh;\n    display: grid;\n    grid-template-columns: 5vh 1fr 5vh;\n}\n\n#navNumbersContainer {\n    display: flex;\n    justify-content: space-between;\n    grid-column: span 3;\n}\n\n#backButton {\n    height: 80vh;\n    border: 0;\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n    position: relative;\n    left: 5vh;\n    background-color: rgb(255, 255, 255, 0);\n}\n#nextButton {\n    height: 80vh;\n    border: 0;\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n    position: relative;\n    right: 5vh;\n    background-color: rgb(255, 255, 255, 0);\n}\n.navNumberButton {\n  height: 5vh;\n  width: 5vh;\n  border-radius: 3rem;\n  border: 0;\n  font-size: 1rem;\n  color: rgb(37, 3, 70);\n}\n\n.navNumberButton:hover {\n    background-color: rgb(161, 150, 211);\n}\n\n.sliderImage {\n    display: none;\n}\n\n.visible {\n    display: block;\n}\n\n#navNumbersContainer>.selectedNav {\n    background-color: rgb(34, 0, 73);\n    color: aliceblue;\n}\n\n@media only screen and (max-width: 800px) {\n    body {\n        margin: 0;\n    }\n    #imageSliderContainer {\n        height: 80vw;\n        width: 80vw;\n        align-self: flex-start;\n    }\n    #mainDropdown {\n        width: 128px;\n    }\n\n    #imageSliderContainerHolder {\n        height: 82vw;\n        width: 95vw;\n        grid-template-columns: 7.5vw 1fr 7.5vw;\n        margin-top: 10vh;\n        align-self: center;\n    }\n\n    #backButton {\n        height: 80vw;\n        text-align: center;\n        font-size: 1rem;\n    }\n    #nextButton {\n        height: 80vw;\n        text-align: center;\n        font-size: 1rem;\n    }\n    .navNumberButton {\n      height: 7.5vw;\n      width: 7.5vw;\n      border-radius: 3rem;\n      border: 0;\n      font-size: 0.8rem;\n      text-align: center;\n    }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;AACA;IACI,iCAAiC;AACrC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;IACZ,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,8CAA8C;IAC9C,4BAA4B;;AAEhC;;AAEA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,uCAAuC;AAC3C;AACA;IACI,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,uCAAuC;AAC3C;AACA;EACE,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,qBAAqB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI;QACI,SAAS;IACb;IACA;QACI,YAAY;QACZ,WAAW;QACX,sBAAsB;IAC1B;IACA;QACI,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,sCAAsC;QACtC,gBAAgB;QAChB,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,kBAAkB;QAClB,eAAe;IACnB;IACA;QACI,YAAY;QACZ,kBAAkB;QAClB,eAAe;IACnB;IACA;MACE,aAAa;MACb,YAAY;MACZ,mBAAmB;MACnB,SAAS;MACT,iBAAiB;MACjB,kBAAkB;IACpB;AACJ","sourcesContent":["#backgroundRed {\n    background-color: rgb(102, 0, 0);\n}\n#backgroundBlue {\n    background-color: rgb(21, 0, 141);\n}\n#backgroundGreen {\n    background-color: rgb(0, 54, 0);\n}\n#backgroundYellow {\n    background-color: rgb(80, 78, 0);\n}\n#backgroundPurple {\n    background-color: rgb(51, 0, 80);\n}\n#backgroundWhite {\n    background-color: rgb(255, 255, 255);\n}\n\n#mainDropdown{\n    text-align: center;\n    background-color: rgb(161, 150, 211);\n    color: rgb(37, 3, 70);\n    display: flex;\n    flex-direction: column;\n    width: clamp(96px, 166px, 218px);\n    padding: 6px;\n    gap: 6px;\n    font-size: 1.3rem;\n    position: absolute;\n}\n\n\n.dropdownOption {\n    display: none;\n    border: 0;\n    font-size: 1rem;\n    color: rgb(37, 3, 70);\n}\n\n.dropdownOption:hover {\n    background-color: rgb(139, 63, 211);\n}\n\n.dropdownVisible {\n    display: block;\n    animation: growDown 300ms ease-in-out forwards;\n    transform-origin: top center;\n\n}\n\n@keyframes growDown {\n    0% {\n        transform: scaleY(0);\n    }\n    80% {\n        transform: scaleY(1.1);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n\nbody {\n    overflow: hidden;\n}\n\n.content {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n#imageSliderContainer {\n    display: flex;\n    height: 70vh;\n    width: 70vh;\n    overflow: hidden;\n\n}\n\n#imageSliderContainerHolder {\n    height: 78vh;\n    width: 80vh;\n\n    align-self: center;\n    justify-self: center;\n    margin-top: 8vh;\n    display: grid;\n    grid-template-columns: 5vh 1fr 5vh;\n}\n\n#navNumbersContainer {\n    display: flex;\n    justify-content: space-between;\n    grid-column: span 3;\n}\n\n#backButton {\n    height: 80vh;\n    border: 0;\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n    position: relative;\n    left: 5vh;\n    background-color: rgb(255, 255, 255, 0);\n}\n#nextButton {\n    height: 80vh;\n    border: 0;\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n    position: relative;\n    right: 5vh;\n    background-color: rgb(255, 255, 255, 0);\n}\n.navNumberButton {\n  height: 5vh;\n  width: 5vh;\n  border-radius: 3rem;\n  border: 0;\n  font-size: 1rem;\n  color: rgb(37, 3, 70);\n}\n\n.navNumberButton:hover {\n    background-color: rgb(161, 150, 211);\n}\n\n.sliderImage {\n    display: none;\n}\n\n.visible {\n    display: block;\n}\n\n#navNumbersContainer>.selectedNav {\n    background-color: rgb(34, 0, 73);\n    color: aliceblue;\n}\n\n@media only screen and (max-width: 800px) {\n    body {\n        margin: 0;\n    }\n    #imageSliderContainer {\n        height: 80vw;\n        width: 80vw;\n        align-self: flex-start;\n    }\n    #mainDropdown {\n        width: 128px;\n    }\n\n    #imageSliderContainerHolder {\n        height: 82vw;\n        width: 95vw;\n        grid-template-columns: 7.5vw 1fr 7.5vw;\n        margin-top: 10vh;\n        align-self: center;\n    }\n\n    #backButton {\n        height: 80vw;\n        text-align: center;\n        font-size: 1rem;\n    }\n    #nextButton {\n        height: 80vw;\n        text-align: center;\n        font-size: 1rem;\n    }\n    .navNumberButton {\n      height: 7.5vw;\n      width: 7.5vw;\n      border-radius: 3rem;\n      border: 0;\n      font-size: 0.8rem;\n      text-align: center;\n    }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createImageSlider.js":
/*!**********************************!*\
  !*** ./src/createImageSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImageSlider: () => (/* binding */ createImageSlider)
/* harmony export */ });
/* harmony import */ var _Images_bao1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/bao1.jpg */ "./src/Images/bao1.jpg");
/* harmony import */ var _Images_bao2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/bao2.jpg */ "./src/Images/bao2.jpg");
/* harmony import */ var _Images_bao3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/bao3.jpg */ "./src/Images/bao3.jpg");
/* harmony import */ var _Images_bao4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/bao4.jpg */ "./src/Images/bao4.jpg");
/* harmony import */ var _Images_bao5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images/bao5.jpg */ "./src/Images/bao5.jpg");
/* harmony import */ var _Images_cat1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Images/cat1.jpg */ "./src/Images/cat1.jpg");
/* harmony import */ var _Images_cat2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Images/cat2.jpg */ "./src/Images/cat2.jpg");
/* harmony import */ var _Images_cat3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Images/cat3.jpg */ "./src/Images/cat3.jpg");
/* harmony import */ var _Images_cat4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Images/cat4.jpg */ "./src/Images/cat4.jpg");
/* harmony import */ var _Images_cat5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Images/cat5.jpg */ "./src/Images/cat5.jpg");
/* harmony import */ var _sliderButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sliderButtons */ "./src/sliderButtons.js");













const imageArray = [_Images_bao1_jpg__WEBPACK_IMPORTED_MODULE_0__, _Images_bao2_jpg__WEBPACK_IMPORTED_MODULE_1__, _Images_bao3_jpg__WEBPACK_IMPORTED_MODULE_2__, _Images_bao4_jpg__WEBPACK_IMPORTED_MODULE_3__, _Images_bao5_jpg__WEBPACK_IMPORTED_MODULE_4__, _Images_cat1_jpg__WEBPACK_IMPORTED_MODULE_5__, _Images_cat2_jpg__WEBPACK_IMPORTED_MODULE_6__, _Images_cat3_jpg__WEBPACK_IMPORTED_MODULE_7__, _Images_cat4_jpg__WEBPACK_IMPORTED_MODULE_8__, _Images_cat5_jpg__WEBPACK_IMPORTED_MODULE_9__];

function createImageSlider() {
  const content = document.getElementById('content');
  const imageSliderContainer = document.createElement('div');
  imageSliderContainer.id = 'imageSliderContainer';
  const navNumbersContainer = document.createElement('div');
  navNumbersContainer.id = 'navNumbersContainer';

  for (let i = 0; i < imageArray.length; i += 1) {
    const imageItem = new Image();
    imageItem.id = `sliderImage-${i}`;
    imageItem.classList.add('sliderImage');
    imageItem.src = imageArray[i];
    imageSliderContainer.appendChild(imageItem);
    const navNumber = document.createElement('button');
    const navNumberText = i + 1;
    navNumber.classList.add('navNumberButton');
    navNumber.textContent = navNumberText;
    navNumber.id = `navNumber-${i}`;
    navNumbersContainer.appendChild(navNumber);
  }

  const imageSliderContainerHolder = document.createElement('div');
  imageSliderContainerHolder.id = 'imageSliderContainerHolder';

  const backButton = document.createElement('button');
  backButton.id = 'backButton';
  backButton.textContent = '<';

  const nextButton = document.createElement('button');
  nextButton.id = 'nextButton';
  nextButton.textContent = '>';

  backButton.addEventListener('click', () => {
    (0,_sliderButtons__WEBPACK_IMPORTED_MODULE_10__.backButtonFunction)();
  });

  nextButton.addEventListener('click', () => {
    (0,_sliderButtons__WEBPACK_IMPORTED_MODULE_10__.nextButtonFunction)();
  });

  navNumbersContainer.addEventListener('click', (e) => {
    if ((e.target.id.split('-')[0]) === ('navNumber')) {
      const clickedButton = e.target.id.split('-')[1];
      (0,_sliderButtons__WEBPACK_IMPORTED_MODULE_10__.navButtonFunction)(clickedButton);
    }
  });

  imageSliderContainerHolder.appendChild(backButton);
  imageSliderContainerHolder.appendChild(imageSliderContainer);
  imageSliderContainerHolder.appendChild(nextButton);
  imageSliderContainerHolder.appendChild(navNumbersContainer);

  content.appendChild(imageSliderContainerHolder);

  (0,_sliderButtons__WEBPACK_IMPORTED_MODULE_10__.showImage)(0, 0);
}




/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDropdown: () => (/* binding */ createDropdown)
/* harmony export */ });
/* harmony import */ var _updateBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateBackground */ "./src/updateBackground.js");


function createDropdown(buttonArray) {
  const content = document.getElementById('content');

  const dropdownHolder = document.createElement('div');
  dropdownHolder.id = 'dropdownHolder';

  const mainDropdown = document.createElement('div');
  mainDropdown.textContent = 'Select Background';
  mainDropdown.id = 'mainDropdown';
  
  for (let i = 0; i < buttonArray.length; i += 1) {
    const dropdownOption = document.createElement('button');
    dropdownOption.type = 'button';
    dropdownOption.classList.add('dropdownOption');
    dropdownOption.id = `dropdownOption-${buttonArray[i]}`;
    dropdownOption.textContent = `${buttonArray[i]}`;
    dropdownOption.addEventListener('click', () => {
        const colourSelection = dropdownOption.id.split('-')[1];
        (0,_updateBackground__WEBPACK_IMPORTED_MODULE_0__.updateBackground)(colourSelection);
    });
    mainDropdown.appendChild(dropdownOption);
  }

  mainDropdown.addEventListener('mouseover', () => {
    const dropdownOptionButtons = document.querySelectorAll('.dropdownOption');
    dropdownOptionButtons.forEach((option) => {
      option.classList.add('dropdownVisible');
    });
  }); 

  mainDropdown.addEventListener('mouseout', () => {
    const dropdownOptionButtons = document.querySelectorAll('.dropdownOption');
    dropdownOptionButtons.forEach((option) => {
      option.classList.remove('dropdownVisible');
    });
  }); 

  content.appendChild(mainDropdown);
}




/***/ }),

/***/ "./src/sliderButtons.js":
/*!******************************!*\
  !*** ./src/sliderButtons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backButtonFunction: () => (/* binding */ backButtonFunction),
/* harmony export */   navButtonFunction: () => (/* binding */ navButtonFunction),
/* harmony export */   nextButtonFunction: () => (/* binding */ nextButtonFunction),
/* harmony export */   showImage: () => (/* binding */ showImage)
/* harmony export */ });
let autoScroll;

function autoScrollActivate() {
  if (autoScroll) {
    clearTimeout(autoScroll);
  }
  autoScroll = setTimeout(nextButtonFunction, 5000);
}

function showImage(currentImageIndex, newImageIndex) {

  const oldImageID = `sliderImage-${currentImageIndex}`;
  const oldImage = document.getElementById(oldImageID);
  oldImage.classList.remove('visible');
  const newImageID = `sliderImage-${newImageIndex}`;
  const newImage = document.getElementById(newImageID);
  newImage.classList.add('visible');

  const oldTextID = `navNumber-${currentImageIndex}`;
  const oldText = document.getElementById(oldTextID);
  oldText.classList.remove('selectedNav');

  const newTextID = `navNumber-${newImageIndex}`;
  const newText = document.getElementById(newTextID);
  newText.classList.add('selectedNav');
  autoScrollActivate();
}

function backButtonFunction() {
  const oldImage = document.querySelector('.visible');
  const oldImageIndex = oldImage.id.split('-')[1];

  if (oldImageIndex > 0) {
    const newImageIndex = (+oldImageIndex - 1);
    showImage(oldImageIndex, newImageIndex);
  } else {
    showImage(oldImageIndex, 9);
  }
}

function nextButtonFunction() {
  const oldImage = document.querySelector('.visible');
  const oldImageIndex = oldImage.id.split('-')[1];

  if (oldImageIndex < 9) {
    const newImageIndex = (+oldImageIndex + 1);
    showImage(oldImageIndex, newImageIndex);
  } else {
    showImage(oldImageIndex, 0);
  }
}

function navButtonFunction(buttonIndex) {
    const oldImage = document.querySelector('.visible');
    const oldImageIndex = oldImage.id.split('-')[1];
    showImage(oldImageIndex, buttonIndex);
}




/***/ }),

/***/ "./src/updateBackground.js":
/*!*********************************!*\
  !*** ./src/updateBackground.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateBackground: () => (/* binding */ updateBackground)
/* harmony export */ });
function updateBackground(colourSelection) {
    document.body.id = `background${colourSelection}`;
}



/***/ }),

/***/ "./src/Images/bao1.jpg":
/*!*****************************!*\
  !*** ./src/Images/bao1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b795aae4dddb4b7f1b38.jpg";

/***/ }),

/***/ "./src/Images/bao2.jpg":
/*!*****************************!*\
  !*** ./src/Images/bao2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c84df28703d991386e90.jpg";

/***/ }),

/***/ "./src/Images/bao3.jpg":
/*!*****************************!*\
  !*** ./src/Images/bao3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7b8232b9fce314d65e4.jpg";

/***/ }),

/***/ "./src/Images/bao4.jpg":
/*!*****************************!*\
  !*** ./src/Images/bao4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fda47e03ba210a3cc6d3.jpg";

/***/ }),

/***/ "./src/Images/bao5.jpg":
/*!*****************************!*\
  !*** ./src/Images/bao5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c51791e3c92832e4854b.jpg";

/***/ }),

/***/ "./src/Images/cat1.jpg":
/*!*****************************!*\
  !*** ./src/Images/cat1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "131b4ba6e92c3c657496.jpg";

/***/ }),

/***/ "./src/Images/cat2.jpg":
/*!*****************************!*\
  !*** ./src/Images/cat2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b47791d82b6919b16467.jpg";

/***/ }),

/***/ "./src/Images/cat3.jpg":
/*!*****************************!*\
  !*** ./src/Images/cat3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "719acd50578914a62ef0.jpg";

/***/ }),

/***/ "./src/Images/cat4.jpg":
/*!*****************************!*\
  !*** ./src/Images/cat4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebd8355d1e3004c226ab.jpg";

/***/ }),

/***/ "./src/Images/cat5.jpg":
/*!*****************************!*\
  !*** ./src/Images/cat5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11eb31a94def5cce31f2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./src/dropdown.js");
/* harmony import */ var _createImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createImageSlider */ "./src/createImageSlider.js");




const buttonArray = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'White'];
(0,_dropdown__WEBPACK_IMPORTED_MODULE_1__.createDropdown)(buttonArray);

(0,_createImageSlider__WEBPACK_IMPORTED_MODULE_2__.createImageSlider)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vc3JjL2NyZWF0ZUltYWdlU2xpZGVyLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL3NyYy9zbGlkZXJCdXR0b25zLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9zcmMvdXBkYXRlQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2JhY2tncm91bmRSZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAwLCAwKTtcXG59XFxuI2JhY2tncm91bmRCbHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAwLCAxNDEpO1xcbn1cXG4jYmFja2dyb3VuZEdyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDU0LCAwKTtcXG59XFxuI2JhY2tncm91bmRZZWxsb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDc4LCAwKTtcXG59XFxuI2JhY2tncm91bmRQdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDAsIDgwKTtcXG59XFxuI2JhY2tncm91bmRXaGl0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI21haW5Ecm9wZG93bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNTAsIDIxMSk7XFxuICAgIGNvbG9yOiByZ2IoMzcsIDMsIDcwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGNsYW1wKDk2cHgsIDE2NnB4LCAyMThweCk7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcblxcbi5kcm9wZG93bk9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxufVxcblxcbi5kcm9wZG93bk9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDYzLCAyMTEpO1xcbn1cXG5cXG4uZHJvcGRvd25WaXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGFuaW1hdGlvbjogZ3Jvd0Rvd24gMzAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxuXFxufVxcblxcbkBrZXlmcmFtZXMgZ3Jvd0Rvd24ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcbiAgICA4MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB9XFxufVxcblxcbmJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2ltYWdlU2xpZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogNzB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG59XFxuXFxuI2ltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyIHtcXG4gICAgaGVpZ2h0OiA3OHZoO1xcbiAgICB3aWR0aDogODB2aDtcXG5cXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogOHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDV2aCAxZnIgNXZoO1xcbn1cXG5cXG4jbmF2TnVtYmVyc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG59XFxuXFxuI2JhY2tCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMzcsIDMsIDcwKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuI25leHRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMzcsIDMsIDcwKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcbi5uYXZOdW1iZXJCdXR0b24ge1xcbiAgaGVpZ2h0OiA1dmg7XFxuICB3aWR0aDogNXZoO1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiByZ2IoMzcsIDMsIDcwKTtcXG59XFxuXFxuLm5hdk51bWJlckJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1MCwgMjExKTtcXG59XFxuXFxuLnNsaWRlckltYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI25hdk51bWJlcnNDb250YWluZXI+LnNlbGVjdGVkTmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAwLCA3Myk7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gICAgI2ltYWdlU2xpZGVyQ29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogODB2dztcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgfVxcbiAgICAjbWFpbkRyb3Bkb3duIHtcXG4gICAgICAgIHdpZHRoOiAxMjhweDtcXG4gICAgfVxcblxcbiAgICAjaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXIge1xcbiAgICAgICAgaGVpZ2h0OiA4MnZ3O1xcbiAgICAgICAgd2lkdGg6IDk1dnc7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcuNXZ3IDFmciA3LjV2dztcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2JhY2tCdXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA4MHZ3O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuICAgICNuZXh0QnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogODB2dztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAubmF2TnVtYmVyQnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6IDcuNXZ3O1xcbiAgICAgIHdpZHRoOiA3LjV2dztcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksY0FBYztJQUNkLDhDQUE4QztJQUM5Qyw0QkFBNEI7O0FBRWhDOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1Q0FBdUM7QUFDM0M7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxzQ0FBc0M7UUFDdEMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7TUFDRSxhQUFhO01BQ2IsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLGtCQUFrQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNiYWNrZ3JvdW5kUmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMiwgMCwgMCk7XFxufVxcbiNiYWNrZ3JvdW5kQmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMCwgMTQxKTtcXG59XFxuI2JhY2tncm91bmRHcmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1NCwgMCk7XFxufVxcbiNiYWNrZ3JvdW5kWWVsbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA3OCwgMCk7XFxufVxcbiNiYWNrZ3JvdW5kUHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAwLCA4MCk7XFxufVxcbiNiYWNrZ3JvdW5kV2hpdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNtYWluRHJvcGRvd257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTUwLCAyMTEpO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBjbGFtcCg5NnB4LCAxNjZweCwgMjE4cHgpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5cXG4uZHJvcGRvd25PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHJnYigzNywgMywgNzApO1xcbn1cXG5cXG4uZHJvcGRvd25PcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA2MywgMjExKTtcXG59XFxuXFxuLmRyb3Bkb3duVmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhbmltYXRpb246IGdyb3dEb3duIDMwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dEb3duIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNpbWFnZVNsaWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDcwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxufVxcblxcbiNpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlciB7XFxuICAgIGhlaWdodDogNzh2aDtcXG4gICAgd2lkdGg6IDgwdmg7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDh2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1dmggMWZyIDV2aDtcXG59XFxuXFxuI25hdk51bWJlcnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbiNiYWNrQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcbiNuZXh0QnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG4ubmF2TnVtYmVyQnV0dG9uIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxufVxcblxcbi5uYXZOdW1iZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNTAsIDIxMSk7XFxufVxcblxcbi5zbGlkZXJJbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNuYXZOdW1iZXJzQ29udGFpbmVyPi5zZWxlY3RlZE5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMCwgNzMpO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgICNpbWFnZVNsaWRlckNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDgwdnc7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gICAgI21haW5Ecm9wZG93biB7XFxuICAgICAgICB3aWR0aDogMTI4cHg7XFxuICAgIH1cXG5cXG4gICAgI2ltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyIHtcXG4gICAgICAgIGhlaWdodDogODJ2dztcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3LjV2dyAxZnIgNy41dnc7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNiYWNrQnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogODB2dztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAjbmV4dEJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDgwdnc7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLm5hdk51bWJlckJ1dHRvbiB7XFxuICAgICAgaGVpZ2h0OiA3LjV2dztcXG4gICAgICB3aWR0aDogNy41dnc7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW1hZ2UwIGZyb20gJy4vSW1hZ2VzL2JhbzEuanBnJztcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi9JbWFnZXMvYmFvMi5qcGcnO1xuaW1wb3J0IGltYWdlMiBmcm9tICcuL0ltYWdlcy9iYW8zLmpwZyc7XG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4vSW1hZ2VzL2JhbzQuanBnJztcbmltcG9ydCBpbWFnZTQgZnJvbSAnLi9JbWFnZXMvYmFvNS5qcGcnO1xuaW1wb3J0IGltYWdlNSBmcm9tICcuL0ltYWdlcy9jYXQxLmpwZyc7XG5pbXBvcnQgaW1hZ2U2IGZyb20gJy4vSW1hZ2VzL2NhdDIuanBnJztcbmltcG9ydCBpbWFnZTcgZnJvbSAnLi9JbWFnZXMvY2F0My5qcGcnO1xuaW1wb3J0IGltYWdlOCBmcm9tICcuL0ltYWdlcy9jYXQ0LmpwZyc7XG5pbXBvcnQgaW1hZ2U5IGZyb20gJy4vSW1hZ2VzL2NhdDUuanBnJztcblxuaW1wb3J0IHtcbiAgYmFja0J1dHRvbkZ1bmN0aW9uLCBuZXh0QnV0dG9uRnVuY3Rpb24sIHNob3dJbWFnZSwgbmF2QnV0dG9uRnVuY3Rpb24sXG59IGZyb20gJy4vc2xpZGVyQnV0dG9ucyc7XG5cbmNvbnN0IGltYWdlQXJyYXkgPSBbaW1hZ2UwLCBpbWFnZTEsIGltYWdlMiwgaW1hZ2UzLCBpbWFnZTQsIGltYWdlNSwgaW1hZ2U2LCBpbWFnZTcsIGltYWdlOCwgaW1hZ2U5XTtcblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VTbGlkZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBpbWFnZVNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNsaWRlckNvbnRhaW5lci5pZCA9ICdpbWFnZVNsaWRlckNvbnRhaW5lcic7XG4gIGNvbnN0IG5hdk51bWJlcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2TnVtYmVyc0NvbnRhaW5lci5pZCA9ICduYXZOdW1iZXJzQ29udGFpbmVyJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBpbWFnZUl0ZW0gPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZUl0ZW0uaWQgPSBgc2xpZGVySW1hZ2UtJHtpfWA7XG4gICAgaW1hZ2VJdGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlckltYWdlJyk7XG4gICAgaW1hZ2VJdGVtLnNyYyA9IGltYWdlQXJyYXlbaV07XG4gICAgaW1hZ2VTbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VJdGVtKTtcbiAgICBjb25zdCBuYXZOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuYXZOdW1iZXJUZXh0ID0gaSArIDE7XG4gICAgbmF2TnVtYmVyLmNsYXNzTGlzdC5hZGQoJ25hdk51bWJlckJ1dHRvbicpO1xuICAgIG5hdk51bWJlci50ZXh0Q29udGVudCA9IG5hdk51bWJlclRleHQ7XG4gICAgbmF2TnVtYmVyLmlkID0gYG5hdk51bWJlci0ke2l9YDtcbiAgICBuYXZOdW1iZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdk51bWJlcik7XG4gIH1cblxuICBjb25zdCBpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlci5pZCA9ICdpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlcic7XG5cbiAgY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBiYWNrQnV0dG9uLmlkID0gJ2JhY2tCdXR0b24nO1xuICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gJzwnO1xuXG4gIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV4dEJ1dHRvbi5pZCA9ICduZXh0QnV0dG9uJztcbiAgbmV4dEJ1dHRvbi50ZXh0Q29udGVudCA9ICc+JztcblxuICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJhY2tCdXR0b25GdW5jdGlvbigpO1xuICB9KTtcblxuICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5leHRCdXR0b25GdW5jdGlvbigpO1xuICB9KTtcblxuICBuYXZOdW1iZXJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoKGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMF0pID09PSAoJ25hdk51bWJlcicpKSB7XG4gICAgICBjb25zdCBjbGlja2VkQnV0dG9uID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgIG5hdkJ1dHRvbkZ1bmN0aW9uKGNsaWNrZWRCdXR0b24pO1xuICAgIH1cbiAgfSk7XG5cbiAgaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXIuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbik7XG4gIGltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyLmFwcGVuZENoaWxkKGltYWdlU2xpZGVyQ29udGFpbmVyKTtcbiAgaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXIuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XG4gIGltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyLmFwcGVuZENoaWxkKG5hdk51bWJlcnNDb250YWluZXIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXIpO1xuXG4gIHNob3dJbWFnZSgwLCAwKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW1hZ2VTbGlkZXIgfTtcbiIsImltcG9ydCB7IHVwZGF0ZUJhY2tncm91bmQgfSBmcm9tICcuL3VwZGF0ZUJhY2tncm91bmQnO1xuXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bihidXR0b25BcnJheSkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBkcm9wZG93bkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkcm9wZG93bkhvbGRlci5pZCA9ICdkcm9wZG93bkhvbGRlcic7XG5cbiAgY29uc3QgbWFpbkRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5Ecm9wZG93bi50ZXh0Q29udGVudCA9ICdTZWxlY3QgQmFja2dyb3VuZCc7XG4gIG1haW5Ecm9wZG93bi5pZCA9ICdtYWluRHJvcGRvd24nO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25BcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJvcGRvd25PcHRpb24udHlwZSA9ICdidXR0b24nO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duT3B0aW9uJyk7XG4gICAgZHJvcGRvd25PcHRpb24uaWQgPSBgZHJvcGRvd25PcHRpb24tJHtidXR0b25BcnJheVtpXX1gO1xuICAgIGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ID0gYCR7YnV0dG9uQXJyYXlbaV19YDtcbiAgICBkcm9wZG93bk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3VyU2VsZWN0aW9uID0gZHJvcGRvd25PcHRpb24uaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgdXBkYXRlQmFja2dyb3VuZChjb2xvdXJTZWxlY3Rpb24pO1xuICAgIH0pO1xuICAgIG1haW5Ecm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bk9wdGlvbik7XG4gIH1cblxuICBtYWluRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bk9wdGlvbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uQnV0dG9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93blZpc2libGUnKTtcbiAgICB9KTtcbiAgfSk7IFxuXG4gIG1haW5Ecm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25PcHRpb24nKTtcbiAgICBkcm9wZG93bk9wdGlvbkJ1dHRvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25WaXNpYmxlJyk7XG4gICAgfSk7XG4gIH0pOyBcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Ecm9wZG93bik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZURyb3Bkb3duIH07XG4iLCJsZXQgYXV0b1Njcm9sbDtcblxuZnVuY3Rpb24gYXV0b1Njcm9sbEFjdGl2YXRlKCkge1xuICBpZiAoYXV0b1Njcm9sbCkge1xuICAgIGNsZWFyVGltZW91dChhdXRvU2Nyb2xsKTtcbiAgfVxuICBhdXRvU2Nyb2xsID0gc2V0VGltZW91dChuZXh0QnV0dG9uRnVuY3Rpb24sIDUwMDApO1xufVxuXG5mdW5jdGlvbiBzaG93SW1hZ2UoY3VycmVudEltYWdlSW5kZXgsIG5ld0ltYWdlSW5kZXgpIHtcblxuICBjb25zdCBvbGRJbWFnZUlEID0gYHNsaWRlckltYWdlLSR7Y3VycmVudEltYWdlSW5kZXh9YDtcbiAgY29uc3Qgb2xkSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRJbWFnZUlEKTtcbiAgb2xkSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICBjb25zdCBuZXdJbWFnZUlEID0gYHNsaWRlckltYWdlLSR7bmV3SW1hZ2VJbmRleH1gO1xuICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0ltYWdlSUQpO1xuICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cbiAgY29uc3Qgb2xkVGV4dElEID0gYG5hdk51bWJlci0ke2N1cnJlbnRJbWFnZUluZGV4fWA7XG4gIGNvbnN0IG9sZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRUZXh0SUQpO1xuICBvbGRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTmF2Jyk7XG5cbiAgY29uc3QgbmV3VGV4dElEID0gYG5hdk51bWJlci0ke25ld0ltYWdlSW5kZXh9YDtcbiAgY29uc3QgbmV3VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld1RleHRJRCk7XG4gIG5ld1RleHQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWROYXYnKTtcbiAgYXV0b1Njcm9sbEFjdGl2YXRlKCk7XG59XG5cbmZ1bmN0aW9uIGJhY2tCdXR0b25GdW5jdGlvbigpIHtcbiAgY29uc3Qgb2xkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJsZScpO1xuICBjb25zdCBvbGRJbWFnZUluZGV4ID0gb2xkSW1hZ2UuaWQuc3BsaXQoJy0nKVsxXTtcblxuICBpZiAob2xkSW1hZ2VJbmRleCA+IDApIHtcbiAgICBjb25zdCBuZXdJbWFnZUluZGV4ID0gKCtvbGRJbWFnZUluZGV4IC0gMSk7XG4gICAgc2hvd0ltYWdlKG9sZEltYWdlSW5kZXgsIG5ld0ltYWdlSW5kZXgpO1xuICB9IGVsc2Uge1xuICAgIHNob3dJbWFnZShvbGRJbWFnZUluZGV4LCA5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0QnV0dG9uRnVuY3Rpb24oKSB7XG4gIGNvbnN0IG9sZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2libGUnKTtcbiAgY29uc3Qgb2xkSW1hZ2VJbmRleCA9IG9sZEltYWdlLmlkLnNwbGl0KCctJylbMV07XG5cbiAgaWYgKG9sZEltYWdlSW5kZXggPCA5KSB7XG4gICAgY29uc3QgbmV3SW1hZ2VJbmRleCA9ICgrb2xkSW1hZ2VJbmRleCArIDEpO1xuICAgIHNob3dJbWFnZShvbGRJbWFnZUluZGV4LCBuZXdJbWFnZUluZGV4KTtcbiAgfSBlbHNlIHtcbiAgICBzaG93SW1hZ2Uob2xkSW1hZ2VJbmRleCwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmF2QnV0dG9uRnVuY3Rpb24oYnV0dG9uSW5kZXgpIHtcbiAgICBjb25zdCBvbGRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmxlJyk7XG4gICAgY29uc3Qgb2xkSW1hZ2VJbmRleCA9IG9sZEltYWdlLmlkLnNwbGl0KCctJylbMV07XG4gICAgc2hvd0ltYWdlKG9sZEltYWdlSW5kZXgsIGJ1dHRvbkluZGV4KTtcbn1cblxuZXhwb3J0IHsgYmFja0J1dHRvbkZ1bmN0aW9uLCBuZXh0QnV0dG9uRnVuY3Rpb24sIHNob3dJbWFnZSwgbmF2QnV0dG9uRnVuY3Rpb24gfTtcbiIsImZ1bmN0aW9uIHVwZGF0ZUJhY2tncm91bmQoY29sb3VyU2VsZWN0aW9uKSB7XG4gICAgZG9jdW1lbnQuYm9keS5pZCA9IGBiYWNrZ3JvdW5kJHtjb2xvdXJTZWxlY3Rpb259YDtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQmFja2dyb3VuZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVEcm9wZG93biB9IGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VTbGlkZXIgfSBmcm9tICcuL2NyZWF0ZUltYWdlU2xpZGVyJztcblxuY29uc3QgYnV0dG9uQXJyYXkgPSBbJ1JlZCcsICdCbHVlJywgJ0dyZWVuJywgJ1llbGxvdycsICdQdXJwbGUnLCAnV2hpdGUnXTtcbmNyZWF0ZURyb3Bkb3duKGJ1dHRvbkFycmF5KTtcblxuY3JlYXRlSW1hZ2VTbGlkZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==