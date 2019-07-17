let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

const inputLength = () => {
	return input.value.length;
}

const createListElement = () => {
    let li = document.createElement("li");
    
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);