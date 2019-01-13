const DOGurl = 'https://dog.ceo/api/breeds/image/random';

window.onload = function() {
  setDate();
}

function setDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  if (dd<10) dd = '0'+dd;
  if (mm<10) mm = '0'+mm;
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById("today").innerHTML = today;
}

function changeImage() {
	fetch(DOGurl).then((response) => {
		return response.json();
	})
	.then((response) => {
		console.log(response)
		document.getElementById('dog').setAttribute("src", response['message']);
	})
	.catch(function(){

	})
}
