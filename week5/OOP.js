// **Konsep OOP:**

class Pendaftar {
    constructor(nama, umur, uang_sangu) {
      this.nama = nama;
      this.umur = umur;
      this.uang_sangu = uang_sangu;
    }
  
    isValid() {
      return this.nama.length >= 10 && this.umur >= 25 && this.uang_sangu >= 100000 && this.uang_sangu <= 1000000;
    }
  }
  
  // **Implementasi Asynchronous:**
  
  let dataPendaftar = [];
  
  // **Menambahkan event listener ke form registrasi**
  
  document.getElementById("form-registrasi").addEventListener("submit", (event) => 
    event.preventDefault());
  

  
    // Mendapatkan data dari form
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uang_sangu = parseInt(document.getElementById("uang_sangu").value);
  
    // Membuat objek Pendaftar
    const pendaftar = new Pendaftar(nama, umur, uang_sangu);
  
    // Validasi data
    if (!pendaftar.isValid()) {
      alert("Data yang Anda masukkan tidak valid!");
      return;
    }
  
    // Simpan data ke server (asynchronous)
    fetch("api/pendaftar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pendaftar),
    })
      .then((response) => response.json())
