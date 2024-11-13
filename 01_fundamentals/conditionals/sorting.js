var x=0;
var y=-1;
var z=4;
if(x>y && x>z && y>z){
    console.log(x+','+y+','+z);
}else if(x>z && z>y && x>y){
    console.log(x+','+z+','+y)
}else if(y>x && y>z && x>z){
    console.log(y+','+x+','+z);
}else if(y>z && y>x && z>x){
    console.log(y+','+z+','+x);
}else if(z>x && z>y && x>y){
    console.log(z+','+x+','+y);
}else if(z>y && z>x && y>x){
    console.log(z+','+y+','+x);
}

