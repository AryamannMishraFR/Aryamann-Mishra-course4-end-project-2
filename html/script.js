// search.js
document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const foodItem = urlParams.get('foodItem');

    // Example items data (replace with actual API or database fetch)
    const items = [
        { name: 'Apple', price: 1.99 },
        { name: 'Banana', price: 0.99 },
        { name: 'Orange', price: 1.49 },
        { name: 'Mango', price: 2.49 },
        { name: 'Pineapple', price: 2.99 }
    ];

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(foodItem));

    const searchResults = document.getElementById('searchResults');
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'card mb-3';
            itemCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">$${item.price.toFixed(2)}</p>
                    <a href="order.html?itemName=${encodeURIComponent(item.name)}&price=${item.price}" class="btn btn-primary">Order</a>
                </div>
            `;
            searchResults.appendChild(itemCard);
        });
    } else {
        searchResults.innerHTML = '<p>No items found.</p>';
    }
});
