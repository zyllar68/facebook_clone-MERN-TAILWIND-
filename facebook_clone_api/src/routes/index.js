module.exports = function (app) {
  app.use('/users', require('./users.route'));
  app.use((req, res) => {res.status(404).send('404', { title: '404' })});
};
