var imgSwitch = false;
var spirit = [
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,0,0,0,0,1,1,0,0],
  [0,0,1,0,2,0,0,2,0,1,0,0],
  [0,0,1,0,1,0,0,1,0,1,0,0],
  [0,0,1,0,2,0,0,2,0,1,0,0],
  [0,0,1,0,2,0,0,2,0,1,0,0],
  [0,0,1,0,0,1,1,0,0,1,0,0],
  [0,1,1,1,0,0,0,0,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];
var krillin = [
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,3,2,3,3,2,3,1,1,0],
  [1,1,3,3,3,3,3,3,3,3,1,1],
  [1,3,3,3,2,3,3,2,3,3,3,1],
  [1,3,3,3,3,3,3,3,3,3,3,1],
  [1,3,3,3,2,3,3,2,3,3,3,1],
  [1,3,3,1,3,3,3,3,1,3,3,1],
  [1,3,3,3,3,3,3,3,3,3,3,1],
  [1,3,3,3,1,1,1,1,3,3,3,1],
  [1,1,3,3,3,3,3,3,3,3,1,1],
  [0,1,1,1,1,1,1,1,1,1,1,0]
];
var spiritColor = {
  "zero":"whiteBox",
  "one":"blackBox",
  "two":"purpleBox"
};
var krillinColor = {
  "zero":"whiteBox",
  "one":"blackBox",
  "two":"dotBox",
  "three":"tanBox"
};

function display(imgCode, colorCode) {
  var htmlboxes = "";
  var color = "";
  for(var i = 0; i < imgCode.length; i++){
    htmlboxes += `<div class="row">`;
    for(var j = 0; j < imgCode[i].length; j++){
      if(imgCode[i][j]==0){
        color = colorCode.zeros;
      }
      else if (imgCode[i][j]==1) {
        color = colorCode.one;
      }
      else if (imgCode[i][j]==2){
        color = colorCode.two;
      }
      else if (imgCode[i][j]==3){
        color = colorCode.three
      }
      htmlboxes += `<div class="col-md-1 ${color}"></div>`
    }
    htmlboxes += `</div>`
  }
  document.getElementById('main').innerHTML=htmlboxes;
  document.getElementById('main').addEventListener('click',main);
}

function main() {
  if(imgSwitch){
    display(krillin,krillinColor);
    imgSwitch=false;
  }
  else {
    display(spirit,spiritColor);
    imgSwitch=true;
  }
}

main();
