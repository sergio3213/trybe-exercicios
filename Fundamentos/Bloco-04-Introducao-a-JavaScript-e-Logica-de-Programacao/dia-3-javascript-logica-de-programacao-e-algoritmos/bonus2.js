let n=9;
let e_primo=true;
for(cont=2;cont<=n-1;cont+=1){
    
    if(n%cont==0){
        e_primo=false;
        
    }
}

if(e_primo==true){
    console.log("é primo")
}else{
    console.log("Não é primo")
}