canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var background_image = "background.jpg";
var car_1 = "car 1.png";
var car_2 = "car 2.png";
var carwidth = 120;
var carheight = 70;
var car1_x = 10;
var car1_y = 10;
var car2_x = 10;
var car2_y = 100;
function add(){
    baground_image_tag = new Image();
    baground_image_tag.onload = uploadbackground();
    baground_image_tag.src = background_image;

     car_1_tag = new Image();
    car_1_tag.onload = uploadcar_1();
    car_1_tag.src = car_1;

    car_2_tag = new Image();
    car_2_tag.onload = uploadcar_2();
    car_2_tag.src = car_2;
}
function uploadbackground(){
    ctx.drawImage(baground_image_tag,0,0,canvas.width,canvas.height);
}
function uploadcar_1(){
    ctx.drawImage(car_1_tag,car1_x,car1_y,carwidth,carheight);
}
function uploadcar_2(){
    ctx.drawImage(car_2_tag,car2_x,car2_y,carwidth,carheight);
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed == "38"){
         up();
         console.log("up");
    }
    if(key_pressed == "40"){
         down();
         console.log("down");
   }
   if(key_pressed == "37"){
         left();
         console.log("left");
   }
   if(key_pressed == "39"){
         right();
         console.log("right");
   }   
   if(key_pressed == "65"){
    left1();
    console.log("left1");
   }
   if(key_pressed == "83"){
    down1();
    console.log("down1");
   }
   if(key_pressed == "87"){
    up1();
    console.log("up");
   }
   if(key_pressed == "68"){
    right1();
    console.log("right");
   }
   
   if(car1_x > 700){
    document.getElementById("game_status").innerHTML = "Car 1 won ! !";
   }

if(car2_x > 700){
    document.getElementById("game_status").innerHTML = "Car 2 won ! !";
   } 
}


function up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        uploadbackground();
        uploadcar_1();
        uploadcar_2();
    }
}

function down(){
    if(car1_y <= 300){
         car1_y = car1_y + 10;
         uploadbackground();
         uploadcar_1();
         uploadcar_2();
    }
}

function left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        uploadbackground();
        uploadcar_1();
        uploadcar_2();
    }
}

function right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        uploadbackground();
        uploadcar_1();
        uploadcar_2();
    }
}

function up1(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        uploadbackground();
        uploadcar_1();
        uploadcar_2();
    }
}

function down1(){
    if(car2_y <= 300){
         car2_y = car2_y + 10;
         uploadbackground();
         uploadcar_1();
         uploadcar_2();
    }
}

function left1(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        uploadbackground();
        uploadcar_1();
        uploadcar_2();
    }
}

function right1(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        uploadbackground();
        uploadcar_1();
        uploadcar_2();
    }
}


