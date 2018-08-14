// (function($) {
//   "use strict"; // Start of use strict

//   $( "#waitlist" ).submit(function( event ) {
//     console.log('clicked')
//     // Stop form from submitting normally
//     event.preventDefault();
   
//     // Get some values from elements on the page:
//     var $form = $( this ),
//       email = $form.find( "input[name='email']" ).val(),
//       name = $form.find( "input[name='name']" ).val(),
//       phone = $form.find( "input[name='phone']" ).val(),
//       zip = $form.find( "input[name='zip']" ).val(),
//       mailingList = $form.find("input[type='checkbox']").prop("checked") ? true : false;      

//       var data = {"email": email, "name": name, "phone": phone, "zip": zip, "addToMailingList": mailingList}

//       // Send the data using post
//       var posting = $.post( "http://toknserver.herokuapp.com/signup", data, function(data) {
//         console.log(data)
//         $("#nextStepsModal").modal('show');
//       });
      
//       posting.fail(function( data ) {
//         console.log("error"); 
//         $('#waitlist alert-warning').addClass('show');
//       });

//       posting.done(function( data ) {
//         console.log(data); 
//         console.log(mailingList)
//         document.getElementById("waitlist").reset(); 
//       });
//   });

// })(jQuery); // End of use strict

$(document).ready( function () {
  console.log('mailchimp!')
    // I only have one form on the page but you can be more specific if need be.
    var $form = $('form');
        $('form input[type="submit"]').bind('click', function ( event ) {
          event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.

            register($form)
            //if ( validate_input($form) ) { register($form); }
        });
});

function register($form) {

    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success     : function(data) {
            if (data.result != "success") {
              console.log(data.msg)                // Something went wrong, do something to notify the user. maybe alert(data.msg);
            } else {
              console.log(data.msg) 
                console.log('yay!')
            }
        }
    });
}

