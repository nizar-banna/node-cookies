
module.exports = {
  'GET /': require('./app/root.js'),
  'POST /form': require('./app/form.js'),
  // 'GET /Profile':require('./views/profile.html'),
  'GET /profile': require('./app/profile.js')

};
