
window.onload=function() {
	canv=document.getElementById("snakegame");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown",keyPush); // These are for our keys
	setInterval(game,1000/15);

}
px=py=10; //Player Positions
gs=tc=20; //Grid size x Tile Count 
		  // 25 x 25 = 625 (size of the game canvas)
ax=ay=15; // apple to set a goal for the game
xv=yv=0; // So our snake moves at a constant 
trail=[];
tail=5;

function game () {
	px+=xv;
	py+=yv;

//To wrap the game
	if(px<0) {
		px= tc-1; 
	}

	if(px>tc-1) {
		px= 0; 
	}

	if(py<0) {
		py= tc-1; 
	}

	if(py>tc-1) {
		py= 0; 
	}

	ctx.fillStyle="#53DD6C";
	ctx.fillRect(0,0,canv.width,canv.height);

	ctx.fillStyle="#5171A5";
	for (var i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);

// if we step on our tail it will go back to 5 
	if(trail[i].x==px && trail[i].y==py) {
		tail = 5;
	}
}
	trail.push({x:px,y:py});
	while(trail.length>tail) {
	trail.shift();
	}

// if we eat an apple, increase snake length by 1 

	if (ax==px && ay==py) {
		tail++;
		ax=Math.floor(Math.random()*tc); //Makes a new apple appear
		ay=Math.floor(Math.random()*tc);
	}

	ctx.fillStyle="#BD1E1E";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

//37-40 are the arrow keys

function keyPush(evt) {
	switch(evt.keyCode) {
		case 37: //Left Arrow
			xv=-1;yv=0;
			break; 

		case 38: //Up Arrow
			xv=0;yv=-1;
			break; 

		case 39: //Right Arrow
			xv=1;yv=0;
			break; 

		case 40: //Down Arrow
			xv=0;yv=1;
			break; 
	}
}
