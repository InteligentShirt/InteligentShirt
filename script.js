document.querySelectorAll('.color-option').forEach(item => {
    item.addEventListener('click', event => {
        const color = event.target.getAttribute('data-color');
        const tshirt = document.getElementById('tshirt').querySelector('path');
        tshirt.setAttribute('fill', color);
    });
});

document.getElementById('finalizarCompra').addEventListener('click', () => {
    const prompt = document.getElementById('promptInput').value;
    const tshirtColor = document.getElementById('tshirt').querySelector('path').getAttribute('fill');
    const fornecedorUrl = `https://www.fornecedor.com/checkout?prompt=${encodeURIComponent(prompt)}&color=${encodeURIComponent(tshirtColor)}`;
    window.location.href = fornecedorUrl;
});
