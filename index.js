import {Snake } from './snake.js';
import { generateFood , eat } from './food.js';

const canvas = document.getElementsByTagName
 ('canvas')[0].getContext('2d');
 const canvasHeight = 200;  //hosting la run aavzu thats why we create it
 const canvasWidht = 200;   //first run the box create a function
 const snake = new Snake(canvasHeight,canvasWidht);//snake da function keela irukku
 let food = generateFood ( canvasHeight, canvasWidht,snake);

 let interval = null;

 document.addEventListener('keydown', (event) => {
   if (event.keyCode == 37 && snake.dx !=1){
    //left errow
    snake.dx = -1 ;
    snake.dy = 0 ;
   } else if (event.keyCode == 38 && snake.dy !=1){
    //up errow
    snake.dy =-1;
    snake.dx = 0;
   }else if (event.keyCode == 39 && snake.dx != -1){
    //right errow
    snake.dx = 1;
    snake.dy = 0;
   }else if (event.keyCode == 40 && snake.dy != -1){
    //down errow 
    snake.dy = 1;
    snake.dx = 0;
   }

 })


function update() {
    snake.update(canvas);
    if (snake.dead()){
      console.log('game over' );
      alert ('game over')
    }
    if(eat(food,snake)){
    food = generateFood ( canvasHeight, canvasWidht,snake);
    snake.grow();
    }
    
   
   
}

function show() {
   canvas.clearRect(0,0,canvasHeight, canvasWidht); 
   canvas.fillStyle = 'red';
   canvas.fillRect (food.x , food.y , snake.width , snake.height);
   snake.show(canvas); 
}

intreval = setInterval(() =>{  //arrow function
    update();
    show();
   
}, 100); // milli sec 