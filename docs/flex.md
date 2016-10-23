# Flex
Having well defined semantics of *how the layout will happen* is important for a maintainable layout system. The more variables you throw into the semantics the less reliable the layout becomes because *you need to compile the final result in your brain* in order to maintain the layout. We will cover the *concept* of a flexible layout system inspired by a *subset* of CSS flexbox.

## Root
We will look at `flex`ible children and `content` children. These concepts exist inside a *`root`*. The root is simply the *container* that is used as a point of reference for these children.

In CSS flexbox the concept of `root` does not exist without combining it with the concept of *flex direction*. We will cover this after we look at `flex` and `content`.

> A general purpose `csx.flexRoot` does exist which is just an alias for `csx.horizontal`.

## Flex
Consider the following layout:

```
------------------------------------
|
|
|   CONTENT
|
|
------------------------------------
```

Here the content *takes up all the available space offered by the parent*.

```
------------------------------------
|
|
|
|
|   CONTENT
|
|
|
|
------------------------------------
```

The space taken by the child (content) is what is available to its children. No more, no less.

Such a child is called *flex* (`csx.flex`).

> A *flex* container has the same size as its parent.

## Content
In the previous example the child *flexed* into the parent. The only other concept we need for a child is that of *content*. **A *content* child determines its size based on the size of its content**. That is all the space it takes up in the parent. This is shown below where if the parent is too big the rest of the space is unused

```
------------------------------------
|
|
|   CONTENT
|
|
------------------------------------
|
|   UNUSED
|
------------------------------------
```
If the parent is too small the content will overflow:

```
------------------------------------
|
|
|   CONTENT
------------------------------------
|   OVERFLOW
|
```

> A *content* (`csx.content`) child determines its size based on the size of its content

### Flex Direction
A root has a default *main axis* of `horizontal`. This is axis in which the children are layed out. In the *cross axis* the children are by default forced to `flex`.

So there are really two roots:
* `csx.horizontal`: Lays out children horizontally based on `content` and `flexes` them vertically.
* `csx.vertical`: Lays out children vertically based on `content` and `flexes` them horizontally.
[](TODO: screens would help here)

Of-course the children can change the root's `content` and `flex` choice:
* Main Axis: `content` is default. A child can choose to `flex` in the main axis.
* Cross Axis: `flex` is default. If the child has an explicit size (`width` or `height` depending on flex direction) they are treated as `content`.

# Children
We've seen three types of containers : `root`, `flex`, `content`. The next step is to combine the `flex` and `content` children into a `root`.

## Vertical Example
Consider the following layout:

```
------------------------------------
|            HEADER                |
------------------------------------
|                                  |
|             BODY                 |
|                                  |
------------------------------------
|             FOOTER               |
------------------------------------
```

Up front we know its *vertical*. Assume that we want the body to *flex* i.e. as the root becomes larger:

```
------------------------------------
|            HEADER                |
------------------------------------
|                                  |
|                                  |
|                                  |
|             BODY                 |
|                                  |
|                                  |
|                                  |
------------------------------------
|             FOOTER               |
------------------------------------
```

In our lingo the `root` here is `vertical` that has three children:
* header: `content`
* body: `flex`
* footer: `content`

Of course the children are going to automatically flex in the cross dimension (horizontal).

## Multiple Flex Children
The `flex` children actually share the *remainder* of the space left in the `root` after all the `content` children take up the space they need. This is shown below:

```
------------------------------------
|   ContentChild
|
|   FlexChild
|
|   FlexChild
|
|   ContentChild
------------------------------------
```
Upon expansion:

```
------------------------------------
|   ContentChild
|
|
|
|   FlexChild
|
|
|
|   FlexChild
|
|
|
|   ContentChild
------------------------------------
```

Actually a flex child can decide what *flex scaling factor* (`csx.flex1`,`csx.flex2` ... `csx.flex12`) they have. So if you have

```
A: {flex1}
B: {flex2}
```
The remainder space is divided into `3` (`1 + 2`) equal parts with `1` part going to a `A` and `2` parts going to `B`.
[](TODO: image would help)

## Horizontal Example

Consider the layout:
```
-----------------------------------------
|             |           |             |
|   SIDEBAR   |    BODY   |    SIDEBAR  |
|             |           |             |
-----------------------------------------
```
Where we want to body to grow:
```
--------------------------------------------------------
|             |                          |             |
|   SIDEBAR   |             BODY         |    SIDEBAR  |
|             |                          |             |
--------------------------------------------------------
```

Here we have:
* root: `csx.horizontal`
* sidebar: `csx.content`
* body: `csx.flex`
* sidebar: `csx.content`

This example should have been fairly obvious and was designed to give you a hands on experience 🌹

## Arbitrary Layout
Consider this layout:

```
--------------------------------------------------------
|                       HEADER                         |
--------------------------------------------------------
|             |                          |             |
|   SIDEBAR   |             BODY         |    SIDEBAR  |
|             |                          |             |
--------------------------------------------------------
|                       FOOTER                         |
--------------------------------------------------------
```
This is actually a layout used by lots of applications. If you think about it, its just a nesting of concepts you already know `csx.vertical`,`csx.horizontal`, `csx.flex`, `csx.content`.

In fact its a combination of the first layout:

```
------------------------------------
|            HEADER                |
------------------------------------
|                                  |
|             BODY                 |
|                                  |
------------------------------------
|             FOOTER               |
------------------------------------
```

Where the body is itself a `csx.horizontal`:

```
-----------------------------------------------
|                    HEADER                   |
-----------------------------------------------
|             |                 |             |
|   SIDEBAR   |       BODY      |    SIDEBAR  |
|             |                 |             |
-----------------------------------------------
|                     FOOTER                  |
-----------------------------------------------
```
Easy right!

[](TODO: # Scrolling)

[](TODO: # Scrolling a sub child)

[](TODO Components: We've covered enough of layout to allow you to create basic layouts quite easily)

[](TODO: Overlays)

[](TODO: Menu)

