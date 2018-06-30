var button = document.querySelector (".index-search-btn");
var form = document.querySelector (".hotels-searching");

button.addEventListener("click", function(evt) {
evt.preventDefault();
form.classList.toggle("form-on");
});
