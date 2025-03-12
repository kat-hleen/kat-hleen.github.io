

//define the inputs for this form as global variables https://p5js.org/examples/input-elements-dom-form-elements/
let nameInput;
let fontSelect;
let foodRadio;
let fontChanged;



//define global variables: input, button, and greeting  https://p5js.org/examples/input-elements-input-button/
let button;
let greeting;

function  setup() {
    createCanvas (800, 500); 

   // use greeting variable to ask for input
    greeting = createElement('h2', 'What is your name?');
    greeting.position(25,480)

   

    //assign an input to nameInput
    nameInput = createInput();
    nameInput.position(25, 550);

    //button
   let button = createButton('submit');
    button.position(750, 400);

    //use the mousePressed() method to call the greet() function when the button is pressed
    button.mousePressed(greet);

    //call greet function when input is changed and enter/return button is pressed
    nameInput.changed(greet);

    //assign radio buttons to foodRadio
    foodRadio = createRadio();
    foodRadio.position(25, 850);

    //list options for foodRadio along w background color
    foodRadio.option('#F7F5BC', 'Peach');
    foodRadio.option('#B8E3FF', 'Blueberries');
    foodRadio.option('#C79A9A', 'banana');

    //assign a dropdown to font select
    fontSelect = createSelect();
    fontSelect.position(25, 900);

    //list out the dropdown options for fontSelect
    fontSelect.option('Sans-serif');
    fontSelect.option('Serif');
    fontSelect.option('Cursive');



}

function greet() {
    //refresh the canvas background to clear any previous inputs
    background(255);

    //connect the  name variable to the inputs value
    let name = nameInput.value();

    //update the greeting to state the persons name
    greeting.html(`Hello, ${name}!`);

    //clear the inputs value
    nameInput.value('');

    //draw name on the canvas
    textSize(100);
    textAlign(CENTER, CENTER);
    text(name, width / 2, height / 2);
}


function draw() {


   

    //if fontSelect is changes, call the function fontChanged funtion
    fontSelect.changed(fontChanged);
    //set the background color to the current foodRadio value
    let backgroundColor = foodRadio.value();
   background (backgroundColor);


   

   // create the text inputs that will update with the new user inputs
    textSize(25);
    text(`What is your name? ${nameInput.value()}`, 25, 100 );
    text('What is your favorite fruit?' , 25, 200);

    function fontChanged() {
        //whent the fontSelect value is changed, update the canvas font to the new value
        let fontSelection = fontSelect.value();
        textFont(fontSelection);

    }

   

}