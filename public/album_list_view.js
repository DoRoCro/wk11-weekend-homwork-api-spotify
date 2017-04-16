var AlbumListView = function (targetElement, displayView) {
  this.albums = []
  this.menu = targetElement
  this.displayView = displayView
  // console.log(this.displayView)
  // this.menu.addEventListener('change', this.onChange())
}

AlbumListView.prototype = {
  render: function (albums) {
    this.menu.appendChild(document.createElement('select'))
    this.albums = albums
    this.albums.forEach(this.createOption.bind(this))
  },

  createOption: function (album, index) {
    var optionElement = document.createElement('option')
    optionElement.value = index
    optionElement.text = album.name
    this.menu.appendChild(optionElement)
  },
  onChange: function () {
    console.log(this.value, this.displayView)
    this.displayView.render(this.menu.value)
  }
}
