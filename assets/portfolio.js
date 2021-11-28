var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

// Form validation
$(document).ready(function() {
  $('#contact-form').submit(function () {
    // Get the Name value
    var name = $('#name').val();
    // Check if empty of not
    if (name  === '') {
        alert('Enter the name.');
        return false;
    }
    // Get the email value
    var email = $('#email').val();
    // Check if empty of not
    if (email  === '') {
        alert('Enter the email address.');
        return false;
    }
    // Get the subject value
    var subject = $('#subject').val();
    // Check if empty of not
    if (subject  === '') {
        alert('Enter the subject.');
        return false;
    }

    $("#contact-message").css('color', 'green');
    $("#contact-message").html("Thanks for contacting me. I'll get back to get you soon!");
    return false; // just to stay here. it won't go to backend
  });
});
