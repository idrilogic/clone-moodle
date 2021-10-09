
// display when click on the button
function drop() {
	var dropContent = document.getElementById('drop-content');

	if (dropContent.style.display === "block") {
		dropContent.style.display = "none"
	} else {
		dropContent.style.display = "block"
	}
}


//click even not in the button, the text will hide
window.onclick = function(event) {
	var dropContent = document.getElementById('drop-content');
	if (!event.target.matches('.dropBtn')) {
		dropContent.style.display = "none"
	}
}


function valid() {
	var green = document.getElementById('succes')
	green.classList.toggle('show')
}

function invalid() {
	var red = document.getElementById('error')
	red.classList.toggle('show')
}

