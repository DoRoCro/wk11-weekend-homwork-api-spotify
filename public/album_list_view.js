var AlbumListView = function (targetElement) {
  this.albums = []
  this.menu = targetElement
  this.menu.onChange = null
  this.menu.addEventListener('change', this.onChange())
  // console.log(albums)
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

  }

}
