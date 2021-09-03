function recebe_array(array){
    let indice_menor_numero=0;//variável que armazena o indice do maior número
    let armazena_menor_numero;
    for(cont1=0;cont1<array.length;cont1+=1){
        if(array[cont1]<array[cont1+1]){
            array[cont1+1]=array[cont1]
              
        }else{
                
        }
        
        armazena_menor_numero=array[cont1]
    }
    
    
    for(cont2=0;cont2<array.length;cont2+=1){
        if(armazena_menor_numero==array[cont2]){
            indice_menor_numero=cont2;


            break;
        }
        
        
    }
    return indice_menor_numero
}

console.log(recebe_array([1,190,0,140]))