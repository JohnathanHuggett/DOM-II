
// set variables to all blocks 
const block = document.querySelectorAll(".block");


block.forEach((elements) => {
    elements.addEventListener("click", () => {
        const blocks = elements.parentNode; // resign the parent of block which is "blocks"
        //console.log(blocks); // test to see if parent class is printed
        blocks.removeChild(elements); // removes 
        blocks.prepend(elements); // parent.prepend adds element to top of HTML list 
    });
});

   


