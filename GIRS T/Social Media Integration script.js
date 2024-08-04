// Social media sharing
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function() {
        const url = window.location.href;
        const social = this.dataset.social;
        let shareUrl;
        if (social === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (social === 'twitter') {
            shareUrl = `https://twitter.com/share?url=${url}&text=Check out this amazing tourist site!`;
        }
        window.open(shareUrl, '_blank');
    });
});
