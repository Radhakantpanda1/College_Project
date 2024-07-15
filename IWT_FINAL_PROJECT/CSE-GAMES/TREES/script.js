const nodes = [1, 2, 3, 4, 5, 6, 7]; // Example nodes for the game

let currentTraversal = [];
let currentStep = 0;
let correctOrder = [];

function generateOrder() {
    // Generate a random order for the nodes
    correctOrder = shuffle([...nodes]);
}

function renderNodes() {
    const nodeContainer = document.getElementById('nodeContainer');
    nodeContainer.innerHTML = '';

    correctOrder.forEach(node => {
        const nodeElement = document.createElement('div');
        nodeElement.classList.add('node');
        nodeElement.textContent = node;
        nodeElement.addEventListener('click', () => selectNode(node));
        nodeContainer.appendChild(nodeElement);
    });
}

function shuffle(array) {
    // Function to shuffle array elements
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectNode(node) {
    if (node === correctOrder[currentStep]) {
        currentStep++;
        const selectedNode = document.querySelector(`.node:nth-child(${currentStep})`);
        selectedNode.classList.add('selected');

        if (currentStep === correctOrder.length) {
            setTimeout(() => {
                alert('Congratulations! You completed the traversal!');
                resetGame();
            }, 500);
        }
    } else {
        alert('Oops! Wrong node selected. Try again.');
        resetGame();
    }
}

function resetGame() {
    currentTraversal = [];
    currentStep = 0;
    generateOrder();
    renderNodes();
    document.querySelectorAll('.node').forEach(node => node.classList.remove('selected'));
}

document.addEventListener('DOMContentLoaded', () => {
    generateOrder();
    renderNodes();
});
