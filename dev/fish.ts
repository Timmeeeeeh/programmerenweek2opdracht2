class Fish {
         //Color
         color:number;
         //Position
         x:number;
         y:number;
         //Div
         div:HTMLElement;

    constructor() {
        this.color = Math.random() * 360;
        
        this.div = document.createElement("Fish");
        document.body.appendChild(this.div);

        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        
        this.move(x,y);

        this.div.style.webkitFilter = "hue-rotate("+this.color+"deg)";
        this.div.style.filter = "hue-rotate("+this.color+"deg)";
    }

    move(x:number, y:number){
        this.x = x;
        this.y = y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
 
}