// Ödev-2
// İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.

let arkadas = function (a,b){
    let toplam1 = 0
    let toplam2 = 0
    for(let i=1;i<a;i++){
        if(a%i == 0){
            toplam1+=i
        }
    }
    for(let j=1;j<b;j++){
        if(b%j == 0){
            toplam2+=j
        }
    }
    if(toplam1 == b && toplam2 == a){
        console.log("Arkadaş Sayılardır." + a,b)
    }
    else{
        console.log("Arkadaş Sayılar Değildir." + a,b)
    }
}
arkadas(220,285)