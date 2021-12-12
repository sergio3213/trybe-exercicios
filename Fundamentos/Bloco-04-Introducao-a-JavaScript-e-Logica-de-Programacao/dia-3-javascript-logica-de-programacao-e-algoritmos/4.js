
//aqui é a variavel---------------
let n=50;
//-------------------------



let aster="*";
let aster2="* "
let espaco=""
let contlinha=n-2;
let contador=0;
let contador2=0;
let vezes=0;
let contador3=0;


if(n%2==0){
    for(let cont0=0;cont0<n;cont0+=1){
        if(contador3>0){
            aster2=aster2+"* ";
        }
        contador3+=1;

        for(cont2=-n;cont2<4-vezes;cont2+=1){
            
            espaco=espaco+" ";

        }
        vezes+=1;
        console.log(espaco+aster2);
        espaco='';
        }  
}


else{
    for(let cont=1;cont<=n;cont+=2){
        
        if(contador2>=1){
        
            aster=aster+"**";
            contlinha+=1;
        
        }
        contador2+=1;
        
        for(let cont2=-n;cont2<=3-contador;cont2+=1){
            
            espaco=espaco+' '; 

        }
        
        cont2=n-1;
        console.log(espaco+aster);
        espaco='';
        contador+=1;

    }
}
