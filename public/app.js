var app = function () {
  var url = 'https://api.spotify.com/v1/search?q='
  var albumList = new AlbumList(url, 'Public%20Service%20Broadcasting')
  // var albumView = new AlbumView()

  // retrieve data and populate selector
  albumList.getData(function (albums) {
    console.log(albums)
    var albumListView = new AlbumListView(albums)
  })
}

window.onload = app
