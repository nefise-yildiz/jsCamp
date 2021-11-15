//İstediğimiz kadar parametre girerek her girdiğimiz parametre için asal olup olmadığını kontrol etmek
//Ödev-1
let asalmi = function (...numbers) {
    for(let i=2;i<=numbers.length;i++){
        let sayac=0;
        for(let j=1;j<=i;j++){
            if(i%j == 0){
                sayac+=1;  
            }    
        }
        if(sayac == 2){
            console.log("Bu Sayı(lar) Asal Sayıdır." + i)
        } 
    }
    
}
asalmi(2,3,5,6,12)