var app = function(){
  var url = 'http://hp-api.herokuapp.com/api/characters';
  makeRequest(url, requestComplete);
};

var populateDropDown = function(characters){
  var charList = document.getElementById("character-select");
  characters.forEach(function(character, index){
    var option = document.createElement('option');
    option.innerText = character.name;
    option.value = index;
    charList.appendChild(option);
  })
  var houseArray = houseData(characters);
  var studentsProfessors = studentsAndProfessors(characters);
  console.log(houseArray);
  console.log(studentsProfessors);
  charList.addEventListener('change', function(){
    var index = charList.value;
    var character = characters[index];
    displayCharDetails(character);
  })
};

var displayCharDetails = function(character){
  var charList = document.getElementById("character-list");
  while(charList.firstChild){
    charList.removeChild(charList.firstChild);
  }

  var name = document.createElement('p');
  name.innerText = "Character name : " + character.name;
  charList.appendChild(name);

  var ancestry = document.createElement('p');
  ancestry.innerText = "Ancestry : " + character.ancestry;
  charList.appendChild(ancestry);

  var wand = document.createElement('p');
  wand.innerText = "Wand info :";
  charList.appendChild(wand);

  var wandWood = document.createElement('li');
  wandWood.innerText = "Wood : " + character.wand.wood;
  wand.appendChild(wandWood);

  var wandCore = document.createElement('li');
  wandCore.innerText = "Core : " + character.wand.core;
  wand.appendChild(wandCore);

  var wandLength = document.createElement('li');
  wandLength.innerText = "Length : " + character.wand.length;
  wand.appendChild(wandLength);

  var patronus = document.createElement('p');
  patronus.innerText = "Patronus : " + character.patronus;
  charList.appendChild(patronus);

  var house = document.createElement('img');
  switch ( character.house){
      case "Gryffindor": {
        house.src = "https://vignette1.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20161124074004";
        break;
      }
      case "Hufflepuff": {
        house.src = "http://vignette2.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=2016102018251";
        break;
      }
      case "Ravenclaw": {
        house.src = "http://vignette1.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest?cb=20140604194505";
        break;
      }
      case "Slytherin": {
        house.src = "http://vignette4.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest?cb=20161020182557";
        break;
      }
      default:
      break;
    }
  house.className = 'images';
  charList.appendChild(house);

  var image = document.createElement('img');
  image.src = character.image;
  image.className = 'images';
  charList.appendChild(image);
};

var houseData = function(characters){
  var array = createHouseArray(characters);
  var houses = [];
  var gryff = 0;
  var huff = 0;
  var rave = 0;
  var sly = 0;
  array.forEach(function(house){
    switch ( house){
        case "Gryffindor": {
         gryff ++;
          break;
        }
        case "Hufflepuff": {
          huff ++;
          break;
        }
        case "Ravenclaw": {
          rave ++;
          break;
        }
        case "Slytherin": {
          sly ++;
          break;
        }
        default:
        break;
      }
  })
  houses.push(gryff);
  houses.push(huff);
  houses.push(rave);
  houses.push(sly);
  new PieChart(houses);
  return houses;
};

var createHouseArray = function(characters){
  var array = [];
  characters.forEach(function(character){
    array.push(character.house);
  })
  return array;
};

var studentsAndProfessors = function(characters){
  var array = [];
  var students = 0;
  var professors = 0;
  characters.forEach(function(character){
    if(character.hogwartsStudent === true){
      students ++;
    }
    if(character.hogwartsStaff === true){
      professors ++;
    }
  });
  array.push(students);
  array.push(professors);
  new BarChart(array);
  return array;
};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var characters = JSON.parse(jsonString);
  populateDropDown(characters);
};

window.addEventListener('load', app);