
function testGS(){

	const url = "https://script.google.com/macros/s/AKfycbzks0DnacpVPOKu28vOu0nUyTJWKvkThsCQ9yeODBtOMvxtGLI/exec";

	fetch(url)
		.then(d => d.json())
		.then(d => {
			document.getElementById("app").textContent = d[0].status;
	});
}

document.getElementById("btn").addEventListener("click",testGS;

