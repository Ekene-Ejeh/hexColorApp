const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hex-btn");
const bodyElement = document.querySelector("body");
const hex = document.querySelector(".hex");

hexBtn.addEventListener("click", getHex);

function getHex() {
	let hexColor = "#";

	for (i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * hexNumbers.length);
		hexColor += hexNumbers[random];
	}
	bodyElement.style.backgroundColor = hexColor;
	hex.innerHTML = hexColor;
}
