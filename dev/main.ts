/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    constructor() {

        setInterval(this.createElements, 100);
    }


        createElements() {
            let fish : Fish = new Fish();
            let bubble : Bubble = new Bubble();
       
            
        }
    }
} 
]]
// load
window.addEventListener("load", function() {
    new Game();
});