function recebe_array(array){
    let indice_maior_numero=0;//variável que armazena o indice do maior número
    let armazena_maior_numero;
    for(cont1=0;cont1<array.length;cont1+=1){
        if(array[cont1]>array[cont1+1]){
            array[cont1+1]=array[cont1]
              
        }else{
                
        }
        
        armazena_maior_numero=array[cont1]
    }
    
    
    for(cont2=0;cont2<array.length;cont2+=1){
        if(armazena_maior_numero==array[cont2]){
            indice_maior_numero=cont2;
            break;
        }
        
        
    }
    return indice_maior_numero
}

console.log(recebe_array([180,190,120,140]))