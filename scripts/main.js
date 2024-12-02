// Import the fetchCat function from fetchCat.js.
// This brings in the logic for fetching cat images so we can use it here.
import { fetchCat } from './fetchCat.js'

// Get the button element from the HTML using its ID 'fetchCat'.
// This is the button users will click to fetch a random cat image.
const fetchCatButton = document.getElementById('fetchCat')

// Get the container element from the HTML using its ID 'catContainer'.
// This is where the cat image will be displayed on the webpage.
const catContainer = document.getElementById('catContainer')

// Add an event listener to the fetchCatButton.
// When the button is clicked, this function will run.
fetchCatButton.addEventListener('click', async () => {
  try {
    // Call the fetchCat function to get the URL of a random cat image.
    // Since fetchCat is asynchronous, we use 'await' to wait for the result.
    const catImageUrl = await fetchCat()

    // Clear any old content in the catContainer.
    // This ensures only one image is displayed at a time.
    catContainer.innerHTML = ''

    // Create a new <img> element and set its source to the fetched URL.
    // This displays the random cat image on the webpage.
    const catImage = document.createElement('img')
    catImage.src = catImageUrl
    catImage.alt = 'Random Cat' // Add alt text for accessibility.

    // Add the new cat image to the catContainer.
    catContainer.appendChild(catImage)
  } catch {
    // If something goes wrong, display an error message to the user.
    catContainer.innerHTML =
      '<p>Failed to load cat image. Please try again later.</p>'
  }
})
