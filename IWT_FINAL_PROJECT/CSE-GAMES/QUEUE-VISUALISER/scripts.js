let queue = [];

function renderQueue() {
    const queueContainer = document.getElementById('queueContainer');
    queueContainer.innerHTML = '';

    queue.forEach((element, index) => {
        const queueElement = document.createElement('div');
        queueElement.className = 'queue-element';
        queueElement.textContent = element;
        queueContainer.appendChild(queueElement);
    });
}

function enqueue() {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue === '') return;

    queue.push(inputValue);
    document.getElementById('inputValue').value = '';
    renderQueue();
}

function dequeue() {
    if (queue.length === 0) return;

    queue.shift();
    renderQueue();
}

document.addEventListener('DOMContentLoaded', renderQueue);
