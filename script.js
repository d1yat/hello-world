const button = document.getElementById("btn-submit");
const input = document.getElementById("txt-greeting");

button.addEventListener("click", (e) => {
	e.preventDefault();

	let input = document.getElementById("txt-greeting");

	if (input.value !== "") {
		document.getElementById("greeting").innerHTML = input.value;
	}
});

input.addEventListener("keyup", function() {
	document.getElementById("greeting").innerHTML = this.value;
});
