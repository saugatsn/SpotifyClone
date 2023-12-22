const openButton = document.querySelector('.staggered-bars-open');
const closeButton = document.querySelector('.staggered-bars-close');
const sidebar = document.querySelector('.top-bar');

// Add a click event listener to open the sidebar
openButton.addEventListener('click', function() {
    sidebar.style.display = 'flex';
});

// Add a click event listener to close the sidebar
closeButton.addEventListener('click', function() {
    sidebar.style.display = 'none';
});