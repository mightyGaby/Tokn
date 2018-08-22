var index, email, first_name, boxReceived, sequence_type, personal_hint, pack_sequence = [];
var greeting = "Welcome, " + first_name;

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
"raissanfg@gmail.com",""];

var betaInfo = [{
  "email": "gaby@something",
  "first_name": "Gaby",
  "sequence_type": "cycle",
  "pack_sequence": 
    {
      "first_pack": "blah",
      "second_pack": "orange",
      "third_pack": "pomelo",
      "fourth_pack": "lime"
    },
    "personal_hint": ""
  },
  {
  "email": "themightygaby@gmail.com",
  "first_name": "Gaby",
  "sequence_type": "cycle",
  "pack_sequence": 
    {
      "first_pack": "blah",
      "second_pack": "orange",
      "third_pack": "pomelo",
      "fourth_pack": "lime"
    },
    "personal_hint": "your personal instructions"
}];

// var val = "something";
// // var index = betaInfo.findIndex(function(item, i){
// //   return item.email === val
// // });


function enterEmail(){
  email = $('input').val().toLowerCase();
  if(betaBabes.includes(email)){
    findIndex(email,betaInfo);
    console.log(index);
    getInfo(email);
    $('#greeting').text(greeting);
    $('#password').fadeOut();
    $('.reserve').addClass('fadein');
  } else {
    $('.errormsg').text('It appears you are not on our list. Please use the e-mail you used to register or reach out to themightygaby@dailytokn.com')
  }
}

function findIndex(val, array){
  index = array.findIndex(function(item, i){
    return item.email === val
  });
}

//set personalized variables
function getInfo(email){
  sequence_type = betaInfo[index].sequence_type;
  personal_hint = betaInfo[index].personal_hint;
  first_name = betaInfo[index].first_name;
  pack_sequence.push(betaInfo[index].pack_sequence);
  console.log(first_name,sequence_type);
}

function confirm(){
  console.log("confirm");
  $('#personal-instructions').html('<h3 id="mySecondDiv">instructions for you</h3>')
}

