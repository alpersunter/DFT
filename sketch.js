let c;
let array = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  let uzunluk = 100;
  for(let i = 0; i < uzunluk; i++){
    array.push(Math.cos(TWO_PI*i/20));
  }
  c = new DFTCanavari(array, height/3);
}
let freq = [];
function draw() {
  if(!mouseIsPressed){
  background(255);
  unitCircle(height / 3);
  showSamples(array, c.k);
  showFreqs(freq);
  translate(width/2, height/2);
  //euler(QUARTER_PI,width/43);
  c.enIleri();
  c.goster(); 
  c.k += inc;
  freq.push(c.sum.mag());
  
  // Yalnızca tamsayılarda bakmak daha etkili
  // ayrıca setup'a ekle: "frameRate(1)"
  // if(c.sum.mag()>1){
  //   console.log(c.k + " - " + c.sum.mag());
  // }
  // 
  // freq.push(c.sum.mag());
  // c.k += inc;
}}
let inc = 0.01;
// function mouseWheel(event) {
//   if(event.delta>0){
//     inc *= 2;
//   }else{
//     inc *= 0.5;
//   }
//   return false;
// }
