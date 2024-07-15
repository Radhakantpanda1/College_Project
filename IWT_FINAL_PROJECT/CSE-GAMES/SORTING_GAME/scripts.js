let array = [];
let currentStep = 0;
let isSorting = false;

function resetArray() {
    array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    currentStep = 0;
    isSorting = false;
    renderArray();
}

function renderArray() {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.innerHTML = '';

    array.forEach((value, index) => {
        const arrayElement = document.createElement('div');
        arrayElement.className = 'array-element';
        arrayElement.textContent = value;
        arrayElement.onclick = () => selectElement(index);
        arrayContainer.appendChild(arrayElement);
    });
}

function selectElement(index) {
    if (!isSorting) return;

    const elements = document.getElementsByClassName('array-element');
    elements[index].classList.add('selected');

    setTimeout(() => {
        performSortStep(index);
    }, 500);
}

function performSortStep(index) {
    const elements = document.getElementsByClassName('array-element');

    if (currentStep < array.length - 1) {
        let minIndex = currentStep;
        for (let i = currentStep + 1; i < array.length; i++) {
            if (array[i] < array[minIndex]) {
                minIndex = i;
            }
        }

        if (index === minIndex) {
            [array[currentStep], array[minIndex]] = [array[minIndex], array[currentStep]];
            elements[minIndex].classList.remove('selected');
            elements[currentStep].classList.add('sorted');
            currentStep++;
        } else {
            elements[index].classList.remove('selected');
            return;
        }

        if (currentStep < array.length - 1) {
            isSorting = true;
        } else {
            isSorting = false;
        }

        renderArray();
    }
}

function startSort() {
    if (isSorting) return;
    isSorting = true;
    currentStep = 0;
    renderArray();
}

document.addEventListener('DOMContentLoaded', resetArray);
