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
"raissanfg@gmail.com",
"themightygaby@dailytokn.com",
"andrew@dailytokn.com"];

var betaInfo = [{
  "email": "abby.tracy2012@gmail.com",
  "first_name": "Abby",
  "sequence_type": "cycle",
  "pack_sequence": [
    {
      "first_pack": "lime",
      "second_pack": "white",
      "third_pack": "pomelo",
      "fourth_pack": "orange"
    }],
    "personal_hint": ""
  },
  {
    "email": "sedelste@gmail.com",
    "first_name": "Shanleigh",
    "sequence_type": "universe",
    "start_day": 1,
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
        "start_day": 1,
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
        "fourth_pack": "white"
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
        "second_pack": "white",
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
        "third_pack": "white",
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
        "second_pack": "white",
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
        "second_pack": "white",
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
},
{
  "email": "andrew@dailytokn.com",
  "first_name": "Andrew",
  "sequence_type": "universe",
  "start_day": 1,
  "personal_hint": ""
  },
  {
    "email": "themightygaby@dailytokn.com",
    "first_name": "Gaby",
    "sequence_type": "cycle",
    "pack_sequence": [
      {
        "first_pack": "pomelo",
        "second_pack": "orange",
        "third_pack": "lime",
        "fourth_pack": "white"
      }],
      "personal_hint": ""
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

  var content, info;
    sequence_type = betaInfo[index].sequence_type;
  if (betaInfo[index].pack_sequence){
    pack_sequence.push(betaInfo[index].pack_sequence);
    content = '<p>' + first_name + ', in your box you will find 4 dosettes: Pomelo for that mystical part of the month when your cycle starts, lime for your fertile days, orange for the calm before the storm, and white for that "blah" week before your period starts. Each dosette contains tokn dosages that harmonize with where you are in your cycle. </p><p>Your personal sequence is: ' + pack_sequence[0][0].first_pack + ', followed by ' + pack_sequence[0][0].second_pack + ', then ' + pack_sequence[0][0].third_pack + ' and finally ' + pack_sequence[0][0].fourth_pack + '.</p>';

  } else if (betaInfo[index].start_day){
    start_day = betaInfo[index].start_day;
    if(sequence_type=="universe"){
      content = '<p>' + first_name + ', your tokn sequence begins with pod: ' + start_day + ', coinciding with the full moon and a burst of high energy.</p><p>Tokn dosages sync with the yins and yangs of the moon cycle, harmonizing your body with those lunar frequencies.</p>';
    } else {
      content = '<p>' + first_name + ', your tokn sequence begins with pod: ' + start_day + '.</p><p>Each subsequent day until the pods are empty, tokn dosages will complement where you are in your cycle, whether you need to mellow out or exude vibrance.</p>';
    }
  }

  info = '<img src="img/logo_half_sun_up.png" class="my-2" width="auto" height="25"/><h5 id="mySecondDiv" class="my-2">Instructions for you</h5><div>' + content + '</div><img src="img/logo_half_sun_down.png" class="my-2" width="auto" height="25"/>'
  console.log(info);
  $('#personal-instructions').html(info);
}

