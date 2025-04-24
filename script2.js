   const correctPassword = "111117";
    const scriptURL = "https://script.google.com/macros/s/AKfycbxHM0K0M5alVbmoSWC2CqEzSLwiElR1URwDdOp0SNYSRlKqiAaqpE7gVHnkrO8dcRKr/exec";

    function checkPassword() {
      const enteredPassword = document.getElementById("password").value;

      if (enteredPassword === correctPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("loading").style.display = "flex";
        fetchData();
      } else {
        alert("Password salah, coba lagi.");
      }
    }

    function formatTanggal(dateString) {
      const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      const date = new Date(dateString);
      
      // Menyesuaikan zona waktu (misal: GMT+7 untuk WIB)
      const offset = 7 * 60; // WIB = GMT+7, jadi offsetnya 7 jam x 60 menit
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset() + offset);
      
      const hari = date.getDate();
      const bulanNama = bulan[date.getMonth()];
      const tahun = date.getFullYear();
      return `${hari} ${bulanNama} ${tahun}`;
    }

    function formatJam(dateString) {
      const date = new Date(dateString);
      
      // Menyesuaikan zona waktu (misal: GMT+7 untuk WIB)
      const offset = 7 * 60; // WIB = GMT+7, jadi offsetnya 7 jam x 60 menit
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset() + offset);
      
      return date.toTimeString().split(" ")[0];
    }

    function fetchData() {
      fetch(scriptURL)
        .then(response => response.json())
        .then(data => {
          const tableBody = document.querySelector('#data-table tbody');
          data.forEach(row => {
            const tr = document.createElement('tr');

            // Asumsikan index: 0=nama, 1=jk, 2=menu, 3=wa, 4=waktu (timestamp)
            const nama = row[0];
            const jk = row[1];
            const menu = row[2];
            const wa = row[3];
            const waktu = row[4];

            const tanggal = formatTanggal(waktu);
            const jam = formatJam(waktu);

            [nama, jk, menu, wa, tanggal, jam].forEach(cellValue => {
              const td = document.createElement('td');
              td.textContent = cellValue;
              tr.appendChild(td);
            });

            tableBody.appendChild(tr);
          });

          document.getElementById("loading").style.display = "none";
          document.getElementById("data-table").style.display = "table";
        })
        .catch(error => {
          console.error("Gagal mengambil data:", error);
          document.getElementById("loading").style.display = "none";
        });
    }
