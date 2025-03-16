

//define the inputs for this form as global variables https://p5js.org/examples/input-elements-dom-form-elements/
let nameInput;
let fontSelect;
let foodRadio;

let currentFont = 'Arial';



//define global variables: input, button, and greeting  https://p5js.org/examples/input-elements-input-button/
let button;
let greeting;

function  setup() {
    console.log("does this shit work lmfao?");
    let cardWidth = document.getElementById("canvas-container").offsetWidth;
   let canvas = createCanvas (cardWidth, 500); 
   canvas.parent("canvas-container"); //attach to the div in html 

   // use greeting variable to ask for input
    greeting = createElement( 'h2', 'What is your name?');
    greeting.parent("canvas-container");
    greeting.style('text-align', 'center');
    greeting.style('width', '100%');

   

    //assign an input to nameInput
    nameInput = createInput();
    nameInput.parent("canvas-container");
    nameInput.style('width', '80%');
    nameInput.style('display', 'block');
    nameInput.changed(greet);

    //button
    button = createButton('submit');
    button.parent("canvas-container");
    button.style('display', 'block');
    button.style('margin', '10px auto');
    button.mousePressed(greet);

  

    //assign radio buttons to foodRadio
    foodRadio = createRadio();
    foodRadio.parent("canvas-container");
    foodRadio.style('display', 'block');

    //list options for foodRadio along w background color
    foodRadio.option('#F7F5BC', 'Yellow');
    foodRadio.option('#B8E3FF', 'Blue');
    foodRadio.option('#C79A9A', 'Pink');

    //assign a dropdown to font select
    fontSelect = createSelect();
    fontSelect.parent("canvas-container");
    fontSelect.style('margin', '10px auto');


    //list out the dropdown options for fontSelect
    fontSelect.option('Arial');
    fontSelect.option('Times New Roman');
    fontSelect.option('Courier New');

    fontSelect.changed(fontChanged);

    windowResized();

}

function greet() {
    //refresh the canvas background to clear any previous inputs
    background(245);

    //connect the  name variable to the inputs value
    let name = nameInput.value();

    //update the greeting to state the persons name
    greeting.html(`Hello, ${name}!`);

    //clear the inputs value
    nameInput.value('');

    //draw name on the canvas
    textFont(currentFont);
    textSize(50);
    textAlign(CENTER, CENTER);

    text(name, width / 2, height / 2);
}


function draw() {

    background(foodRadio.value());

   textFont(currentFont);
   // create the text inputs that will update with the new user inputs
    textSize(25);

    textAlign(CENTER, CENTER);
    fill(0);

}
function fontChanged() {
    let fontSelection = fontSelect.value();
    textFont(fontSelection);
   //currentFont = fontSelect.value();

    }

function windowResized() {
    let cardWidth = document.getElementById("canvas-container").offsetWidth;
    resizeCanvas(cardWidth, 500);
}


   

