 var search = document.querySelector(".search");
 var form = document.querySelector(".form");

 var storageadults = localStorage.getItem("adults");
 var storagechildren = localStorage.getItem("children");

 var indexform = document.querySelector(".index-form");

 var from = indexform.querySelector("[id=from]");
 var to = indexform.querySelector("[id=to]");
 var adults = indexform.querySelector("[id=adults]");
 var children = indexform.querySelector("[id=children]");

/*--------- При рабочем js при загрузке страницы скроет форму ----------*/
 form.classList.add("invisible");

/*---- Если что-то есть в storageadults, то запишем это в соответствующие поля*/
 if(storageadults) {
    adults.value = storageadults; console.log("adults");
 }
 if(storagechildren) {
    children.value = storagechildren; console.log("children");
 }

 /*----------появление/исчезновение формы по клику на кнопку-------------*/
 search.addEventListener("click", function (evt) {
   evt.preventDefault();

   if(document.querySelector(".invisible")) {
     form.classList.remove("invisible");
     form.classList.add("visible");
   }
  else {
    form.classList.remove("visible");
    form.classList.add("invisible");
  }});

var find = document.querySelector(".index-form");

/*----------Проверка на зоплненность всех полей формы--------------*/
find.addEventListener("submit", function (evt) {
 if(!from.value || !to.value || !adults.value || !children.value ) {
  evt.preventDefault();
  indexform.classList.remove("form-error");
  indexform.offsetWidth = indexform.offsetWidth;
  indexform.classList.add("form-error");
  console.log("here1");
 }
 else {
  localStorage.setItem("adults", adults.value);
  localStorage.setItem("children", children.value);
  console.log("here");
}});
