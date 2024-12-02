// Get the button element from the HTML with the ID 'fetchCat'.
// This is the button users will click to get a random cat image.
const fetchCatButton = document.getElementById('fetchCat')

// Get the container element from the HTML with the ID 'catContainer'.
// This is where the random cat image will be displayed on the webpage.
const catContainer = document.getElementById('catContainer')

// Function to fetch a random cat image
// This function gets a random cat image from an external website (The Cat API).
async function fetchCat() {
  try {
    // Log a message to the console to show that the function is running.
    console.log('Fetching cat image...')

    // Use the fetch function to make a request to The Cat API.
    // The API sends back a random cat image.
    const response = await fetch('https://api.thecatapi.com/v1/images/search')

    // Convert the response from the API into a JavaScript object (JSON format).
    const data = await response.json()

    // Log the data received from the API to the console.
    // This helps us see what the API is sending back.
    console.log('Data fetched:', data)

    // Create a new <img> element to display the cat image.
    const catImage = document.createElement('img')

    // Set the 'src' of the image to the URL we got from the API.
    catImage.src = data[0].url

    // Add an 'alt' attribute to the image. This is the text that will show if the image doesn't load.
    catImage.alt = 'Random Cat'

    // Clear any old content inside the catContainer.
    // This makes sure only one cat image is displayed at a time.
    document.getElementById('catContainer').innerHTML = ''

    // Add the new cat image to the catContainer so it shows up on the webpage.
    document.getElementById('catContainer').appendChild(catImage)
  } catch (error) {
    // If something goes wrong, log the error to the console so we can figure out what happened.
    console.error('Error fetching cat image:', error)
  }
}

// Add an event listener to the fetchCatButton.
// This means when the button is clicked, the fetchCat function will run.
fetchCatButton.addEventListener('click', fetchCat)
