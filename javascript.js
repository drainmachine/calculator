document.addEventListener('DOMContentLoaded', function() {
    
    const createUI = function() {
        const container = document.querySelector('.container');

        const btnClasses = [
            "number", "number", "number", "operator",
            "number", "number", "number", "operator",
            "number", "number", "number", "evaluator",
            "operator", "default", "operator", "evaluator"
        ];

        const btnContent = [
            "1", "2", "3", "/",
            "4", "5", "6", "x",
            "7", "8", "9", "p",
            "+", "0", "-", "=" 
        ];

// dynamically creates 16 buttons, each with a corresponding ID. 
// classes and text content are determined with the above arrays btnClasses and btn Content

        for (let i = 0; i < 16; i++) {
            const btn = document.createElement('button');
            btn.id = "button" + i;
            btn.className = btnClasses[i];
            btn.textContent = btnContent[i];
            container.appendChild(btn);


            btn.addEventListener("click", function() {
                btn.style.backgroundColor = 'rgb(0, 223, 246)';
            });


        }
    };

    createUI();
});