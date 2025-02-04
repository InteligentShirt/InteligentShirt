document.addEventListener('DOMContentLoaded', () => {
    const generateDesignBtn = document.getElementById('generate-design-btn');
    const finalizeBtn = document.getElementById('finalize-btn');
    const shirtPath = document.getElementById('shirt-path');
    const colorButtons = document.querySelectorAll('.color-btn');

    // Função para solicitar o design à IA
    const generateDesign = async () => {
        try {
            // Substitua 'URL_DA_API' pela URL real da API de geração de imagens
            // E 'SUA_CHAVE_API' pela sua chave de API, se necessário
            const response = await fetch('URL_DA_API', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer SUA_CHAVE_API' // Se a API exigir autenticação
                },
                body: JSON.stringify({
                    // Parâmetros necessários pela API para gerar o design
                    prompt: 'Descrição do design desejado',
                    // Outros parâmetros conforme a documentação da API
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao gerar o design');
            }

            const data = await response.json();
            const designUrl = data.image_url; // Ajuste conforme a resposta da API

            // Exibir a imagem gerada na área da camiseta
            const shirtSvg = document.getElementById('shirt-svg');
            shirtSvg.style.backgroundImage = `url(${designUrl})`;
            shirtSvg.style.backgroundSize = 'cover';
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao gerar
::contentReference[oaicite:0]{index=0}
 
