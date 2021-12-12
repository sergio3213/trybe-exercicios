n=5;

aster="";
espaco="";
let c=0;
for(let cont1=1;cont1<=n;cont1+=1){
    
        for(let cont2=0;cont2<n-1-c;cont2+=1){
            espaco=espaco+" ";
        
        }
        

    c+=1;
    aster+="*";
    console.log(espaco+aster)
    espaco="";
    
}

 