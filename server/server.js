require('dotenv').config();
const express = require('express');
const cors = require('cors');
 
const app = express();
const PORT =
  process.env.PORT || (process.env.NODE_ENV === 'test' ? 4001 : 4000);
 
 
// middlewares
app.use(express.json());
app.use(cors());
 
 
// routes
app.use('/projects', require('./routes/projects.routes.js'));
app.use('/languages', require('./routes/languages.routes.js'));
app.use('/enterprises', require('./routes/enterprises.routes.js'));
 
// set port, listen for requests
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something Broke!');
});
 
 
const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Server is running on port ' + PORT);
  }
});
module.exports = server;