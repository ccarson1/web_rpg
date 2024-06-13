function update_ui(fightscene){
    ui_player_health = document.getElementById('player-health');
    ui_player_health.innerHTML = fightscene.player_health;
    ui_player_health.style.color = 'green';

    ui_sheild = document.getElementById('sheild');
    ui_sheild.innerHTML = "Sheild: " + fightscene.defense_field;
    ui_sheild.style.color = 'orange';

    ui_enemy_health = document.getElementById('enemy-health');
    ui_enemy_health.innerHTML = "Enemy: " + fightscene.enemy_health;
    ui_enemy_health.style.color = 'red';


}



