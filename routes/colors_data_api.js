const cssColors = require('css-color-names');

module.exports = app => {
  app.get('/api/colors', (req, res) => {
    try {
      const data = Object.entries(cssColors).map(color => {
        const [ name, hex ] = color;
        return { name, hex };
      });
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });
};
