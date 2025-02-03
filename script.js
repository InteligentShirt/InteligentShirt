document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const previewBtn = document.getElementById('preview-btn');
    const finalizeBtn = document.getElementById('finalize-btn');
    const shirtText = document.getElementById('shirt-text');
    const shirtPath = document.getElementById('shirt-path');
    const colorButtons = document.querySelectorAll('.color-btn');

    // Função para atualizar a pré-visualização da camiseta
    const updatePreview = () => {
        const userText = promptInput.value;
        shirtText.textContent = userText;
    };

    // Evento para o botão de pré-visualização
    previewBtn.addEventListener('click', updatePreview);

    // Evento para os botões de cor
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            shirtPath.setAttribute('fill', color);
        });
    });

    // Evento para o botão de finalizar compra
    finalizeBtn.addEventListener('click', () => {
        const userText = promptInput.value;
        if (userText.trim() === '') {
            alert('Por favor, insira seu texto personalizado antes de finalizar a compra.');
            return;
        }
        // Redirecionar para o site do
::contentReference[oaicite:0]{index=0}
 
