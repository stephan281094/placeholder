!(function(window, document) {

  // Constructor
  function Generator(el, opts) {
    this.parent = typeof el === 'object' ? el : document.querySelector(el);
  }

  Generator.prototype.generate = function(amount) {
    while (amount--) {
      var item = document.createElement('div');
      item.classList.add('placeholder-item');
      this.parent.appendChild(item);
    }
  };

  window.Generator = Generator;
})(window, document);
