# Fundamental concepts
There is very little fundamental knowledge you need.

## Margin is the enemy
You really only need to know the difference between `margin` (something that's outside) and `padding` (something that is inside). Here's a picture:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/marginpadding.gif)


One more thing about margin : *it collapses*. This means that if two items are next to each other with a margin of `30px` and `20px`, instead of of being separated by `50px` they will be separated by `30px`. This shown below:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/marginsibling.png)

Not only that, if an element is unfortunate to be at the border of its parent, its margin will collapse with its parent. These facts are shown below:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/marginchild.png)

This makes it very difficult to create a maintainable layout system with margins. [](TODO: We will use them *but never in a container that has padding less than the child's margin*. More on this later.)

## Inline is the enemy
Having an element as `display: inline` means that it completely ignores its height. Here is a visual difference where an element has been given a height but `inline` ignored it and `inline-block` got it.

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/inline.png)

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/inlineBlock.png)

Also you cannot CSS3 transform inline elements. So use a `span` but if there is anything fancy you need the `span` to do, be sure to `inline-block` it.

# Basic Setup
There are very few simple things about the default layout of an HTML page that need to be setup in order to prepare it for the application era:

* Full Sized Body
* Box Model

## Full Sized Body
You really want the root of your page to be something that takes up all the available space on screen and provides it as a drawing canvas for children. This can be done easily:

```css
html, body {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
}
```

## Box Model
You really want the `width`/`height` of an element to represent the `border+padding+content`. This is shown below:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/borderbox.png)

It sounds something basic but the first HTML spec got wrong. Its easy to fix though:

```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

# Flexibility
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
