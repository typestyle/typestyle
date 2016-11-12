"use strict";
var FreeStyle = require("free-style");
var raf = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame;
var afterAllSync = (new (function () {
    function class_1() {
        var _this = this;
        this.pending = 0;
        this.afterAllSync = function (cb) {
            _this.pending++;
            var pending = _this.pending;
            raf(function () {
                if (pending !== _this.pending)
                    return;
                cb();
            });
        };
    }
    return class_1;
}())).afterAllSync;
function ensureString(x) {
    return typeof x.type === 'string'
        ? x.toString()
        : x;
}
exports.ensureString = ensureString;
var freeStyle = FreeStyle.create();
var lastFreeStyleChangeId = freeStyle.changeId;
var singletonTag = typeof window === 'undefined' ? { innerHTML: '' } : document.createElement('style');
if (typeof document !== 'undefined')
    document.head.appendChild(singletonTag);
var styleUpdated = function () {
    if (freeStyle.changeId === lastFreeStyleChangeId
        && !pendingRawChange)
        return;
    lastFreeStyleChangeId = freeStyle.changeId;
    pendingRawChange = false;
    afterAllSync(flush);
};
var pendingRawChange = false;
var raw = '';
function cssRaw(mustBeValidCSS) {
    if (!mustBeValidCSS)
        return;
    raw = raw + mustBeValidCSS;
    pendingRawChange = true;
    styleUpdated();
}
exports.cssRaw = cssRaw;
function flush() {
    singletonTag.innerHTML = exports.css();
}
function reinit() {
    freeStyle = FreeStyle.create();
    lastFreeStyleChangeId = freeStyle.changeId;
    raw = '';
    pendingRawChange = false;
    singletonTag.innerHTML = '';
}
exports.reinit = reinit;
exports.css = function () { return raw ? raw + freeStyle.getStyles() : freeStyle.getStyles(); };
function style() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i - 0] = arguments[_i];
    }
    var object = extend.apply(void 0, objects);
    var className = freeStyle.registerStyle(object);
    styleUpdated();
    return className;
}
exports.style = style;
function cssRule(selector) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var object = extend.apply(void 0, objects);
    freeStyle.registerRule(selector, object);
    styleUpdated();
    return;
}
exports.cssRule = cssRule;
function keyframes(frames) {
    for (var key in frames) {
        var frame = frames[key];
        for (var prop in frame) {
            frame[prop] = ensureString(frame[prop]);
        }
    }
    var animationName = freeStyle.registerKeyframes(frames);
    styleUpdated();
    return animationName;
}
exports.keyframes = keyframes;
function cssFunction(functionName) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var parts = params.map(ensureString).join(',');
    return functionName + "(" + parts + ")";
}
exports.cssFunction = cssFunction;
function extend() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i - 0] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var object = objects_1[_a];
        for (var key in object) {
            var val = object[key];
            if ((key.indexOf('&') !== -1 || key.indexOf('@media') === 0)
                && result[key]) {
                result[key] = extend(result[key], object);
            }
            else {
                result[key] = ensureString(val);
            }
        }
    }
    return result;
}
exports.extend = extend;
function classes() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i - 0] = arguments[_i];
    }
    return classes.filter(function (c) { return !!c; }).join(' ');
}
exports.classes = classes;
