const cssColors = require('css-color-names');

module.exports = app => {
  app.get('/api/colors', (req, res) => {
    try {
      const data = Object.entries(cssColors).map(color => ({ name: color[0], hex: color[1] }));
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });
};
