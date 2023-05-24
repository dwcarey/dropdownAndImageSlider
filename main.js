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
___CSS_LOADER_EXPORT___.push([module.id, "#backgroundRed {\n    background-color: rgb(141, 5, 5);\n}\n#backgroundBlue {\n    background-color: rgb(34, 12, 156);\n}\n#backgroundGreen {\n    background-color: rgb(2, 94, 2);\n}\n#backgroundYellow {\n    background-color: rgb(194, 191, 3);\n}\n#backgroundPurple {\n    background-color: rgb(91, 5, 141);\n}\n#backgroundWhite {\n    background-color: rgb(255, 255, 255);\n}\n\n#mainDropdown{\n    text-align: center;\n    background-color: rgb(161, 150, 211);\n    color: rgb(37, 3, 70);\n    display: flex;\n    flex-direction: column;\n    width: clamp(96px, 166px, 218px);\n    padding: 6px;\n    gap: 6px;\n    font-size: 1.3rem;\n    position: absolute;\n}\n\n\n.dropdownOption {\n    display: none;\n    border: 0;\n    font-size: 1rem;\n    color: rgb(37, 3, 70);\n}\n\n.dropdownOption:hover {\n    background-color: rgb(139, 63, 211);\n}\n\n.dropdownVisible {\n    display: block;\n    animation: growDown 300ms ease-in-out forwards;\n    transform-origin: top center;\n\n}\n\n@keyframes growDown {\n    0% {\n        transform: scaleY(0);\n    }\n    80% {\n        transform: scaleY(1.1);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n\nbody {\n    overflow: hidden;\n}\n\n.content {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n#imageSliderContainer {\n    display: flex;\n    height: 70vh;\n    width: 70vh;\n    overflow: hidden;\n\n}\n\n#imageSliderContainerHolder {\n    height: 78vh;\n    width: 80vh;\n\n    align-self: center;\n    justify-self: center;\n    margin-top: 8vh;\n    display: grid;\n    grid-template-columns: 5vh 1fr 5vh;\n}\n\n#navNumbersContainer {\n    display: flex;\n    justify-content: space-between;\n    grid-column: span 3;\n}\n\n#backButton {\n    height: 70vh;\n    border: 0;\n    background-color: rgb(161, 150, 211);\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n}\n#nextButton {\n    height: 70vh;\n    border: 0;\n    background-color: rgb(161, 150, 211);\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n}\n.navNumberButton {\n  height: 5vh;\n  width: 5vh;\n  border-radius: 3rem;\n  border: 0;\n  font-size: 1rem;\n  color: rgb(37, 3, 70);\n}\n\n.navNumberButton:hover {\n    background-color: rgb(161, 150, 211);\n}\n\n.sliderImage {\n    display: none;\n}\n\n.visible {\n    display: block;\n}\n\n.selectedNav {\n    background-color: rgb(34, 0, 73);\n    color: aliceblue;\n}\n\n@media only screen and (max-width: 800px) {\n    body {\n        margin: 0;\n    }\n    #imageSliderContainer {\n        height: 70vw;\n        width: 70vw;\n        align-self: flex-start;\n    }\n\n    #imageSliderContainerHolder {\n        height: 82vw;\n        width: 85vw;\n        grid-template-columns: 7.5vw 1fr 7.5vw;\n    }\n\n    #backButton {\n        height: 70vw;\n    }\n    #nextButton {\n        height: 70vw;\n    }\n    .navNumberButton {\n      height: 7.5vw;\n      width: 7.5vw;\n      border-radius: 3rem;\n      border: 0;\n    }\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,kCAAkC;AACtC;AACA;IACI,iCAAiC;AACrC;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;IACZ,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,8CAA8C;IAC9C,4BAA4B;;AAEhC;;AAEA;IACI;QACI,oBAAoB;IACxB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,oCAAoC;IACpC,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,SAAS;IACT,oCAAoC;IACpC,iBAAiB;IACjB,qBAAqB;AACzB;AACA;EACE,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,qBAAqB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI;QACI,SAAS;IACb;IACA;QACI,YAAY;QACZ,WAAW;QACX,sBAAsB;IAC1B;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,sCAAsC;IAC1C;;IAEA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;MACE,aAAa;MACb,YAAY;MACZ,mBAAmB;MACnB,SAAS;IACX;AACJ","sourcesContent":["#backgroundRed {\n    background-color: rgb(141, 5, 5);\n}\n#backgroundBlue {\n    background-color: rgb(34, 12, 156);\n}\n#backgroundGreen {\n    background-color: rgb(2, 94, 2);\n}\n#backgroundYellow {\n    background-color: rgb(194, 191, 3);\n}\n#backgroundPurple {\n    background-color: rgb(91, 5, 141);\n}\n#backgroundWhite {\n    background-color: rgb(255, 255, 255);\n}\n\n#mainDropdown{\n    text-align: center;\n    background-color: rgb(161, 150, 211);\n    color: rgb(37, 3, 70);\n    display: flex;\n    flex-direction: column;\n    width: clamp(96px, 166px, 218px);\n    padding: 6px;\n    gap: 6px;\n    font-size: 1.3rem;\n    position: absolute;\n}\n\n\n.dropdownOption {\n    display: none;\n    border: 0;\n    font-size: 1rem;\n    color: rgb(37, 3, 70);\n}\n\n.dropdownOption:hover {\n    background-color: rgb(139, 63, 211);\n}\n\n.dropdownVisible {\n    display: block;\n    animation: growDown 300ms ease-in-out forwards;\n    transform-origin: top center;\n\n}\n\n@keyframes growDown {\n    0% {\n        transform: scaleY(0);\n    }\n    80% {\n        transform: scaleY(1.1);\n    }\n    100% {\n        transform: scaleY(1);\n    }\n}\n\nbody {\n    overflow: hidden;\n}\n\n.content {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n#imageSliderContainer {\n    display: flex;\n    height: 70vh;\n    width: 70vh;\n    overflow: hidden;\n\n}\n\n#imageSliderContainerHolder {\n    height: 78vh;\n    width: 80vh;\n\n    align-self: center;\n    justify-self: center;\n    margin-top: 8vh;\n    display: grid;\n    grid-template-columns: 5vh 1fr 5vh;\n}\n\n#navNumbersContainer {\n    display: flex;\n    justify-content: space-between;\n    grid-column: span 3;\n}\n\n#backButton {\n    height: 70vh;\n    border: 0;\n    background-color: rgb(161, 150, 211);\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n}\n#nextButton {\n    height: 70vh;\n    border: 0;\n    background-color: rgb(161, 150, 211);\n    font-size: 2.5rem;\n    color: rgb(37, 3, 70);\n}\n.navNumberButton {\n  height: 5vh;\n  width: 5vh;\n  border-radius: 3rem;\n  border: 0;\n  font-size: 1rem;\n  color: rgb(37, 3, 70);\n}\n\n.navNumberButton:hover {\n    background-color: rgb(161, 150, 211);\n}\n\n.sliderImage {\n    display: none;\n}\n\n.visible {\n    display: block;\n}\n\n.selectedNav {\n    background-color: rgb(34, 0, 73);\n    color: aliceblue;\n}\n\n@media only screen and (max-width: 800px) {\n    body {\n        margin: 0;\n    }\n    #imageSliderContainer {\n        height: 70vw;\n        width: 70vw;\n        align-self: flex-start;\n    }\n\n    #imageSliderContainerHolder {\n        height: 82vw;\n        width: 85vw;\n        grid-template-columns: 7.5vw 1fr 7.5vw;\n    }\n\n    #backButton {\n        height: 70vw;\n    }\n    #nextButton {\n        height: 70vw;\n    }\n    .navNumberButton {\n      height: 7.5vw;\n      width: 7.5vw;\n      border-radius: 3rem;\n      border: 0;\n    }\n}\n\n\n"],"sourceRoot":""}]);
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
}

