function check(){
	if((cell[1][1]==1)&&(cell[2][1]==1)&&(cell[3][1]==1)){
	document.getElementById("demo").innerHTML="Winner";}
}

function keyHit_a(){
if(event.key=='a'){chgtoPic12(2);document.getElementById("par1").value="testing";}	
	
}