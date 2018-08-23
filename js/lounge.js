  var index, email, first_name, boxReceived, sequence_type, start_day, personal_hint, pack_sequence = [];
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
      "first_pack": "lime",
      "second_pack": "blah",
      "third_pack": "pomelo",
      "fourth_pack": "orange"
    }],
    "personal_hint": ""
  },
  {
    "email": "sedelste@gmail.com",
    "first_name": "Shanleigh",
    "sequence_type": "universe",
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
      "start_day": 8,
      "personal_hint": ""
      },
      {
        "email": "tillywinx@gmail.com",
        "first_name": "Tilly",
        "sequence_type": "universe",
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
        "first_pack": "pomelo",
        "second_pack": "orange",
        "third_pack": "lime",
        "fourth_pack": "blah"
      }],
      "personal_hint": ""
    },
  {
    "email": "phirany.lim@gmail.com",
    "first_name": "Phirany",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "lime",
        "second_pack": "blah",
        "third_pack": "pomelo",
        "fourth_pack": "orange"
      }],
      "personal_hint": ""
    },
  {
    "email": "maxinenicolemua@gmail.com",
    "first_name": "Maxine",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "orange",
        "second_pack": "lime",
        "third_pack": "blah",
        "fourth_pack": "pomelo"
      }],
      "personal_hint": ""
    },
  {
    "email": "lundgren.jl@gmail.com",
    "first_name": "Jessica",
    "sequence_type": "cycle",
    "start_day": 7,
    "personal_hint": ""
    },
  {
    "email": "Kimmah.shah@gmail.com",
    "first_name": "Kimmah",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "lime",
        "second_pack": "blah",
        "third_pack": "pomelo",
        "fourth_pack": "orange"
      }],
      "personal_hint": ""
    },
  {
    "email": "elizabethannbarton1@gmail.com",
    "first_name": "Liz",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "lime",
        "second_pack": "blah",
        "third_pack": "pomelo",
        "fourth_pack": "orange"
      }],
      "personal_hint": ""
    },
  {
  "email": "amjordan92@gmail.com",
  "first_name": "Alexis",
  "sequence_type": "cycle",
  "start_day": 21,
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
  //personal_hint = betaInfo[index].personal_hint;
  first_name = betaInfo[index].first_name;
  greeting += first_name;
}

function confirm(){
  var content, info;
    if (betaInfo[index].pack_sequence){
    sequence_type = betaInfo[index].sequence_type;
    pack_sequence.push(betaInfo[index].pack_sequence);
  } else if (betaInfo[index].start_day){
    start_day = betaInfo[index].start_day;
    console.log(start_day);
    content = 'start day: ' + start_day;
  }

  info = '<img src="img/logo_half_sun_up.png" class="my-2" width="auto" height="25"/><h5 id="mySecondDiv">instructions for you</h5><div>' + content + '</div><img src="img/logo_half_sun_down.png" class="my-2" width="auto" height="25"/>'
  console.log(info);
  $('#personal-instructions').html(info);
}

