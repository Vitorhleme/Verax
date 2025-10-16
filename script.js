document.addEventListener('DOMContentLoaded', function() {

    // Inicializa a biblioteca Animate On Scroll (AOS)
    AOS.init({
        duration: 800,       // Duração da animação em ms
        easing: 'ease-in-out', // Efeito de aceleração
        once: true,          // Animação acontece apenas uma vez
        offset: 100,         // Distância do elemento para iniciar a animação
    });

    // Lógica para o Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link (útil para navegação na mesma página)
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

});