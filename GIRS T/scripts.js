$(document).ready(function() {
    // FullCalendar setup
    $('#calendar').fullCalendar({
        events: '/events'
    });

    // Weather information
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Nasarawa&appid=${apiKey}`;
    $.get(url, function(data) {
        $('#weather').html(`
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `);
    });

    // Review form submission
    $('#review-form').on('submit', function(e) {
        e.preventDefault();
        const reviewData = {
            site: $('#site').val(),
            rating: $('#rating').val(),
            comment: $('#comment').val()
        };
        fetch('/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        }).then(response => response.json()).then(data => {
            if (data.success) {
                alert('Review submitted!');
                loadReviews();
            } else {
                alert('Error submitting review.');
            }
        });
    });

    function loadReviews() {
        fetch('/reviews').then(response => response.json()).then(data => {
            const reviewsContainer = $('#reviews');
            reviewsContainer.html('');
            data.forEach(review => {
                const reviewElement = $('<div></div>');
                reviewElement.html(`<h3>${review.site}</h3><p>Rating: ${review.rating}</p><p>${review.comment}</p>`);
                reviewsContainer.append(reviewElement);
            });
        });
    }

    // Load reviews on page load
    loadReviews();
});
