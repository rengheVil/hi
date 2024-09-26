const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Show booking form
document.getElementById('booking-button').addEventListener('click', () => {
    document.getElementById('booking-form').classList.toggle('hidden');
});

// Handle booking form submission
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const bookingDetails = {
        name: document.getElementById('customer-name').value,
        nic: document.getElementById('customer-nic').value,
        email: document.getElementById('customer-email').value,
        phone: document.getElementById('customer-phone').value,
        period: document.getElementById('booking-period').value,
    };

    bookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Booking submitted! Please proceed to payment.');
    window.location.href = 'payment.html';
});
