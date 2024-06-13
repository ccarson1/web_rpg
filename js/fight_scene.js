

class FightScene {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    constructor() {


        const saved_string = window.localStorage.getItem("saved_game");
        const saved_json = JSON.parse(saved_string);
        this.enemy_health = 100;
        try{
            this.player_health = saved_json["current_health"];
        }
        catch{
            this.player_health = document.getElementById("menu_hp").innerText;
        }
        this.defense_field = 0;

        this.is_defense = false;
        this.enemy_is_attack = false;
        this.enemy_attack_anim = 50;
        this.attack_velocity = 80;
        this.is_attacking = false;

        this.enemy = new GameObject(0, 0, 60, 44, 0, 9, false, 0, 0);
        this.Enemy = this.enemy.setImage("images\\Enemies.png");

        this.background = new Image(0, 0, 38.2, 33.3, 0, 9, false, 0, 0);
        this.background.src = "images\\Backgrounds.png";

        this.player = new GameObject(0, 0, 38.2, 33.3, 0, 9, false, 0, 0, 100, 1, 0, 100, 100, 10, 100, 100, 100, 100, 50, 200);
        this.Player = this.player.setImage("images\\Battle Sprites.png");

        this.fireball = new GameObject(0, 0, 16, 16, 0, 9, false, 0, 0);
        this.Fireball = this.fireball.setImage("images\\Flames.png");

        this.defense = new GameObject(0, 0, 32, 32, 0, 9, false, 0, 0);
        this.Defense = this.defense.setImage("images\\Teleporters.png");
    }


    drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {

        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);

    }

    fightScene() {
        ctx.clearRect(0, 0, canvas.wsidth, canvas.height)

        this.drawSprite(this.background, 550, 20, canvas.width + 100, canvas.height + 50, 0, 0, canvas.width, canvas.height);


    }

    drawEnemy() {


        this.drawSprite(this.Enemy, 260, 30, this.enemy.width, this.enemy.height, this.enemy_attack_anim, 60, this.enemy.width, this.enemy.height);
        if (this.enemy_is_attack == true) {
            if (this.enemy_attack_anim < 60) {
                this.enemy_attack_anim += 10;
                if (this.is_defense) {
                    this.player_health -= 5.5;
                }
                else {
                    this.player_health -= 15;
                }
                console.log("Player: " + this.player_health);
            }
            else {
                this.enemy_attack_anim = 50;
                this.enemy_is_attack = false;
            }
            if (this.is_defense == true) {
                this.defense_field -= 10;
                console.log("Defense Field: " + this.defense_field);

            }
            if (this.defense_field <= 0) {
                this.is_defense = false;
            }
        }

    }

    drawPlayer() {


        this.drawSprite(this.Player, this.player.x, 166.6, this.player.width, this.player.height, 200, 70, this.player.width, this.player.height);
        if (this.is_attacking == true) {
            this.player.x = 190;
        }
        else {
            this.player.x = 33.3;
        }
    }



    drawAttack() {
        this.drawSprite(this.Fireball, this.fireball.x, 32, this.fireball.width, this.fireball.height, this.attack_velocity, 70, this.fireball.width, this.fireball.height);
        if (this.fireball.x < 112) {
            this.fireball.x += 16;
            this.enemy_health -= 1.5;
            console.log("Enemy: " + this.enemy_health);
        }
        else {
            this.fireball.x = 0;
            this.is_attacking = false;
            this.enemy_is_attack = true;
        }
    }



    drawDefense() {
        this.drawSprite(this.Defense, this.defense.x, 32, this.defense.width, this.defense.height, 170, 65, this.defense.width, this.defense.height);
        if (this.defense_field > 0) {
            if (this.defense.x >= 128 && this.defense.x < 192) {
                this.defense.x += 32;
            }
            else {
                this.defense.x = 128;
            }
        }
        else {
            this.is_defense = false;
        }

    }




}

