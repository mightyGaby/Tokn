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
        $("#waitlist").reset();
        confetti();
      });
  });

})(jQuery); // End of use strict
    
//confeti:
function confetti(){
  for (var i = 0; i < 250; i++) {
  create(i);
}

function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-'+i+' '+colour+'"></div>').css({
    "width" : width+"px",
    "height" : height+"px",
    "top" : -Math.random()*20+"%",
    "left" : Math.random()*100+"%",
    "opacity" : Math.random()+0.5,
    "transform" : "rotate("+Math.random()*360+"deg)"
  }).appendTo('.wrapper');  
  
  drop(i);
}

function drop(x) {
  $('.confetti-'+x).animate({
    top: "100%",
    left: "+="+Math.random()*15+"%"
  }, Math.random()*3000 + 3000, function() {
    reset(x);
  });
}

function reset(x) {
  $('.confetti-'+x).animate({
    "top" : -Math.random()*20+"%",
    "left" : "-="+Math.random()*15+"%"
  }, 0, function() {
    drop(x);             
  });
}
}
