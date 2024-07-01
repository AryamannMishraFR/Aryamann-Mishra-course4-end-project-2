let foodItems = [];

// Fetch food items from JSON file
fetch('foodItems.json')
    .then(response => response.json())
    .then(data => {
        foodItems = data;
    });

function searchItems() {
    const searchQuery = document.getElementById('searchInput').value;
    const resultsSection = document.getElementById('results');

    // Filter results based on search query
    const filteredItems = foodItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Display results
    displayItems(filteredItems);
}

function showAllItems() {
    // Display all food items
    displayItems(foodItems);
}

function displayItems(items) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'food-item col-md-4 mb-4';
        itemDiv.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                    <button class="btn btn-danger" onclick="selectItem('${item.name}', ${item.price})">Select</button>
                </div>
            </div>
        `;
        resultsSection.appendChild(itemDiv);
    });
}

function selectItem(name, price) {
    // Store selected item details
    sessionStorage.setItem('selectedItem', JSON.stringify({ name, price }));
    window.location.href = 'order.html';
}
