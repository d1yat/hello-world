const button = document.getElementById("btn-submit");

button.addEventListener("click", (e) => {
	e.preventDefault();

	let input = document.getElementById("txt-greeting");

	if (input.value !== "") {
		document.getElementById("greeting").innerHTML = input.value;
	}
});
