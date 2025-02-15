document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previna o envio padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode adicionar a lógica para autenticar no backend
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Exemplo simples de feedback
    alert('Login solicitado para: ' + email);
});