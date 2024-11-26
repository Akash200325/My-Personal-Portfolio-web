const projectLinks = document.querySelectorAll('.project-card a');
projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('Redirecting to the project link!');
    });
});
