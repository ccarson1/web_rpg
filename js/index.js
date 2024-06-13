const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let scene_opacity = 0;
let fps, fpsInterval, startTime, now, then, elapsed;
let is_fight_scene = false;
let is_world_view = true;
let steps = 0;
let steps_to_battle = 5000;
let new_fight_scene = true;
let position = 0;



//temporary testing code///////////////////////////////////////////////
if(is_fight_scene){
    fightscene = new FightScene();
}
if(is_world_view){
    worldscene = new WorldScene();
    
}

//////////////////////////////////////////////////////////////////////////
function animate(){
    //boundaries();
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        if(is_fight_scene){

            fight_scene_calls(fightscene);
        }
        if(is_world_view){
            worldscene.worldScene();

        }
    }
}

function startAnimations(fps){
    fpsInterval = 9000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

fight_scene_listeners();
world_scene_listeners();

document.getElementById("click", function(){
    //save_game();
    console.log(fightscene.player);
});

startAnimations(40);