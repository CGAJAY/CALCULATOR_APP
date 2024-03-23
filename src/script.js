let results;
let problem = '';
let display = document.querySelector(".display");
display.innerHTML = 0;

// This function only takes the calculation to be done
function calculation(num){
    problem += num;
    display.innerHTML = problem;
};

// This function takes the calculation and evaluates it
function getAnswer(){
    answer = eval(problem);
    display.innerHTML = answer;
    problem = answer;
};

// This function resets all the values back to zero
function reset() {
    results = 0;
    problem = ''; 
    display.innerHTML = 0;
};