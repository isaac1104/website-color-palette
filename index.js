const express = require('express');
const helmet = require('helmet');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(helmet());

require('./routes/colors_data_api')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});
