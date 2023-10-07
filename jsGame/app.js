const canvas = document.querySelector('#cw');
const context = canvas.getContext('2d');

// resize your canvas 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player{
    constructor(x,y,radius,color){
        this.x = x;
        this.y = y ;
        this.radius = radius ;
        this.color = color ;
    }

    draw(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        context.fillStyle = this.color;
        context.fill();
    }
}

const width = canvas.width/2 ;
const height = canvas.height/2;
const player = new Player(width,height,30,'blue');
player.draw();
console.log(player);


class Projectile{
    constructor(x,y,radius,color,velocity){
        this.x = x ;
        this.y = y ;
        this.radius = radius ;
        this.color = color ;
        this.velocity = velocity ;
    }

    draw(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        context.fillStyle = this.color ;
        context.fill();
    }

    update(){
        this.draw();
        this.x = this.x + this.velocity.x ;
        this.y = this.y + this.velocity.y ;
    }
} 
  const projectiles = [] ;

function animate(){
    
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    player.draw();
    projectiles.forEach((projectile)=>{
   
        projectile.update();
    })

}
addEventListener('click',(e)=>{
    const angleOfProjection = Math.atan2(e.clientY - height,e.clientX -width) ;    
    console.log('angle of projection',angleOfProjection)
    const velocity = {
        x:1*Math.cos(angleOfProjection),
        y:1*Math.sin(angleOfProjection)
    }
 
    projectiles.push(new Projectile(width,height,5,'red',velocity));
    animate();
})

