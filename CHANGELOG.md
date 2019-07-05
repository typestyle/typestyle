# 2.0.3 
Updated `free-style` to `2.6.1`.

# 2.0.2
`typestyle.classes` now takes objects. e.g. `assert.equal(classes("a", false && "b", "c", { d: false, e: true }, { f: {}, g: null }), "a c e f");`. Ref : https://github.com/typestyle/typestyle/pull/332

# 2.0.0
Migrated types to use the csstype project.

# 1.7.2
* Fix : `ReferenceError: window is not defined` no longer happens when using `import 'raf/polyfill';`.

# 1.3.0
* `$debugName` is now always respected.

# 1.1.1
* CSSProperties `strokeDashoffset`.
* CSSProperties `strokeLineCap`.
* `style` and `extend` safely ignore `null` and `undefined` [commit](https://github.com/typestyle/typestyle/commit/f74d7ca42e02d74ffdb541b552b3c29a20c967b2)

# 1.1.0
* Fixed broken autocomplete. [issue](https://github.com/typestyle/typestyle/issues/110#issuecomment-278357674) [fix](https://github.com/typestyle/typestyle/commit/0d9302e8339baa18ea660c901b9b8d920c558577)

# 1.0.0
* Went 1.0 after a month of no new API changes.
