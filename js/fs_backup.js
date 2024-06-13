
enemy_health = 100;
player_health = 100;
defense_field = 0;

let is_defense = false;

let enemy_is_attack = false;
let enemy_attack_anim = 50;

let attack_velocity = 80;
let is_attacking = false;


const enemy = new GameObject(0,0,60,44,0,9,false,0,0);
Enemy = enemy.setImage("images\\Enemies.png");

const player = new GameObject(0,0,38.2,33.3,0,9,false,0,0);
Player = player.setImage("images\\Battle Sprites.png");

const fireball = new GameObject(0,0,16,16,0,9,false,0,0);
Fireball = fireball.setImage("images\\Flames.png");

const defense = new GameObject(0,0,32,32,0,9,false,0,0);
Defense = defense.setImage("images\\Teleporters.png");

const background = new Image(0,0,38.2,33.3,0,9,false,0,0);
background.src = "images\\Backgrounds.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    
}

function fightScene(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    //ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(background,550,20,canvas.width+100,canvas.height+50,0,0,canvas.width,canvas.height);

    
}

function drawEnemy(){
    drawSprite(Enemy, 260,30,enemy.width, enemy.height, enemy_attack_anim, 60, enemy.width, enemy.height);
    if(enemy_is_attack == true){
        if(enemy_attack_anim<60){
            enemy_attack_anim+=10;
            if(is_defense){
                player_health-=5.5;
            }
            else{
                player_health-=15;
            }
            console.log("Player: " + player_health);
        }
        else{
            enemy_attack_anim = 50;
            enemy_is_attack = false;
        }
        if(is_defense == true){
            defense_field -= 10;
            console.log("Defense Field: " + defense_field);
            
        }
        if(defense_field <= 0){
            is_defense = false;
        }
    }

}

function drawPlayer(){
    
    drawSprite(Player, player.x,166.6,player.width, player.height, 200, 70, player.width, player.height);
    if(is_attacking == true){
        player.x = 190;
    }
    else{
        player.x = 33.3;
    } 
}



function drawAttack(){
    drawSprite(Fireball, fireball.x,32,fireball.width, fireball.height, attack_velocity, 70, fireball.width, fireball.height);
    if(fireball.x < 112){
        fireball.x += 16;
        enemy_health-=1.5;
        console.log("Enemy: " + enemy_health);
    }
    else{
        fireball.x=0;
        is_attacking = false;
        enemy_is_attack = true;
    }
}



function drawDefense(){
    drawSprite(Defense, defense.x,32,defense.width, defense.height, 170, 65, defense.width, defense.height);
    if(defense_field > 0){
        if(defense.x >= 128 && defense.x < 192){
            defense.x +=32;
        }
        else{
            defense.x = 128;
        }
    }
    else{
        is_defense = false;
    }
    
}

window.addEventListener("keypress", function(e){
    console.log(e);
    if(e.key == 'e'){
        console.log("attack");
        is_attacking = true;
    }
});

window.addEventListener('keypress', function(e){
    if(e.key == 'q'){
        defense_field = 50;
        is_defense = true;
    }
});
