const passwordInput = document.getElementById('password');
const buttons = document.querySelectorAll('.keypad button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-key');

        if (key === 'borrar') {
            passwordInput.value = '';
        } else if (key === 'enter') {
            if (passwordInput.value === '2813') {
                window.location.href = 'contador.html';
            } else {
                // Mensaje de error con SweetAlert2
                Swal.fire({
                    title: 'Mal..!',
                    text: 'Contraseña incorrecta',
                    confirmButtonColor: '#d75d82',
                    confirmButtonText: 'Reintentar',
                    allowOutsideClick: false,
                    imageUrl: 'https://i.ibb.co/d4Qs8NSn/stitch-Error.gif',
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: 'Error gif'
                });
                passwordInput.value = '';
            }
        } else {
            if (passwordInput.value.length < 4) {
                passwordInput.value += key;
            }
        }
    });
});
