var email, boxReceived;
//submit e-mail
//match to array of e-mails
//
var betaBabes = [
"aderonke.adedokun@gmail.com", "ß ameltz1029@gmail.com",
"amjordan92@gmail.com",
"andrewlanebaker@gmail.com",
"deb@designdance.net",
"Kimmah.shah@gmail.com",
"maxinenicolemua@gmail.com",
"natalie.meltzer@gmail.com",
"sabrina.lakhani@insead.edu",
"sedelste@gmail.com",
"sgosai4@yahoo.com",
"tanyab0113@gmail.com",
"themightygaby@gmail.com",
"tillywinx@gmail.com",
"elizabethannbarton1@gmail.com",
"lundgren.jl@gmail.com",
"keelymiller@gmail.com",
"sara.gunia@gmail.com",
"phirany.lim@gmail.com",
"kelseyleecox@yahoo.com",
"emily.abbate@gmail.com",
"Elainaspiekermann@gmail.com",
"abby.tracy2012@gmail.com",
 "jlf4689@gmail.com",
"raissanfg@gmail.com"];

function enterEmail(){
  email = $('input').val();
  if(betaBabes.includes(email)){
    console.log('yes');
    $('#password').fadeOut();
    $('.reserve').addClass('fadein');
  } else {
    $('.errormsg').text('It appears you are not on our list. Please use the e-mail you used to register or reach out to themightygaby@dailytokn.com')
  }
  //else populate <p class="errormsg"></p> w message
}

function confirm(){
  var url = 'https://script.google.com/macros/s/AKfycbynzmFqwpTSJog7gp2rfWMWMkleYQob5-uIe1--BnTkqanbfmk/exec';
  // https://docs.google.com/spreadsheets/d/1FLvQN4ox2lBo21FCrQsYceB-DWEhi9hS0I4tNWxQStI/edit#gid=1828240794
  var redirectUrl = 'faq.html';
  boxReceived = true;
  var info = {
    "email": email,
    "received": boxReceived
  };
  console.log(info);

  request = $.ajax({
       url: "https://script.google.com/macros/s/AKfycbynzmFqwpTSJog7gp2rfWMWMkleYQob5-uIe1--BnTkqanbfmk/exec",
       type: "post",
       data: info,
       dataType: 'jsonp',
       headers: {
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET',
          'Access-Control-Allow-Headers':'application/json',
        },
        success: function(data) {
          console.log(data);
          $('#confirm').text("Success! What's next?")
        },
        error: function(error) {
          console.warn("FAIL....=================");
        }
   });
}

