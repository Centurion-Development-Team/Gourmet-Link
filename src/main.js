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


  // Search Functionality
    function filterCarousel() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
        const checkedCategories = Array.from(document.querySelectorAll('.categories__list input:checked')).map(cb => cb.dataset.category);
        const cards = document.querySelectorAll('.carousel .card');

        cards.forEach(card => {
            const recipeName = card.getAttribute('data-name').toLowerCase();
            const cardCategories = card.getAttribute('data-categories').split(',');

            const matchesSearch = searchInput === '' || searchInput === 'search' || recipeName.includes(searchInput);
            const matchesCategories = checkedCategories.length === 0 || checkedCategories.some(cat => cardCategories.includes(cat));

            if (matchesSearch && matchesCategories) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add event listener for the search input
    document.getElementById('searchInput').addEventListener('input', filterCarousel);
    document.querySelector('.searchbar__btn').addEventListener('click', filterCarousel);

    // Add event listeners for the category checkboxes
    document.querySelectorAll('.categories__list input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterCarousel);
    });
});