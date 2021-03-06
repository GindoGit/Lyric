// Controllers
const lyricController = require('../controllers/lyricController');
const userController = require('../controllers/userController');

module.exports = app => {
  // GET ALL LYRIC
  app.get('/api/lyrics', lyricController.getAllLyrics);

  // GET SINGLE LYRIC
  app.get('/api/lyrics/:lyric_id', lyricController.getSingleLyric);

  // CREATE LYRIC
  app.post('/api/lyrics', lyricController.postCreateLyric);

  // UPDATE THE LYRIC
  app.put('/api/lyrics/:lyric_id', lyricController.putUpdateLyric);

  // DELETE LYRIC
  app.delete('/api/lyrics/:lyric_id', lyricController.deleteLyric);

  app.post('/api/login', userController.login);
}