const fetchCatButton = document.getElementById('fetchCat')
const catContainer = document.getElementById('catContainer')

// Function to fetch a random cat image
async function fetchCat() {
  try {
    console.log('Fetching cat image...')
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await response.json()
    console.log('Data fetched:', data)

    const catImage = document.createElement('img')
    catImage.src = data[0].url
    catImage.alt = 'Random Cat'
    document.getElementById('catContainer').innerHTML = ''
    document.getElementById('catContainer').appendChild(catImage)
  } catch (error) {
    console.error('Error fetching cat image:', error)
  }
}

// Attach event listener to the button
fetchCatButton.addEventListener('click', fetchCat)
