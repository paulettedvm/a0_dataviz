let sec_total = 60, 
    min_total = 60, 
    hr_total = 24; 

let xy_hr = [25, 25]

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  
  let hr_col = color(252, 147, 26);  
  let xy_min = draw_circles(hr_total, hour(), hr_col, xy_hr[0], xy_hr[1]);
  
  let min_col = color(24, 157, 194);
  let xy_sec = draw_circles(min_total, minute(), min_col, xy_min[0], xy_min[1]) 
  
 let sec_col = color(252, 232, 26); 
 draw_circles(sec_total, second(), sec_col, xy_sec[0], xy_sec[1]);

    console.log(hour(), minute(), second()); 
}

function draw_circles(total, number, color, x, y) {
  for (let i = 0; i < total; i++) {
    if (i <= number) {
      //console.log("here")
      fill(color); 
    } else {
      fill(255);
    }
  
    if (x <= width && y <= height) {
      ellipse(x, y, 25, 25); 
      x += 50; 
    } else if (x > width && y <= height) {
      x = 25;
      y += 50; 
    }
    
  }
  
  return [x, y];
}