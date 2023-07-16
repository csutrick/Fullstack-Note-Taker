const express = require('express');

// Settings
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// _Parsign the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// link publoc folder
app.use(express.static('public'));

// routes API
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Console command
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});