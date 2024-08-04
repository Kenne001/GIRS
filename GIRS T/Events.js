// Get Events
app.get('/events', (req, res) => {
    Event.find({}, (err, events) => {
        if (err) return res.status(500).send('Error retrieving events.');
        res.status(200).send(events);
    });
});
