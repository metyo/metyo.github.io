  document.getElementById("pesanForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const submitButton = document.getElementById("submitButton");
      
      // Disable button and show loading spinner
      submitButton.disabled = true;
      submitButton.innerHTML = 'Mengirim... <div class="loading"></div>';

      fetch("https://script.google.com/macros/s/AKfycbxHM0K0M5alVbmoSWC2CqEzSLwiElR1URwDdOp0SNYSRlKqiAaqpE7gVHnkrO8dcRKr/exec", {
        method: "POST",
        body: formData
      })
      .then(res => res.text())
      .then(txt => {
        alert("Pesan berhasil dikirim!");
        document.getElementById("pesanForm").reset();
        submitButton.disabled = false;
        submitButton.innerHTML = 'Kirim Pesan';
      })
      .catch(err => {
        alert("Gagal mengirim pesan.");
        console.error(err);
        submitButton.disabled = false;
        submitButton.innerHTML = 'Kirim Pesan';
      });
    });
