function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function inputChange() {
  var numberValue = getValueOfInput();
  var distanceInputUnit = getUnitOfInputDistance();
  var timeInputUnit = getUnitOfInputTime();
  var distanceOutputUnit = getUnitOfOutputDistance();
  var timeOutputUnit = getUnitOfOutputTime();
  var output = (numberValue / distanceInputUnit) * timeInputUnit;
  var output = (output * (1 / timeOutputUnit)) / (1 / distanceOutputUnit)
  //console.log(output +' m/s')

  document.getElementById("output").value = output;
}

function outputChange() {
  var numberValue = getValueOfOutput();
  var distanceInputUnit = getUnitOfOutputDistance();
  var timeInputUnit = getUnitOfOutputTime();
  var distanceOutputUnit = getUnitOfInputDistance();
  var timeOutputUnit = getUnitOfInputTime();
  var output = (numberValue / distanceInputUnit) * timeInputUnit;
  var output = (output * (1 / timeOutputUnit)) / (1 / distanceOutputUnit)
  //console.log(output +' m/s')

  document.getElementById("num_to_con").value = output;
}
/////////////////////////////////////////////////////
function getValueOfInput() {
  var numberValue = document.getElementById("num_to_con").value;
  return numberValue
}
function getUnitOfInputDistance() {
  var inputUnit = document.getElementById("inputDistanceUnit").value;
  return distanceUnitSwitch(inputUnit)
}
function getUnitOfInputTime() {
  var inputUnit = document.getElementById("inputTimeUnit").value;
  return timeUnitSwitch(inputUnit)
}
function getValueOfOutput() {
  var numberValue = document.getElementById("output").value;
  return numberValue
}
function getUnitOfOutputDistance() {
  var outputUnit = document.getElementById("outputDistanceUnit").value;
  return distanceUnitSwitch(outputUnit)
}
function getUnitOfOutputTime() {
  var outputUnit = document.getElementById("outputTimeUnit").value;
  return timeUnitSwitch(outputUnit)
}
////////////////////////////////////////////////////
function distanceUnitSwitch(value) {
  switch (value) {
    // each is equivalent of 1 metre in its unit
    // 1/1000 km is 1 metre 
    case "milimetres":
      var convertToMetres = 1 / 0.001;
      break;
    case 'centimetres':
      var convertToMetres = 1 / 0.01;
      break;
    case "hammer":
      // 0.01905m // used by valve
      var convertToMetres = 1 / 0.01905;
      break;
    case "attoparsec":
      // 1 pc * 10**-18 // 0.030856775714409184m
      var convertToMetres = (1 / 0.030856775714409184)
      break;
    case 'Brain length':
      // 6.5 inches
      var convertToMetres = 1 / 0.1651;
      break;
    case 'aubergine':
      // 0.2032 m
      var convertToMetres = 1 / 0.2032
      break;
    case "short A4 side":
      // 0.210 m 
      var convertToMetres = (1 / 0.210);
      break;
    case "long A4 side":
      // 0.297 m
      var convertToMetres = 1 / 0.297;
      break;
    case 'feet':
      var convertToMetres = (1 / 0.3048);
      break;
    case 'metres':
      var convertToMetres = 1;
      break;
    case 'Obama':
      // height of obama in march 2016
      // 186.69 cm
      var convertToMetres = (1 / 1.8669)
      break;
    case '747 wingspan':
      // 68.4m
      var convertToMetres = (1 / 68.4);
      break;
    case 'kilometres':
      var convertToMetres = (1 / 1000);
      break;
    case 'mile':
      var convertToMetres = (1 / 1609.344);
      break;
    case 'Scots Mile':
      // 1,815 m
      var convertToMetres = (1 / 1815);
      break;
    case 'lutontolondon':
      // 46.73 km
      var convertToMetres = (1 / 46730);
      break;
    case "Epping to West Ruislip":
      // 54.9 km
      var convertToMetres = 1 / 54900;
      break;
    case '65461 metres':
      var convertToMetres = (1 / 65461);
      break;
    case 'Length of Texas':
      // 1,289 km
      var convertToMetres = (1 / 1289000);
      break;
    case "lightseconds":
      // 299,792,458m
      var convertToMetres = (1 / 299792458);
      break;
    case "lunar":
      // 380,000 km // distance between earth and moon
      var convertToMetres = (1 / 380000000);
      break;
    case 'Sun size':
      // 4.379 million km 
      // circumfrence 
      var convertToMetres = (1 / 4379000000);
      break;
    case 'AU':
      // 149597870700 m
      var convertToMetres = (1 / 149597870700);
      break;
    case 'lightyears':
      var convertToMetres = (1 / 9460730472580800);
      break;
    case "parsec":
      // 30856775714409184m // 3.26 ly
      var convertToMetres = (1 / 30856775714409184);
      break;
    default:
      var convertToMetres = 1;
      console.log(value + " has not be added");
      alert(value + " has not be added");
  }
  return convertToMetres
}

