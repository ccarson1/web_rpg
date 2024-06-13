function game_data(current_health, level, experience, next_level, gold, attack, defense, health, magic, stamina, map_pos_x, map_pos_y){
    const saved_game = {
        current_health: current_health,
        level: level,
        experience: experience,
        next_level: next_level,
        gold: gold,
        attack: attack,
        defense: defense,
        health: health,
        magic: magic,
        stamina: stamina,
        map_pos_x: map_pos_x,
        map_pos_y: map_pos_y
    }
    return saved_game;
    
}

function save_game(){
    //console.log(JSON.stringify(save_game(100, 1, 0, 100, 100, 10, 100, 100, 100, 100, 50, 200)))

    let curr_hp = document.getElementById("player-health").innerText;
    let menu_hp = document.getElementById("menu_hp").innerText;
    let menu_level = document.getElementById("menu_level").innerText;
    let menu_xp = document.getElementById("menu_xp").innerText;
    let menu_next_level = document.getElementById("menu_next_level").innerText;
    let menu_gold = document.getElementById("menu_gold").innerText;
    let menu_att = document.getElementById("menu_att").innerText;
    let menu_def = document.getElementById("menu_def").innerText;
    let menu_st = document.getElementById("menu_st").innerText;
    let menu_mp = document.getElementById("menu_mp").innerText;

    console.log(curr_hp, menu_level, menu_xp, menu_next_level, menu_gold, menu_att, menu_def, menu_hp, menu_mp, menu_st, worldscene.map_pos_x, worldscene.map_pos_y)
    window.localStorage.setItem("saved_game", JSON.stringify(game_data(curr_hp, menu_level, menu_xp, menu_next_level, menu_gold, menu_att, menu_def, menu_hp, menu_mp, menu_st, worldscene.map_pos_x, worldscene.map_pos_y)));

}

