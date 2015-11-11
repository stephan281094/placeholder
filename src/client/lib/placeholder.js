!(function() {

  var options = {
    width: 'inherit',
    height: 'inherit',
  }

  // Constructor
  function Placeholder(el, opts) {
    if (!opts) {
      for (var key in opts) {
        options[key] = opts[key]
      }
    }

    this.elements = typeof el === 'object' ? el : document.querySelectorAll(el)

    return this
  }

  // Public functions
  Placeholder.prototype.solid = function() {
    _.map(this.elements, function(element) {
      element.style.background = '#' + helpers.randomHex({ignore: 'ffffff'})
    })
  }

  Placeholder.prototype.gradient = function() {
    _.map(this.elements, function(element) {
      var first  = helpers.randomHex()
      var second = helpers.randomHex()
      var gradient = 'linear-gradient(45deg, #' + first + ', #' + second + ')'
      element.style.background = gradient
    })
  }

  // Helpers
  var helpers = {
    randomHex(opts) {
      var options = opts || {}
      var random = Math.floor(Math.random() * 16777215).toString(16)
      return random.length === 6 && !_.contains(options.ignore, random) ? random : helpers.randomHex(options)
    }
  };

  this.Placeholder = Placeholder
})()
