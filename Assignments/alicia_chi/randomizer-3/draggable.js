class Draggable {
    constructor(x, y, w, h) {
      this.dragging = false; // Is the object being dragged
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  
    over() {
      // Is mouse over object
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.rollover = true;
      } else {
        this.rollover = false;
      }
    }
  
    update() {
      // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
  
    show() {
      noStroke();
      // Different fill based on state
      if (this.dragging) {
        fill('#fff');
      } else if (this.rollover) {
        fill('#fff');
      } else {
        fill('#fff');
      }
      rect(this.x, this.y, this.w, this.h);
    }
  
    pressed() {
      // Did I click on the rectangle?
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    }
  
    released() {
      // Quit dragging
      this.dragging = false;
    }
  }