# Fundamental concepts
There is very little fundamental knowledge you need.

## Never let margin bleed
You really only need to know the difference between `margin` (something that's outside) and `padding` (something that is inside). Here's a picture:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/marginpadding.gif)


One more thing about margin : *it collapses*. This means that if two items are next to each other with a margin of `30px` and `20px`, instead of of being separated by `50px` they will be separated by `30px`. This shown below:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/marginsibling.png)

Not only that, if an element is unfortunate to be at the border of its parent, its margin will collapse with its parent. These facts are shown below:

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/marginchild.png)

This makes it very difficult to create a maintainable layout system with margins. [](TODO: We will use them *but never in a container that has padding less than the child's margin*. More on this later.)

## Avoid inline
Having an element as `display: inline` means that it completely ignores its height. Here is a visual difference where an element has been given a height but `inline` ignored it and `inline-block` got it.

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/inline.png)

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/inlineBlock.png)

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

![](https://raw.githubusercontent.com/typestyle/typestyle.github.io/master/images/book/borderbox.png)

It sounds something basic but the first HTML spec got wrong. Its easy to fix though:

```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

# Root
Combine all that we've talked about and we have the following page setup.

```html
<html>
<body>
    <div id="root"></div>
    <script src="./demo/bundle.js"></script>
</body>
</html>
```

```ts
import {setupPage} from "typestyle/csx";
setupPage();
```
