!(function() {

  // helpers
  function randomHex(opts) {
    var options = opts || {};
    var random = Math.floor(Math.random() * 16777215).toString(16)
    return random.length === 6 && !_.contains(options.ignore, random) ? random : randomHex(options)
  }

  this.placeholder = {
    solid: function(query) {
      _.map(document.querySelectorAll(query), function(element) {
        element.style.background = '#' + randomHex({ignore: 'ffffff'})
      })
    },

    gradient: function(query) {
      _.map(document.querySelectorAll(query), function(element) {
        var first  = randomHex()
        var second = randomHex()
        var gradient = 'linear-gradient(45deg, #' + first + ', #' + second + ')'
        element.style.background = gradient;
      })
    },

    generate: function(parent, amount) {
      var wrapper = document.querySelector(parent);
      while (amount--) {
        var item = document.createElement('div');
        item.classList.add('placeholder-item');
        wrapper.appendChild(item);
      }
    }
  }
})()
