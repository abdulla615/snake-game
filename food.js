export function generateFood( canvasHeight,canvasWidht,snake){ 
    const x = Math.floor(Math.random() * 
    (canvasWidht/snake.width))*snake.width;
    const y = Math.floor(Math.random() * 
    (canvasWidht/snake.height))*snake.height;
    return {x, y };
 }

export  function eat (food , snake){
    let result = false ;
    if(food.x== snake.x && food.y==snake.y){
        result = true;
    }
    return result;
}