function backButtonFunction() {
  const oldImage = document.querySelector('.visible');
  const oldImageIndex = oldImage.id.split('-')[1];

  if (oldImageIndex > 0) {
    const newImageIndex = (+oldImageIndex - 1);
    showImage(oldImageIndex, newImageIndex);
  } else {
    // do nothing
  }
}

function nextButtonFunction() {
  const oldImage = document.querySelector('.visible');
  const oldImageIndex = oldImage.id.split('-')[1];

  if (oldImageIndex < 9) {
    const newImageIndex = (+oldImageIndex + 1);
    showImage(oldImageIndex, newImageIndex);
  } else {
    // do nothing
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ1k7O0FBRXhEO0FBQ0EseURBQWM7O0FBRWQscUVBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vc3JjL2NyZWF0ZUltYWdlU2xpZGVyLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci8uL3NyYy9zbGlkZXJCdXR0b25zLmpzIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvLi9zcmMvdXBkYXRlQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Ryb3Bkb3duYW5kaW1hZ2VzbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHJvcGRvd25hbmRpbWFnZXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kcm9wZG93bmFuZGltYWdlc2xpZGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2JhY2tncm91bmRSZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQxLCA1LCA1KTtcXG59XFxuI2JhY2tncm91bmRCbHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAxMiwgMTU2KTtcXG59XFxuI2JhY2tncm91bmRHcmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCA5NCwgMik7XFxufVxcbiNiYWNrZ3JvdW5kWWVsbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTkxLCAzKTtcXG59XFxuI2JhY2tncm91bmRQdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDUsIDE0MSk7XFxufVxcbiNiYWNrZ3JvdW5kV2hpdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNtYWluRHJvcGRvd257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTUwLCAyMTEpO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBjbGFtcCg5NnB4LCAxNjZweCwgMjE4cHgpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5cXG4uZHJvcGRvd25PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHJnYigzNywgMywgNzApO1xcbn1cXG5cXG4uZHJvcGRvd25PcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA2MywgMjExKTtcXG59XFxuXFxuLmRyb3Bkb3duVmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhbmltYXRpb246IGdyb3dEb3duIDMwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dEb3duIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNpbWFnZVNsaWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDcwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxufVxcblxcbiNpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlciB7XFxuICAgIGhlaWdodDogNzh2aDtcXG4gICAgd2lkdGg6IDgwdmg7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDh2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1dmggMWZyIDV2aDtcXG59XFxuXFxuI25hdk51bWJlcnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbiNiYWNrQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1MCwgMjExKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMzcsIDMsIDcwKTtcXG59XFxuI25leHRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTUwLCAyMTEpO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHJnYigzNywgMywgNzApO1xcbn1cXG4ubmF2TnVtYmVyQnV0dG9uIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxufVxcblxcbi5uYXZOdW1iZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNTAsIDIxMSk7XFxufVxcblxcbi5zbGlkZXJJbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWxlY3RlZE5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMCwgNzMpO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgICNpbWFnZVNsaWRlckNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDcwdnc7XFxuICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgI2ltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyIHtcXG4gICAgICAgIGhlaWdodDogODJ2dztcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3LjV2dyAxZnIgNy41dnc7XFxuICAgIH1cXG5cXG4gICAgI2JhY2tCdXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA3MHZ3O1xcbiAgICB9XFxuICAgICNuZXh0QnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNzB2dztcXG4gICAgfVxcbiAgICAubmF2TnVtYmVyQnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6IDcuNXZ3O1xcbiAgICAgIHdpZHRoOiA3LjV2dztcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsOENBQThDO0lBQzlDLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO01BQ0UsYUFBYTtNQUNiLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsU0FBUztJQUNYO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2JhY2tncm91bmRSZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQxLCA1LCA1KTtcXG59XFxuI2JhY2tncm91bmRCbHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAxMiwgMTU2KTtcXG59XFxuI2JhY2tncm91bmRHcmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCA5NCwgMik7XFxufVxcbiNiYWNrZ3JvdW5kWWVsbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTkxLCAzKTtcXG59XFxuI2JhY2tncm91bmRQdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDUsIDE0MSk7XFxufVxcbiNiYWNrZ3JvdW5kV2hpdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNtYWluRHJvcGRvd257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTUwLCAyMTEpO1xcbiAgICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBjbGFtcCg5NnB4LCAxNjZweCwgMjE4cHgpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5cXG4uZHJvcGRvd25PcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHJnYigzNywgMywgNzApO1xcbn1cXG5cXG4uZHJvcGRvd25PcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCA2MywgMjExKTtcXG59XFxuXFxuLmRyb3Bkb3duVmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBhbmltYXRpb246IGdyb3dEb3duIDMwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcblxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3dEb3duIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNpbWFnZVNsaWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDcwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxufVxcblxcbiNpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlciB7XFxuICAgIGhlaWdodDogNzh2aDtcXG4gICAgd2lkdGg6IDgwdmg7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDh2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1dmggMWZyIDV2aDtcXG59XFxuXFxuI25hdk51bWJlcnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcblxcbiNiYWNrQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE1MCwgMjExKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMzcsIDMsIDcwKTtcXG59XFxuI25leHRCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTUwLCAyMTEpO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHJnYigzNywgMywgNzApO1xcbn1cXG4ubmF2TnVtYmVyQnV0dG9uIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDM3LCAzLCA3MCk7XFxufVxcblxcbi5uYXZOdW1iZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNTAsIDIxMSk7XFxufVxcblxcbi5zbGlkZXJJbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zZWxlY3RlZE5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMCwgNzMpO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuICAgICNpbWFnZVNsaWRlckNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDcwdnc7XFxuICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgI2ltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyIHtcXG4gICAgICAgIGhlaWdodDogODJ2dztcXG4gICAgICAgIHdpZHRoOiA4NXZ3O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3LjV2dyAxZnIgNy41dnc7XFxuICAgIH1cXG5cXG4gICAgI2JhY2tCdXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiA3MHZ3O1xcbiAgICB9XFxuICAgICNuZXh0QnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogNzB2dztcXG4gICAgfVxcbiAgICAubmF2TnVtYmVyQnV0dG9uIHtcXG4gICAgICBoZWlnaHQ6IDcuNXZ3O1xcbiAgICAgIHdpZHRoOiA3LjV2dztcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltYWdlMCBmcm9tICcuL0ltYWdlcy9iYW8xLmpwZyc7XG5pbXBvcnQgaW1hZ2UxIGZyb20gJy4vSW1hZ2VzL2JhbzIuanBnJztcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi9JbWFnZXMvYmFvMy5qcGcnO1xuaW1wb3J0IGltYWdlMyBmcm9tICcuL0ltYWdlcy9iYW80LmpwZyc7XG5pbXBvcnQgaW1hZ2U0IGZyb20gJy4vSW1hZ2VzL2JhbzUuanBnJztcbmltcG9ydCBpbWFnZTUgZnJvbSAnLi9JbWFnZXMvY2F0MS5qcGcnO1xuaW1wb3J0IGltYWdlNiBmcm9tICcuL0ltYWdlcy9jYXQyLmpwZyc7XG5pbXBvcnQgaW1hZ2U3IGZyb20gJy4vSW1hZ2VzL2NhdDMuanBnJztcbmltcG9ydCBpbWFnZTggZnJvbSAnLi9JbWFnZXMvY2F0NC5qcGcnO1xuaW1wb3J0IGltYWdlOSBmcm9tICcuL0ltYWdlcy9jYXQ1LmpwZyc7XG5cbmltcG9ydCB7XG4gIGJhY2tCdXR0b25GdW5jdGlvbiwgbmV4dEJ1dHRvbkZ1bmN0aW9uLCBzaG93SW1hZ2UsIG5hdkJ1dHRvbkZ1bmN0aW9uLFxufSBmcm9tICcuL3NsaWRlckJ1dHRvbnMnO1xuXG5jb25zdCBpbWFnZUFycmF5ID0gW2ltYWdlMCwgaW1hZ2UxLCBpbWFnZTIsIGltYWdlMywgaW1hZ2U0LCBpbWFnZTUsIGltYWdlNiwgaW1hZ2U3LCBpbWFnZTgsIGltYWdlOV07XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlU2xpZGVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaW1hZ2VTbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTbGlkZXJDb250YWluZXIuaWQgPSAnaW1hZ2VTbGlkZXJDb250YWluZXInO1xuICBjb25zdCBuYXZOdW1iZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdk51bWJlcnNDb250YWluZXIuaWQgPSAnbmF2TnVtYmVyc0NvbnRhaW5lcic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgaW1hZ2VJdGVtID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2VJdGVtLmlkID0gYHNsaWRlckltYWdlLSR7aX1gO1xuICAgIGltYWdlSXRlbS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJJbWFnZScpO1xuICAgIGltYWdlSXRlbS5zcmMgPSBpbWFnZUFycmF5W2ldO1xuICAgIGltYWdlU2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlSXRlbSk7XG4gICAgY29uc3QgbmF2TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmF2TnVtYmVyVGV4dCA9IGkgKyAxO1xuICAgIG5hdk51bWJlci5jbGFzc0xpc3QuYWRkKCduYXZOdW1iZXJCdXR0b24nKTtcbiAgICBuYXZOdW1iZXIudGV4dENvbnRlbnQgPSBuYXZOdW1iZXJUZXh0O1xuICAgIG5hdk51bWJlci5pZCA9IGBuYXZOdW1iZXItJHtpfWA7XG4gICAgbmF2TnVtYmVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZOdW1iZXIpO1xuICB9XG5cbiAgY29uc3QgaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXIuaWQgPSAnaW1hZ2VTbGlkZXJDb250YWluZXJIb2xkZXInO1xuXG4gIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYmFja0J1dHRvbi5pZCA9ICdiYWNrQnV0dG9uJztcbiAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9ICc8JztcblxuICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5leHRCdXR0b24uaWQgPSAnbmV4dEJ1dHRvbic7XG4gIG5leHRCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG5cbiAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBiYWNrQnV0dG9uRnVuY3Rpb24oKTtcbiAgfSk7XG5cbiAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXh0QnV0dG9uRnVuY3Rpb24oKTtcbiAgfSk7XG5cbiAgbmF2TnVtYmVyc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzBdKSA9PT0gKCduYXZOdW1iZXInKSkge1xuICAgICAgY29uc3QgY2xpY2tlZEJ1dHRvbiA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XG4gICAgICBuYXZCdXR0b25GdW5jdGlvbihjbGlja2VkQnV0dG9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIGltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyLmFwcGVuZENoaWxkKGJhY2tCdXR0b24pO1xuICBpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlci5hcHBlbmRDaGlsZChpbWFnZVNsaWRlckNvbnRhaW5lcik7XG4gIGltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyLmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xuICBpbWFnZVNsaWRlckNvbnRhaW5lckhvbGRlci5hcHBlbmRDaGlsZChuYXZOdW1iZXJzQ29udGFpbmVyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlU2xpZGVyQ29udGFpbmVySG9sZGVyKTtcblxuICBzaG93SW1hZ2UoMCwgMCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUltYWdlU2xpZGVyIH07XG4iLCJpbXBvcnQgeyB1cGRhdGVCYWNrZ3JvdW5kIH0gZnJvbSAnLi91cGRhdGVCYWNrZ3JvdW5kJztcblxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24oYnV0dG9uQXJyYXkpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgZHJvcGRvd25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJvcGRvd25Ib2xkZXIuaWQgPSAnZHJvcGRvd25Ib2xkZXInO1xuXG4gIGNvbnN0IG1haW5Ecm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRHJvcGRvd24udGV4dENvbnRlbnQgPSAnU2VsZWN0IEJhY2tncm91bmQnO1xuICBtYWluRHJvcGRvd24uaWQgPSAnbWFpbkRyb3Bkb3duJztcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9uQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bk9wdGlvbicpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmlkID0gYGRyb3Bkb3duT3B0aW9uLSR7YnV0dG9uQXJyYXlbaV19YDtcbiAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IGAke2J1dHRvbkFycmF5W2ldfWA7XG4gICAgZHJvcGRvd25PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG91clNlbGVjdGlvbiA9IGRyb3Bkb3duT3B0aW9uLmlkLnNwbGl0KCctJylbMV07XG4gICAgICAgIHVwZGF0ZUJhY2tncm91bmQoY29sb3VyU2VsZWN0aW9uKTtcbiAgICB9KTtcbiAgICBtYWluRHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25PcHRpb24pO1xuICB9XG5cbiAgbWFpbkRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25PcHRpb24nKTtcbiAgICBkcm9wZG93bk9wdGlvbkJ1dHRvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25WaXNpYmxlJyk7XG4gICAgfSk7XG4gIH0pOyBcblxuICBtYWluRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duT3B0aW9uJyk7XG4gICAgZHJvcGRvd25PcHRpb25CdXR0b25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duVmlzaWJsZScpO1xuICAgIH0pO1xuICB9KTsgXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRHJvcGRvd24pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVEcm9wZG93biB9O1xuIiwiZnVuY3Rpb24gc2hvd0ltYWdlKGN1cnJlbnRJbWFnZUluZGV4LCBuZXdJbWFnZUluZGV4KSB7XG4gIGNvbnN0IG9sZEltYWdlSUQgPSBgc2xpZGVySW1hZ2UtJHtjdXJyZW50SW1hZ2VJbmRleH1gO1xuICBjb25zdCBvbGRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9sZEltYWdlSUQpO1xuICBvbGRJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIGNvbnN0IG5ld0ltYWdlSUQgPSBgc2xpZGVySW1hZ2UtJHtuZXdJbWFnZUluZGV4fWA7XG4gIGNvbnN0IG5ld0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3SW1hZ2VJRCk7XG4gIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICBjb25zdCBvbGRUZXh0SUQgPSBgbmF2TnVtYmVyLSR7Y3VycmVudEltYWdlSW5kZXh9YDtcbiAgY29uc3Qgb2xkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9sZFRleHRJRCk7XG4gIG9sZFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWROYXYnKTtcblxuICBjb25zdCBuZXdUZXh0SUQgPSBgbmF2TnVtYmVyLSR7bmV3SW1hZ2VJbmRleH1gO1xuICBjb25zdCBuZXdUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3VGV4dElEKTtcbiAgbmV3VGV4dC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZE5hdicpO1xufVxuXG5mdW5jdGlvbiBiYWNrQnV0dG9uRnVuY3Rpb24oKSB7XG4gIGNvbnN0IG9sZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2libGUnKTtcbiAgY29uc3Qgb2xkSW1hZ2VJbmRleCA9IG9sZEltYWdlLmlkLnNwbGl0KCctJylbMV07XG5cbiAgaWYgKG9sZEltYWdlSW5kZXggPiAwKSB7XG4gICAgY29uc3QgbmV3SW1hZ2VJbmRleCA9ICgrb2xkSW1hZ2VJbmRleCAtIDEpO1xuICAgIHNob3dJbWFnZShvbGRJbWFnZUluZGV4LCBuZXdJbWFnZUluZGV4KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dEJ1dHRvbkZ1bmN0aW9uKCkge1xuICBjb25zdCBvbGRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmxlJyk7XG4gIGNvbnN0IG9sZEltYWdlSW5kZXggPSBvbGRJbWFnZS5pZC5zcGxpdCgnLScpWzFdO1xuXG4gIGlmIChvbGRJbWFnZUluZGV4IDwgOSkge1xuICAgIGNvbnN0IG5ld0ltYWdlSW5kZXggPSAoK29sZEltYWdlSW5kZXggKyAxKTtcbiAgICBzaG93SW1hZ2Uob2xkSW1hZ2VJbmRleCwgbmV3SW1hZ2VJbmRleCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIG5hdkJ1dHRvbkZ1bmN0aW9uKGJ1dHRvbkluZGV4KSB7XG4gICAgY29uc3Qgb2xkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJsZScpO1xuICAgIGNvbnN0IG9sZEltYWdlSW5kZXggPSBvbGRJbWFnZS5pZC5zcGxpdCgnLScpWzFdO1xuICAgIHNob3dJbWFnZShvbGRJbWFnZUluZGV4LCBidXR0b25JbmRleCk7XG59XG5cbmV4cG9ydCB7IGJhY2tCdXR0b25GdW5jdGlvbiwgbmV4dEJ1dHRvbkZ1bmN0aW9uLCBzaG93SW1hZ2UsIG5hdkJ1dHRvbkZ1bmN0aW9uIH07XG4iLCJmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kKGNvbG91clNlbGVjdGlvbikge1xuICAgIGRvY3VtZW50LmJvZHkuaWQgPSBgYmFja2dyb3VuZCR7Y29sb3VyU2VsZWN0aW9ufWA7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUJhY2tncm91bmQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlRHJvcGRvd24gfSBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCB7IGNyZWF0ZUltYWdlU2xpZGVyIH0gZnJvbSAnLi9jcmVhdGVJbWFnZVNsaWRlcic7XG5cbmNvbnN0IGJ1dHRvbkFycmF5ID0gWydSZWQnLCAnQmx1ZScsICdHcmVlbicsICdZZWxsb3cnLCAnUHVycGxlJywgJ1doaXRlJ107XG5jcmVhdGVEcm9wZG93bihidXR0b25BcnJheSk7XG5cbmNyZWF0ZUltYWdlU2xpZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=