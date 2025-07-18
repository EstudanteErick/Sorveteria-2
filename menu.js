function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const iconElement = document.querySelector('.icon');
    
    if (menuMobile && iconElement) {
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            iconElement.src = "imagens/menu_white_36dp.svg";
            iconElement.alt = "Abrir menu";
        } else {
            menuMobile.classList.add('open');
            iconElement.src = "imagens/close_white_36dp.svg";
            iconElement.alt = "Fechar menu";
        }
    }
}

// Fechar menu ao clicar em um link (mobile)
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const menuMobile = document.querySelector('.mobile-menu');
    const iconElement = document.querySelector('.icon');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuMobile && iconElement) {
                menuMobile.classList.remove('open');
                iconElement.src = "imagens/menu_white_36dp.svg";
                iconElement.alt = "Abrir menu";
            }
        });
    });
    
    // Fechar menu ao redimensionar a tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuMobile) {
            menuMobile.classList.remove('open');
            if (iconElement) {
                iconElement.src = "imagens/menu_white_36dp.svg";
                iconElement.alt = "Abrir menu";
            }
        }
    });
});