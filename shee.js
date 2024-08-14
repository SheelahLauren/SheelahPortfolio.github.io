document.addEventListener('DOMContentLoaded', function() {
    // Dog button functionality
    const dogButton = document.getElementById('dogButton');
    dogButton.addEventListener('click', function() {
        window.location.href = "./dog/index.html";
    });

    // Cat button functionality
    const catButton = document.getElementById('catButton');
    catButton.addEventListener('click', function() {
        window.location.href = "./cat/index.html";
    });

    // Quote button functionality
    const quoteButton = document.getElementById('quoteButton');
    quoteButton.addEventListener('click', function() {
        window.location.href = "./quote/index.html";
    });

    // Logout button functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        alert('Logout successful!');
        window.location.href = 'homeweblogin.html';
    });
});

// Dog Image
let dImage = document.getElementById("dog-gen");
let button = document.getElementById("dog-btn");

button.addEventListener('click', randomDogImage);

function randomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response => Response.json())
        .then(data => {
            document.getElementById('dog-gen').innerHTML = `<img src="${data.message}" />`;
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

// Cat Image
let cImage = document.getElementById("cat-gen");
let cButton = document.getElementById("cat-btn");

cButton.addEventListener('mouseover', randomCatImage);

function randomCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-gen').innerHTML = `<img src="${data[0].url}" alt="Random Cat Image" />`;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}

// Quote
let quoteContainer = document.getElementById("quote-gen");
let quoteButton = document.getElementById("quote-btn");

quoteButton.addEventListener('click', getRandomQuote);

function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            let quote = data.content;
            let author = data.author;
            quoteContainer.innerHTML = `<blockquote>
                                           <p>${quote}</p>
                                           <footer>${author}</footer>
                                       </blockquote>`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}
