AFRAME.registerComponent('markerhandler', {
    init: function() {
        // Get references to the animated models
        const aEntity = document.querySelector("#bookinfo-1");
        const aEntityb = document.querySelector("#booksimilar-2");
        const aEntityc = document.querySelector("#bookloc-3");

        // Add event listener for markerFound event
        this.el.addEventListener('markerFound', function() {
            // Get reference to the animated marker
            const animatedMarker = document.querySelector("#marker");

            // Add click event listener to the animated marker
            animatedMarker.addEventListener('click', function(ev) {
                const intersectedElement = ev.detail && ev.detail.intersectedEl;
                if (aEntity && intersectedElement === aEntity) {
                    window.location.href = 'https://youtube.com';
                } else if (aEntityb && intersectedElement === aEntityb) {
                    // Get the value attribute of the found marker
                    const markerValue = animatedMarker.getAttribute('value');
                    // Redirect to similar_books.php with marker value appended as a query parameter
                    window.location.href = 'https://google.com';
                } else if (aEntityc && intersectedElement === aEntityc) {
                    // Get the value attribute of the found marker
                    const markerValue = animatedMarker.getAttribute('value');
                    // Redirect to book_details.php with marker value appended as a query parameter
                    window.location.href = 'https://wikipedia.org';
                }
            });
        });
    }
});