(function($) {
  "use strict"; // Start of use strict

  $( "#waitlist" ).submit(function( event ) {
    console.log('clicked')
    // Stop form from submitting normally
    event.preventDefault();
   
    // Get some values from elements on the page:
    var $form = $( this ),
      email = $form.find( "input[name='email']" ).val(),
      name = $form.find( "input[name='name']" ).val(),
      phone = $form.find( "input[name='phone']" ).val(),
      zip = $form.find( "input[name='zip']" ).val(),
      mailingList = $form.find("input[type='checkbox']").prop("checked") ? true : false;      

      var data = {"email": email, "name": name, "phone": phone, "zip": zip, "addToMailingList": mailingList}

      // Send the data using post
      var posting = $.post( "http://toknserver.herokuapp.com/signup", data, function(data) {
        console.log(data)
        $("#nextStepsModal").modal('show');
      });
      
      posting.fail(function( data ) {
        console.log("error"); 
        $('#waitlist alert-warning').addClass('show');
      });

      posting.done(function( data ) {
        console.log(data); 
        console.log(mailingList)
        document.getElementById("waitlist").reset(); 
      });
  });

})(jQuery); // End of use strict
