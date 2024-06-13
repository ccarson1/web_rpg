let match = true;
function fight_scene_calls(fightscene){
    
    if( match == true){
        if(scene_opacity < 1){scene_opacity += .05;};
        console.log(scene_opacity)
        canvas.style.opacity = scene_opacity;
    }

    if(fightscene.player_health <= 0 ){
        match = false;
        if(scene_opacity >= 0){scene_opacity -= .05;};
        
        canvas.style.opacity = scene_opacity;
    }
    
    fightscene.fightScene();
    if(fightscene.enemy_health > 0){
        fightscene.drawEnemy();
    }
    if(fightscene.player_health > 0){
        fightscene.drawPlayer();
    }
    
    if(fightscene.is_defense == true){
        fightscene.drawDefense();
    }
    
    if(fightscene.is_attacking == true){
        fightscene.drawAttack();
    }
    update_ui(fightscene);

    if(fightscene.enemy_health <= 0){
        
        // if(scene_opacity >= -1){
        //     match = false;
        //     scene_opacity -= .05;
        // }
        // else{
        //     console.log("end");
        // }
        // if(scene_opacity < 1){
        //     canvas.style.opacity = 1;
        // }
        // canvas.style.opacity = scene_opacity;

        level_up();

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        is_world_view = true;

        console.log(scene_opacity);
        fightscene = new FightScene();
        is_fight_scene = false;
        steps = 0;
        
        worldscene.worldScene();
    }

}


function level_up(){
    let xp = document.getElementById("menu_xp").innerText;
    let current_level = document.getElementById("menu_level").innerText;
    console.log(xp + 25)
    let new_xp = parseInt(xp) + 25
    if(new_xp >= (current_level*100)){
        current_level ++;
        document.getElementById("menu_level").innerText = current_level

        let menu_att = document.getElementById("menu_att").innerText;
        let menu_def = document.getElementById("menu_def").innerText;
        let menu_hp = document.getElementById("menu_hp").innerText;
        let menu_mp = document.getElementById("menu_mp").innerText;
        let menu_st = document.getElementById("menu_st").innerText;

        let att = parseInt(menu_att) + 2;
        let def = parseInt(menu_def) + 2;
        let hp = parseInt(menu_hp) + 5;
        let mp = parseInt(menu_mp) + 2;
        let st = parseInt(menu_st) + 2;

        document.getElementById("menu_att").innerText = att;
        document.getElementById("menu_def").innerText = def;
        document.getElementById("menu_hp").innerText = hp;
        document.getElementById("menu_mp").innerText = mp;
        document.getElementById("menu_st").innerText = st;
    }
    document.getElementById("menu_xp").innerHTML = new_xp;
    
}

