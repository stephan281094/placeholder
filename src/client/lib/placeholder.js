!(function(window, document) {

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
      element.style.background = '#' + randomHex({ignore: 'ffffff'})
    })
  }

  Placeholder.prototype.gradient = function() {
    _.map(this.elements, function(element) {
      var first  = randomHex()
      var second = randomHex()
      var gradient = 'linear-gradient(45deg, #' + first + ', #' + second + ')'
      element.style.background = gradient
    })
  }

  // Helpers
  function randomHex(opts) {
    var options = opts || {}
    var random = Math.floor(Math.random() * 16777215).toString(16)
    return random.length === 6 && !_.contains(options.ignore, random) ? random : randomHex(options)
  }

  window.Placeholder = Placeholder
})(window, document)
