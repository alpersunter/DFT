class DFTCanavari{
    constructor(sampleArray, unitPix){
        // x[n] ile genişletilmiş (artık birim olmayan) birim vektörlerin deposu
        this.noktalar = [];
        // ayrık verinin okunacağı ve fourier dönüşümünün uygulanacağı dizi
        this.sampleArray = sampleArray;
        // büyük N harfi ile gösterilen, toplam örnek sayısına denk düşen sayı
        this.N = sampleArray.length
        // bütün örnekler, eşit aralıklarla çember etrafına dizildiğinde,
        // çember etrafında kaç tur dönülecek k sayısına bağlıdır
        this.k = 1;
        // noktalar[] dizisinde nokta eklendikçe bu vektörün ucuna da eklenir.
        // orijinden net sapmayı gösterir.
        this.sum = createVector(0, 0);
        // şu anda kaçıncı örneğin okunduğunu gösterir
        this.n = 0;
        this.unitPix = unitPix;
    }
    enIleri(){
        this.noktalar = [];
        this.sum = createVector(0,0);
        this.n = 0;
        for(let i = 0; i < this.N; i++){
            this.ileri();
        }
    }
    ileri(){
        if(this.n <= this.N){
            let theta = TWO_PI*this.k*(this.n/this.N);
            let sample = this.sampleArray[this.n];
            let yeniNokta = createVector(Math.cos(theta), -Math.sin(theta)).mult(sample*this.unitPix);
            this.noktalar.push(yeniNokta);
            this.sum.add(yeniNokta);
            this.n++;
        }
    }
    // Orijine translate edilmiş olduğunu varsayar
    goster(){
        for(let i = 0; i < this.noktalar.length; i++){
            let nokta = this.noktalar[i];
            // Noktayı transparan doğru ile çiz, ucuna top ekle
            strokeWeight(1.5);
            stroke(0,150);
            line(0,0, nokta.x, -nokta.y);
            circle(nokta.x, -nokta.y, 6);
        }
        stroke(255,0,0);
        strokeWeight(3);
        fill(255,0,0);
        line(0,0, this.sum.x, -this.sum.y);
        circle(this.sum.x, -this.sum.y, 20);
    }
}