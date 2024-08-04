const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    // Handle login
});

app.post('/register', (req, res) => {
    // Handle registration
});

app.post('/submit-review', (req, res) => {
    // Handle review submission
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
