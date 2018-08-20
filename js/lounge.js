var email, password;
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

function confirm(){
  
}

function enterEmail(){
  var input = $('input').val();
  if(betaBabes.includes(input)){
    console.log('yes');
    $('#password').fadeOut();
    $('.reserve').addClass('fadein');
  } else {
    $('.errormsg').text('It appears you are not on our list. Please use the e-mail you used to register or reach out to themightygaby@dailytokn.com')
  }
  //else populate <p class="errormsg"></p> w message
}
