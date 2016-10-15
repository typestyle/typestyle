# TypeStyle

> Making CSS type safe.

Writing CSS with TypeStyle will be just as fluent as writing JavaScript with TypeScript.

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/autocomplete.gif)

There are quite a few css in js frameworks out there. This one is different in that it is focused on providing a cohesive story around managing CSS for TypeScript developers.

## Overview

* [Quickstart](#quickstart)
* [Server side](#server-side)
* [Pseudo Classes, Animations, Media Queries](#advanced)
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

**Animations**
Use `animationName` to define an animation:
```tsx
const colorAnimation = typestyle.animationName({
  from: { color: 'red' },
  to: { color: 'blue' }
})

const ohhhhClass = typestyle.style({
  animationName: colorAnimation,
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
* Provide `css.d.ts` to help with autocomplete + error reporting.

## Performance
Same as [FreeStyle][free-style] which is *super simple* and does the *absolute minimum but necessary*, so faster than other CSS in JS frameworks for sure. We'd love to be told otherwise.

[free-style]:https://github.com/blakeembrey/free-style
