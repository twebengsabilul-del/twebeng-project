document.addEventListener("DOMContentLoaded", () => {
  const goButton = document.getElementById("goButton");
  if (!goButton) return;

  goButton.addEventListener("click", function(event) {
    event.preventDefault(); // cegah langsung pindah

    // Tambahkan kelas fade (pastikan ada di CSS)
    document.body.classList.add("fade");

    // Setelah delay, pindah ke halaman baru
    setTimeout(() => {
      window.location.href = goButton.href;
    }, 1000); // durasi sesuai animasi fade
  });
});


document.getElementById("goButton").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default dari link

    // Menambahkan kelas 'fade' untuk transisi
    document.body.classList.add("fade");

    // Setelah 1 detik, pindah ke halaman kedua
    setTimeout(function() {
        window.location.href = "halaman-baru.html"; // Ganti dengan nama halaman tujuan
    }, 1000); // Durasi transisi (1 detik)
});

// Menambahkan efek transisi fade di CSS
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});
