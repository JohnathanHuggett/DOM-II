/***************ROCKET PROBLEM BELOW***************/
// set variables to all blocks 
//const block = document.querySelectorAll(".block");


// block.forEach((elements) => {
//     elements.addEventListener("click", () => {
//         //const blocks = elements.parentNode; // resign the parent of block which is "blocks"
//         console.log(blocks); // test to see if parent class is printed
//         // blocks.removeChild(elements); // removes 
//         // blocks.prepend(elements); // parent.prepend adds element to top of HTML list 
//     });
// });

/***************TRAVELERS PROBLEM BELOW***************/
//set variables to all blocks 
//set variables to all blocks 

  //set variables to all blocks 
  let blocks = document.getElementsByClassName("block");
  let pos = 10;
  
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mousedown", () => { //shift block clicked block  
        function myMove () { 
            const id = setInterval(frame, 10);
            function frame() {
                if (pos === 500) {
                    clearInterval(blocks[i]);
                } else {
                        pos++;
                        blocks[i].style.marginLeft = pos + 'px';
                }
            }
        } myMove();
    });
    window.addEventListener("mouseup", () => { //unshift block to starting point on mouseup anywhere in window
        function moveBack () {
            const id = setInterval(frameBack, 10);
            function frameBack() {
                if (pos < 10) { 
                    clearInterval(blocks[i]);
                } else {
                    pos--;
                    blocks.style.marginLeft = pos + 'px';
                }
            }
        } moveBack();
    });
};




