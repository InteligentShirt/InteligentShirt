document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const shirtSvg = document.getElementById('shirt-svg');
    const promptInput = document.getElementById('prompt-input');
    const previewBtn = document.getElementById('preview-btn');
    const finalizeBtn = document.getElementById('finalize-btn');

    // Função para alterar a cor da camiseta
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            const svgDoc = shirtSvg.contentDocument;
            const shirtElement = svgDoc.querySelector('#shirt-path'); // Certifique-se de que o elemento tenha o ID correto
            if (shirtElement) {
                shirtElement.setAttribute('fill', color);
            }
        });
    });

    // Função para pré-visualizar o texto na camiseta
    previewBtn.addEventListener('click', () => {
        const text = promptInput.value;
        const svgDoc = shirtSvg.contentDocument;
        const textElement = svgDoc.querySelector('#shirt-text'); // Certifique-se de que o elemento de texto tenha o ID correto
        if (textElement) {
            textElement.textContent = text;
        }
    });

    // Função para finalizar a compra
    finalizeBtn.addEventListener('click', () => {
        const text = promptInput.value;
        if (text) {
            const email = 'fornecedor@exemplo.com'; // Substitua pelo e-mail do fornecedor
            const subject = 'Pedido de Camiseta Personalizada';
            const body = `Texto personalizado: ${text}`;
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } else {
            alert('Por favor, insira um texto personalizado.');
        }
    });
});
