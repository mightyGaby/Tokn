var email, boxReceived;
//submit e-mail
//match to array of e-mails
//
var betaBabes =  ["aderonke.adedokun@gmail.com",
"ameltz1029@gmail.com",
"amjordan92@gmail.com",
"andrewlanebaker@gmail.com",
"deb@designdance.net",
"kimmah.shah@gmail.com",
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
"elainaspiekermann@gmail.com",
"abby.tracy2012@gmail.com",
"jlf4689@gmail.com",
"raissanfg@gmail.com"];

function enterEmail(){
  email = $('input').val().toLowerCase();
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
  $('#personal-instructions')
}

