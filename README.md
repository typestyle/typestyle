# TypeStyle

> Making CSS type safe.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

Writing CSS with TypeStyle will be just as fluent as writing JavaScript with TypeScript.

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/autocomplete.gif)

There are quite a few css in js frameworks out there. This one is different:

- Provides great TypeScript developer experience.
- No custom AST transform or module loader (webpack) support needed.
- Works with any framework (react, angular2, whatever, doesn't matter).
- *super* **small** (~1k)

## Overview

* [Quickstart](#quickstart)
* [Server side](#server-side)
* [Pseudo Classes, Animations, Media Queries](#advanced)
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
`&:first-child`, `&:last-child`, `&>*` etc work too e.g. use it to design a vertical layout:

```tsx
/** Import */
import {style} from "typestyle";

/** Share constants in TS! */
const spacing = '5px';

/** style -> className :) */
const className = style({
  '&>*': {
    marginTop: spacing,
    marginBottom: spacing
  },
  '&:first-child': {
    marginTop: '0px',
  }
  '&:last-child': {
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
const redClass = style({color:'red'});
const tallClass = style({height:'100px'});

/** Compose classes */
const tallRedClass = typestyle.classes(redClass,tallClass);

/** Even conditionally (any falsy parameters are ignored in the composed class name) */
const mightBeTallAswell = typestyle.classes(redClass,someBoolean && tallClass);
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
[travis-image]: https://travis-ci.org/typestyle/typestyle.svg?branch=master
[travis-url]:https://travis-ci.org/typestyle/typestyle
[npm-image]: https://img.shields.io/npm/v/typestyle.svg?style=flat
[npm-url]: https://npmjs.org/package/typestyle
[css.d.ts]: https://github.com/typestyle/typestyle/blob/master/src/css.d.ts