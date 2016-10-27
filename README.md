# TypeStyle

[![Join the chat at  gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/typestyle/general)

> Making CSS type safe.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

Writing CSS with TypeStyle will be just as fluent as writing JavaScript with TypeScript.

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/autocomplete.gif)

There are quite a few css in js frameworks out there. This one is different:

- Provides great TypeScript developer experience.
- No custom AST transform or module loader support needed.
- Works with any framework (react, angular2, [cyclejs](https://twitter.com/waynemaurer/status/788483714196078593), whatever, doesn't matter).
- Zero config. Just use.
- *super* **small** (~1k)

> This project is powered by github 🌟s ^ go ahead and [star it please](https://github.com/typestyle/typestyle/stargazers).

* [I haven't been this giggly-happy about a library in a long time!!!](https://twitter.com/andrestaltz/status/788665551325454337)
* [Rad idea!](https://twitter.com/iammerrick/status/788784672314576897)

## Overview

* [Quickstart](#quickstart)
* [Server side](#server-side)
* [Pseudo Classes, Animations, Media Queries](#advanced)
* [Fallbacks](#fallbacks)
* [CSS Replacement](#css-replacement)
* [CSX](#csx)
* [Book](#book)
* [How](#how)
  * [Really How](#really-how)
* [Performance](#performance)
* [Help](#help)

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

[Play with it](https://runkit.com/5811173e83ec7b0014453d7a/5811173e83ec7b0014453d7b)

## Server Side

Just get the styles as CSS at any point and render it in a style tag yourself. e.g.

```ts
/** Import */
import {style, css} from "typestyle";

/** convert a style object to a CSS class name */
const className = style({color: 'red'});

/** Render to CSS style tag */
const styleTag = `<style>${css()}</style>`
/** ^ send this as a part of your HTML response */
```

## Advanced
**Pseudo States**
`&:hover`, `&:active`, `&:focus`, `&:disabled` as you would expect e.g.

```tsx
/** Import */
import {style} from "typestyle";

/** convert a style object to a CSS class name */
const className = style({
  color: 'blue',
  '&:hover': {
    color: 'red'
  }
});
```

**Child selectors**
`&>*` etc work too e.g. use it to design a vertical layout:

```tsx
/** Import */
import {style} from "typestyle";

/** Share constants in TS! */
const spacing = '5px';

/** style -> className :) */
const className = style({
  '&>*': {
    marginBottom: spacing,
  },
  '&>*:last-child': {
    marginBottom: '0px',
  }
});
```

**Media Queries**
```tsx
const colorChangingClass = style({
  backgroundColor: 'red',
  '@media (min-width: 400px)': {
    backgroundColor: 'pink'
  }
})
```

**Merge Objects**
Pass as many style objects to `style` and they merge *just right*.

```tsx
const redMaker = {color:'red'};
const alwaysRedClass = style(redMaker);
const greyOnHoverClass = style(
  redMaker,
  {'&:hover':{color: 'grey'}}
);
```

**Compose Classes** You can easily compose class names using `classes`

```tsx
const tallClass = style({height:'100px'});
const redClass = style({color:'red'});

/** Compose classes */
const tallRedClass = typestyle.classes(tallClass, redClass);

/** Even conditionally (any falsy parameters are ignored in the composed class name) */
const mightBeRed = typestyle.classes(tallClass, hasError && redClass);
```

**Animations**
Use `keyframes` to define an animation and get the animation name
```tsx
const colorAnimationName = typestyle.keyframes({
  from: { color: 'red' },
  to: { color: 'blue' }
})

const ooooClass = typestyle.style({
  animationName: colorAnimationName,
  animationDuration: '1s'
});
```

**TypeScript Protip: namespace**
```tsx
/** Think of it like an inline stylesheet */
namespace MyStyles {
  const color = 'red';

  export const alwaysRedClass = style({color});
  export const onlyRedOnHoverClass = style({'&:hover':{color});
}

/** Use e.g. with React */
const AlwaysRed = ({text}) => <div className={MyStyles.alwaysRedClass}>{text}</div>
const OnlyRedOnHover = ({text}) => <div className={MyStyles.onlyRedOnHoverClass}>{text}</div>
```

## Fallbacks
There are two kinds of fallbacks in CSS and both are supported:

* Same key multiple values: Just use an *array* for the value e.g. background colors

```ts
const fallBackBackground = style({
  backgroundColor: [
    /* The fallback */
    'rgb(200, 54, 54)',
    /** Graceful upgrade */
    'rgba(200, 54, 54, 0.5)'
  ]
});
```

* Vendor prefixing: Anything that starts with `-` is not case renamed (i.e. no `fooBar` => `foo-bar`) e.g. for smooth scroll:

```ts
const scroll = style({
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto'
});
```

> Protip: Big fan of flexbox? Use [csx][csx] as it provides the necessary vendor prefixes so you don't need to worry about them.

Note: We don't do *automatic* vendor prefixing for a few reasons:

* Code bloat, runtime performance, you might want more control (we don't make choices that you might need to undo).
* Vendor prefixing has no future: https://webkit.org/blog/6131/updating-our-prefixing-policy/

## CSS Replacement
You can even use any raw CSS selector as well using `cssRule` e.g.

* To setup a application style layout:

```ts
/** Use full window size for application */
cssRule('html, body', {
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0
});
```
* Font faces:
```ts
cssRule('@font-face', {
  fontFamily: '"Bitstream Vera Serif Bold"',
  src: 'url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf")'
});
```
* Page level media queries:
```ts
/** Save ink with a white background */
cssRule('@media print', {
  body: {
    background: 'white'
  }
});
```

> Advantage: `cssRule(selector,properties)` works seemlessly in a nodejs enviroment (for testing) whereas `require('./someCss.css')` does not without additional setup.

## CSX

We understand that its difficult to get started with CSS in JS without additional guidance. So we also provide *a lot* of utility style objects in `typestyle/csx` to decrease you rampup. e.g. flexbox:

```js
import * as csx from 'typestyle/csx';
import {style} from 'typestyle';

const horizontal = style(csx.horizontal);

/** Sample usage with React */
var Demo = () =>
  <div className={horizontal}>
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
  </div>;
```

Ofcourse you can compose styles easily:

```js
import * as csx from 'typestyle/csx';
import {style} from 'typestyle';

const flexHorizontalGreen = style(
  csx.flex,
  csx.horizontal,
  { backgroundColor: 'green' }
);

/** Sample usage with React */
const Demo = () =>
  <div className={flexHorizontalGreen}>
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
  </div>;
```

## Book
We really really want to make CSS maintainable and simple. So we even wrote a Free and OSS book for how to use the utility styles in `typestyle/csx`  🌹. *[Jump to the book][book]*

[![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/cover.png)][book]

## How
This works very much in the same principle as CSS modules in that it takes a style object and generates a *non conflicting generated* class name.

### Really How
* [FreeStyle][free-style] converts a JS style object to a CSS className using hashing
* We keep a single style sheet updated as you register styles.
* Provide [`css.d.ts`][css.d.ts] to help with autocomplete + error reporting.

## Help

Really apprecate as many PRs for [`css.d.ts`][css.d.ts] `CSSProperties` as you can throw at us 🌹

## Performance
Same as [FreeStyle][free-style] which is *super simple* and does the *absolute minimum but necessary*, so faster than other CSS in JS frameworks for sure. We'd love to be told otherwise.

[free-style]:https://github.com/blakeembrey/free-style
[travis-image]:https://travis-ci.org/typestyle/typestyle.svg?branch=master
[travis-url]:https://travis-ci.org/typestyle/typestyle
[npm-image]:https://img.shields.io/npm/v/typestyle.svg?style=flat
[npm-url]:https://npmjs.org/package/typestyle
[css.d.ts]:https://github.com/typestyle/typestyle/blob/master/src/css.d.ts
[csx]:https://github.com/typestyle/typestyle#csx
[book]:https://basarat.gitbooks.io/typestyle/content/
