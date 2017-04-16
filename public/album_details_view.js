var AlbumDetailsView = function (albums, targetElement) {
  this.albums = albums
  this.HTMLElement = targetElement
}

AlbumDetailsView.prototype = {
  render: function (index) {
    this.albumIndex = index
    console.log(index, this.albums)
    console.log(this.albums[index])
  }
}
