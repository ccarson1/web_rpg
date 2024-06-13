class WorldScene {
    canvas = document.getElementById('canvas');
    
    ctx = canvas.getContext('webgl2');
    constructor(ctx, canvas){

        this.player_pos_map_x = 165;
        this.player_pos_map_y = 75;
        this.speed = 8;
        this.map_pos_x = 400;
        this.map_pos_y = 400

        this.map_width = this.canvas.width;
        this.map_height = this.canvas.height;

        this.background = new Image(0, 0, 38.2, 33.3, 0, 9, false, 0, 0);
        this.background.src = "images\\world.png";

        this.worldplayer = new GameObject(0, 0, 25, 25, 0, 9, false, 0, 0);
        //this.worldplayer = new GameObject(0, 0, 24.8, 24.58, 0, 9, false, 0, 0);
        this.Worldplayer = this.worldplayer.setImage("images\\ff_clear.png");

        

        
    }

    drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {

        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

    }

    worldScene() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        if(this.worldplayer.direction == "down" && this.worldplayer.moving==true){
            
            this.map_pos_y += this.speed;
            //console.log(this.map_pos_y)
        }
        if(this.worldplayer.direction == "up" && this.worldplayer.moving==true){

            this.map_pos_y -= this.speed;
            //console.log(this.map_pos_y)
        }
        if(this.worldplayer.direction == "right" && this.worldplayer.moving==true){

            this.map_pos_x += this.speed;
            //console.log(this.map_pos_x)
        }
        if(this.worldplayer.direction == "left" && this.worldplayer.moving==true){

            this.map_pos_x -= this.speed;
            //console.log(this.map_pos_x)
        }

        this.drawSprite(this.background, this.map_pos_x, this.map_pos_y, canvas.width -50, canvas.height + 50, 0, 0, canvas.width, canvas.height);
        this.drawSprite(this.Worldplayer, this.worldplayer.x, 122, this.worldplayer.width, this.worldplayer.height, this.player_pos_map_x, this.player_pos_map_y, this.worldplayer.width/1.5, this.worldplayer.height/1.5);
        
    }



}