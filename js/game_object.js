class GameObject{
    constructor(x, y, width, height, frameX, frameY, speed, moving, direction, framePos){
        this.x= x;
        this.y= y;
        this.width= width;
        this.height= height;
        this.frameX= frameX;
        this.frameY= frameY;
        this.speed= speed;
        this.moving= moving;
        this.direction= direction;
        this.framePos= framePos;
    }
    
    setImage(spriteImage){
        const image = new Image();
        image.src = spriteImage;
        return image;
    }
        
}