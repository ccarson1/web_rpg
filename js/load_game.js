
function load_game(){
    const saved_string = window.localStorage.getItem("saved_game");
    const saved_json = JSON.parse(saved_string);
    
    console.log(saved_json);
    console.log(saved_string);

    document.getElementById("player-health").innerText = saved_json["current_health"];
    document.getElementById("menu_level").innerText = saved_json["level"];
    document.getElementById("menu_xp").innerText = saved_json["experience"];
    document.getElementById("menu_next_level").innerText = saved_json["next_level"];
    document.getElementById("menu_gold").innerText = saved_json["gold"];
    document.getElementById("menu_att").innerText = saved_json["attack"];
    document.getElementById("menu_def").innerText = saved_json["defense"];
    document.getElementById("menu_hp").innerText = saved_json["health"];
    document.getElementById("menu_st").innerText = saved_json["stamina"];
    document.getElementById("menu_mp").innerText = saved_json["magic"];

    return saved_json;
}

