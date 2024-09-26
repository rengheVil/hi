const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
const bookingsList = document.getElementById('bookings-list');

if (bookings.length === 0) {
    bookingsList.innerHTML = '<p>No bookings available.</p>';
} else {
    bookings.forEach((booking, index) => {
        bookingsList.innerHTML += `
            <div>
                <p><strong>Name:</strong> ${booking.name}</p>
                <p><strong>NIC:</strong> ${booking.nic}</p>
                <p><strong>Email:</strong> ${booking.email}</p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <p><strong>Period:</strong> ${booking.period}</p>
                <button onclick="acceptBooking(${index})">Accept</button>
            </div>
            <hr>
        `;
    });
}

function acceptBooking(index) {
    const acceptedBooking = bookings[index];
    alert(`Booking accepted for ${acceptedBooking.name}`);
    // Here you can also implement logic to move this booking to another list or to process it further
}
