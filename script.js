  document.getElementById("pesanForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const submitButton = document.getElementById("submitButton");
      
      // Disable button and show loading spinner
      submitButton.disabled = true;
      submitButton.innerHTML = 'Mengirim... <div class="loading"></div>';

      fetch("https://script.google.com/macros/s/AKfycbwY6kwV7aCRt55UAvTrO3C3co2mSWRDiuyD5oyxrD5Rh_cgSjHrgWi_r7Uj2x5VQCP0/exec", {
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
 
