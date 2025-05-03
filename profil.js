// HTML elementlarni olish
const content = document.getElementById('content'); // Kontentni olish
const buttons = document.querySelector('.buttons'); // Tugmalar konteynerini olish

// "Men haqimda" tugmasiga bosganda ishlaydigan funksiyalar
document.getElementById('aboutBtn').addEventListener('click', () => {
  showContent(`
    <h2><i class='bx bxs-user-circle' ></i> Men haqimda</h2>
    <p>Men Jo'raboyev Otabek Ne'mat o'g'li. 21 yoshdaman, Jizzax viloyatidanman. Web dasturchilik bilan shug'ullanaman va frontend yo'nalishida o'rganyapman.</p>
    <button class="back-btn" onclick="goBack()"><i class='bx bx-arrow-back' ></i> Ortga</button>
  `);
});

// "Mening kanallarim" tugmasiga bosganda ishlaydigan funksiyalar
document.getElementById('channelsBtn').addEventListener('click', () => {
  showContent(`
    <h2><i class='bx bxs-user-account'></i> Mening kanallarim</h2>
    <div class="channel-links">
      <div class="channel-item">
        <img src="123456.jpg" alt="Telegram Kanal">
        <div class="channel-info">
          <p><strong>Telegram:</strong> otto_JON</p>
          <a href="https://t.me/otto_JON" target="_blank">
            <button>Telegramga o‘tish</button>
          </a>
        </div>
      </div>
      <div class="channel-item">
        <img src="1332281.jpeg" alt="Instagram Kanal">
        <div class="channel-info">
          <p><strong>Instagram:</strong> otto.w1be</p>
          <a href="https://instagram.com/otto.w1be" target="_blank">
            <button>Instagramga o‘tish</button>
          </a>
        </div>
      </div>
      <div class="channel-item">
        <img src="946404.png" alt="YouTube Kanal">
        <div class="channel-info">
          <p><strong>YouTube:</strong> Otto</p>
          <a href="https://youtube.com/@otto-JON" target="_blank">
            <button>YouTubega o‘tish</button>
          </a>
        </div>
      </div>
    </div>
    <button class="back-btn" onclick="goBack()"><i class='bx bx-arrow-back' ></i> Ortga</button>
  `);
  content.style.display = "block"; // Kontentni ko'rsatish
});

// "Bog'lanish" tugmasiga bosganda ishlaydigan funksiyalar
document.getElementById('contactBtn').addEventListener('click', () => {
  showContent(`
    <div class="contact-links">
      <div class="contact-item">
        <img src="545909.jpg" alt="Telegram" />
        <div class="contact-info">
          <p>Joraboyev_ON</p>
          <a href="https://t.me/Joraboyev_ON" target="_blank">Telegramga o'tish</a>
        </div>
      </div>

      <div class="contact-item">
        <img src="947135.png" alt="Instagram" />
        <div class="contact-info">
          <p>otto.w1be</p>
          <a href="https://instagram.com/otto.w1be" target="_blank">Instagramga o'tish</a>
        </div>
      </div>

      <div class="contact-item">
        <img src="1357475.png" alt="Facebook" />
        <div class="contact-info">
          <p>Otaw Axi</p>
          <a href="https://facebook.com/Otaw Axi" target="_blank">Facebookga o'tish</a>
        </div>
      </div>

      <div class="contact-item">
        <img src="phone-call-solid-24.png" alt="Telefon" />
        <div class="contact-info">
          <p>+998 90 182 14 06</p>
          <a href="tel:+998901821406">Qo'ng'iroq qilish</a>
        </div>
      </div>

    </div>
    <button class="back-btn" onclick="goBack()"><i class='bx bx-arrow-back' ></i> Ortga</button>
  `);
});

// Kontentni ko‘rsatish funksiyasi
function showContent(html) {
  buttons.style.display = 'none'; // Tugmalarni yashirish
  content.innerHTML = html; // Yangi kontentni joylash
  content.style.display = 'block'; // Kontentni ko'rsatish
}

// Ortga qaytish funksiyasi
function goBack() {
  content.style.display = 'none'; // Kontentni yashirish
  buttons.style.display = 'flex'; // Tugmalarni qayta ko'rsatish
}
