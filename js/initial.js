document.addEventListener('DOMContentLoaded', () => {
    const spanUserName = document.querySelector('[data-user-name]')
    const userName = localStorage.getItem('userName')

    if (userName) {
        spanUserName.textContent = userName
    } else {
        spanUserName.textContent = 'user'
    }
})

document.getElementById('logoutButton').addEventListener('click', function() {
  fetch('https://easy-bank-server.onrender.com/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      localStorage.removeItem('userName')
      window.location.href = data.redirectUrl
    } else {
      console.error('Erro ao fazer logout')
    }
  })
  .catch(error => {
    console.error('Erro ao fazer logout', error)
  })
})

document.getElementById('logoutButtonFooter').addEventListener('click', function() {
  fetch('https://easy-bank-server.onrender.com/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      localStorage.removeItem('userName')
      window.location.href = data.redirectUrl
    } else {
      console.error('Erro ao fazer logout')
    }
  })
  .catch(error => {
    console.error('Erro ao fazer logout', error)
  })
})