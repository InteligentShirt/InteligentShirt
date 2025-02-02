document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const shirt = document.getElementById('shirt');
    const finalizeBtn = document.getElementById('finalize-btn');
    const promptInput = document.getElementById('prompt-input');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            shirt.querySelector('path').setAttribute('fill', color);
        });
    });

    finalizeBtn.addEventListener('click', () => {
        const promptText = promptInput.value;
        const shirtColor = shirt.querySelector('path').getAttribute('fill');
        const supplierUrl = 'URL_DO_FORNECEDOR'; // Substitua pela URL real do fornecedor

        // Redireciona para o site do fornecedor com os parâmetros necessários
        window.location.href = `${supplierUrl}?text=${encodeURIComponent(promptText)}&color=${encodeURIComponent(shirtColor)}`;
    });
});




