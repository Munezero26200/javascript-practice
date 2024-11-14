for(let a=0; a<10; a++){
    for(let b=0; b<10; b++){
        for(let c=0;c<10;c++){
            var pow= Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3);
            var sum= (a*100)+ (b*10)+(c);
            if(pow===sum){
                console.log(pow);
            }
        }
    }
}