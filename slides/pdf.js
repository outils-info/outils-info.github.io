var elements = document.querySelectorAll(".slide_title");

window.aa = elements[0];
console.log(elements);

elements.forEach(function(element) {
    element.dataset.backgroundColor = "black";
});