// if (Notification.permission !== "granted") {
//   Notification.requestPermission();
// } else {
//   var notifikasi = new Notification("Marketplace Ortuseight", {
//     body: "Produk baru telah tersedia!",
//     icon: "ortus.png"
//   });

//   notifikasi.onclick = function() {
//     window.open("https://www.ortuseight.com");
//   };
// }
function tampilkanNotifikasi() {
  document.getElementById("notifikasi").style.display = "block";
}

function tutupNotifikasi() {
  document.getElementById("notifikasi").style.display = "none";
}

// Menampilkan notifikasi setelah 3 detik
setTimeout(tampilkanNotifikasi, 3000);

function tampilkanNotifikai() {
  document.getElementById("notifikasi").style.display = "block";
}

function izinkanNotifikai() {
  alert("Terima kasih! Anda telah mengizinkan notifikasi.");
  document.getElementById("notifikasi").style.display = "none";
}

function blokirNotifikai() {
  alert("Anda telah memblokir notifikasi.");
  document.getElementById("notifikasi").style.display = "none";
}

// Menampilkan notifikasi setelah 3 detik
setTimeout(tampilkanNotifikai, 15000);

// function tampilkanNotifikas() {
//   document.getElementById("notifikas").style.display = "block";
// }

// function tutupNotifikas() {
//   document.getElementById("notifikas").style.display = "none";
// }

// // Menampilkan notifikasi setelah 3 detik
// setTimeout(tampilkanNotifikas, 3000);

