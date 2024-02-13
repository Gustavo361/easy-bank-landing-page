const dataCreateAccount = document.querySelector('[data-create-account]');
const dataInputUserName = document.querySelector('[data-input-user-name]');
const dataInputUserEmail = document.querySelector('[data-input-user-email]');
const dataInputUserPassword = document.querySelector('[data-input-user-password]');

dataCreateAccount.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = dataInputUserName.value;
    const userEmail = dataInputUserEmail.value;
    const userPassword = dataInputUserPassword.value;

    const data = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
    };

    fetch('https://easy-bank-server.onrender.com/create-account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                // Aqui você obtém a rota dinamicamente a partir da resposta do servidor
                const dynamicRoute = data.redirectRoute || 'indexu.html';
                
                window.location.href = dynamicRoute;
                console.log('Redirected successfully');
            } else {
                window.alert(data.error);
            }
        })
        .catch(error => {
            alert('preencha o formulário corretamente');
            console.error('Error', error);
        });
});
