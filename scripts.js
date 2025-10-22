const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
	const div = document.createElement("div");
	div.style.border = "1px solid black";
	container.appendChild(div);
}
