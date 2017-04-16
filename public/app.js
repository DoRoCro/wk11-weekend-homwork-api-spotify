var app = function () {
  var url = 'https://api.spotify.com/v1/search?q='
  var albumList = new AlbumList(url, 'Public%20Service%20Broadcasting')
  var albumListView = new AlbumListView(document.querySelector('#insert-selector-here'))
  var albumDetailsView = new AlbumDetailsView([], 0, document.querySelector('#album-display'))
  // var albumDetailsView = null

  // var albumView = new AlbumView()

  // retrieve data and populate selector
  albumList.getData(function (albums) {
    // console.log(albums)
    albumListView.render(albums)
  })
}

window.onload = app
