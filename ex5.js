document.addEventListener('DOMContentLoaded', function() {
    const showLinks = document.querySelectorAll('div.showlink a');
    const hideLinks = document.querySelectorAll('div.text a');

    showLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const textDiv = this.closest('article').querySelector('.text');
            textDiv.style.display = 'block';
            this.closest('div.showlink').style.display = 'none';
        });
    });

    hideLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const textDiv = this.closest('.text');
            textDiv.style.display = 'none';
            textDiv.closest('article').querySelector('.showlink').style.display = 'block';
        });
    });
});