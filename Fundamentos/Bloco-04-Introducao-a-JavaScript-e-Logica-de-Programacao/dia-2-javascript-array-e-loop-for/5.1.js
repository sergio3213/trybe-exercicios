arr = [2,3,9,25,16];
resultado=0;
let cont_limit=0;

    for(cont1=0;cont1<=4;cont1+=1){
        
        for(cont2=0;cont2<=4;cont2+=1){
            
            
            if (arr[cont1]>=arr[cont2]){
                cont_limit+=1;
                resultado=arr[cont1];
                if (cont_limit==(arr.length*arr.length)){
                    break;
                }
            }
            
            else
            {   
                cont1=cont2;
                cont2=0;
                cont_limit+=1;
                resultado=arr[cont1];
                if (cont_limit==(arr.length*arr.length)){
                    break;
                }
            }
            
        
        }    
        
        if((cont_limit)==(arr.length*arr.length)){
            break;

        }
    }

    console.log(resultado);



