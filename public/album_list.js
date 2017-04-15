var AlbumList = function (url, searchString) {
  this.albums = []
  this.url = url
  this.onComplete = null
  this.search = searchString
}

AlbumList.prototype = {
  getData: function (callback) {
    var request = new XMLHttpRequest()
    request.open('GET', this.url + this.search + '&type=album')
    request.onload = function () {
      if (request.status === 200) {
        var jsonString = request.responseText
        this.albums = JSON.parse(jsonString)
        callback(this.albums.albums.items)
      }
    }.bind(this)
    request.send()
  }
}
