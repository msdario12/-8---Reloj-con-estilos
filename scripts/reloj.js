const intl = Intl.DateTimeFormat("SP-ar", {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
});

const intervalId = setInterval(() => {
	const date = new Date();
	const container = document.getElementById("clock");
	container.innerHTML = intl.format(date);
}, 1000);
