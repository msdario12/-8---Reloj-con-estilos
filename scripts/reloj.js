const intl = Intl.DateTimeFormat("SP-ar", {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
});

const intervalIdClock = setInterval(() => {
	const date = new Date();
	const container = document.getElementById("clock");
	container.innerHTML = intl.format(date);
}, 1000);
// Array con palabras de busqueda que definen los fondos de los distintos divs
const query = [
	"Beach",
	"Mountain",
	"Desert",
	"Forest",
	"Jungle",
	"Waterfall",
	"Skyline",
	"Sunrise",
	"Sunset",
	"Canyon",
	"Volcano",
	"Island",
	"Glacier",
	"Lighthouse",
	"River",
	"Ocean",
	"Lake",
	"Cityscape",
	"Fields",
	`Meadow`,
];
// Seleccionamos todos los divs con la clase de ".img"
const arrayDivs = document.querySelectorAll(".img");
// A cada div le asignamos una imagen random del array de querys y le asignamos una clase que le pone un z-index negativo
arrayDivs.forEach((div) => {
	let index = Math.floor(Math.random() * query.length);
	div.classList.add("bg");
	div.style.backgroundImage = `url(https://source.unsplash.com/random/1920*1080/?${query[index]})`;
});
// Asignamos una clase donde aumentamos el z-index a un div elegido tambien de forma aleatoria, para que se muestre por encima de los demas
const intervalChangeBg = setInterval(() => {
	let index = Math.floor(Math.random() * arrayDivs.length);
	console.log(index);
	arrayDivs[index].classList.add("show");
	// Con este interval eliminamos esa clase de manera que se oculte y otro div pueda mostrarse
	const removeClassInterval = setInterval(() => {
		arrayDivs[index].classList.remove("show");
	}, 7000);
}, 6000);
