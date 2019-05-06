let c;
let array = [];
function setup() {
  createCanvas(900, 900);
  let uzunluk = 100;
  for(let i = 0; i < uzunluk; i++){
    array.push(Math.sin(TWO_PI*i/20));
  }
  c = new DFTCanavari(array, width/5);
}
let freq = [];
function draw() {
  if(!mouseIsPressed){
  background(255);
  unitCircle(width / 3);
  showSamples(array, c.k);
  showFreqs(freq);
  translate(width/2, height/2);
  //euler(QUARTER_PI,width/43);
  c.enIleri();
  c.goster(); 
  c.k += 0.005;
  freq.push(c.sum.mag());
}}
