// Setup

//import { Particle } from "./particle.js";
//import { PVector  } from "./vector.js";
//import { Trajector } from "./trajector.js";


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Implement parameter "d" for vector director 
//to particle direction.
function particle(x, y, vel, color) {
	this.x = x;
	this.y = y;
	this.vel = vel;
	this.color = color;
	
	this.draw = function ( ctx ) {
		this.x = this.x + 20*this.vel;
		this.y = this.y + 100*this.vel;
		this.vel += 0.0001;
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.filter = "blur(5px)";
		ctx.arc( this.x + 16, this.y + 16, 6, 0, 2*Math.PI );
		ctx.fill();
		
	}
}



console.log(ctx);
var t = 0;
var v = 0;
//draw( ctx );


var p = new particle(0, 0, 0.001, "white");

var ps = []

for ( let i = 0; i < 100; i++ ) 
	ps.push( new particle(Math.random()*200, Math.random()*100, Math.random()*0.008, "white" ) );

animate();

function animate() {
	ctx.clearRect( 0, 0, canvas.width, canvas.height);
	p.draw( ctx );
	ps.forEach( p => {
		p.draw( ctx );
	} );
	
	//console.log( p.x, p.y )
	
	requestAnimationFrame( animate )
	
	
}
