function testGS(){

	const url = "https://script.google.com/macros/s/AKfycbzks0DnacpVPOKu28vOu0nUyTJWKvkThsCQ9yeODBtOMvxtGLI/exec";

	fetch(url)
		.then(d => d.json())
		.then(d => {
			document.getElementById("app").textContent = d[0].status;
	});
}

function addGS(){

	const url = "https://script.google.com/macros/s/AKfycbzks0DnacpVPOKu28vOu0nUyTJWKvkThsCQ9yeODBtOMvxtGLI/exec";

	fetch(url,{
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		//credentials: 'omit',
		headers:{
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		//referrerPolicy: 'no-referrer',
		body: JSON.stringify({NombreEstado:"Veronica"})
	});	
}

document.getElementById("btn").addEventListener("click",testGS);

document.getElementById("btn2").addEventListener("click",addGS);

