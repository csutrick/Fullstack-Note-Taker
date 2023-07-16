// Require express package
const express = require('express');

// Require routes
const api_routes = require('./routes/apiRoutes');
const html_routes = require('./routes/htmlRoutes');

// Setting PORT
const PORT = process.env.PORT || 3001;
// Asigning app var
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static asset
app.use(express.static('public'));

// Using routes
app.use(api_routes);
app.use(html_routes);

// Console PORT command
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);