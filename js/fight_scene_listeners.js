
function fight_scene_listeners(){
    window.addEventListener("keypress", function (e) {

        if (e.key == 'e') {
    
            fightscene.is_attacking = true;
        }
    });
    
    window.addEventListener('keypress', function (e) {
        if (e.key == 'q') {
            fightscene.defense_field = 50;
            fightscene.is_defense = true;
        }
    });
}

