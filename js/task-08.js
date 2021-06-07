const refs = {
    renderEl: document.querySelector('[data-action="render"]'),
    destroyEl: document.querySelector('[data-action="destroy"]'),
    inputEl: document.querySelector('input'),
    controlsEl: document.querySelector('#controls'),
    boxesEl: document.querySelector('#boxes'),
}

refs.inputEl.addEventListener('input', () => refs.inputEl.value);
refs.renderEl.addEventListener('click', createMarkup);
refs.destroyEl.addEventListener('click', destroyBoxes);

function createMarkup() {
    return createBoxes(refs.inputEl.value);
}

function createBoxes(x) {
    const boxItem = document.createElement('div');

    let boxSize = 30;

    for (let i = 0; i < x; i += 1) {
        const element = document.createElement('div');

        boxSize += 10;
        
        let rColor = Math.random() * (255 - 0) + 1;
        let gColor = Math.random() * (255 - 0) + 1;
        let bColor = Math.random() * (255 - 0) + 1;

        element.style.width = `${boxSize}px`;
        element.style.height = `${boxSize}px`;
        element.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;

        boxItem.append(element);
    }

    return refs.boxesEl.append(...boxItem.children);
}

function destroyBoxes() {
    refs.boxesEl.innerHTML = '';
}