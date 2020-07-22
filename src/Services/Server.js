require('dotenv').config();
const express = require('express');

const app = express();
const PORT =
  process.env.PORT || 4000;

app.use(express.json());

app.use('/ingredients', require('./routes/ingredient.routes.js'));
app.use('/meal_types', require('./routes/meal_types.routes.js'));
app.use('/meal_type_recipes', require('./routes/meal_type_recipes.routes.js'));

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something Broke!');
});
app.set('x-powered-by', false);

const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Server is running on port ' + PORT);
  }
});
module.exports = server;