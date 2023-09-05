const articleForm = document.getElementById('article-form');
const articlesSection = document.querySelector('.articles');

articleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = event.target.title.value;
    const content = event.target.content.value;

    const article = document.createElement('article');
    article.classList.add('article');
    article.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    articlesSection.appendChild(article);

    // Clear form fields
    event.target.reset();
}); // Fixed: Added missing closing parenthesis

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");

    // Check if there are slides
    if (slides.length === 0) {
        console.log("No slides found.");
        return; // Exit the function if no slides are found
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

