var AlbumDetailsView = function (albums, targetElement) {
  this.albums = albums
  this.HTMLElement = targetElement
}

AlbumDetailsView.prototype = {
  render: function (index) {
    this.albumIndex = index
    // console.log(index, this.albums)
    console.log(this.albums[index])
    this.album = this.albums[index]
    this.clearDetails()
    // layout information about selected album
    // name, artist, album/single
    this.addH2('<strong>' + this.album.name + '</strong> by <em>' + this.album.artists[0].name + '</em')
    // image
    // spotify link / button
  },

  addH2: function (info) {
    var pTag = document.createElement('p')
    pTag.innerHTML = info
    this.HTMLElement.appendChild(pTag)
  },
  clearDetails: function () {
    console.log(this.HTMLElement.childNodes)
    this.HTMLElement.childNodes.forEach(function (tag, index) {
      this.HTMLElement.removeChild(tag)
    }.bind(this))
  }

}
