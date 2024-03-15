window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sideMargins = document.querySelector('.side-margins');
    sideMargins.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'; // Adjust the scroll speed
});
