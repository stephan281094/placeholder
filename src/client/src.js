Template.body.rendered = function () {
  var g, p;

  g = new Generator('.placeholder-items');
  g.generate(24);

  p = new Placeholder('.placeholder-item');
  p.gradient();
};
