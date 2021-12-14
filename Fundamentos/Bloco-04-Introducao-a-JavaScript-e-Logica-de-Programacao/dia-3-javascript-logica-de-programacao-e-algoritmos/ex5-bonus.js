let n=30;




if(n%2==0){//desenvolvimento para numeros pares
    //variáveis
    let espacos_primeira_linha="";//variável que armazena os espaços da primeira linha
    let espacos_anterior_linhas_meio="";//variavel que armazena os espaços anterior da primeira linha
    let espacos_posterior_linhas_meio="   ";//variável que armazena os espaços entre os asteriscos
    let qtd_fabricacao_espacos_anterior="";
    let asteriscos_ultima_linha="";//armazena os asteriscos da ultima linha
    let qtd_de_linhas_posterior_meio=0;//Aqui controle a quantidade de espaços das linhas do meio e acordo com a posição da linha(segunda,terceira,quarta,etc...)
    let contador_de_linhas_espaços_anterior=0;//aqui vai controlar a quantidade de espaços anterior tem em cada linha(para as linhas do meio)
    let espacos_anterior_ultima_linha=""; //aqui armazena espaços anteriores da ultima linha

    //aqui vou fabricar e exibir os caracteres da primeira linha

    //aqui vou fabricar os espaços da primeira linha
    for(cont_espaco_primeira_linha=0;cont_espaco_primeira_linha<n+2;cont_espaco_primeira_linha+=1){
        espacos_primeira_linha+=" ";
    }
    console.log(espacos_primeira_linha+"*");//exibindo primeira linha


    //aqui vou fabricar e exibir os caracteres das linhas do meio

    //aqui vou fabricar espaços das linhas do meio
    for(let contador_apresentacao_linhas_meio=0;contador_apresentacao_linhas_meio<(n/2)-1;contador_apresentacao_linhas_meio+=1){
        

        for(contador_espacos_anteriores_meio=n/2+n/2;contador_espacos_anteriores_meio>0-contador_de_linhas_espaços_anterior;contador_espacos_anteriores_meio-=1){
            espacos_anterior_linhas_meio+=" ";
            
        }

        contador_de_linhas_espaços_anterior-=2;//aqui vai colocar -1 espaço anterior para cada linha

        qtd_fabricacao_espacos_anterior+=2;
         
        qtd_de_linhas_posterior_meio+=1;

        console.log(espacos_anterior_linhas_meio+"*"+espacos_posterior_linhas_meio+"*");
        
        
        
        ;
        espacos_anterior_linhas_meio="";//aqui zera a variável
        
        
        espacos_posterior_linhas_meio+="    ";
        

       
        
    }
    

    //aqui vou fabricar os caracteres da ultima linha

    for(cont_asteriscos_ultima_linha=0;cont_asteriscos_ultima_linha<=n;cont_asteriscos_ultima_linha+=1){
        asteriscos_ultima_linha+="* "       
    }

    for(cont_espacos_anterior_ultima_linha=0;cont_espacos_anterior_ultima_linha<2;cont_espacos_anterior_ultima_linha+=1){
        espacos_anterior_ultima_linha+=" ";
    }
    console.log(espacos_anterior_ultima_linha+asteriscos_ultima_linha);

}
























else{//desenvolvimento para numeros impares

//Váriáveis
let espacos_anterior="";//a quantidade de espaços antes do asterisco
let espacos_posterior=" ";//a quantidade de espaços entre dois asteriscos;
let espacos_primeira_linha="";// variável de caracteres da primeira linha
let aster_ultima_linha="";//variável de asteriscos
let qtd_fabricacao_espacos_anterior=0;//variavel que controla a quantidade de espaços anteriores que terá cada linha
let espacos_ultima_linha="";//variavel que aramazena espaços da ultima linha
let cont_espaco_ut=0;
let contador_de_espaco_da_piramide_toda;//conta os espaços da ultima linha



//aqui vou fabricar os espaços da primeira linha


for(cont=n;cont>5;cont-=2){//aqui é a fabricação de espaços da primeira linha em relação a piramide total
    espacos_primeira_linha+=" ";
}

for(let cont_espaco_primeira_linha=((n/2)-1);cont_espaco_primeira_linha>0;cont_espaco_primeira_linha-=1){//aqui é a fabricação de espaços da primeira linha de acordo com (n-1)/2
        espacos_primeira_linha+=" ";
        contador_de_espaco_da_piramide_toda+=1;
        }

console.log(espacos_primeira_linha+"*")

//aqui vou fabricar os asteriscos da ultima linha
for(let cont_ut=0;cont_ut<n;cont_ut+=1){
    aster_ultima_linha=aster_ultima_linha+"*";
}


//aqui vou fabricar e exibir os caracteres das linhas do meio e apresentar cada linha
for(let cont = 3; cont < n; cont += 2){
    
    //aqui vou fabricar os caracteres das linhas do meio
       
    
        //fabricando os espaços_anteriores das linhas do meio
        for(cont1=4;cont1<n-qtd_fabricacao_espacos_anterior;cont1++){
            espacos_anterior=espacos_anterior+" ";
        }      

        qtd_fabricacao_espacos_anterior+=1;//aqui estou adicionando mais um nessa variável para que tenha menos 1 espaço na proxima linha      
        cont_espaco_ut=qtd_fabricacao_espacos_anterior-1;
        console.log(espacos_anterior+"*"+espacos_posterior+"*");//aqui estou apresentando todos os caracteres das linhas do meios
        espacos_anterior="";//aqui estou zerando os espaços anteriores da linha do meio para fabricar a próxima linha
        espacos_posterior+="  ";//aqui estou adicionando espaços no espaço posterior
        
    }

    for(cont_espaco_ultima_linha=0;cont_espaco_ultima_linha<cont_espaco_ut;cont_espaco_ultima_linha+=1){
        espacos_ultima_linha=espacos_ultima_linha+" ";//aqui vou fabricar os espaços da ultima linha
    }
    
console.log(espacos_ultima_linha+aster_ultima_linha);

}
