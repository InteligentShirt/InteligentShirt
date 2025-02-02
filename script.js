document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const shirtPath = document.getElementById('shirt-path');
    const finalizeBtn = document.getElementById('finalize-btn');
    const promptInput = document.getElementById('prompt-input');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            shirtPath.setAttribute('fill', color);
        });
    });

    finalizeBtn.addEventListener('click', () => {
        const promptText = promptInput.value;
        if (promptText) {
            // Lógica para enviar os dados para o fornecedor
            alert(`Compra finalizada com o texto: "${promptText}"`);
        } else {
            alert('Por favor, insira um texto personalizado.');
        }
    });
});
