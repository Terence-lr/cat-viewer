// Import the fetchCat function from fetchCat.js
import { fetchCat } from './fetchCat.js'

// Get the button and container elements from the HTML
const fetchCatButton = document.getElementById('fetchCat')
const catContainer = document.getElementById('catContainer')

// Add an event listener to the button
fetchCatButton.addEventListener('click', async () => {
  try {
    // Add a spinner to indicate loading
    catContainer.innerHTML = '<div class="spinner"></div>'

    // Call fetchCat to get the URL of a random cat image
    const catImageUrl = await fetchCat()

    // Replace the spinner with the new cat image
    catContainer.innerHTML = `<img src="${catImageUrl}" alt="Random Cat">`
  } catch {
    // If an error occurs, replace the spinner with an error message
    catContainer.innerHTML =
      '<p>Failed to load cat image. Please try again later.</p>'
  }
})
