!(function() {

  // Constructor
  function Generator(el, opts) {
    this.parent = typeof el === 'object' ? el : document.querySelector(el);

    return this;
  }

  Generator.prototype.generate = function(amount) {
    while (amount--) {
      var item = document.createElement('div');
      item.classList.add('placeholder-item');
      this.parent.appendChild(item);
    }
  };

  this.Generator = Generator;
})();
