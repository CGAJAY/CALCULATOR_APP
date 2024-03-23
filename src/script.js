let results;
let problem = '';
let display = document.querySelector(".display");

display.innerHTML = 0;
function calculation(num){
    problem += num;
    display.innerHTML = problem;
};

function getAnswer(){
    answer = eval(problem);
    display.innerHTML = answer;
    problem = answer;
};

function reset() {
    results = 0;
    problem = ''; 
    display.innerHTML = 0;
};