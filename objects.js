var playlist = new Object({
  artistName: songTitle,
  'New Order': 'Ceremony',
  'Echo & the Bunnymen': 'A Promise'
})

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.assign({}, artistName, songTitle)
}

function removeFromPlaylist(playlist, artistName) {
  delete artistName.playlist;
  playlist;
}