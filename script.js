document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const previewBtn = document.getElementById('preview-btn');
    const generateDesignBtn = document.getElementById('generate-design-btn'); // Novo botão
    const finalizeBtn = document.getElementById('finalize-btn');
    const shirtText = document.getElementById('shirt-text');
    const shirtPath = document.getElementById('shirt-path');
    const shirtSvg = document.getElementById('shirt-svg');
    const colorButtons = document.querySelectorAll('.color-btn');

    // Função para atualizar a pré-visualização da camiseta com texto
    const updatePreview = () => {
        const userText = promptInput.value;
        shirtText.textContent = userText;
    };

    // Evento para o botão de pré-visualização de texto
    previewBtn.addEventListener('click', updatePreview);

    // Evento para os botões de cor
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.getAttribute('data-color');
            shirtPath.setAttribute('fill', color);
        });
    });

    // Função para gerar design com IA
    const generateDesign = async () => {
        const userPrompt = promptInput.value;
        if (userPrompt.trim() === '') {
            alert('Por favor, insira uma descrição para o design.');
            return;
        }

        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer SUA_CHAVE_DE_API`
                },
                body: JSON.stringify({
                    prompt: userPrompt,
                    n: 1,
                    size: '256x256'
                })
            });

            const data = await response.json();
            const designUrl = data.data[0].url;

            // Remover imagem anterior, se existir
            const existingImage = document.getElementById('shirt-image');
            if (existingImage) {
                existingImage.remove();
            }

            // Adicionar a imagem gerada ao SVG da camiseta
            const shirtImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            shirtImage.setAttribute('id', 'shirt-image');
            shirtImage.setAttribute('href', designUrl);
            shirtImage.setAttribute('x', '50');
            shirtImage.setAttribute('y', '50');
            shirtImage.setAttribute('width', '100');
            shirtImage.setAttribute('height', '100');
            shirtSvg.appendChild(shirtImage);

        } catch (error) {
            console.error('Erro ao gerar o design:', error);
            alert('Ocorreu um erro ao gerar o design. Por favor, tente novamente.');
        }
    };

    // Evento para o botão de gerar design com IA
    generateDesignBtn.addEventListener('click', generateDesign);

    // Evento para o botão de finalizar compra
    finalizeBtn.addEventListener('click', () => {
        const userText = promptInput.value;
       
::contentReference[oaicite:1]{index=1}
 

