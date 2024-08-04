// Initialize map
var map = L.map('map').setView([8.5333, 7.7167], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add event listener to search form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchQuery = document.querySelector('#search-input').value;
    // Implement search functionality and display map marker
});

// Add map markers for tourist sites and hotels
var touristSites = [
    { 
        name: 'Farin Ruwa Waterfall', 
        lat: 8.5333, 
        lng: 7.7167, 
        url: 'https://example.com/farin-ruwa-waterfall' 
    },
    { 
        name: 'Kagoro Hill', 
        lat: 8.5667, 
        lng: 7.7333, 
        url: 'https://example.com/kagoro-hill' 
    },
    { 
        name: 'Nasarawa Osun Osogbo Sacred Grove', 
        lat: 8.6000, 
        lng: 7.7500, 
        url: 'https://example.com/nasarawa-osun-osogbo' 
    },
    { 
        name: 'Hotel A', 
        lat: 8.5500, 
        lng: 7.7200, 
        url: 'https://example.com/hotel-a' 
    },
    { 
        name: 'Hotel B', 
        lat: 8.5800, 
        lng: 7.7400, 
        url: 'https://example.com/hotel-b' 
    }
];

touristSites.forEach(function(site) {
    var marker = L.marker([site.lat, site.lng]).addTo(map);
    marker.bindPopup('<a href="' + site.url + '" target="_blank">' + site.name + '</a>');
});
