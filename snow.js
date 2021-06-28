class Snow {
    constructor(x,y,width,height){
        this.snowImage = loadImage("snow4.webp")
        var options = {
            friction: 1,
            density: 0.5,
            isStatic: false
        }

    }

    display(){
        image(this.snowImage,200,1)
    }

}