function Rectangle(x,y,width,height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color =color;
    this.render = function () {
        let myCanvas = document.getElementById("myCanvas");
        let ctx = myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let rectangle = new Rectangle(10,10,200,100,"#000000")
