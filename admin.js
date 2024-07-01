function adminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === 'admin' && password === 'password') {
        document.getElementById('adminLoginForm').classList.add('d-none');
        document.getElementById('adminPanel').classList.remove('d-none');
        loadFoodItems();
    } else {
        alert('Invalid login credentials');
    }
}

function loadFoodItems() {
    fetch('foodItems.json')
        .then(response => response.json())
        .then(data => {
            const foodItemList = document.getElementById('foodItemList');
            foodItemList.innerHTML = '';
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)}
                    <button class="btn btn-danger btn-sm" onclick="removeItem('${item.name}')">Remove</button>
                `;
                foodItemList.appendChild(listItem);
            });
        });
}

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (itemName && itemPrice) {
        fetch('foodItems.json')
            .then(response => response.json())
            .then(data => {
                data.push({ name: itemName, price: itemPrice });

                // Update JSON file (In a real application, you would send this data to the server)
                // For this example, we'll just update the UI
                const foodItemList = document.getElementById('foodItemList');
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.innerHTML = `
                    ${itemName} - $${itemPrice.toFixed(2)}
                    <button class="btn btn-danger btn-sm" onclick="removeItem('${itemName}')">Remove</button>
                `;
                foodItemList.appendChild(listItem);
            });
    } else {
        alert('Please enter both name and price');
    }
}

function removeItem(name) {
    fetch('foodItems.json')
        .then(response => response.json())
        .then(data => {
            const updatedData = data.filter(item => item.name !== name);

            // Update JSON file (In a real application, you would send this data to the server)
            // For this example, we'll just update the UI
            loadFoodItems();
        });
}
