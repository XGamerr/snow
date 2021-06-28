var snow
var person
var snow1



function preload(){
 snow = loadImage("snow1.jpg")
}


function setup() {
  createCanvas(800,400);
  person = createSprite(400,200,50,50)
  snow1 = new Snow(500,200,100,50)
}

function draw() {
  background(snow); 

  if(keyDown(LEFT_ARROW)){
  person.x -= 5
  }

  if(keyDown(RIGHT_ARROW)){
  person.x += 5
  }

  if(keyDown(UP_ARROW)){
  person.y -= 5
  }

  if(keyDown(DOWN_ARROW)){
    person.y += 5
    }
  
  snow1.display()
  person.display()
}