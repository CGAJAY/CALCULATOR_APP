let results = 0;
let problem = 0;
let display = document.querySelector(".display");

display.innerHTML = 0;
function calculation(num){
    problem += num;
    display.innerHTML = problem;
};

function getAnswer(){
    answer = eval(problem);
    display.innerHTML = answer
};