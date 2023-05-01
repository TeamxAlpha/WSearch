const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Function to perform search
function search(query) {
  // Here, you can perform an API call to fetch the search results
  // or search through a local dataset
  // For simplicity, we'll just search through a sample array of strings
  const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'];

  const filteredData = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return filteredData;
}

// Function to display search results
function displaySearchResults(results) {
  searchResults.innerHTML = '';
  if (results.length) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      searchResults.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No results found.';
    searchResults.appendChild(li);
  }
}

// Handle form submission
function handleSearchSubmit(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  const results = search(query);
  displaySearchResults(results);
}

// Add event listener to form submission
document.querySelector('form').addEventListener('submit', handleSearchSubmit);
