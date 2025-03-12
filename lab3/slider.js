//create slider
let slider;

function setup() {
    noCanvas(); 

    //put slider on the canvas
    slider = createSlider (0, 255);
    slider.postion (20, 400);
    slider.size(80);

    
}


function draw(){ 
    let g = slider.value();
    background(g);

}