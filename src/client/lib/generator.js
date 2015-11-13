!(function() {

  var parent;

  // Constructor
  function Generator(el) {
    parent = typeof el === 'object' ? el : document.querySelector(el);

    return this;
  }

  Generator.prototype.div = function(opts) {
    var amount = opts.amount || 1;

    while (amount--) {
      var item = document.createElement('div');
      if (opts.className) item.classList.add(opts.className);
      parent.appendChild(item);
    }

    return this;
  };

  this.Generator = Generator;
})();
