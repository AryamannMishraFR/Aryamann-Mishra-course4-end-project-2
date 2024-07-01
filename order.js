document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = JSON.parse(sessionStorage.getItem('selectedItem'));
    const orderDetailsDiv = document.getElementById('orderDetails');

    if (orderDetails) {
        orderDetailsDiv.innerHTML = `
            <h3 class="card-title">${orderDetails.name}</h3>
            <p class="card-text">Price: $${orderDetails.price.toFixed(2)}</p>
        `;
    }
});

function proceedToPayment() {
    window.location.href = 'confirmation.html';
}
