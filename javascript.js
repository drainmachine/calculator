document.addEventListener('DOMContentLoaded', function() {
    const createGrid = function() {
        const interface = document.querySelector('.interface');
        if (!interface) {
            console.error('No element with class "interface" found.');
            return;
        }
        for (let count = 0; count < 16; count++) {
            const button = document.createElement('button');
            
/*                 button.addEventListener("mouseover", function() {
                button.style.backgroundColor = 'rgb(0, 223, 246)';
            });
             */
            console.log("im in the loop");
            console.log(interface.appendChild(button));
        }
    }
    createGrid();
}); 