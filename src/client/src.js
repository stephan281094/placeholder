Template.body.rendered = function () {
  var g = new Generator('.placeholder-items').div({
    className: 'placeholder-item',
    amount: 24
  });
  var p = new Placeholder('.placeholder-item').gradient();
};
