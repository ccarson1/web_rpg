function world_scene_listeners(){

    let mapbounds = new MapBounds();
    let boundaries = mapbounds.boundaries();
    boundaries[46][51] = 1;
    //console.log(boundaries[49])
    

    let map_bound_pos_x = 49;
    let map_bound_pos_y = 48
    
    window.addEventListener("keydown", function(e){
        console.log('map_bound_pos_x: ' + map_bound_pos_x);
        console.log('map_bound_pos_y: ' + map_bound_pos_y);
        console.log(boundaries[map_bound_pos_x][map_bound_pos_y])
        
        if(e.key == 's'){
            map_bound_pos_y ++;
            //worldscene.player_pos_map_y +=.3;
            worldscene.worldplayer.moving = true;
            if(position == 1){
                position = 0;
            }else{
                position = 1;
            }
            
            worldscene.worldplayer.direction = "down";
            
        }
        if(e.key == 'w'){
            map_bound_pos_y --;
            worldscene.worldplayer.moving = true;
           // worldscene.player_pos_map_y -=.3;
            if(position == 4){
                position = 5;
            }else{
                position = 4;
            }
            worldscene.worldplayer.direction = "up";
        }
        if(e.key == 'a'){
            
            
            if(boundaries[map_bound_pos_x][map_bound_pos_y] == 0){
                worldscene.worldplayer.moving = true;
                map_bound_pos_x --;
                //worldscene.player_pos_map_x -=.3;
                if(position == 2){
                    position = 3;
                }else{
                    position = 2;
                }
                worldscene.worldplayer.direction = "left";
            }
            else{
                console.log("passed bounds");
                worldscene.worldplayer.moving = false;
            }
            
            
        }
        if(e.key == 'd'){
            map_bound_pos_x ++;
            worldscene.worldplayer.moving = true;
            // worldscene.worldplayer.style.transform ="scaleX(-1)";
            // worldscene.player_pos_map_x +=.3;
            
            if(position == 6){
                position = 7;
            }else{
                position = 6;
            }
            
            worldscene.worldplayer.direction = "right";
    
        }
        
        worldscene.worldplayer.x = position * worldscene.worldplayer.width;
        steps++;
        if(steps == steps_to_battle){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            is_fight_scene = true;
            fightscene = new FightScene();
            is_world_view = false;
            fightscene.fightScene();
            
        }
    });
    
    window.addEventListener("keyup", function(){
        worldscene.worldplayer.moving = false;

    });

    document.getElementById("btn-save").addEventListener("click", function(){
        console.log("saved");
    });
     document.getElementById("btn-load").addEventListener("click", function(){
        let saved_json = load_game();
        console.log(saved_json);
        worldscene.map_pos_x = saved_json["map_pos_x"];
        worldscene.map_pos_y = saved_json["map_pos_y"];

        document.getElementById("menu_level").innerText = saved_json["level"];
        document.getElementById("menu_xp").innerText = saved_json["experience"];
        document.getElementById("menu_next_level").innerText = saved_json["next_level"];
        document.getElementById("menu_gold").innerText = saved_json["gold"];


     });
}