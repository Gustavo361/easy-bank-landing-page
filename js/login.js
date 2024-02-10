const dataCreateAccount = document.querySelector('[data-create-account]');
const dataInputUserEmail = document.querySelector('[data-input-user-email]');
const dataInputUserPassword = document.querySelector('[data-input-user-password]');

dataCreateAccount.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userEmail = dataInputUserEmail.value;
    const userPassword = dataInputUserPassword.value;

    const data = {
        userEmail: userEmail,
        userPassword: userPassword,
    };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            if (result.success) {
                // Redireciona para a página indicada no servidor
                window.location.href = result.redirectUrl
                console.log('Authentication successful');
            } else {
                console.log('Authentication failed');
                window.alert('Authentication failed');
            }
        } else {
            console.error('Server error:', result.error);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
});
