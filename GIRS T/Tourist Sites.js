const TouristSite = mongoose.model('TouristSite', new mongoose.Schema({ name: String, lat: Number, lng: Number, description: String }));

// Get Tourist Sites
app.get('/sites', (req, res) => {
    TouristSite.find({}, (err, sites) => {
        if (err) return res.status(500).send('Error retrieving tourist sites.');
        res.status(200).send(sites);
    });
});
