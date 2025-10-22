const container = document.querySelector("#container");


function changeColor(e) {
	e.target.style.backgroundColor = "red";
}

function clearSquares(size) {
	// remove all previous squares 
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	const totalItems = size * size;
	const itemSize = `calc(100% / ${size})`;


	for (let i = 0; i < totalItems; i++) {
		const div = document.createElement("div");
		div.style.border = "1px solid black";
		div.style.flex = `0 0 ${itemSize}`;
		div.style.height = itemSize;
		div.addEventListener("mouseover", changeColor);
		container.appendChild(div);
	}
}

clearSquares(16);

const squareNumberButton = document.querySelector("#numSquare")

squareNumberButton.addEventListener("click", () => {
	let userGridSize = prompt("Enter a number from 1-100.");
	clearSquares(userGridSize);
})
