const dataUserName = document.querySelector('[data-user-name]')

document.addEventListener('DOMContentLoaded', (e) => {
    fetch('/initial', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            dataUserName.innerText = data.userName
        })
        .catch(error => console.error('Erro ao buscar dados do usuário:', error))
})