const searchBoxContainer = document.createElement('div');
searchBoxContainer.classList.add('searchbox-container');
document.body.appendChild(searchBoxContainer);

const searchBox = document.createElement('input');
searchBox.classList.add('searchbox-input');
searchBoxContainer.appendChild(searchBox);
searchBox.placeholder = 'search book title...';

const searchButton = document.createElement('button');
searchButton.classList.add('searchbox-button');
searchBoxContainer.appendChild(searchButton);
searchButton.textContent = 'Search';


  // Create a function to handle the search
function handleSearch() {
    let searchItem = searchBox.value.toLowerCase();
    let itemList = document.querySelectorAll('.book-card');
  
    itemList.forEach(function(item) {
      let itemName = item.querySelector('.book-name').textContent.toLowerCase();
      let parentDiv = item.querySelector('.book-info');
      let itemImage = item.querySelector('.book-image');

  
      if (itemName.includes(searchItem)) {
        parentDiv.style.boxShadow = '20px 20px 20px yellow'; // Apply shadow to matching item
        parentDiv.style.opacity = '1'; // Set opacity to 1 for matching item (visible)
      } else {
        parentDiv.style.boxShadow = 'none'; // Remove shadow from non-matching item
        itemImage.style.opacity = '0.20';
        parentDiv.style.opacity = '0.20'; // Set opacity to 0.5 for non-matching item (less visible)
      }
    });
  }
  
  // Attach the event listeners to the search box and search button
  searchBox.addEventListener('input', handleSearch);
  searchButton.addEventListener('click', handleSearch);
  
  
