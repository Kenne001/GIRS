// Submit Review
app.post('/reviews', (req, res) => {
    const review = new Review(req.body);
    review.save(err => {
        if (err) return res.status(500).send('Error submitting review.');
        res.status(200).send('Review submitted!');
    });
});

// Get Reviews
app.get('/reviews', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) return res.status(500).send('Error retrieving reviews.');
        res.status(200).send(reviews);
    });
});
