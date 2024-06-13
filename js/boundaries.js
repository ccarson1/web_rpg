class MapBounds{

    boundaries(){
        const boundary_width = Array(554).fill(0);
    
        for(let x=0; x< boundary_width.length; x++){
            boundary_width[x] = Array(512).fill(0);
        }
    
        return boundary_width;
    }
    
    
}


//boundaries()