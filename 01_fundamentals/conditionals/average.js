var marks= [80,77,88,95,68];
var sum=0;
for(var i=0; i<marks.length; i++){
    sum += marks[i];
}
var avg=sum/marks.length;
if(avg<60){
    console.log("the grade is"+ 'F');
}else if(avg<70){
    console.log('the grade is'+ 'D');
}else if(avg<80){
    console.log('the grade is'+ 'C');
}else if(avg<90){
    console.log('the grade is'+ 'B');
}else if(avg<100){
    console.log('the grade is'+ 'A');
}