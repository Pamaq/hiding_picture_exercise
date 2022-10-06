const arrowBtn = document.querySelector(".arrow"); //wybór buttona od strzalki
const arrowIcon = document.querySelector(".fas"); //wybór samej strzałki
const img = document.querySelector(".item1"); //wybór obrazka
const showImg = () => {
	//funkcja strzałkowa
	img.classList.toggle("hide"); //toggle chowający obrazek
	if (img.classList.contains("hide")) {
		arrowIcon.style.transform = "rotate(180deg)";
	} else {
		arrowIcon.style.transform = "rotate(0deg)";
	} //jeśli lista klas zawiera hide obróć strzałkę, jeśli nie to nie
};
arrowBtn.addEventListener("click", showImg); //dodanie eventListenera na klik
