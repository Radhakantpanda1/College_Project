let stack = [];

function renderStack() {
    const stackContainer = document.getElementById('stackContainer');
    stackContainer.innerHTML = '';

    stack.forEach((element, index) => {
        const stackElement = document.createElement('div');
        stackElement.className = 'stack-element';
        stackElement.textContent = element;
        stackContainer.appendChild(stackElement);
    });
}

function push() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue === '') return;

    stack.push(inputValue);
    document.getElementById('inputValue').value = '';
    renderStack();
}

function pop() {
    if (stack.length === 0) return;

    stack.pop();
    renderStack();
}

document.addEventListener('DOMContentLoaded', renderStack);
