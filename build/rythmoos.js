/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameObjectTypes;
(function (GameObjectTypes) {
    GameObjectTypes[GameObjectTypes["RECTANGLE"] = 0] = "RECTANGLE";
    GameObjectTypes[GameObjectTypes["CIRCLE"] = 1] = "CIRCLE";
    GameObjectTypes[GameObjectTypes["LABEL"] = 2] = "LABEL";
    GameObjectTypes[GameObjectTypes["SHAPE"] = 3] = "SHAPE";
    GameObjectTypes[GameObjectTypes["IMAGE"] = 4] = "IMAGE";
    GameObjectTypes[GameObjectTypes["OTHER"] = 5] = "OTHER";
})(GameObjectTypes || (GameObjectTypes = {}));
;
exports.default = GameObjectTypes;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(2);
var GameObjectTypes_1 = __webpack_require__(0);
var GameObject = /** @class */ (function () {
    function GameObject(name, point, visible) {
        this.name = name;
        this._point = point ? point : new graphics_1.Point(0, 0);
        if (visible === undefined) {
            this.visible = point ? true : false;
        }
        else {
            this.visible = visible;
        }
        this._rotation = 0;
        this._scale = 1;
        this._update = function () { };
        this._contextSettings = null;
        this._type = GameObjectTypes_1.default.OTHER;
    }
    Object.defineProperty(GameObject.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "point", {
        get: function () {
            return this._point;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this.point.x;
        },
        set: function (x) {
            this._point.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this.point.y;
        },
        set: function (y) {
            this._point.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (degrees) {
            this._rotation = degrees;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (scale) {
            this._scale = scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "update", {
        get: function () {
            return this._update();
        },
        set: function (update) {
            this._update = update;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "renderContextSettings", {
        get: function () {
            return this._contextSettings;
        },
        set: function (contextSettings) {
            this._contextSettings = contextSettings;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.setPoint = function (point) {
        this._point = point;
    };
    GameObject.prototype.hasRenderContextSettings = function () {
        return this._contextSettings !== null ? true : false;
    };
    GameObject.prototype.rotate = function (degrees) {
        this._rotation = degrees;
    };
    GameObject.prototype.setScale = function (scale) {
        this._scale = scale;
    };
    return GameObject;
}());
exports.default = GameObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Font_1 = __webpack_require__(15);
exports.Font = Font_1.default;
var Model_1 = __webpack_require__(16);
exports.Model = Model_1.default;
var Point_1 = __webpack_require__(17);
exports.Point = Point_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(22);
exports.Renderer = Renderer_1.default;
var Screen_1 = __webpack_require__(27);
exports.Screen = Screen_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(2));
__export(__webpack_require__(8));
__export(__webpack_require__(33));
__export(__webpack_require__(3));
__export(__webpack_require__(12));
__export(__webpack_require__(6));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState = /** @class */ (function () {
    function InputState() {
        this._pressed = false;
    }
    InputState.prototype._switch = function () {
        this._pressed = !this._pressed;
    };
    InputState.prototype.isUp = function () {
        return this._pressed === false;
    };
    InputState.prototype.isDown = function () {
        return this._pressed === true;
    };
    return InputState;
}());
exports.default = InputState;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = __webpack_require__(23);
exports.Time = Time_1.default;
var now_1 = __webpack_require__(11);
exports.now = now_1.default;
var Profiler_1 = __webpack_require__(24);
exports.Profiler = Profiler_1.default;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(14);
exports.Circle = Circle_1.default;
var GameObject_1 = __webpack_require__(1);
exports.GameObject = GameObject_1.default;
var GameObjectTypes_1 = __webpack_require__(0);
exports.GameObjectTypes = GameObjectTypes_1.default;
var Image_1 = __webpack_require__(35);
exports.Image = Image_1.default;
var Label_1 = __webpack_require__(18);
exports.Label = Label_1.default;
var Rectangle_1 = __webpack_require__(19);
exports.Rectangle = Rectangle_1.default;
var Shape_1 = __webpack_require__(20);
exports.Shape = Shape_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(5);
exports.InputState = InputState_1.default;
var Key_1 = __webpack_require__(9);
exports.Key = Key_1.default;
var Keyboard_1 = __webpack_require__(21);
exports.Keyboard = Keyboard_1.default;
var KeyCodes_1 = __webpack_require__(10);
exports.KeyCodes = KeyCodes_1.default;
var Mouse_1 = __webpack_require__(28);
exports.Mouse = Mouse_1.default;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(5);
var Key = /** @class */ (function () {
    function Key(key) {
        this.key = key;
        this._state = new InputState_1.default();
    }
    Key.prototype.isDown = function () {
        return this._state.isDown();
    };
    Key.prototype.isUp = function () {
        return this._state.isUp();
    };
    return Key;
}());
exports.default = Key;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyCodes;
(function (KeyCodes) {
    KeyCodes["Digit0"] = "Digit0";
    KeyCodes["Digit1"] = "Digit1";
    KeyCodes["Digit2"] = "Digit2";
    KeyCodes["Digit3"] = "Digit3";
    KeyCodes["Digit4"] = "Digit4";
    KeyCodes["Digit5"] = "Digit5";
    KeyCodes["Digit6"] = "Digit6";
    KeyCodes["Digit7"] = "Digit7";
    KeyCodes["Digit8"] = "Digit8";
    KeyCodes["Digit9"] = "Digit9";
    KeyCodes["KeyA"] = "KeyA";
    KeyCodes["KeyB"] = "KeyB";
    KeyCodes["KeyC"] = "KeyC";
    KeyCodes["KeyD"] = "KeyD";
    KeyCodes["KeyE"] = "KeyE";
    KeyCodes["KeyF"] = "KeyF";
    KeyCodes["KeyG"] = "KeyG";
    KeyCodes["KeyH"] = "KeyH";
    KeyCodes["KeyI"] = "KeyI";
    KeyCodes["KeyJ"] = "KeyJ";
    KeyCodes["KeyK"] = "KeyK";
    KeyCodes["KeyL"] = "KeyL";
    KeyCodes["KeyM"] = "KeyM";
    KeyCodes["KeyN"] = "KeyN";
    KeyCodes["KeyO"] = "KeyO";
    KeyCodes["KeyP"] = "KeyP";
    KeyCodes["KeyQ"] = "KeyQ";
    KeyCodes["KeyR"] = "KeyR";
    KeyCodes["KeyS"] = "KeyS";
    KeyCodes["KeyT"] = "KeyT";
    KeyCodes["KeyU"] = "KeyU";
    KeyCodes["KeyV"] = "KeyV";
    KeyCodes["KeyW"] = "KeyW";
    KeyCodes["KeyX"] = "KeyX";
    KeyCodes["KeyY"] = "KeyY";
    KeyCodes["KeyZ"] = "KeyZ";
    KeyCodes["Escape"] = "Escape";
    KeyCodes["F1"] = "F1";
    KeyCodes["F2"] = "F2";
    KeyCodes["F3"] = "F3";
    KeyCodes["F4"] = "F4";
    KeyCodes["F5"] = "F5";
    KeyCodes["F6"] = "F6";
    KeyCodes["F7"] = "F7";
    KeyCodes["F8"] = "F8";
    KeyCodes["F9"] = "F9";
    KeyCodes["F10"] = "F10";
    KeyCodes["F11"] = "F11";
    KeyCodes["F12"] = "F12";
    KeyCodes["Insert"] = "Insert";
    KeyCodes["Delete"] = "Delete";
    KeyCodes["Home"] = "Home";
    KeyCodes["End"] = "End";
    KeyCodes["PageUp"] = "PageUp";
    KeyCodes["PageDown"] = "PageDown";
    KeyCodes["NumLock"] = "NumLock";
    KeyCodes["NumpadDivide"] = "NumpadDivide";
    KeyCodes["NumpadMultiply"] = "NumpadMultiply";
    KeyCodes["NumpadSubtract"] = "NumpadSubtract";
    KeyCodes["NumpadAdd"] = "NumpadAdd";
    KeyCodes["NumpadEnter"] = "NumpadEnter";
    KeyCodes["NumpadDecimal"] = "NumpadDecimal";
    KeyCodes["Numpad0"] = "Numpad0";
    KeyCodes["Numpad1"] = "Numpad1";
    KeyCodes["Numpad2"] = "Numpad2";
    KeyCodes["Numpad3"] = "Numpad3";
    KeyCodes["Numpad4"] = "Numpad4";
    KeyCodes["Numpad5"] = "Numpad5";
    KeyCodes["Numpad6"] = "Numpad6";
    KeyCodes["Numpad7"] = "Numpad7";
    KeyCodes["Numpad8"] = "Numpad8";
    KeyCodes["Numpad9"] = "Numpad9";
    KeyCodes["ArrowUp"] = "ArrowUp";
    KeyCodes["ArrowDown"] = "ArrowDown";
    KeyCodes["ArrowLeft"] = "ArrowLeft";
    KeyCodes["ArrowRight"] = "ArrowRight";
    KeyCodes["Backquote"] = "Backquote";
    KeyCodes["Minus"] = "Minus";
    KeyCodes["Equal"] = "Equal";
    KeyCodes["Backspace"] = "Backspace";
    KeyCodes["BracketLeft"] = "BracketLeft";
    KeyCodes["BracketRight"] = "BracketRight";
    KeyCodes["Quote"] = "Quote";
    KeyCodes["Backslash"] = "Backslash";
    KeyCodes["Comma"] = "Comma";
    KeyCodes["Period"] = "Period";
    KeyCodes["Slash"] = "Slash";
    KeyCodes["Enter"] = "Enter";
    KeyCodes["ShiftLeft"] = "ShiftLeft";
    KeyCodes["ShiftRight"] = "ShiftRight";
    KeyCodes["CapsLock"] = "CapsLock";
    KeyCodes["Tab"] = "Tab";
    KeyCodes["ControlLeft"] = "ControlLeft";
    KeyCodes["ControlRight"] = "ControlRight";
    KeyCodes["MetaLeft"] = "MetaLeft";
    KeyCodes["MetaRight"] = "MetaRight";
    KeyCodes["AltLeft"] = "AltLeft";
    KeyCodes["AltRight"] = "AltRight";
})(KeyCodes || (KeyCodes = {}));
;
exports.default = KeyCodes;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getNow() {
    if (typeof performance !== 'undefined' && performance.now !== undefined) {
        return performance.now;
    }
    return Date.now;
}
exports.default = getNow();


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(25);
exports.Game = Game_1.default;
var Scene_1 = __webpack_require__(26);
exports.Scene = Scene_1.default;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
var FPSCounter_1 = __webpack_require__(32);
var Cursor_1 = __webpack_require__(29);
var HitKeys_1 = __webpack_require__(30);
var HitCircle_1 = __webpack_require__(31);
var g = new engine_1.Game();
// Background
var bg = new engine_1.Rectangle('background', new engine_1.Point(0, 0), true);
bg.color = '#000000';
bg.width = engine_1.Screen.width;
bg.height = engine_1.Screen.height;
g.scene.add(bg);
// Game elements
var hitCircle = new HitCircle_1.default(g.scene);
var hitKeys = new HitKeys_1.default(g.scene);
var cursor = new Cursor_1.default(g.scene);
var fpscounter = new FPSCounter_1.default(g.scene);
// Update bg size on resize
engine_1.Screen.onResize(function () {
    bg.width = engine_1.Screen.width;
    bg.height = engine_1.Screen.height;
});
// Update all game objects
g.renderer.attachUpdate(function () {
    if (engine_1.Collision.circleCollide(hitCircle.element, new engine_1.Circle('', engine_1.Mouse.cursor))) {
        hitCircle.element.color = '#1DBBFF';
    }
    else {
        hitCircle.element.color = '#0133DD';
    }
    fpscounter.update();
    hitCircle.update();
    cursor.update();
    hitKeys.update();
});
g.start();


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.size = 0;
        _this.color = '#000000';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.CIRCLE;
        return _this;
    }
    return Circle;
}(GameObject_1.default));
exports.default = Circle;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Font = /** @class */ (function () {
    function Font(fontName, fontSize, color) {
        if (fontName === void 0) { fontName = 'Arial'; }
        if (fontSize === void 0) { fontSize = 12; }
        if (color === void 0) { color = '#000000'; }
        this.fontName = fontName;
        this.fontSize = fontSize;
        this.color = color;
    }
    return Font;
}());
exports.default = Font;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(path) {
        if (path === void 0) { path = []; }
        this._path = path;
    }
    Object.defineProperty(Model.prototype, "path", {
        get: function () {
            return this._path.slice();
        },
        set: function (path) {
            this._path = path.slice();
        },
        enumerable: true,
        configurable: true
    });
    Model.prototype.getPoint = function (index) {
        if (index < this._path.length) {
            return [
                this._path[index][0],
                this._path[index][1]
            ];
        }
        return null;
    };
    Model.prototype.setPoint = function (index, pathPoint) {
        if (index < this._path.length) {
            this._path[index] = [
                pathPoint[0],
                pathPoint[1]
            ];
            return true;
        }
        return false;
    };
    Model.prototype.addPoint = function (pathPoint) {
        this._path.push(pathPoint);
    };
    Model.prototype.removePoint = function (index) {
        if (index < this._path.length) {
            this._path.slice(index, 1);
            return true;
        }
        return false;
    };
    return Model;
}());
exports.default = Model;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.default = Point;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.text = '';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.LABEL;
        return _this;
    }
    Label.prototype.setFont = function (font) {
        this.font = font;
    };
    Label.prototype.setFontSize = function (fontSize) {
        this.font.fontSize = fontSize;
    };
    Label.prototype.setFontColor = function (color) {
        this.font.color = color;
    };
    return Label;
}(GameObject_1.default));
exports.default = Label;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.width = 0;
        _this.height = 0;
        _this.color = '#000000';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.RECTANGLE;
        return _this;
    }
    return Rectangle;
}(GameObject_1.default));
exports.default = Rectangle;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var graphics_1 = __webpack_require__(2);
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.color = '#000000';
        _this.fill = true;
        _this.model = new graphics_1.Model();
        _this._type = GameObjectTypes_1.default.SHAPE;
        return _this;
    }
    return Shape;
}(GameObject_1.default));
exports.default = Shape;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = __webpack_require__(9);
var KeyCodes_1 = __webpack_require__(10);
var rendering_1 = __webpack_require__(3);
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard._init = function () {
        var _this = this;
        this._keys = {};
        for (var key in KeyCodes_1.default) {
            this._keys[key] = new Key_1.default(key);
        }
        rendering_1.Screen.on(['keydown'], function (e) {
            e.preventDefault();
            if (KeyCodes_1.default[e.code] && _this._keys[e.code].isUp()) {
                _this._keys[e.code]._state._switch();
            }
        });
        rendering_1.Screen.on(['keyup'], function (e) {
            e.preventDefault();
            if (KeyCodes_1.default[e.code] && _this._keys[e.code].isDown()) {
                _this._keys[e.code]._state._switch();
            }
        });
        rendering_1.Screen.on(['keypress'], function (e) {
            e.preventDefault();
        });
    };
    Keyboard.getKey = function (key) {
        return this._keys[key];
    };
    Keyboard.key = function (key) {
        return this.getKey(key);
    };
    Keyboard.isDown = function (key) {
        return this._keys[key].isDown();
    };
    Keyboard.isUp = function (key) {
        return this._keys[key].isUp();
    };
    return Keyboard;
}());
exports.default = Keyboard;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timing_1 = __webpack_require__(6);
var root_1 = __webpack_require__(12);
var game_objects_1 = __webpack_require__(7);
var Renderer = /** @class */ (function () {
    function Renderer(context) {
        this.context = context;
        this.animationFrame = 0;
        this.scene = new root_1.Scene();
        this._updates = [];
    }
    Renderer.prototype.start = function () {
        var _this = this;
        if (!this.animationFrame) {
            this.animationFrame = requestAnimationFrame(function (frame) {
                _this.render(frame);
            });
        }
    };
    Renderer.prototype.attachUpdate = function (update) {
        this._updates.push(update);
    };
    Renderer.prototype.render = function (frame) {
        var _this = this;
        timing_1.Time._setFrame(frame);
        for (var _i = 0, _a = this._updates; _i < _a.length; _i++) {
            var update = _a[_i];
            update();
        }
        for (var _b = 0, _c = this.scene.updates; _b < _c.length; _b++) {
            var update = _c[_b];
            update();
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for (var gameObjectName in this.scene.getAll()) {
            var gameObject = this.scene.get(gameObjectName);
            gameObject.update();
            if (!gameObject.visible)
                continue;
            if (gameObject.hasRenderContextSettings()) {
                this.context.save();
                gameObject.renderContextSettings(this.context);
            }
            if (gameObject.rotation) {
                this.context.save();
                this.context.translate(this.context.canvas.width / 2, this.context.canvas.height / 2);
                this.context.rotate(gameObject.rotation * Math.PI / 180);
                this.context.translate(-this.context.canvas.width / 2, -this.context.canvas.height / 2);
            }
            if (gameObject.scale !== 1) {
                this.context.scale(gameObject.scale, gameObject.scale);
            }
            if (gameObject instanceof game_objects_1.Rectangle) {
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.color;
                    this.context.fillRect(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
                }
                else {
                    this.context.strokeStyle = gameObject.color;
                    this.context.strokeRect(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Circle) {
                if (gameObject.size === 0)
                    continue;
                this.context.beginPath();
                this.context.arc(gameObject.x, gameObject.y, gameObject.size / 2, 0, 2 * Math.PI);
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.color;
                    this.context.fill();
                }
                else {
                    this.context.strokeStyle = gameObject.color;
                    this.context.stroke();
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Shape) {
                this.context.beginPath();
                this.context.moveTo(gameObject.x, gameObject.y);
                for (var _d = 0, _e = gameObject.model.path; _d < _e.length; _d++) {
                    var pathPoint = _e[_d];
                    this.context.lineTo(pathPoint[0], pathPoint[1]);
                }
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.color;
                    this.context.fill();
                }
                else {
                    this.context.strokeStyle = gameObject.color;
                    this.context.stroke();
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Label) {
                this.context.font = gameObject.font.fontSize + "px " + gameObject.font.fontName;
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.font.color;
                    this.context.fillText(gameObject.text, gameObject.x, gameObject.y);
                }
                else {
                    this.context.strokeStyle = gameObject.font.color;
                    this.context.strokeText(gameObject.text, gameObject.x, gameObject.y);
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Image) {
                if (gameObject.ready) {
                    this.context.drawImage(gameObject.image, gameObject.x, gameObject.y);
                }
            }
            if (gameObject.scale !== 1) {
                this.context.scale(1, 1);
            }
            if (gameObject.rotation) {
                this.context.restore();
            }
            if (gameObject.hasRenderContextSettings()) {
                this.context.restore();
            }
        }
        this.animationFrame = requestAnimationFrame(function (frame) {
            _this.render(frame);
        });
    };
    return Renderer;
}());
exports.default = Renderer;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time() {
    }
    Time._init = function () {
        this._deltaTime = 0;
        this._time = 0;
        this._fps;
    };
    Time._setFrame = function (frame) {
        this._deltaTime = frame - this._time;
        this._time = frame;
        this._fps = Math.round(1000 / this._deltaTime);
    };
    Object.defineProperty(Time, "deltaTime", {
        get: function () {
            return this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "time", {
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "fps", {
        get: function () {
            return this._fps;
        },
        enumerable: true,
        configurable: true
    });
    return Time;
}());
exports.default = Time;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now_1 = __webpack_require__(11);
var Profiler = /** @class */ (function () {
    function Profiler() {
        this.startTime = 0;
        this.endTime = 0;
        this._steps = [];
    }
    Object.defineProperty(Profiler.prototype, "duration", {
        get: function () {
            if (this.endTime) {
                return this.endTime - this.startTime;
            }
            else if (this.startTime) {
                return now_1.default() - this.startTime;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profiler.prototype, "steps", {
        get: function () {
            return this._steps.slice();
        },
        enumerable: true,
        configurable: true
    });
    Profiler.prototype.start = function () {
        this.endTime = 0;
        this._steps = [];
        this.startTime = now_1.default();
    };
    Profiler.prototype.step = function () {
        if (this.startTime) {
            this._steps.push(now_1.default());
        }
    };
    Profiler.prototype.stop = function () {
        this.endTime = now_1.default();
    };
    Profiler.prototype.getStep = function (index) {
        if (index < this._steps.length) {
            return this._steps[index];
        }
        return null;
    };
    Profiler.prototype.getStepDuration = function (index) {
        var step = this.getStep(index);
        if (step !== null) {
            return step - this.startTime;
        }
        return null;
    };
    Profiler.prototype.getStepDurations = function () {
        var steps = [];
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            steps.push(step - this.startTime);
        }
        return steps;
    };
    return Profiler;
}());
exports.default = Profiler;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inputs_1 = __webpack_require__(8);
var rendering_1 = __webpack_require__(3);
var timing_1 = __webpack_require__(6);
var Game = /** @class */ (function () {
    /**
     * Create a new Game.
     * @param canvas The canvas to create the game in.
     */
    function Game() {
        this.canvas = this.createCanvas();
        this.renderer = new rendering_1.Renderer(this.canvas.getContext('2d'));
        this._scene = this.renderer.scene;
        timing_1.Time._init();
        inputs_1.Mouse._init();
        inputs_1.Keyboard._init();
        rendering_1.Screen._init(this.canvas);
    }
    Object.defineProperty(Game.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setScene = function (scene) {
        this.renderer.scene = scene;
        this._scene = scene;
    };
    Game.prototype.start = function () {
        this.renderer.start();
    };
    Game.prototype.createCanvas = function () {
        var canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        return canvas;
    };
    Game.prototype.update = function (update) {
        this.scene.attachUpdate(update);
    };
    Game.prototype.globalUpdate = function (update) {
        this.renderer.attachUpdate(update);
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scene = /** @class */ (function () {
    function Scene() {
        this._gameObjects = {};
        this._updates = [];
    }
    Object.defineProperty(Scene.prototype, "updates", {
        get: function () {
            return this._updates.slice();
        },
        enumerable: true,
        configurable: true
    });
    Scene.prototype.add = function (gameObject) {
        if (this.contains(gameObject.name))
            return false;
        this._gameObjects[gameObject.name] = gameObject;
        return true;
    };
    Scene.prototype.remove = function (gameObjectName) {
        if (!this.contains(gameObjectName))
            return false;
        delete this._gameObjects[gameObjectName];
        return true;
    };
    Scene.prototype.get = function (gameObjectName) {
        if (!this.contains(gameObjectName))
            return null;
        return this._gameObjects[gameObjectName];
    };
    Scene.prototype.getAll = function () {
        return this._gameObjects;
    };
    Scene.prototype.contains = function (gameObjectName) {
        return this._gameObjects.hasOwnProperty(gameObjectName);
    };
    Scene.prototype.clear = function () {
        this._gameObjects = {};
    };
    Scene.prototype.attachUpdate = function (update) {
        this._updates.push(update);
    };
    return Scene;
}());
exports.default = Scene;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen() {
    }
    Screen._init = function (canvas) {
        var _this = this;
        this._canvas = canvas;
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._onResize = function (event) { };
        window.addEventListener('resize', function (event) {
            _this._width = window.innerWidth;
            _this._height = window.innerHeight;
            _this._canvas.width = _this.width;
            _this._canvas.height = _this.height;
            _this._onResize(event);
        });
    };
    Object.defineProperty(Screen, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Screen.on = function (eventNames, eventHandler) {
        for (var _i = 0, eventNames_1 = eventNames; _i < eventNames_1.length; _i++) {
            var eventName = eventNames_1[_i];
            window.addEventListener(eventName, function (e) {
                eventHandler(e);
            });
        }
    };
    Screen.onResize = function (handler) {
        this._onResize = handler;
    };
    return Screen;
}());
exports.default = Screen;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rendering_1 = __webpack_require__(3);
var graphics_1 = __webpack_require__(2);
var InputState_1 = __webpack_require__(5);
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse._init = function () {
        this._cursor = new graphics_1.Point(rendering_1.Screen.width / 2, rendering_1.Screen.height / 2);
        this._leftClick = new InputState_1.default();
        this._middleClick = new InputState_1.default();
        this._rightClick = new InputState_1.default();
        this.initEvents();
    };
    Object.defineProperty(Mouse, "cursor", {
        get: function () {
            return this._cursor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorX", {
        get: function () {
            return this.cursor.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorY", {
        get: function () {
            return this.cursor.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "buttonDown", {
        get: function () {
            return (this.leftButtonDown || this.middleButtonDown || this.rightButtonDown);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonDown", {
        get: function () {
            return this._leftClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonDown", {
        get: function () {
            return this._middleClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonDown", {
        get: function () {
            return this._rightClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonUp", {
        get: function () {
            return this._leftClick.isUp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonUp", {
        get: function () {
            return this._middleClick.isUp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonUp", {
        get: function () {
            return this._rightClick.isUp();
        },
        enumerable: true,
        configurable: true
    });
    Mouse.initEvents = function () {
        var _this = this;
        rendering_1.Screen.on(['mousemove'], function (e) {
            _this._cursor.x = e.clientX;
            _this._cursor.y = e.clientY;
        });
        rendering_1.Screen.on(['mousedown', 'mouseup'], function (e) {
            e.preventDefault();
            switch (e.button) {
                case 0:
                    _this._leftClick._switch();
                    break;
                case 1:
                    _this._middleClick._switch();
                    break;
                case 2:
                    _this._rightClick._switch();
                    break;
            }
        });
        rendering_1.Screen.on(['contextmenu'], function (e) {
            e.preventDefault();
        });
    };
    return Mouse;
}());
exports.default = Mouse;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
var Cursor = /** @class */ (function () {
    function Cursor(scene) {
        this.element = new engine_1.Circle('cursor');
        this.element.visible = true;
        this.element.fill = true;
        this.element.color = '#FF0000';
        this.element.size = 30;
        scene.add(this.element);
    }
    Cursor.prototype.update = function () {
        this.element.x = engine_1.Mouse.cursorX;
        this.element.y = engine_1.Mouse.cursorY;
    };
    return Cursor;
}());
exports.default = Cursor;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
var HitKeys = /** @class */ (function () {
    function HitKeys(scene) {
        this.qElement = new engine_1.Rectangle('qrectangle');
        this.qElement.visible = true;
        this.qElement.fill = true;
        this.qElement.color = '#CCDDCC';
        this.qElement.width = 60;
        this.qElement.height = 60;
        this.qLabel = new engine_1.Label('qlabel');
        this.qLabel.visible = true;
        this.qLabel.text = 'Q';
        this.qLabel.fill = true;
        this.qLabel.setFont(new engine_1.Font('Arial', 16, '#000000'));
        this.wElement = new engine_1.Rectangle('wrectangle');
        this.wElement.visible = true;
        this.wElement.fill = true;
        this.wElement.color = '#CCDDCC';
        this.wElement.width = 60;
        this.wElement.height = 60;
        this.wLabel = new engine_1.Label('wlabel');
        this.wLabel.visible = true;
        this.wLabel.text = 'W';
        this.wLabel.fill = true;
        this.wLabel.setFont(new engine_1.Font('Arial', 16, '#000000'));
        this.qElement.setPoint(new engine_1.Point(20, engine_1.Screen.height - 80));
        this.qLabel.setPoint(new engine_1.Point(60, engine_1.Screen.height - 30));
        this.wElement.setPoint(new engine_1.Point(100, engine_1.Screen.height - 80));
        this.wLabel.setPoint(new engine_1.Point(140, engine_1.Screen.height - 30));
        scene.add(this.qElement);
        scene.add(this.qLabel);
        scene.add(this.wElement);
        scene.add(this.wLabel);
    }
    HitKeys.prototype.update = function () {
        if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyQ).isDown()) {
            this.qElement.color = '#113311';
            this.qLabel.setFontColor('#FFFFFF');
        }
        else {
            this.qElement.color = '#CCDDCC';
            this.qLabel.setFontColor('#000000');
        }
        if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyW).isDown()) {
            this.wElement.color = '#113311';
            this.wLabel.setFontColor('#FFFFFF');
        }
        else {
            this.wElement.color = '#CCDDCC';
            this.wLabel.setFontColor('#000000');
        }
    };
    return HitKeys;
}());
exports.default = HitKeys;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
var HitCircle = /** @class */ (function () {
    function HitCircle(scene) {
        this.hit = false;
        this.border = new engine_1.Circle('hit circle border');
        this.border.setPoint(new engine_1.Point(Math.random() * engine_1.Screen.width, Math.random() * engine_1.Screen.height));
        this.border.color = '#FFFFFF';
        this.border.visible = true;
        this.border.size = 84;
        this.element = new engine_1.Circle('hit circle');
        this.element.setPoint(new engine_1.Point(this.border.x, this.border.y));
        this.element.color = '#0133DD';
        this.element.visible = true;
        this.element.size = 80;
        scene.add(this.border);
        scene.add(this.element);
    }
    HitCircle.prototype.update = function () {
        if (this.hit) {
            if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyQ).isUp() && engine_1.Keyboard.key(engine_1.KeyCodes.KeyW).isUp()) {
                this.hit = false;
            }
        }
        if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyQ).isDown() || engine_1.Keyboard.key(engine_1.KeyCodes.KeyW).isDown()) {
            if (!this.hit &&
                engine_1.Collision.circleCollide(this.element, new engine_1.Circle('', engine_1.Mouse.cursor))) {
                var point = new engine_1.Point(Math.random() * engine_1.Screen.width, Math.random() * engine_1.Screen.height);
                this.border.setPoint(point);
                this.element.setPoint(point);
                this.hit = true;
            }
        }
    };
    return HitCircle;
}());
exports.default = HitCircle;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
var FPSCounter = /** @class */ (function () {
    function FPSCounter(scene) {
        this.element = new engine_1.Label('fps counter');
        this.element.visible = true;
        this.element.setFont(new engine_1.Font('Arial', 12, '#FFFFFF'));
        this.element.text = 'FPS: 0';
        this.element.setPoint(new engine_1.Point(15, 15));
        scene.add(this.element);
    }
    FPSCounter.prototype.update = function () {
        this.element.text = "FPS: " + engine_1.Time.fps;
    };
    return FPSCounter;
}());
exports.default = FPSCounter;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collision_1 = __webpack_require__(34);
exports.Collision = Collision_1.default;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_objects_1 = __webpack_require__(7);
var Collision = /** @class */ (function () {
    function Collision() {
    }
    Collision.boxCollide = function (element1, element2) {
        return (element1.x < element2.x + element2.width &&
            element1.x + element1.width > element2.x &&
            element1.y < element2.y + element2.height &&
            element1.height + element1.y > element2.y);
    };
    Collision.circleCollide = function (element1, element2) {
        var dx = element1.x - element2.x;
        var dy = element1.y - element2.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        return (d < element1.size / 2 + element2.size / 2);
    };
    Collision.collide = function (element1, element2) {
        if (element1 instanceof game_objects_1.Circle && element2 instanceof game_objects_1.Circle) {
            return this.circleCollide(element1, element2);
        }
        else {
            var w1 = void 0;
            var h1 = void 0;
            var w2 = void 0;
            var h2 = void 0;
            if (element1 instanceof game_objects_1.Circle) {
                w1 = element1.size;
                h1 = element1.size;
            }
            else {
                w1 = element1.width;
                h1 = element1.height;
            }
            if (element2 instanceof game_objects_1.Circle) {
                w2 = element2.size;
                h2 = element2.size;
            }
            else {
                w2 = element2.width;
                h2 = element2.height;
            }
            return this.boxCollide({ x: element1.x, y: element1.y, width: w1, height: h1 }, { x: element2.x, y: element2.y, width: w2, height: h2 });
        }
    };
    return Collision;
}());
exports.default = Collision;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this._ready = false;
        _this._image = document.createElement('img');
        _this._image.addEventListener('load', function () {
            _this._ready = true;
        });
        _this._type = GameObjectTypes_1.default.IMAGE;
        return _this;
    }
    Object.defineProperty(Image.prototype, "ready", {
        get: function () {
            return this._ready;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "URL", {
        get: function () {
            return this._URL;
        },
        set: function (URL) {
            this._ready = false;
            this._URL = URL;
            this._image.src = this._URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.setURL = function (URL) {
        this.URL = URL;
    };
    return Image;
}(GameObject_1.default));
exports.default = Image;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWIwYjI5M2Q3ZDM5NDY1ZGY1YWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0tleUNvZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0hpdEtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvSGl0Q2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0ZQU0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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QixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxLQUFLLEdBQUcseUJBQWUsQ0FBQyxLQUFLLENBQUM7O0lBQ3JDLENBQUM7SUFFRCxzQkFBVyx3QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0JBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7YUFFRCxVQUFlLEdBQVc7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FOQTtJQVFELHNCQUFXLHdCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFTSxzQkFBTSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQ0F2Q2tDLG9CQUFVLEdBdUM1QyIsImZpbGUiOiJyeXRobW9vcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YjBiMjkzZDdkMzk0NjVkZjVhZCIsImVudW0gR2FtZU9iamVjdFR5cGVzIHtcclxuICBSRUNUQU5HTEUsXHJcbiAgQ0lSQ0xFLFxyXG4gIExBQkVMLFxyXG4gIFNIQVBFLFxyXG4gIElNQUdFLFxyXG4gIE9USEVSXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0VHlwZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3RUeXBlcy50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBHYW1lT2JqZWN0VHlwZXM7XHJcbiAgcHJvdGVjdGVkIF9wb2ludDogUG9pbnQ7XHJcbiAgcHJvdGVjdGVkIF9yb3RhdGlvbjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfc2NhbGU6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3VwZGF0ZTogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIF9jb250ZXh0U2V0dGluZ3M6ICgoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKXxudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludCA/IHBvaW50IDogbmV3IFBvaW50KDAsIDApO1xyXG4gICAgXHJcbiAgICBpZiAodmlzaWJsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHBvaW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLl9zY2FsZSA9IDE7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlID0gKCkgPT4ge307XHJcblxyXG4gICAgdGhpcy5fY29udGV4dFNldHRpbmdzID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLk9USEVSO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0eXBlKCk6IEdhbWVPYmplY3RUeXBlcyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvaW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludC54O1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb2ludC54ID0geDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvaW50LnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb3RhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByb3RhdGlvbihkZWdyZWVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3JvdGF0aW9uID0gZGVncmVlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NhbGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgdXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMuX3VwZGF0ZSA9IHVwZGF0ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGdldCByZW5kZXJDb250ZXh0U2V0dGluZ3MoKTogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCB7XHJcbiAgICByZXR1cm4gPChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQ+dGhpcy5fY29udGV4dFNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByZW5kZXJDb250ZXh0U2V0dGluZ3MoY29udGV4dFNldHRpbmdzOiAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLl9jb250ZXh0U2V0dGluZ3MgPSBjb250ZXh0U2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UG9pbnQocG9pbnQ6IFBvaW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1JlbmRlckNvbnRleHRTZXR0aW5ncygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0U2V0dGluZ3MgIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm90YXRlKGRlZ3JlZXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fcm90YXRpb24gPSBkZWdyZWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NjYWxlID0gc2NhbGU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJpbXBvcnQgRm9udCBmcm9tICcuL0ZvbnQnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcbmltcG9ydCBQYXRoUG9pbnQgZnJvbSAnLi9QYXRoUG9pbnQnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XHJcblxyXG5leHBvcnQge1xyXG4gIEZvbnQsXHJcbiAgTW9kZWwsXHJcbiAgUGF0aCxcclxuICBQYXRoUG9pbnQsXHJcbiAgUG9pbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJztcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbic7XHJcblxyXG5leHBvcnQge1xyXG4gIFJlbmRlcmVyLFxyXG4gIFNjcmVlblxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9waHlzaWNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Jvb3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RpbWluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2luZGV4LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRTdGF0ZSB7XHJcbiAgcHJpdmF0ZSBfcHJlc3NlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9wcmVzc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgX3N3aXRjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ByZXNzZWQgPSAhdGhpcy5fcHJlc3NlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWQgPT09IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkID09PSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9JbnB1dFN0YXRlLnRzIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJztcclxuaW1wb3J0IG5vdyBmcm9tICcuL25vdyc7XHJcbmltcG9ydCBQcm9maWxlciBmcm9tICcuL1Byb2ZpbGVyJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgVGltZSxcclxuICBub3csXHJcbiAgUHJvZmlsZXJcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcclxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vUmVjdGFuZ2xlJztcclxuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xyXG5cclxuZXhwb3J0IHtcclxuICBDaXJjbGUsXHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgSW1hZ2UsXHJcbiAgTGFiZWwsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIFNoYXBlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL2luZGV4LnRzIiwiaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XHJcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL0tleWJvYXJkJztcclxuaW1wb3J0IEtleUNvZGVzIGZyb20gJy4vS2V5Q29kZXMnO1xyXG5pbXBvcnQgTW91c2UgZnJvbSAnLi9Nb3VzZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIElucHV0U3RhdGUsXHJcbiAgS2V5LFxyXG4gIEtleWJvYXJkLFxyXG4gIEtleUNvZGVzLFxyXG4gIE1vdXNlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL2luZGV4LnRzIiwiaW1wb3J0IEtleUNvZGVzIGZyb20gJy4vS2V5Q29kZXMnO1xyXG5pbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5IHtcclxuICBwdWJsaWMgcmVhZG9ubHkga2V5OiBLZXlDb2RlcztcclxuICBwdWJsaWMgX3N0YXRlOiBJbnB1dFN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXk6IEtleUNvZGVzKSB7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIHRoaXMuX3N0YXRlID0gbmV3IElucHV0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNVcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5pc1VwKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0tleS50cyIsImVudW0gS2V5Q29kZXMge1xyXG4gIERpZ2l0MCA9ICdEaWdpdDAnLFxyXG4gIERpZ2l0MSA9ICdEaWdpdDEnLFxyXG4gIERpZ2l0MiA9ICdEaWdpdDInLFxyXG4gIERpZ2l0MyA9ICdEaWdpdDMnLFxyXG4gIERpZ2l0NCA9ICdEaWdpdDQnLFxyXG4gIERpZ2l0NSA9ICdEaWdpdDUnLFxyXG4gIERpZ2l0NiA9ICdEaWdpdDYnLFxyXG4gIERpZ2l0NyA9ICdEaWdpdDcnLFxyXG4gIERpZ2l0OCA9ICdEaWdpdDgnLFxyXG4gIERpZ2l0OSA9ICdEaWdpdDknLFxyXG5cclxuICBLZXlBID0gJ0tleUEnLFxyXG4gIEtleUIgPSAnS2V5QicsXHJcbiAgS2V5QyA9ICdLZXlDJyxcclxuICBLZXlEID0gJ0tleUQnLFxyXG4gIEtleUUgPSAnS2V5RScsXHJcbiAgS2V5RiA9ICdLZXlGJyxcclxuICBLZXlHID0gJ0tleUcnLFxyXG4gIEtleUggPSAnS2V5SCcsXHJcbiAgS2V5SSA9ICdLZXlJJyxcclxuICBLZXlKID0gJ0tleUonLFxyXG4gIEtleUsgPSAnS2V5SycsXHJcbiAgS2V5TCA9ICdLZXlMJyxcclxuICBLZXlNID0gJ0tleU0nLFxyXG4gIEtleU4gPSAnS2V5TicsXHJcbiAgS2V5TyA9ICdLZXlPJyxcclxuICBLZXlQID0gJ0tleVAnLFxyXG4gIEtleVEgPSAnS2V5UScsXHJcbiAgS2V5UiA9ICdLZXlSJyxcclxuICBLZXlTID0gJ0tleVMnLFxyXG4gIEtleVQgPSAnS2V5VCcsXHJcbiAgS2V5VSA9ICdLZXlVJyxcclxuICBLZXlWID0gJ0tleVYnLFxyXG4gIEtleVcgPSAnS2V5VycsXHJcbiAgS2V5WCA9ICdLZXlYJyxcclxuICBLZXlZID0gJ0tleVknLFxyXG4gIEtleVogPSAnS2V5WicsXHJcblxyXG4gIEVzY2FwZSA9ICdFc2NhcGUnLFxyXG5cclxuICBGMSA9ICdGMScsXHJcbiAgRjIgPSAnRjInLFxyXG4gIEYzID0gJ0YzJyxcclxuICBGNCA9ICdGNCcsXHJcbiAgRjUgPSAnRjUnLFxyXG4gIEY2ID0gJ0Y2JyxcclxuICBGNyA9ICdGNycsXHJcbiAgRjggPSAnRjgnLFxyXG4gIEY5ID0gJ0Y5JyxcclxuICBGMTAgPSAnRjEwJyxcclxuICBGMTEgPSAnRjExJyxcclxuICBGMTIgPSAnRjEyJyxcclxuXHJcbiAgSW5zZXJ0ID0gJ0luc2VydCcsXHJcbiAgRGVsZXRlID0gJ0RlbGV0ZScsXHJcblxyXG4gIEhvbWUgPSAnSG9tZScsXHJcbiAgRW5kID0gJ0VuZCcsXHJcbiAgUGFnZVVwID0gJ1BhZ2VVcCcsXHJcbiAgUGFnZURvd24gPSAnUGFnZURvd24nLFxyXG5cclxuICBOdW1Mb2NrID0gJ051bUxvY2snLFxyXG4gIE51bXBhZERpdmlkZSA9ICdOdW1wYWREaXZpZGUnLFxyXG4gIE51bXBhZE11bHRpcGx5ID0gJ051bXBhZE11bHRpcGx5JyxcclxuICBOdW1wYWRTdWJ0cmFjdCA9ICdOdW1wYWRTdWJ0cmFjdCcsXHJcbiAgTnVtcGFkQWRkID0gJ051bXBhZEFkZCcsXHJcbiAgTnVtcGFkRW50ZXIgPSAnTnVtcGFkRW50ZXInLFxyXG4gIE51bXBhZERlY2ltYWwgPSAnTnVtcGFkRGVjaW1hbCcsXHJcbiAgTnVtcGFkMCA9ICdOdW1wYWQwJyxcclxuICBOdW1wYWQxID0gJ051bXBhZDEnLFxyXG4gIE51bXBhZDIgPSAnTnVtcGFkMicsXHJcbiAgTnVtcGFkMyA9ICdOdW1wYWQzJyxcclxuICBOdW1wYWQ0ID0gJ051bXBhZDQnLFxyXG4gIE51bXBhZDUgPSAnTnVtcGFkNScsXHJcbiAgTnVtcGFkNiA9ICdOdW1wYWQ2JyxcclxuICBOdW1wYWQ3ID0gJ051bXBhZDcnLFxyXG4gIE51bXBhZDggPSAnTnVtcGFkOCcsXHJcbiAgTnVtcGFkOSA9ICdOdW1wYWQ5JyxcclxuXHJcbiAgQXJyb3dVcCA9ICdBcnJvd1VwJyxcclxuICBBcnJvd0Rvd24gPSAnQXJyb3dEb3duJyxcclxuICBBcnJvd0xlZnQgPSAnQXJyb3dMZWZ0JyxcclxuICBBcnJvd1JpZ2h0ID0gJ0Fycm93UmlnaHQnLFxyXG5cclxuICBCYWNrcXVvdGUgPSAnQmFja3F1b3RlJyxcclxuICBNaW51cyA9ICdNaW51cycsXHJcbiAgRXF1YWwgPSAnRXF1YWwnLFxyXG4gIEJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnLFxyXG4gIEJyYWNrZXRMZWZ0ID0gJ0JyYWNrZXRMZWZ0JyxcclxuICBCcmFja2V0UmlnaHQgPSAnQnJhY2tldFJpZ2h0JyxcclxuICBRdW90ZSA9ICdRdW90ZScsXHJcbiAgQmFja3NsYXNoID0gJ0JhY2tzbGFzaCcsXHJcbiAgQ29tbWEgPSAnQ29tbWEnLFxyXG4gIFBlcmlvZCA9ICdQZXJpb2QnLFxyXG4gIFNsYXNoID0gJ1NsYXNoJyxcclxuXHJcbiAgRW50ZXIgPSAnRW50ZXInLFxyXG4gIFNoaWZ0TGVmdCA9ICdTaGlmdExlZnQnLFxyXG4gIFNoaWZ0UmlnaHQgPSAnU2hpZnRSaWdodCcsXHJcbiAgQ2Fwc0xvY2sgPSAnQ2Fwc0xvY2snLFxyXG4gIFRhYiA9ICdUYWInLFxyXG4gIENvbnRyb2xMZWZ0ID0gJ0NvbnRyb2xMZWZ0JyxcclxuICBDb250cm9sUmlnaHQgPSAnQ29udHJvbFJpZ2h0JyxcclxuICBNZXRhTGVmdCA9ICdNZXRhTGVmdCcsXHJcbiAgTWV0YVJpZ2h0ID0gJ01ldGFSaWdodCcsXHJcbiAgQWx0TGVmdCA9ICdBbHRMZWZ0JyxcclxuICBBbHRSaWdodCA9ICdBbHRSaWdodCdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleUNvZGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXlDb2Rlcy50cyIsImZ1bmN0aW9uIGdldE5vdygpOiAoKSA9PiBudW1iZXIge1xyXG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIERhdGUubm93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXROb3coKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvbm93LnRzIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuZXhwb3J0IHtcclxuICBHYW1lLFxyXG4gIFNjZW5lXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9pbmRleC50cyIsImltcG9ydCB7IEdhbWUsIFJlY3RhbmdsZSwgU2NyZWVuLCBQb2ludCwgQ2lyY2xlLCBNb3VzZSwgQ29sbGlzaW9uIH0gZnJvbSAnLi9lbmdpbmUnO1xyXG5cclxuaW1wb3J0IEZQU0NvdW50ZXIgZnJvbSAnLi92aXN1YWxzL0ZQU0NvdW50ZXInO1xyXG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vdmlzdWFscy9DdXJzb3InO1xyXG5pbXBvcnQgSGl0S2V5cyBmcm9tICcuL3Zpc3VhbHMvSGl0S2V5cyc7XHJcbmltcG9ydCBIaXRDaXJjbGUgZnJvbSAnLi92aXN1YWxzL0hpdENpcmNsZSc7XHJcblxyXG5jb25zdCBnID0gbmV3IEdhbWUoKTtcclxuXHJcbi8vIEJhY2tncm91bmRcclxuY29uc3QgYmcgPSBuZXcgUmVjdGFuZ2xlKCdiYWNrZ3JvdW5kJywgbmV3IFBvaW50KDAsIDApLCB0cnVlKTtcclxuYmcuY29sb3IgPSAnIzAwMDAwMCc7XHJcbmJnLndpZHRoID0gU2NyZWVuLndpZHRoO1xyXG5iZy5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0O1xyXG5nLnNjZW5lLmFkZChiZyk7XHJcblxyXG4vLyBHYW1lIGVsZW1lbnRzXHJcbmNvbnN0IGhpdENpcmNsZSA9IG5ldyBIaXRDaXJjbGUoZy5zY2VuZSk7XHJcbmNvbnN0IGhpdEtleXMgPSBuZXcgSGl0S2V5cyhnLnNjZW5lKTtcclxuY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihnLnNjZW5lKTtcclxuY29uc3QgZnBzY291bnRlciA9IG5ldyBGUFNDb3VudGVyKGcuc2NlbmUpO1xyXG5cclxuLy8gVXBkYXRlIGJnIHNpemUgb24gcmVzaXplXHJcblNjcmVlbi5vblJlc2l6ZSgoKSA9PiB7XHJcbiAgYmcud2lkdGggPSBTY3JlZW4ud2lkdGg7XHJcbiAgYmcuaGVpZ2h0ID0gU2NyZWVuLmhlaWdodDtcclxufSk7XHJcblxyXG4vLyBVcGRhdGUgYWxsIGdhbWUgb2JqZWN0c1xyXG5nLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgaWYgKENvbGxpc2lvbi5jaXJjbGVDb2xsaWRlKGhpdENpcmNsZS5lbGVtZW50LCBuZXcgQ2lyY2xlKCcnLCBNb3VzZS5jdXJzb3IpKSkge1xyXG4gICAgaGl0Q2lyY2xlLmVsZW1lbnQuY29sb3IgPSAnIzFEQkJGRic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhpdENpcmNsZS5lbGVtZW50LmNvbG9yID0gJyMwMTMzREQnO1xyXG4gIH1cclxuXHJcbiAgZnBzY291bnRlci51cGRhdGUoKTtcclxuICBoaXRDaXJjbGUudXBkYXRlKCk7XHJcbiAgY3Vyc29yLnVwZGF0ZSgpO1xyXG4gIGhpdEtleXMudXBkYXRlKCk7XHJcbn0pO1xyXG5cclxuZy5zdGFydCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgc2l6ZTogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuQ0lSQ0xFO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9DaXJjbGUudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb250IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgZm9udE5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgZm9udFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZm9udE5hbWU6IHN0cmluZyA9ICdBcmlhbCcsIGZvbnRTaXplOiBudW1iZXIgPSAxMiwgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJykge1xyXG4gICAgdGhpcy5mb250TmFtZSA9IGZvbnROYW1lO1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJpbXBvcnQgUGF0aFBvaW50IGZyb20gJy4vUGF0aFBvaW50JztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcclxuICBwcml2YXRlIF9wYXRoOiBQYXRoO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoID0gW10pIHtcclxuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXRoKCk6IFBhdGgge1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLl9wYXRoXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcGF0aChwYXRoOiBQYXRoKSB7XHJcbiAgICB0aGlzLl9wYXRoID0gWy4uLnBhdGhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBvaW50KGluZGV4OiBudW1iZXIpOiBQYXRoUG9pbnR8bnVsbCB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHRoaXMuX3BhdGhbaW5kZXhdWzBdLFxyXG4gICAgICAgIHRoaXMuX3BhdGhbaW5kZXhdWzFdXHJcbiAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UG9pbnQoaW5kZXg6IG51bWJlciwgcGF0aFBvaW50OiBQYXRoUG9pbnQpOiBib29sZWFuIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3BhdGhbaW5kZXhdID0gW1xyXG4gICAgICAgIHBhdGhQb2ludFswXSxcclxuICAgICAgICBwYXRoUG9pbnRbMV1cclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRQb2ludChwYXRoUG9pbnQ6IFBhdGhQb2ludCkge1xyXG4gICAgdGhpcy5fcGF0aC5wdXNoKHBhdGhQb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUG9pbnQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcGF0aC5zbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvTW9kZWwudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcbiAgcHVibGljIHg6IG51bWJlcjtcclxuICBwdWJsaWMgeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvUG9pbnQudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQsIEZvbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGZvbnQ6IEZvbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLkxBQkVMO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnQoZm9udDogRm9udCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb250ID0gZm9udDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb250U2l6ZShmb250U2l6ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb250Q29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5mb250LmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5SRUNUQU5HTEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCwgTW9kZWwgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBtb2RlbDogTW9kZWw7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCgpO1xyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5TSEFQRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvU2hhcGUudHMiLCJpbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcclxuaW1wb3J0IEtleUNvZGVzIGZyb20gJy4vS2V5Q29kZXMnO1xyXG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgS2V5Ym9hcmQge1xyXG4gIHByaXZhdGUgc3RhdGljIF9rZXlzOiBDb2xsZWN0aW9uPEtleT47XHJcbiAgXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2tleXMgPSB7fTtcclxuICAgIFxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gS2V5Q29kZXMpIHtcclxuICAgICAgdGhpcy5fa2V5c1trZXldID0gbmV3IEtleSg8S2V5Q29kZXM+a2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBTY3JlZW4ub24oWydrZXlkb3duJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChLZXlDb2Rlc1s8YW55PmUuY29kZV0gJiYgdGhpcy5fa2V5c1tlLmNvZGVdLmlzVXAoKSkge1xyXG4gICAgICAgIHRoaXMuX2tleXNbZS5jb2RlXS5fc3RhdGUuX3N3aXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydrZXl1cCddLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoS2V5Q29kZXNbPGFueT5lLmNvZGVdICYmIHRoaXMuX2tleXNbZS5jb2RlXS5pc0Rvd24oKSkge1xyXG4gICAgICAgIHRoaXMuX2tleXNbZS5jb2RlXS5fc3RhdGUuX3N3aXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydrZXlwcmVzcyddLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0S2V5KGtleTogS2V5Q29kZXMpOiBLZXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMga2V5KGtleTogS2V5Q29kZXMpOiBLZXkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5KGtleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzRG93bihrZXk6IEtleUNvZGVzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc1VwKGtleTogS2V5Q29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV0uaXNVcCgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsImltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi90aW1pbmcnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3Jvb3QnO1xyXG5pbXBvcnQge1xyXG4gIEdhbWVPYmplY3QsXHJcbiAgR2FtZU9iamVjdFR5cGVzLFxyXG4gIFJlY3RhbmdsZSxcclxuICBDaXJjbGUsXHJcbiAgU2hhcGUsXHJcbiAgTGFiZWwsXHJcbiAgSW1hZ2VcclxufSBmcm9tICcuLi9nYW1lLW9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHB1YmxpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHVibGljIHNjZW5lOiBTY2VuZTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdXBkYXRlczogRnVuY3Rpb25bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgICB0aGlzLl91cGRhdGVzID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uRnJhbWUpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnJhbWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXR0YWNoVXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuX3VwZGF0ZXMucHVzaCh1cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoZnJhbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgVGltZS5fc2V0RnJhbWUoZnJhbWUpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdXBkYXRlIG9mIHRoaXMuX3VwZGF0ZXMpIHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdGhpcy5zY2VuZS51cGRhdGVzKSB7XHJcbiAgICAgIHVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZ2FtZU9iamVjdE5hbWUgaW4gdGhpcy5zY2VuZS5nZXRBbGwoKSkge1xyXG4gICAgICBjb25zdCBnYW1lT2JqZWN0ID0gPEdhbWVPYmplY3Q+dGhpcy5zY2VuZS5nZXQoZ2FtZU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgZ2FtZU9iamVjdC51cGRhdGUoKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghZ2FtZU9iamVjdC52aXNpYmxlKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0Lmhhc1JlbmRlckNvbnRleHRTZXR0aW5ncygpKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgICBnYW1lT2JqZWN0LnJlbmRlckNvbnRleHRTZXR0aW5ncyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5yb3RhdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQucm90YXRlKGdhbWVPYmplY3Qucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKC10aGlzLmNvbnRleHQuY2FudmFzLndpZHRoIC8gMiwgLXRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LnNjYWxlICE9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKGdhbWVPYmplY3Quc2NhbGUsIGdhbWVPYmplY3Quc2NhbGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFJlY3RhbmdsZSkge1xyXG5cclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC54LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnksXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuaGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmhlaWdodFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LnNpemUgPT09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5zaXplIC8gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IHBhdGhQb2ludCBvZiBnYW1lT2JqZWN0Lm1vZGVsLnBhdGgpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocGF0aFBvaW50WzBdLCBwYXRoUG9pbnRbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgTGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke2dhbWVPYmplY3QuZm9udC5mb250U2l6ZX1weCAke2dhbWVPYmplY3QuZm9udC5mb250TmFtZX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmZvbnQuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoZ2FtZU9iamVjdC50ZXh0LCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuZm9udC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KGdhbWVPYmplY3QudGV4dCwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgSW1hZ2UpIHtcclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5yZWFkeSkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShnYW1lT2JqZWN0LmltYWdlLCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5zY2FsZSAhPT0gMSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSgxLCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3Qucm90YXRpb24pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5oYXNSZW5kZXJDb250ZXh0U2V0dGluZ3MoKSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRpbWUge1xyXG4gIHByaXZhdGUgc3RhdGljIF9kZWx0YVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfdGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9mcHM6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICAgIHRoaXMuX2ZwcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX3NldEZyYW1lKGZyYW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IGZyYW1lIC0gdGhpcy5fdGltZTtcclxuICAgIHRoaXMuX3RpbWUgPSBmcmFtZTtcclxuICAgIHRoaXMuX2ZwcyA9IE1hdGgucm91bmQoMTAwMCAvIHRoaXMuX2RlbHRhVGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkZWx0YVRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGZwcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvVGltZS50cyIsImltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZXIge1xyXG4gIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgZW5kVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0ZXBzOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RlcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmVuZFRpbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICByZXR1cm4gbm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzdGVwcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3N0ZXBzXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGVwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHRoaXMuX3N0ZXBzLnB1c2gobm93KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwKGluZGV4OiBudW1iZXIpOiBudW1iZXJ8bnVsbCB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwRHVyYXRpb24oaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGNvbnN0IHN0ZXA6IG51bWJlcnxudWxsID0gdGhpcy5nZXRTdGVwKGluZGV4KTtcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc3RlcCAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbnMoKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3Qgc3RlcHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcclxuICAgICAgc3RlcHMucHVzaChzdGVwIC0gdGhpcy5zdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGVwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvUHJvZmlsZXIudHMiLCJpbXBvcnQgeyBNb3VzZSwgS2V5Ym9hcmQgfSBmcm9tICcuLi9pbnB1dHMnO1xyXG5pbXBvcnQgeyBTY3JlZW4sIFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBLZXlib2FyZC5faW5pdCgpO1xyXG4gICAgU2NyZWVuLl9pbml0KHRoaXMuY2FudmFzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNjZW5lID0gc2NlbmU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuc2NlbmUuYXR0YWNoVXBkYXRlKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2xvYmFsVXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYXR0YWNoVXBkYXRlKHVwZGF0ZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XHJcbiAgcHJpdmF0ZSBfZ2FtZU9iamVjdHM6IENvbGxlY3Rpb248R2FtZU9iamVjdD47XHJcbiAgcHJpdmF0ZSBfdXBkYXRlczogRnVuY3Rpb25bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gICAgdGhpcy5fdXBkYXRlcyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0IHVwZGF0ZXMoKTogRnVuY3Rpb25bXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3VwZGF0ZXNdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWlucyhnYW1lT2JqZWN0Lm5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdC5uYW1lXSA9IGdhbWVPYmplY3Q7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0KGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBHYW1lT2JqZWN0fG51bGwge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKGdhbWVPYmplY3ROYW1lKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGwoKTogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGFpbnMoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmhhc093blByb3BlcnR5KGdhbWVPYmplY3ROYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGF0dGFjaFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVzLnB1c2godXBkYXRlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L1NjZW5lLnRzIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgU2NyZWVuIHtcclxuICBwcml2YXRlIHN0YXRpYyBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHN0YXRpYyBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX29uUmVzaXplOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBcclxuICAgIHRoaXMuX29uUmVzaXplID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge307XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdGhpcy5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLl9vblJlc2l6ZShldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG9uKGV2ZW50TmFtZXM6IHN0cmluZ1tdLCBldmVudEhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyKGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb25SZXNpemUoaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuX29uUmVzaXplID0gPChldmVudDogRXZlbnQpID0+IHZvaWQ+aGFuZGxlcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvU2NyZWVuLnRzIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBNb3VzZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2N1cnNvcjogUG9pbnQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xlZnRDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfbWlkZGxlQ2xpY2s6IElucHV0U3RhdGU7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JpZ2h0Q2xpY2s6IElucHV0U3RhdGU7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJzb3IgPSBuZXcgUG9pbnQoU2NyZWVuLndpZHRoIC8gMiwgU2NyZWVuLmhlaWdodCAvIDIpO1xyXG4gICAgdGhpcy5fbGVmdENsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuX21pZGRsZUNsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuX3JpZ2h0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yKCk6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJzb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3JYKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJzb3IueDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgYnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5sZWZ0QnV0dG9uRG93biB8fCB0aGlzLm1pZGRsZUJ1dHRvbkRvd24gfHwgdGhpcy5yaWdodEJ1dHRvbkRvd24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbGVmdEJ1dHRvbkRvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbWlkZGxlQnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9taWRkbGVDbGljay5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yaWdodENsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbGVmdEJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25VcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9taWRkbGVDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCByaWdodEJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNVcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdEV2ZW50cygpOiB2b2lkIHtcclxuICAgIFNjcmVlbi5vbihbJ21vdXNlbW92ZSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jdXJzb3IueCA9IGUuY2xpZW50WDtcclxuICAgICAgdGhpcy5fY3Vyc29yLnkgPSBlLmNsaWVudFk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydtb3VzZWRvd24nLCAnbW91c2V1cCddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBzd2l0Y2goZS5idXR0b24pIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9sZWZ0Q2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5fbWlkZGxlQ2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5fcmlnaHRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsnY29udGV4dG1lbnUnXSwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJpbXBvcnQgeyBNb3VzZSwgQ2lyY2xlLCBTY2VuZSB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xyXG4gIHB1YmxpYyBlbGVtZW50OiBDaXJjbGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IENpcmNsZSgnY3Vyc29yJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuY29sb3IgPSAnI0ZGMDAwMCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2l6ZSA9IDMwO1xyXG5cclxuICAgIHNjZW5lLmFkZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudC54ID0gTW91c2UuY3Vyc29yWDtcclxuICAgIHRoaXMuZWxlbWVudC55ID0gTW91c2UuY3Vyc29yWTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvQ3Vyc29yLnRzIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCBMYWJlbCwgU2NlbmUsIEZvbnQsIFNjcmVlbiwgUG9pbnQsIEtleWJvYXJkLCBLZXlDb2RlcyB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRLZXlzIHtcclxuICBwdWJsaWMgcUVsZW1lbnQ6IFJlY3RhbmdsZTtcclxuICBwdWJsaWMgcUxhYmVsOiBMYWJlbDtcclxuICBwdWJsaWMgd0VsZW1lbnQ6IFJlY3RhbmdsZTtcclxuICBwdWJsaWMgd0xhYmVsOiBMYWJlbDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICB0aGlzLnFFbGVtZW50ID0gbmV3IFJlY3RhbmdsZSgncXJlY3RhbmdsZScpO1xyXG4gICAgdGhpcy5xRWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMucUVsZW1lbnQuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLnFFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgdGhpcy5xRWxlbWVudC53aWR0aCA9IDYwO1xyXG4gICAgdGhpcy5xRWxlbWVudC5oZWlnaHQgPSA2MDtcclxuICAgIHRoaXMucUxhYmVsID0gbmV3IExhYmVsKCdxbGFiZWwnKTtcclxuICAgIHRoaXMucUxhYmVsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5xTGFiZWwudGV4dCA9ICdRJztcclxuICAgIHRoaXMucUxhYmVsLmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5xTGFiZWwuc2V0Rm9udChuZXcgRm9udCgnQXJpYWwnLCAxNiwgJyMwMDAwMDAnKSk7XHJcblxyXG4gICAgdGhpcy53RWxlbWVudCA9IG5ldyBSZWN0YW5nbGUoJ3dyZWN0YW5nbGUnKTtcclxuICAgIHRoaXMud0VsZW1lbnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLndFbGVtZW50LmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy53RWxlbWVudC5jb2xvciA9ICcjQ0NERENDJztcclxuICAgIHRoaXMud0VsZW1lbnQud2lkdGggPSA2MDtcclxuICAgIHRoaXMud0VsZW1lbnQuaGVpZ2h0ID0gNjA7XHJcbiAgICB0aGlzLndMYWJlbCA9IG5ldyBMYWJlbCgnd2xhYmVsJyk7XHJcbiAgICB0aGlzLndMYWJlbC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMud0xhYmVsLnRleHQgPSAnVyc7XHJcbiAgICB0aGlzLndMYWJlbC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMud0xhYmVsLnNldEZvbnQobmV3IEZvbnQoJ0FyaWFsJywgMTYsICcjMDAwMDAwJykpO1xyXG5cclxuICAgIHRoaXMucUVsZW1lbnQuc2V0UG9pbnQobmV3IFBvaW50KDIwLCBTY3JlZW4uaGVpZ2h0IC0gODApKTtcclxuICAgIHRoaXMucUxhYmVsLnNldFBvaW50KG5ldyBQb2ludCg2MCwgU2NyZWVuLmhlaWdodCAtIDMwKSk7XHJcblxyXG4gICAgdGhpcy53RWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQoMTAwLCBTY3JlZW4uaGVpZ2h0IC0gODApKTtcclxuICAgIHRoaXMud0xhYmVsLnNldFBvaW50KG5ldyBQb2ludCgxNDAsIFNjcmVlbi5oZWlnaHQgLSAzMCkpO1xyXG5cclxuICAgIHNjZW5lLmFkZCh0aGlzLnFFbGVtZW50KTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLnFMYWJlbCk7XHJcbiAgICBzY2VuZS5hZGQodGhpcy53RWxlbWVudCk7XHJcbiAgICBzY2VuZS5hZGQodGhpcy53TGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5USkuaXNEb3duKCkpIHtcclxuICAgICAgdGhpcy5xRWxlbWVudC5jb2xvciA9ICcjMTEzMzExJztcclxuICAgICAgdGhpcy5xTGFiZWwuc2V0Rm9udENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnFFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgICB0aGlzLnFMYWJlbC5zZXRGb250Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoS2V5Ym9hcmQua2V5KEtleUNvZGVzLktleVcpLmlzRG93bigpKSB7XHJcbiAgICAgIHRoaXMud0VsZW1lbnQuY29sb3IgPSAnIzExMzMxMSc7XHJcbiAgICAgIHRoaXMud0xhYmVsLnNldEZvbnRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53RWxlbWVudC5jb2xvciA9ICcjQ0NERENDJztcclxuICAgICAgdGhpcy53TGFiZWwuc2V0Rm9udENvbG9yKCcjMDAwMDAwJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxzL0hpdEtleXMudHMiLCJpbXBvcnQgeyBDaXJjbGUsIFNjZW5lLCBQb2ludCwgU2NyZWVuLCBLZXlib2FyZCwgTW91c2UsIEtleUNvZGVzLCBDb2xsaXNpb24gfSBmcm9tICcuLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGl0Q2lyY2xlIHtcclxuICBwdWJsaWMgYm9yZGVyOiBDaXJjbGU7XHJcbiAgcHVibGljIGVsZW1lbnQ6IENpcmNsZTtcclxuICBwdWJsaWMgaGl0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMuaGl0ID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5ib3JkZXIgPSBuZXcgQ2lyY2xlKCdoaXQgY2lyY2xlIGJvcmRlcicpO1xyXG4gICAgdGhpcy5ib3JkZXIuc2V0UG9pbnQobmV3IFBvaW50KE1hdGgucmFuZG9tKCkgKiBTY3JlZW4ud2lkdGgsIE1hdGgucmFuZG9tKCkgKiBTY3JlZW4uaGVpZ2h0KSk7XHJcbiAgICB0aGlzLmJvcmRlci5jb2xvciA9ICcjRkZGRkZGJztcclxuICAgIHRoaXMuYm9yZGVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5ib3JkZXIuc2l6ZSA9IDg0O1xyXG4gICAgXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQ2lyY2xlKCdoaXQgY2lyY2xlJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0UG9pbnQobmV3IFBvaW50KHRoaXMuYm9yZGVyLngsIHRoaXMuYm9yZGVyLnkpKTtcclxuICAgIHRoaXMuZWxlbWVudC5jb2xvciA9ICcjMDEzM0REJztcclxuICAgIHRoaXMuZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5zaXplID0gODA7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMuYm9yZGVyKTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhpdCkge1xyXG4gICAgICBpZiAoS2V5Ym9hcmQua2V5KEtleUNvZGVzLktleVEpLmlzVXAoKSAmJiBLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5VykuaXNVcCgpKSB7XHJcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5USkuaXNEb3duKCkgfHwgS2V5Ym9hcmQua2V5KEtleUNvZGVzLktleVcpLmlzRG93bigpKSB7XHJcbiAgICAgIGlmICghdGhpcy5oaXQgJiZcclxuICAgICAgICBDb2xsaXNpb24uY2lyY2xlQ29sbGlkZSh0aGlzLmVsZW1lbnQsIG5ldyBDaXJjbGUoJycsIE1vdXNlLmN1cnNvcikpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KE1hdGgucmFuZG9tKCkgKiBTY3JlZW4ud2lkdGgsIE1hdGgucmFuZG9tKCkgKiBTY3JlZW4uaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJvcmRlci5zZXRQb2ludChwb2ludCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldFBvaW50KHBvaW50KTtcclxuICAgICAgICB0aGlzLmhpdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvSGl0Q2lyY2xlLnRzIiwiaW1wb3J0IHsgTGFiZWwsIFBvaW50LCBTY2VuZSwgVGltZSwgRm9udCB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGUFNDb3VudGVyIHtcclxuICBwdWJsaWMgZWxlbWVudDogTGFiZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbmV3IExhYmVsKCdmcHMgY291bnRlcicpO1xyXG4gICAgdGhpcy5lbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEZvbnQobmV3IEZvbnQoJ0FyaWFsJywgMTIsICcjRkZGRkZGJykpO1xyXG4gICAgdGhpcy5lbGVtZW50LnRleHQgPSAnRlBTOiAwJztcclxuICAgIHRoaXMuZWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQoMTUsIDE1KSk7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50LnRleHQgPSBgRlBTOiAke1RpbWUuZnBzfWA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxzL0ZQU0NvdW50ZXIudHMiLCJpbXBvcnQgQ29sbGlzaW9uIGZyb20gJy4vQ29sbGlzaW9uJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29sbGlzaW9uXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcGh5c2ljcy9pbmRleC50cyIsImltcG9ydCB7IFJlY3RhbmdsZSwgQ2lyY2xlLCBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbGxpc2lvbiB7XHJcbiAgcHVibGljIHN0YXRpYyBib3hDb2xsaWRlKGVsZW1lbnQxOiBSZWN0YW5nbGUsIGVsZW1lbnQyOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGVsZW1lbnQxLnggPCBlbGVtZW50Mi54ICsgZWxlbWVudDIud2lkdGggJiZcclxuICAgICAgZWxlbWVudDEueCArIGVsZW1lbnQxLndpZHRoID4gZWxlbWVudDIueCAmJlxyXG4gICAgICBlbGVtZW50MS55IDwgZWxlbWVudDIueSArIGVsZW1lbnQyLmhlaWdodCAmJlxyXG4gICAgICBlbGVtZW50MS5oZWlnaHQgKyBlbGVtZW50MS55ID4gZWxlbWVudDIueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2lyY2xlQ29sbGlkZShlbGVtZW50MTogQ2lyY2xlLCBlbGVtZW50MjogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkeDogbnVtYmVyID0gZWxlbWVudDEueCAtIGVsZW1lbnQyLng7XHJcbiAgICBjb25zdCBkeTogbnVtYmVyID0gZWxlbWVudDEueSAtIGVsZW1lbnQyLnk7XHJcbiAgICBjb25zdCBkOiBudW1iZXIgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGQgPCBlbGVtZW50MS5zaXplIC8gMiArIGVsZW1lbnQyLnNpemUgLyAyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb2xsaWRlKGVsZW1lbnQxOiBSZWN0YW5nbGV8Q2lyY2xlLCBlbGVtZW50MjogUmVjdGFuZ2xlfENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGVsZW1lbnQxIGluc3RhbmNlb2YgQ2lyY2xlICYmIGVsZW1lbnQyIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNpcmNsZUNvbGxpZGUoZWxlbWVudDEsIGVsZW1lbnQyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB3MTogbnVtYmVyO1xyXG4gICAgICBsZXQgaDE6IG51bWJlcjtcclxuICAgICAgbGV0IHcyOiBudW1iZXI7XHJcbiAgICAgIGxldCBoMjogbnVtYmVyO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQxIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgdzEgPSBlbGVtZW50MS5zaXplO1xyXG4gICAgICAgIGgxID0gZWxlbWVudDEuc2l6ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3MSA9IGVsZW1lbnQxLndpZHRoO1xyXG4gICAgICAgIGgxID0gZWxlbWVudDEuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWxlbWVudDIgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICB3MiA9IGVsZW1lbnQyLnNpemU7XHJcbiAgICAgICAgaDIgPSBlbGVtZW50Mi5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHcyID0gZWxlbWVudDIud2lkdGg7XHJcbiAgICAgICAgaDIgPSBlbGVtZW50Mi5oZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmJveENvbGxpZGUoXHJcbiAgICAgICAgPFJlY3RhbmdsZT57eDogZWxlbWVudDEueCwgeTogZWxlbWVudDEueSwgd2lkdGg6IHcxLCBoZWlnaHQ6IGgxfSxcclxuICAgICAgICA8UmVjdGFuZ2xlPnt4OiBlbGVtZW50Mi54LCB5OiBlbGVtZW50Mi55LCB3aWR0aDogdzIsIGhlaWdodDogaDJ9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHByb3RlY3RlZCBfcmVhZHk6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9VUkw6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX2ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgdGhpcy5faW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5JTUFHRTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcmVhZHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IFVSTCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9VUkw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IFVSTChVUkw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuX1VSTCA9IFVSTDtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IHRoaXMuX1VSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VVJMKFVSTDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLlVSTCA9IFVSTDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvSW1hZ2UudHMiXSwic291cmNlUm9vdCI6IiJ9