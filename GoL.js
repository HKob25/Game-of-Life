let grid = [];
let gridc = [];
let csize = 700;
let num = 100;
let gsize = csize/num;
let z=true;
let prob = 12;

function setup() {
	createCanvas(csize, csize);
	frameRate(10);
	fill(255);
	stroke(100);
	strokeWeight(30/num);

	for(x=0; x < num; x++) {
		grid[x] = [];
		gridc[x] = []
		for(y=0; y < num; y++) {
			if(!(ceil(random(1,prob))%prob))
				grid[x][y] = true;
			else
				grid[x][y] = false;
		}
	}
}

function draw() {
	background(0,240);
	for(x=0; x < num; x++) {
		line(x*gsize, 0, x*gsize, height);
		line(0, x*gsize, width, x*gsize);
	}
	copyg();
	drawgrid();
	life();
}


//////////////////////////////////////


copyg = function() {
	for(x=0; x < num; x++) {
		for(y=0; y < num; y++) {
			gridc[x][y]=grid[x][y];
		}
	}
}


life = function() {
	for(x=0; x < num; x++) {
		for(y=0; y < num; y++) {
			let n = neighbors(x,y);
			if(n<2 || n>3)
				grid[x][y] = false;
			else if(n==3)
				grid[x][y] = true;
		}
	}
}


neighbors = function (x,y) {
	let count = 0;
	for(i=x-1; i<x+2; i++)
		for(j=y-1; j<y+2; j++)
			if((i>0 && j>0) && (i<num && j<num) && (i!=x || j!=y))
				if(gridc[i][j])
					count++;
	return count;
}


drawgrid = function() {
	for(x=0; x < num; x++) {
		for(y=0; y < num; y++) {
			if(grid[x][y] == true)
				square(x*gsize, y*gsize, gsize);
		}
	}
}