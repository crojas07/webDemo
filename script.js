/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


/*                                ------- Game Catalog 2025 ----------                                        */


// Images for Objects 
const ELDEN_RING_NIGHTREIGN_PIC =
  "https://assetsio.gnwcdn.com/1_oZ5oK9G.png?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp";

const FINAL_FANTASY_VII_REMAKE_PIC =
  "https://www.gamespot.com/a/uploads/scale_tiny/1593/15930215/3546367-screen%20shot%202019-06-11%20at%203.04.46%20pm.png";

const SHADOW_LABYRINTH =
  "https://assets-prd.ignimgs.com/2024/12/13/shadowlabyrinth-1734051834030.jpg";

// Game Catalog Data
const gameCatalog = [
  {
    // Object 1
    title: "Elden Ring: Nightreign",
    genre: "Action-Adventure",
    platform: ["PS5", "PS4", "XBOX", "STEAM"],
    monthRelease: "May"
  },

  {
    // Object 2
    title: "Final Fantasy VII: Remake",
    genre: "Action-Adventure",
    platform: ["PS5", "STEAM"],
    monthRelease: "June"
  },

  {
    // Object 3
    title: "Shadow Labyrinth",
    genre: "Action",
    platform: ["PS5", "XBOX", "STEAM"],
    monthRelease: "July"
  }
];

// Function to display cards on the page
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards

  const templateCard = document.querySelector(".card");

  
  for (let i = 0; i < gameCatalog.length; i++) {
    let title = gameCatalog[i];

    // Displays IMG based on order of game 
    let imageURL = "";
    if (i == 0) {
      imageURL = ELDEN_RING_NIGHTREIGN_PIC;
    }

     else if (i == 1) {
      imageURL = FINAL_FANTASY_VII_REMAKE_PIC;
    }

     else if (i == 2) {
      imageURL = SHADOW_LABYRINTH;
    }

    const nextCard = templateCard.cloneNode(true); // Clone the template card
    editCardContent(nextCard, title, imageURL); // Edit the content of the card
    cardContainer.appendChild(nextCard); // Add the card to the container
  }
    
}

// Function to edit the content of each card
function editCardContent(card, game, imageURL) {
  card.style.display = "block"; // Make the card visible

  const cardTitle = card.querySelector(".card-title");
  const cardImage = card.querySelector(".card-image");
  const cardDetails = card.querySelector(".card-details");

  // Set the title, image, and details from the game object
  cardTitle.textContent = game.title;
  cardImage.src = imageURL;
  cardImage.alt = `${game.title} Poster`;

  cardDetails.innerHTML = `
    <li>Platform: ${game.platform.join(", ")}</li>
    <li>Release Date: ${game.monthRelease}</li>
    <li>Genre: ${game.genre}</li>
  `;
}

// Submission Form to Add New Game
document.getElementById("game-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the page from reloading

  const title = document.getElementById("game-title").value;
  const genre = document.getElementById("game-genre").value;
  const platforms = document.getElementById("game-platforms").value.split(",").map(item => item.trim());
  const releaseMonth = document.getElementById("game-release").value;

  // Create a new game object and add it to the catalog
  const newGame = {
    title: title,
    genre: genre,
    platform: platforms,
    monthRelease: releaseMonth
  };

  gameCatalog.push(newGame); // Add the new game to the catalog
  showCards(); // Refresh the displayed cards
  document.getElementById("game-form").reset(); // Reset the form
});

// Call the showCards function when the page is loaded
document.addEventListener("DOMContentLoaded", showCards);

// Quote Alert Function
function quoteAlert() {
  alert("Get ready for these epic releases!");
}

// Function to Remove Last Card
function removeLastCard() {
  gameCatalog.pop(); // Remove the last game from the array
  showCards(); // Refresh the displayed cards
}