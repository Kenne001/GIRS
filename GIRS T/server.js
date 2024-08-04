const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/tourism', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', new mongoose.Schema({ username: String, password: String }));
const Review = mongoose.model('Review', new mongoose.Schema({ site: String, rating: Number, comment: String }));
const Event = mongoose.model('Event', new mongoose.Schema({ name: String, date: String, description: String }));
const TouristSite = mongoose.model('TouristSite', new mongoose.Schema({ name: String, lat: Number, lng: Number, description: String }));

app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    user.save(err => {
        if (err) return res.status(500).send('Error registering new user.');
        res.status(200).send('User registered!');
    });
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        res.status(200).send('Login successful!');
    } else {
        res.status(400).send('Invalid credentials');
    }
});

app.post('/reviews', (req, res) => {
    const review = new Review(req.body);
    review.save(err => {
        if (err) return res.status(500).send('Error submitting review.');
        res.status(200).send({ success: true });
    });
});

app.get('/reviews', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) return res.status(500).send('Error retrieving reviews.');
        res.status(200).send(reviews);
    });
});

app.get('/events', (req, res) => {
    Event.find({}, (err, events) => {
        if (err) return res.status(500).send('Error retrieving events.');
        res.status(200).send(events);
    });
});

app.get('/sites', (req, res) => {
    TouristSite.find({}, (err, sites) => {
        if (err) return res.status(500).send('Error retrieving tourist sites.');
        res.status(200).send(sites);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
