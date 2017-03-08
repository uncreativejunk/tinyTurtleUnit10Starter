TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}

// Type your function call below
square(90);

stamp();

function triangle(size){
    forward(size);
    right (120);
    forward(size);
    right(120);
    forward(size);
}
triangle(80);

forward(50);

function rhombus(x){
    forward(x);
    right (100);
    forward(x);
    right(80);
    forward(x);
    right(80);
    forward(x);
    right(190);
}
rhombus(60);

function hexagon(x){
    forward(x);
    right (60);
    forward(x);
    right(60);
    forward(x);
    right(60);
    forward(x);
    right(60);
    forward(x);
    right (60);
    forward(x);
    right(60);
  
}

hexagon(45);

function shape(type, size){
    if(type === "triangle"){
        triangle(size);
    }else if(type === "square") {
        square(size);
    }else if(type === "rhombus"){
        rhombus(size);
    }else {
        alert("you gave me something i dont know.");
    }
}


//shape ('triangle',40);

//shape ("square", 50);

//shape ("rhombus", 50);