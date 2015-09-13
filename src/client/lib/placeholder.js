!(function() {

  // helpers
  function randomHex(options) {
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
        element.style.background = 'linear-gradient(45deg, blue, red)';
      })
    }
  }
})()
