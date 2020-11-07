const menu = document.querySelector('.menu');
const links = document.querySelector('.links');


console.log(menu);
console.log(links);
menu.addEventListener('click', () => {
	links.classList.toggle('active');
	console.log(menu);
	console.log(links);
});
