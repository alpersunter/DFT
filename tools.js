let unitCircle = (function (r) {
    noFill();
    strokeWeight(2);
    stroke(0, 200, 50, 200);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
    circle(width / 2, height / 2, 2*r);
});

let euler = (function(theta, radius_one){
    strokeWeight(3);
    stroke(0)
    line(0, 0, radius_one*Math.cos(theta), -radius_one*Math.sin(theta));
    // colormode çakmam lazım
});


let showSamples = (function (sampleArray, k) {
    push();
    let box_width = width * 0.9;
    let box_height = height / 6.0;
    translate((width - box_width) / 2.0, 0);
    fill(0, 100);
    rect(0, 0, box_width, box_height);
    noFill();
    strokeWeight(3);
    stroke(250, 100, 200);
    line(0, box_height / 2, box_width, box_height / 2);

    let N = sampleArray.length;
    let dx = box_width / (N - 1);
    let max = Math.max(...sampleArray);
    let min = Math.min(...sampleArray);
    let normal = 1.0;
    if (Math.abs(max) < Math.abs(min)) {
        normal = Math.abs(min);
    } else {
        normal = Math.abs(max);
    }
    translate(0, box_height / 2);
    let oran = box_height * 0.9 / normal / 2;
    let displacement = 0;
    for (let i = 0; i < N; i++) {
        let sample = sampleArray[i] * oran;
        stroke(255)
        line(0, 0, 0, -sample);
        noStroke();
        fill(0,255,0);
        circle(0, -sample, 10)
        translate(dx, 0);
        displacement += dx;
    }
    strokeWeight(4);
    stroke(255,200,200);
    (function(k,w,h){
        translate(-displacement,0);
        let loc = 0;
        let increment = w/k;
        while (loc < w){
            loc += increment;
            line(0, -box_height/2, 0, box_height/2);
            translate(increment, 0);
        }
    })(k, box_width, box_height);
    pop();
});


let showFreqs = (function (sampleArray) {
    push();
    let box_width = width * 0.9;
    let box_height = height / 6.0;
    translate(0, height*0.8);
    translate((width - box_width) / 2.0, 0);
    fill(0, 100);
    rect(0, 0, box_width, box_height);
    noFill();
    strokeWeight(3);
    stroke(250, 100, 200);
    line(0, box_height / 2, box_width, box_height / 2);

    let N = sampleArray.length;
    let dx = box_width / (N - 1);
    let max = Math.max(...sampleArray);
    let min = Math.min(...sampleArray);
    let normal = 1.0;
    if (Math.abs(max) < Math.abs(min)) {
        normal = Math.abs(min);
    } else {
        normal = Math.abs(max);
    }
    translate(0, box_height / 2);
    let oran = box_height * 0.9 / normal / 2;
    let displacement = 0;
    for (let i = 0; i < N; i++) {
        let sample = sampleArray[i] * oran;
        stroke(255)
        line(0, 0, 0, -sample);
        noStroke();
        fill(255,0,0);
        circle(0, -sample, 10)
        translate(dx, 0);
        displacement += dx;
    }
    pop();
});