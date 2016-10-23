# Flex

Having well defined semantics of *how the layout will happen* is important for a maintainable layout system. The more variables you throw into the semantics the less reliable the layout becomes because *you need to compile the final result in your brain* in order to maintain the layout. We will cover the *concept* of a flexible layout system inspired by a *subset* of CSS flexbox.

## Root
We will look at `flex`ible children and `content` children. These concepts exist inside a *`root`*. The root is simply the *container* that is used as a point of reference for these children.

In CSS flexbox the concept of `root` does not exist without combining it with the concept of *flex direction*. We will cover this after we look at `flex` and `content`.

> A general purpose `csx.flexRoot` does exist which is just an alias for `csx.horizontal`.

To start the layout system you would generally have something like the following:

```css
#root {
    /* Take up all the space from the parent */
    height:100%;
    width:100%;

    /* Kick start the flexible layout */
    display:flex;
}
```
So the whole page is something like:
```html
<html>
<style>
    html,
    body {
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    #root {
        /* Take up all the space from the parent */
        height: 100%;
        width: 100%;
        /* Kick start the flexible layout */
        display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox;  /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    }
</style>

<body>
    <div id="root"></div>
    <script src="./demo/bundle.js"></script>
</body>
</html>
```
