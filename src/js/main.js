const burgerIcon = document.querySelector('.burger-icon')
const navList = document.querySelector('.nav-list')

burgerIcon.addEventListener('click', () => {
	burgerIcon.classList.toggle('active')
	navList.classList.toggle('active')
})
