const bcrypt = require('bcrypt');

// Registration
app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ username: req.body.username, password: hashedPassword });
    user.save(err => {
        if (err) return res.status(500).send('Error registering new user.');
        res.status(200).send('User registered!');
    });
});

// Login
app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        res.status(200).send('Login successful!');
    } else {
        res.status(400).send('Invalid credentials');
    }
});
