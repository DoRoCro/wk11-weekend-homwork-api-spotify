var AlbumListView = function (selectElement) {
  this.albums = []
  this.menu = selectElement
  // console.log(albums)
}

AlbumListView.prototype = {
  render: function (albums) {
    this.albums = albums
    this.albums.forEach(this.createOption.bind(this))
  },

  createOption: function (album, index) {
    var optionElement = document.createElement('option')
    optionElement.value = index
    optionElement.text = album.name
    this.menu.appendChild(optionElement)
  }

}
