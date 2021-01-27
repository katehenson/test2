

function myFunc() {
  if(cnt%2==0){document.getElementById("demo").innerHTML = "Hello World";}
  else{document.getElementById("demo").innerHTML = "Goodbye World";}
  cnt++;
}

function start(){
	for(let j=0;j<10;j++){cell[j]=[];
	for(let k=0;k<3;k++){cell[j][k]=0;
	}}
pic11.width="90";pic12.width="0";pic13.width="0";
pic11.height="90";pic12.height="0";pic13.height="0";
pic11.style.borderWidth="5px";pic12.style.borderWidth="0px";
pic13.style.borderWidth="0px";

pic21.width="90";pic22.width="0";pic23.width="0";
pic21.height="90";pic22.height="0";pic23.height="0";
pic21.style.borderWidth="5px";pic22.style.borderWidth="0px";
pic23.style.borderWidth="0px";

pic31.width="90";pic32.width="0";pic33.width="0";
pic31.height="90";pic32.height="0";pic33.height="0";
pic31.style.borderWidth="5px";pic32.style.borderWidth="0px";
pic33.style.borderWidth="0px";

document.getElementById("demo").innerHTML = "Restart the Game "+cell[3][2];
}