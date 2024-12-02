const fetchCatButton = document.getElementById('fetchCat')
const catContainer = document.getElementById('catContainer')

// Function to fetch a random cat image
async function fetchCat() {
  try {
    console.log('Fetching cat image...') // Check if the function is called
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    console.log('Response received:', response) // Log the response object
    const data = await response.json()
    console.log('Data fetched:', data) // Log the fetched data
  } catch (error) {
    console.error('Error fetching cat image:', error)
    catContainer.innerHTML =
      '<p>Something went wrong. Please try again later!</p>'
  }
}

// Attach event listener to the button
fetchCatButton.addEventListener('click', fetchCat)
