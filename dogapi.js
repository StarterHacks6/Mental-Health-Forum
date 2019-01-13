const url = 'https://dog.ceo/api/breeds/image/random';

function changeImage() {
	fetch(url).then((response) => {
		return response.json();
	})
	.then((response) => {
		console.log(response)
		document.getElementById('dog').setAttribute("src", response['message']);
	})
	.catch(function(){

	})
}
