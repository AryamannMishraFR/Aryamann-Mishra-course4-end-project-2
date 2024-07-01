document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = JSON.parse(sessionStorage.getItem('selectedItem'));
    const confirmationDetailsDiv = document.getElementById('confirmationDetails');

    if (orderDetails) {
        confirmationDetailsDiv.innerHTML = `
            <h3 class="card-title">Thank you for your order!</h3>
            <p class="card-text">You have ordered: ${orderDetails.name}</p>
            <p class="card-text">Total price: $${orderDetails.price.toFixed(2)}</p>
        `;
    }
});
