function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// เพิ่ม event listener สำหรับปุ่มเมนู
mobileMenuButton.addEventListener('click', toggleMobileMenu);

