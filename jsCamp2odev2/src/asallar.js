// Ödev-4
//1000 e kadar olan asallar

for(let i=2;i<=1000;i++){
    let sayac=0;
    for(let j=1;j<=i;j++){
        if(i%j == 0){
            sayac+=1;  
        }
           
    }
    if(sayac == 2){
        console.log(i)
    } 
}