class Bubble {
      //Div
         div:HTMLElement;      
    constructor() {
       let b = document.createElement("bubble");
        document.body.appendChild(b);

        let startx:number = Math.random() * window.innerWidth;
        b.style.left = startx + "px";
    }
}