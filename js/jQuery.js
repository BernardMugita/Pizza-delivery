 $(document).ready(function() {
    $(".clickable").click(function() {
      $("#design-showing").slideToggle();
      $("#design-hidden").slideToggle();
    });
   });
   
   $(document).ready(function() {
    $(".click").click(function() {
      $("#dev-showing").slideToggle();
      $("#dev-hidden").slideToggle();
    });
   });
   
   $(document).ready(function() {
    $(".clik").click(function() {
      $("#pro-showing").slideToggle();
      $("#pro-hidden").slideToggle();
    });
   });
   
   
    $(document).ready(function () {
      return $('#contact-form').submit(function (e) {
        var email, message, name;
        name = document.getElementById('inputName');
        email = document.getElementById('inputEmail');
        message = document.getElementById('inputMessage');
        if (!name.value || !email.value || !message.value) {
          alert('Please check your entries');
          return false;
        } else {
          $.ajax({
            method: 'POST',
            url: "http://formspree.io/rick.ndonga@gmail.com",
            data: $('#contact-form').serialize(),
            datatype: 'json' });
   
          e.preventDefault();
          $(this).get(0).reset();
          return alert('Message sent');
        }
      });
    });