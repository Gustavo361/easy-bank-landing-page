const dataMobileMenuOpen = document.querySelector('[data-mobile-menu-open]')
const dataMobileMenuClose = document.querySelector('[data-mobile-menu-close]')
const dataMenuContainer = document.querySelector('[data-menu-container]')

dataMobileMenuOpen.addEventListener('click', () => {
    dataMenuContainer.classList.toggle('active')
    dataMobileMenuOpen.classList.remove('active')
    dataMobileMenuClose.classList.add('active')
})

dataMobileMenuClose.addEventListener('click', () => {
    dataMenuContainer.classList.toggle('active')
    dataMobileMenuOpen.classList.add('active')
    dataMobileMenuClose.classList.remove('active')
})

//Testing connection to the server
fetch('https://easy-bank-server.onrender.com')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error))