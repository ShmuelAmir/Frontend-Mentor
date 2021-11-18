document.querySelectorAll('.card img').forEach(img => img.addEventListener('click', () => {
    const path = img.src.replace('screenshot.png', '') + 'index.html';
    window.open(path, '_black');
}));