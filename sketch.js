function setup()
{
	//create a large square canvas
	createCanvas(1000, 1000);
}

function draw()
{

	//draw the red rectangle 
    strokeWeight(12)
    stroke(0,0,0)
    fill(255,0,0);
	rect(112, 62, 400, 400);
    
    //draw the top white rectangle
    strokeWeight(12)
     stroke(0,0,0)
    fill(255,255,255)
    rect(12, 62, 100, 188)
    
    //draw the middle white rectangle
    strokeWeight(12)
     stroke(0,0,0)
    fill(255,255,255)
    rect(12, 262, 100, 200)
    
    //draw the blue rectangle
    strokeWeight(12)
     stroke(0,0,0)
    fill(0,89,179)
    rect(12, 462, 100, 110)
    
    //draw the bottom white rectangle
    strokeWeight(12)
    stroke(0,0,0)
    fill(255,255,255)
    rect(112, 462, 350, 110)
    
    //draw the bottom right corner white rectangle
    strokeWeight(12)
    stroke(0,0,0)
    fill(255,255,255)
    rect(462, 462, 50, 55)
    
    //draw the bottom right corner yellow rectangle
    strokeWeight(12)
    stroke(0,0,0)
    fill(255,255,172)
    rect(462, 517, 50, 55)
    
    //draw the white frame
    strokeWeight(12)
    stroke(255,255,255)
    fill(0,0,0,0)
    rect(12, 62, 500, 510)
     

}