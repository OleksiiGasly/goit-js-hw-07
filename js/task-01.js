const listEl = document.querySelector('ul#categories');
console.log(`В списке ${listEl.children.length} категории.`);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.lastElementChild.children.length}`);
});

// 6 и 7 строки - можно каждую отдельно вывести с помощью 'console.log'. Как правильнее?