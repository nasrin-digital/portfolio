var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

// Form validation
$(document).ready(function() {
  var form = document.getElementById("contact-form");
  function handleForm(event) { event.preventDefault(); }  // stop the page from reloading after submit
  form.addEventListener('submit', handleForm);
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
    if(!isEmail(email)){
      $("#contact-message").css('color', 'black');
      $("#contact-message").html("You have entered an invalid email address!");
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

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
