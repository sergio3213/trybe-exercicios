let array=[100,23,16,50];
let proxN=array[0];
for(let cont=0;cont<array.length;cont+=1){
    if(array[cont]>=proxN){
        proxN=array[cont];
    }
 }

console.log(proxN)