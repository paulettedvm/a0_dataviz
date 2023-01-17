let x = 25, y = 25; 

let sec_total = 60, 
    min_total = 60, 
    hr_total = 24; 

function setup() { 
  createCanvas(800, 600);
}

function draw() {
  background(0); 
  
  let hr_col = color(252, 147, 26);  
  xy_min = draw_circles(hr_total, hour(), hr_col, 25, 25);

  let min_col = color(24, 157, 194);
  let xy_sec = draw_circles(min_total, minute(), min_col, xy_min[0], xy_min[1]); 

  let sec_col = color(252, 232, 26); 
  draw_circles(sec_total, second(), sec_col, xy_sec[0], xy_sec[1]); 
  
}

function draw_circles(total, curr, color, x, y) {
  for(let i = 1; i <= total; i++) {

    if (i <= curr) {
      fill(color);
    } else { 
      fill(255);
    }

    // create elipse
    ellipse(x, y, 25, 25);  

    // adjust the coordinates for the next elipse
    if (x < 775) { 
      // 775 is the max possible dimension the ellipse can be
      x += 50;
    } else { 
      // so if the x is > or = to 755 that means that the next ellipse needs to be in a new row
      x = 25; 
      y += 50;
    }
  }

  return [x, y];
}