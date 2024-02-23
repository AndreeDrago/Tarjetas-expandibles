let tarjetas = document.querySelectorAll('.tarjeta');

function removeActiveClasses() {
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove('active')
    })
}

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        removeActiveClasses()
        tarjeta.classList.add('active')
    })
})

