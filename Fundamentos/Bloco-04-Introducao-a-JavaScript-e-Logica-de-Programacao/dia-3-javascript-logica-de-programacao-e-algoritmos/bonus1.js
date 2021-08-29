
let n=21;


//apresentaçao para numeros impares


let aster="";
let espacos_anterior="";//a quantidade de espaços antes do asterisco
let espacos_posterior=" ";//a quantidade de espaços entre dois asteriscos;
let espacos_primeira_linha="";// variável de caracteres da primeira linha
let ultima_linha="";//variável de caracteres da ultima linha
let quantidade_de_espacos=((n-1)/2)-1;//Variavel que fica no for depois do "<" para dizer quantas vezes vai adicionar espaço na variavel espaco_anterior
let qtd_fabricacao_espacos_anterior=0;//variavel que controla a quantidade de espaços anteriores que terá cada linha
let espacos_ultima_linha="";//variavel que aramazena espaços da ultima linha
let cont_espaco_ut=0;
let contador_de_espaco_da_piramide_toda;//conta os espaços da ultima linha

//aqui vou fabricar os espaços da primeira linha




for(cont=n;cont>5;cont-=2){//aqui é a fabricação de espaços da piramide total
    espacos_primeira_linha+=" ";
}

for(let cont_espaco_primeira_linha=((n/2)-1);cont_espaco_primeira_linha>0;cont_espaco_primeira_linha-=1){//aqui é a fabricação de espaços de acordo com (n-1)/2
        espacos_primeira_linha+=" ";
        contador_de_espaco_da_piramide_toda+=1;
        }

console.log(espacos_primeira_linha+"*")

//aqui vou fabricar os asteriscos da ultima linha
for(let cont_ut=0;cont_ut<n;cont_ut+=1){
    ultima_linha=ultima_linha+"*";
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
    
console.log(espacos_ultima_linha+ultima_linha);

