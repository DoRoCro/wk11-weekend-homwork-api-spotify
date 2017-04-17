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

    // clear any existing info in the panel
    this.clearDetails()

    // layout information about selected album
    // name, artist, album/single
    this.addText('h3', this.album.name + '<em> by </em>' + this.album.artists[0].name)

    // image
    this.addImg(this.album.images[1].url)
    this.addText('p', '')
    // spotify link / button
    this.addText('a', 'link to album in spotify', this.album.uri)
  },

  addText: function (tagType, info, url) {
    var pTag = document.createElement(tagType)
    pTag.innerHTML = info
    pTag.href = url
    this.HTMLElement.appendChild(pTag)
  },

  addImg: function (imgURL) {
    var imgTag = document.createElement('img')
    imgTag.src = imgURL
    imgTag.width = 300
    imgTag.height = 300
    this.HTMLElement.appendChild(imgTag)
  },

  clearDetails: function () {
    console.log(this.HTMLElement.childNodes)
    // this.HTMLElement.childNodes.forEach(function (tag, index) {
    //   this.HTMLElement.removeChild(tag)
    // }.bind(this))
    // from MDN
    while (this.HTMLElement.firstChild) {
      this.HTMLElement.removeChild(this.HTMLElement.firstChild)
    }
  }

}
