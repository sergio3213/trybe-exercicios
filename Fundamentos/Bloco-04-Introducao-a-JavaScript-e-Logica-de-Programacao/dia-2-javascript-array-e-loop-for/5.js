let array=[1,7,2,5];
let proxN=array[0];

for(let cont=0;cont<=array.length;cont+=1){
    if(array[cont]>=proxN){
        proxN=array[cont];
    }
}

console.log(proxN)