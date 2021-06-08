canvas=document.getElementById('myCanvas');
background_image="racing.jpg";
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
background_image="racing.jpg";
car1_image="car1 (1).png";
car1_x=10;
car1_y=10;

function add(){
    background_imgTag=new Image();//defining a variable with a new image
    background_imgTag.onload=uploadBackground;// setting a function, onloading this variable
    background_imgTag.src=background_image; // load image


    car1_imgTag = new Image(); //defining a variable with a new image 
    car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
    car1_imgTag.src = car1_image; // load image

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed=='40')
    {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed=='37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed=='39')
    {
        car1_right();
        console.log("right arrow key");
    }



}
