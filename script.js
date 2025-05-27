document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const previewBtn = document.getElementById('preview-btn');
    const finalizeBtn = document.getElementById('finalize-btn');
    const shirtText = document.getElementById('shirt-text');
    const shirtPath = document.getElementById('shirt-path');
    const colorButtons = document.querySelectorAll('.color-btn');

    // Atualiza a pré-visualização do texto na camiseta
    const updatePreview = () => {
        const userText = promptInput.value.trim();
        shirtText.textContent = userText;
    };

    previewBtn.addEventListener('click', updatePreview);

    // Atualiza a cor da camiseta
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            shirtPath.setAttribute('fill', color);
        });
    });

    // Finalizar compra
    finalizeBtn.addEventListener('click', () => {
        const userText = promptInput.value.trim();
        const color = shirtPath.getAttribute('fill');

        if (userText === '') {
            alert('Por favor, insira seu texto personalizado antes de finalizar a compra.');
            return;
        }

        // Redirecionamento (atualmente é um exemplo genérico)
        const url = `https://example.com/pedido?texto=${encodeURIComponent(userText)}&cor=${encodeURIComponent(color)}`;
        window.open(url, '_blank');
    });
});
