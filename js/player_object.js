class PlayerObject extends GameObject{
    constructor(current_health, current_magic, current_stamina, level, experience, next_level, gold, attack, defense, health, magic, stamina, map_pos_x, map_pos_y){
        this.current_health = current_health;
        this.current_magic = current_magic;
        this.current_stamina = current_stamina;
        this.level = level;
        this.experience = experience;
        this.next_level = next_level;
        this.gold = gold;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.magic = magic;
        this.stamina = stamina;
        this.map_pos_x = map_pos_x;
        this.map_pos_y = map_pos_y;
    }

    set_level(){
        
    }
}