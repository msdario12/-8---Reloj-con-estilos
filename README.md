# 8 - Reloj-con-estilos

## Link en netlify

[Link a version en vivo reloj](https://relojchill.netlify.app/)

## Imagen

![image](https://user-images.githubusercontent.com/31823835/234052513-ad6bde77-0fd2-4fff-a189-214edcdc699b.png)

## Consigna

Teniendo en cuenta el ejercicio de reloj realizado en la clase #24, se propone que desarrollen un reloj que:

- Muestre solamente hora, minutos y segundos.
- Deben utilizar Intl como formateador de hora
- El codigo js debe ser correcto y funcionar perfecto.
- Apliquen estilos para que el mismo tenga un diseño.
- Pueden utilizar efectos, animaciones, etc.
- Subiremos todos al Slack y sometemos a votación de la comisión en busca del mejor diseño.

## Explicación

Se esta usando la API de unplash para obtener imagenes en linea en funcion de un parametro de busqueda
``https://source.unsplash.com/random/1920*1080/?${query[index]}``, entonces cada vez que se actualiza la pagina se busca nuevas imagenes (o aveces la misma) en funcion de las query's.

Donde ``query`` es un array que contiene 20 strings que son distintas busquedas de imagenes creadas aleatoriamente.

```javascript
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
```

``index`` es generado aleatoriamente en funcion de la cantidad de elementos de ``query`` usando ``Math.random()``

Para ir cambiando de imagen cada cierto tiempo y evitar el efecto de recarga de la pagina se decidio crear varios elemntos ``<div>`` y con js le asignamos una imagen a cada uno y una clase que hace que el ``z-index`` sea negativo de manera de poder ocultarlo.

Entonces dentro del:
```javascript
  const intervalChangeBg = setInterval(() => {
	let index = Math.floor(Math.random() * arrayDivs.length);
	console.log(index);
	arrayDivs[index].classList.add("show");
	// Con este interval eliminamos esa clase de manera que se oculte y otro div pueda mostrarse
	const removeClassInterval = setInterval(() => {
		arrayDivs[index].classList.remove("show");
	}, 7000);
}, 6000);

```

Generamos un  ``index`` aleatorio en funcion de la cantidad de elementos div's dentro de  ``arrayDivs`` para seleccionar aleatoriamente un div.

A este div le asignamos la clase ``.show`` que hace que su z-index aumente y se muestre

Luego iniciamos un contador con 1seg mas que el anterior para poder removerle esta clase, de manera que pueda ocultarse nuevamente y asi no quede siempre visible

## Posibles problemas

 - No estaria limpiando los side-effects de los intervalos lo que creo que podria causar algun problema.

## Mejoras a futuro

 - Investigar de manera de agregar un efecto de transicion entre las imagenes que sea más fluido
 - Problemas de contraste con el fondo de algunas imagenes y el color de texto. Se podria hacer que el color de texto sea dinamico en funcion del color de fondo de la imagen, pero todavia no investigue a fondo como solucionar esto. Tambien se podria agregar un overlay oscuro de fondo y poner un texto mas claro pero no me convencio el diseño de como quedaba.
