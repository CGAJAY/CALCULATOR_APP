const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-js');
const deleteBtn = document.getElementById('delete');
let currentInput = '';
display.textContent = '0';

buttons.forEach(button => {
	button.addEventListener('click', function() {
		
		const value = button.textContent;

		if (value === 'C') {
			currentInput = '';
			display.textContent = '0';
			return;
		}

		if (value === '%') {
			try {
				currentInput = (parseFloat(currentInput) / 100).toString();
				display.value = currentInput;
			} catch (e) {
				display.value = 'Error';
			}
			return;
		}

		if (value === '=') {
			try {
				display.textContent = eval(currentInput);
				currentInput = display.textContent;
				// value = currentInput;
			} catch (e) {
				display.textContent = 'Error';
			}
			return;
		}

		currentInput += value;
		display.textContent = currentInput;
	});
});

deleteBtn.addEventListener('click', () => {
	if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
		currentInput = display.textContent;
	} else {
		display.textContent = '0';
		currentInput = display.textContent;
	}
});
