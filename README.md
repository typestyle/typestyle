# TypeStyle

[![Join the chat at  gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/typestyle/general)

> Making CSS type safe.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Downloads](https://img.shields.io/npm/dm/typestyle.svg)](https://www.npmjs.com/package/typestyle)

Writing CSS with TypeStyle will be just as fluent as writing JavaScript with TypeScript.

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/source/public/images/autocomplete.gif)

There are quite a few css in js frameworks out there. This one is different:

- Provides great TypeScript developer experience.
- No custom AST transform or module loader support needed.
- Works with any framework (react, angular2, [cyclejs](https://twitter.com/waynemaurer/status/788483714196078593), whatever, doesn't matter).
- Zero config. Just use.
- *super* **small** (~6k gz)

> This project is powered by github 🌟s ^ go ahead and [star it please](https://github.com/typestyle/typestyle/stargazers).

Checkout [the awesome list of reviews 🌹][reviews].

## Overview

* [Quickstart](#quickstart)
* [Guide: Pseudo Classes, Animations, Media Queries, Server side rendering](#guide)
* [Why](#why)

## Quickstart

Use it like you would use CSS modules or CSS in general with webpack etc, but this time you get to use TypeScript / JavaScript!

**Install**
`npm install typestyle --save`

**Use**
```tsx
/** Import */
import {style} from "typestyle";

/** convert a style object to a CSS class name */
const className = style({color: 'red'});

/** Use the class name in a framework of choice */
//  e.g. React
const MyButton =
  ({onClick,children})
    => <button className={className} onClick={onClick}>
        {children}
      </button>
// or Angular2
@Component({
  selector: 'my-component',
  template: `<div class="${className}">Tada</div>`
})
export class MyComponent {}
```

## Guide
We really really want to make CSS maintainable and simple. So we even wrote a free and open source book, covering the super simple core API, a handful of utility styles in [`csx`](https://github.com/typestyle/csx) and tons of other goodness 🌹. *[Jump to the guide][book]*

[![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/source/public/images/book/cover.png)][book]


## Video Course
The guide contains everything you need to know. But if you prefer to watch video [we have a free course up on egghead][course].

[![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/source/public/images/course.png)][course]


## Why
You are probably here cause you are unhappy with your current workflow. So why not just jump to the [guide][book] and give it a go. If you [still need reasons we have quite a few][why].

[free-style]:https://github.com/blakeembrey/free-style
[travis-image]:https://travis-ci.org/typestyle/typestyle.svg?branch=master
[travis-url]:https://travis-ci.org/typestyle/typestyle
[npm-image]:https://img.shields.io/npm/v/typestyle.svg?style=flat
[npm-url]:https://npmjs.org/package/typestyle
[types.ts]:https://github.com/typestyle/typestyle/blob/master/src/types.ts
[csx]:https://github.com/typestyle/typestyle#csx
[book]:https://typestyle.github.io
[course]:https://egghead.io/courses/maintainable-css-using-typestyle
[why]:https://typestyle.github.io/#/why
[reviews]:https://typestyle.github.io/#/reviews