function timeUnitSwitch(value) {
  switch (value) {
    // each is the value of one second in its unit 
    // 1000 ms is one sec
    // 1/60 min is one sec
    case 'planck time':
      var convertToSecond = 1 / 0.000000000000000000000000000000000000000005390559999;
      break;
    case 'Jiffy':
      // 3*10^-24 secs
      // 0.0000000000000000000003
      var convertToSecond = (1 / (3 * (10 ** -24)));
      break;
    case 'attosecond':
      // 1/1000000000000000000 secs
      var convertToSecond = 1000000000000000000;
      break;
    case 'spark':
      // 10 ns
      var convertToSecond = 10**8;
      break;
    case 'millisecond':
      var convertToSecond = 1000;
      break;
    case 'half-life of oxygen-13':
      // 8.585 ms
      var convertToSecond = 116.482236;
      break;
    case 'second':
      var convertToSecond = 1;
      break;
    case 'nanocentury':
      // 3.155695200 secs
      // 1 billionth of a century 
      var convertToSecond = 1 / 3.155695200;
      break;
    case 'actinium-222':
      // 5 seconds
      var convertToSecond = 1 / 5;
      break;
    case 'Decasecond':
      // 10 secs
      var convertToSecond = 1 / 10;
      break;
    case 'minute':
      var convertToSecond = 1 / 60;
      break;
    case 'Warhol':
      // 15 mins
      var convertToSecond = 1 / 900;
      break;
    case 'kilosecond':
      // 1000 secs
      var convertToSecond = 1 / 1000;
      break;
    case 'microcentury':
      // 52m and 35.6952 secs // 3155.6952 secs
      // 1 millionth of a century
      var convertToSecond = (1 / 3155.6952);
      break;
    case 'hour':
      var convertToSecond = 1 / 3600;
      break;
    case 'Cats movie':
      // 1 hour 50 mins
      var convertToSecond = 1 / 6600;
      break;
    case 'caffeine':
      // 5 hours
      var convertToSecond = 1 / 18000;
      break;
    case 'day':
      var convertToSecond = 1 / 86400;
      break;
    case 'megasecond':
      // 1000000 secs // approx 11 days
      var convertToSecond = 1 / 1000000;
      break;
    case 'Fortnight':
      // 14 days
      var convertToSecond = 1 / 1210000;
      break;
    case 'year':
      var convertToSecond = 1 / 31536000;
      break;
    case 'tropical year':
      // 365.24219 days
      var convertToSecond = 1 / 31556925.2;
      break;
    case 'julian year':
      // 365.25 SI days // 31557600 secs
      var convertToSecond = 1 / 31557600;
      break;
    case "28/06/2025":
      // 804,384,000 secs // 9310 days // approx 25.5 years
      var convertToSecond = 1 / 804384000;
      break;
    case 'gigasecond':
      // 1000000000 secs
      var convertToSecond = 1 / 1000000000;
      break;
    case 'Stephen Hawking life':
      // 27824 days 
      var convertToSecond = 1 / 2403993600;
      break;
    case 'terasecond':
      // 1000000000000 secs
      var convertToSecond = 1 / 1000000000000;
      break;
    default:
      var convertToSecond = 1;
      console.log(value + " has not be added");
      alert(value + " has not be added");
  }
  return convertToSecond
}
////////////////////////////////////////////////////
function randomChangeInput() {
  var distance = document.getElementById("inputDistanceUnit").length
  var time = document.getElementById("inputTimeUnit").length
  document.getElementById('inputDistanceUnit').getElementsByTagName('option')[randint(0, distance - 1)].selected = true;
  document.getElementById('inputTimeUnit').getElementsByTagName('option')[randint(0, time - 1)].selected = true;
  inputChange() 
}
function randomChangeOutput() {
  var distance = document.getElementById("outputDistanceUnit").length
  var time = document.getElementById("outputTimeUnit").length
  document.getElementById('outputDistanceUnit').getElementsByTagName('option')[randint(0, distance - 1)].selected = true;
  document.getElementById('outputTimeUnit').getElementsByTagName('option')[randint(0, time - 1)].selected = true;
  inputChange()
}
