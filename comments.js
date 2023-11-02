// Create web server with express

// Import express
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true });

// Import model
const Comment = require('./models/comment.model');

// Import router
const commentRouter = require('./routers/comment.router');

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Set static file
app.use(express.static('public'));

// Set router
app.use('/comments', commentRouter);

// Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Listen port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
