  var index, email, first_name, boxReceived, sequence_type, personal_hint, pack_sequence = [];
var greeting = "Welcome, ";

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

var betaInfo = [{
  "email": "abby.tracy2012@gmail.com",
  "first_name": "Abby",
  "sequence_type": "cycle",
  "pack_sequence": [
    {
      "first_pack": "blah",
      "second_pack": "orange",
      "third_pack": "pomelo",
      "fourth_pack": "lime"
    }],
    "personal_hint": ""
  },
  {
    "email": "sedelste@gmail.com",
    "first_name": "Shanleigh",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
    {
      "email": "shonaliditz@gmail.com",
      "first_name": "Shonali",
      "sequence_type": "cycle",
      "pack_sequence": [
        {
          "first_pack": "blah",
          "second_pack": "orange",
          "third_pack": "pomelo",
          "fourth_pack": "lime"
        }],
        "personal_hint": ""
      },
      {
        "email": "tillywinx@gmail.com",
        "first_name": "Tilly",
        "sequence_type": "cycle",
        "pack_sequence": [
          {
            "first_pack": "blah",
            "second_pack": "orange",
            "third_pack": "pomelo",
            "fourth_pack": "lime"
          }],
          "personal_hint": ""
        },
  {
    "email": "raissanfg@gmail.com",
    "first_name": "Raissa",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
  {
    "email": "phirany.lim@gmail.com",
    "first_name": "Phirany",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
  {
    "email": "maxinenicolemua@gmail.com",
    "first_name": "Maxine",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
  {
    "email": "lundgren.jl@gmail.com",
    "first_name": "Jessica",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
  {
    "email": "Kimmah.shah@gmail.com",
    "first_name": "Kimmah",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
  {
    "email": "elizabethannbarton1@gmail.com",
    "first_name": "Liz",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "blah",
        "second_pack": "orange",
        "third_pack": "pomelo",
        "fourth_pack": "lime"
      }],
      "personal_hint": ""
    },
  {
  "email": "amjordan92@gmail.com",
  "first_name": "Alexis",
  "sequence_type": "cycle",
  "pack_sequence": [
    {
      "first_pack": "blah",
      "second_pack": "orange",
      "third_pack": "pomelo",
      "fourth_pack": "lime"
    }],
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
  //sequence_type = betaInfo[index].sequence_type;
  //personal_hint = betaInfo[index].personal_hint;
  first_name = betaInfo[index].first_name;
  //pack_sequence.push(betaInfo[index].pack_sequence);
  console.log(first_name,sequence_type);
  greeting += first_name;
}

function confirm(){
  console.log("confirm");
  $('#personal-instructions').html('<img src="img/logo_half_sun_up.png" class="my-2" width="auto" height="25"/><h5 id="mySecondDiv">instructions for you</h5><div></div><img src="img/logo_half_sun_down.png" class="my-2" width="auto" height="25"/>')
}

