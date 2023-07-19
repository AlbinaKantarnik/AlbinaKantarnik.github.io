const codingLanguages = ["HTML", "CSS", "JavaScript"];

const this_page = document.getElementById('this_page');
const and = document.getElementById('and');

if (codingLanguages.length === 0) { // длина массива равна 0
    this_page.textContent = codingLanguages;
} else if (codingLanguages.length === 1) { //содержит только один элемент
    this_page.textContent = codingLanguages[0];
} else {
    this_page.textContent = codingLanguages.slice(0, codingLanguages.length - 1).join(", ") + " and " + codingLanguages[codingLanguages.length - 1]; // Этот срез создает новый массив, исключая последний элемент, а последний массив обозночает последний элемент
}
//Метод slice() возвращает подмассив, содержащий элементы от startIndex до endIndex - 1. Если endIndex не указан, будет выбраны все элементы от startIndex до конца массива.

//Метод join() полезен, когда вам нужно объединить элементы массива в одну строку, чтобы использовать их в выводе, хранении или передаче данных в определенном формате.

