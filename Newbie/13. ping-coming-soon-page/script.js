const error = document.querySelector('.error');

document.querySelector('input').addEventListener("invalid", function() {
    error.style.opacity = '1';
});

document.querySelector('input').addEventListener("valid", function() {
    error.style.opacity = '0';
});
