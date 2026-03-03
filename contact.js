const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        successMessage.classList.add('show');
        
        setTimeout(() => {
            successMessage.classList.remove('show');
            form.reset();
        }, 3000);
    });
}
