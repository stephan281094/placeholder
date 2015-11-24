# Placeholder
A lorem ipsum-ish placeholder utility for dummy data

## Usage
This project contains two micro libraries:
* generator.js
* placeholder.js

### Generator.js
This micro library generates a given amount of nodes for you so you don't have
to copy & paste nodes yourself. At the moment there's only one function, which
is called **div()**. An example demonstrated below:

```js
var g = new Generator('.parent-wrapper').div({
  className: 'optional-classname',
  amount: 24
});
```

### Placeholder.js
This micro library adds a solid or gradient color to a specified node. This is
especially useful when you want to quickly add different kind of blocks to your
website. This library will make sure the colors are different each time so you
get some variation (as you would with different images).

At the moment it has two different functions: **solid()** and **gradient()**.
Just initialize a Placeholder object by passing in a selector. Then call one of
the functions to see the effect apply to the given elements. Example:

```js
var p = new Placeholder('.placeholder-item').gradient();
```
