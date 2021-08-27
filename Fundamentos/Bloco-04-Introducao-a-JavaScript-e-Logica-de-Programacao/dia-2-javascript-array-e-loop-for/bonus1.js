let number=[5,4,9,2,1];

let ut=0;
for(let cont0=0;cont0<number.length-ut+3;cont0+=1){
       
    for(let cont=0;cont!=number.length-1;cont+=1){
        if(number[cont]>number[cont+1]){
            
            aux=number[cont+1];
            number[cont+1]=number[cont];
            number[cont]=aux;
                
            console.log(number);         
        }

            
    }
    
    ut+=1;

    console.log(); 

}
