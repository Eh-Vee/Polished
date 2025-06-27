
  document.getElementById('show-booking').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('booking-section').style.display = 'block';
    document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('hide-booking').addEventListener('click', function () {
    document.getElementById('booking-section').style.display = 'none';
  });



