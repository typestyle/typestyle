"use strict";
var index_1 = require("../index");
var assert = require("assert");
describe("initial test", function () {
    it("should pass", function () {
        assert(index_1.css() === '');
        index_1.style({ color: 'red' });
        assert.equal(index_1.css(), '.f1jvcvsh{color:red}');
    });
    it("reinit should clear", function () {
        index_1.reinit();
        assert(index_1.css() === '');
        index_1.style({ color: 'red' });
        assert.equal(index_1.css(), '.f1jvcvsh{color:red}');
    });
    it("child same", function () {
        index_1.reinit();
        index_1.style({ color: 'red', '&>*': { color: 'red' } });
        assert.equal(index_1.css(), '.f1nv0def,.f1nv0def>*{color:red}');
    });
    it("child different", function () {
        index_1.reinit();
        index_1.style({ color: 'red', '&>*': { color: 'blue' } });
        assert.equal(index_1.css(), '.fv84gyi{color:red}.fv84gyi>*{color:blue}');
    });
    it("media same", function () {
        index_1.reinit();
        index_1.style({ color: 'red', '@media (min-width: 400px)': { color: 'red' } });
        assert.equal(index_1.css(), '.f12z113b{color:red}@media (min-width: 400px){.f12z113b{color:red}}');
    });
    it("media different", function () {
        index_1.reinit();
        index_1.style({ color: 'red', '@media (min-width: 400px)': { color: 'blue' } });
        assert.equal(index_1.css(), '.fxfrsga{color:red}@media (min-width: 400px){.fxfrsga{color:blue}}');
    });
});
