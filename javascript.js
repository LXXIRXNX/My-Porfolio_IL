// script.js
const box = document.getElementById('box');

// Add mouseover event listener
box.addEventListener('mouseover', function () {
    // Add hover state class
    box.classList.remove('normal-state');
    box.classList.add('hover-state');
});

// Add mouseout event listener
box.addEventListener('mouseout', function () {
    // Remove hover state class
    box.classList.remove('hover-state');
    box.classList.add('normal-state');
});

