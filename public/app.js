var app = function () {
  var url = 'https://api.spotify.com/v1/search?q='
  var albumList = new AlbumList(url, 'Public%20Service%20Broadcasting')
  var albumDetailsView = new AlbumDetailsView([], document.querySelector('#album-display'))
  var albumListView = new AlbumListView(document.querySelector('#insert-selector-here'), albumDetailsView)

  // retrieve data and populate selector
  albumList.getData(function (albums) {
    albumListView.render(albums)
    albumDetailsView.albums = albums
    // albumListView.menu.addEventListener('change', albumListView.onChange)
    albumListView.menu.addEventListener('change', function () {
      console.log(this.value)
      this.onChange()
    }.bind(albumListView))
  })
}

window.onload = app
