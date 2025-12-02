// Efek Confetti sederhana saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  createConfetti();
});

function createConfetti() {
  const colors = ['#FF69B4', '#87CEEB', '#FFD700', '#ADFF2F'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '5';
    confetti.style.borderRadius = '50%';
    confetti.style.opacity = '0.8';

    // Random animation duration
    const duration = Math.random() * 3 + 2;
    confetti.style.transition = `top ${duration}s linear, opacity ${duration}s ease-out`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = '100vh';
      confetti.style.opacity = '0';
    }, 100);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// Fallback untuk logo jika gambar gagal dimuat
const logoImg = document.getElementById('mainLogo');
if (logoImg) {
  logoImg.onerror = function () {
    this.src = 'https://cdn-icons-png.flaticon.com/512/2883/2883852.png';
  };
}
