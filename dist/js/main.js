var Bubble = (function () {
    function Bubble() {
        var b = document.createElement("bubble");
        document.body.appendChild(b);
        var startx = Math.random() * window.innerWidth;
        b.style.left = startx + "px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        this.color = Math.random() * 360;
        this.div = document.createElement("Fish");
        document.body.appendChild(this.div);
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        this.move(x, y);
        this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.div.style.filter = "hue-rotate(" + this.color + "deg)";
    }
    Fish.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        setInterval(this.createElements, 100);
    }
    Game.prototype.createElements = function () {
        var fish = new Fish();
        var bubble = new Bubble();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map