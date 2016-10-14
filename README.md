# TypeStyle

> Making CSS type safe.

Writing CSS with TypeStyle will be just as fluent as writing JavaScript with TypeScript.

There are quite a few css in js frameworks out there. This one is different in that it is focused on providing a cohesive type safe story around managing CSS.

## Overview

* [Quickstart](#quickstart)
* [Server side](#servers-side)
* [Pseudo Classes, Animations, Media Queries](#Advanced)
* [How](#how)
  * [Really How](#really-how)
* [Performance](#performance)

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

/** Use the class name in a framework of choice e.g. React */
const MyButton = 
  ({onClick,children})
    => <button className={className} onClick={onClick}>
        {children}
      </button>
```

## Server Side

Just get the styles as CSS at any point and render it in a style tag yourself. e.g. 

```ts
/** Import */
import {style, getStyles} from "typestyle";

/** convert a style object to a CSS class name */
const className = style({color: 'red'});

/** Render to CSS style tag */
const styleTag = `<style>${getStyles()}</style>`
/** ^ send this as a part of your HTML response */
```

## Advanced
**Psedo States**
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

**Animations**
Use `keyframes` to define an animation:
```tsx
const spinnerRotate = typestyle.keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const spinnerClass = typestyle.style({
  display: 'inline-block',
  background: 'transparent',

  /** Set it up with a side missing */
  color: 'red',
  borderStyle: 'solid',
  broderTopColor: 'currentColor',
  broderLeftColor: 'currentColor',
  broderRightColor: 'currentColor',
  borderBottomColor: 'transparent',

  /** Setup to be a circle */
  borderRadius: '100%',

  /** Fixed size */
  width: '20px',
  height: '20px',
  borderWidth: '2px',

  /** Animation */
  animation: `${spinnerRotate} .75s linear infinite`,
});
```

**Media Queries**
:memo: TODO

**Protip: Namespaces!**
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
* Provide `css.d.ts` to help with autocomplete + error reporting.

## Performance
Same as [FreeStyle][free-style] which is *super simple* and does the *absolute minimum but necessary*, so faster than other CSS in JS frameworks for sure. We'd love to be told otherwise.

[free-style]:https://github.com/blakeembrey/free-style
