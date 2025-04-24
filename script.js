
    document.getElementById("pesanForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(this);

      fetch("https://script.google.com/macros/s/AKfycbxHM0K0M5alVbmoSWC2CqEzSLwiElR1URwDdOp0SNYSRlKqiAaqpE7gVHnkrO8dcRKr/exec", {
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
