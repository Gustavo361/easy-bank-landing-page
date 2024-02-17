document.getElementById('logoutButton').addEventListener('click', () => {
    fetch('https://easy-bank-server.onrender.com/logout', {
        method: 'POST',
        credentials: 'include', // Include credentials for cross-origin requests
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao fazer logout.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
        window.location.href = data.redirectRoute;
    })
    .catch(error => {
        console.error('Erro durante a solicitação de logout:', error);
    });
});
