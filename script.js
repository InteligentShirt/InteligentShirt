document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const shirt = document.getElementById('shirt');
    const finalizeBtn = document.getElementById('finalize-btn');
    const promptInput = document.getElementById('prompt-input');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            shirt.style.fill = color;
        });
    });

    finalizeBtn.addEventListener('click', () => {
        const promptText = promptInput.value;
        if (promptText) {
            // Aqui você pode adicionar a lógica para enviar os dados para o fornecedor
            alert(`Compra finalizada com o texto: "${promptText}"`);
        } else {
            alert('Por favor, insira um texto personalizado.');
        }
    });
});

