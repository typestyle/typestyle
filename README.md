# TypeStyle

> Making CSS type safe.

Writing CSS with TypeStyle will be just as fluent as writing JavaScript with TypeScript.

There are quite a few css in js frameworks out there. This one is different in that it is focused on providing a cohesive type safe story around managing CSS.

## Overview

* [Quickstart](#quickstart)
* [How](#how)
* [Really How](#really-how)


## Quickstart

**Install**
`npm install typestyle --save`  

**Use**
```ts
/** Import */
import {style} from "typestyle";

/** convert a style object to a CSS class name */
const className = style({color: 'red'});

/** Use the class name in a framework of choice e.g. React */
const MyButton = ({onClick,children})=><button className={className}>{children}</button>
```

## How
This works very much in the same principle as CSS modules in that it takes a style object and generates a *non conflicting generated* class name.

## Really How
* [FreeStyle][free-style] converts a JS style object to a CSS className using hashing
* We keep a single style sheet updated as you register styles.
* Provide `css.d.ts` to help with autocomplete + error reporting.

[free-style]:https://github.com/blakeembrey/free-style
