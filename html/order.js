// order.js
document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const itemName = urlParams.get('itemName');
    const price = parseFloat(urlParams.get('price'));

    document.getElementById('itemName').textContent = itemName;
    document.getElementById('price').textContent = price.toFixed(2);
});
