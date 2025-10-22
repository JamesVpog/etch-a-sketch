const container = document.querySelector("#container");


function changeColor(e) {
	e.target.style.backgroundColor = "red";
}
for (let i = 0; i < 16 * 16; i++) {
	const div = document.createElement("div");
	div.style.border = "1px solid black";
	div.addEventListener("mouseover", changeColor);
	container.appendChild(div);
}
