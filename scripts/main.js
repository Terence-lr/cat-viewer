import { fetchCat } from './fetchCat.js'

const fetchCatButton = document.getElementById('fetchCat')
const catContainer = document.getElementById('catContainer')

fetchCatButton.addEventListener('click', async () => {
  try {
    const catImageUrl = await fetchCat()
    catContainer.innerHTML = `<img src="${catImageUrl}" alt="Random Cat">`
  } catch {
    catContainer.innerHTML = '<p>Failed to load cat image. Try again later.</p>'
  }
})
