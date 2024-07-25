document.addEventListener('DOMContentLoaded', function() {
    function showSidemenu() {
        const sidemenu = document.querySelector('.sidemenu');
        const overlay = document.getElementById('overlay');
        sidemenu.style.transform = 'translateX(0)';
        overlay.style.display = 'block';
    }

    function closeSidemenu() {
        const sidemenu = document.querySelector('.sidemenu');
        const overlay = document.getElementById('overlay');
        sidemenu.style.transform = 'translateX(-600px)';
        overlay.style.display = 'none';
    }

    // Add event listeners to the open and close buttons
    document.getElementById('open').addEventListener('click', showSidemenu);
    document.getElementById('close').addEventListener('click', closeSidemenu);

    // Close the sidemenu when clicking outside of it
    document.getElementById('overlay').addEventListener('click', closeSidemenu);

    // Close the sidemenu when any item is clicked
    document.querySelectorAll('.sidemenu__items').forEach(item => {
        item.addEventListener('click', closeSidemenu);
    });

    const categories = document.querySelector('.categories');
    let isScrolling;

    categories.addEventListener('scroll', function () {
        clearTimeout(isScrolling);
        categories.classList.remove('inactive-scrollbar');

        isScrolling = setTimeout(function () {
            categories.classList.add('inactive-scrollbar');
        }, 500);
    });

    const carousel = document.querySelector('.carousel');
    
    carousel.addEventListener('wheel', (e)=> {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
    });
});