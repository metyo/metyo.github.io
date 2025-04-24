
    document.getElementById("pesanForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(this);

      fetch("https://script.google.com/macros/s/AKfycbyP8cOQhUFrwZGTGrKsQfc0W8onL4JXhAY_23dLm9MD34DAFMV-5QfVDhOdPA_o-DDa/exec", {
        method: "POST",
        body: formData
      })
      .then(res => res.text())
      .then(txt => {
        alert("Pesan berhasil dikirim!");
        document.getElementById("pesanForm").reset();
      })
      .catch(err => {
        alert("Gagal mengirim pesan.");
        console.error(err);
      });
    });
