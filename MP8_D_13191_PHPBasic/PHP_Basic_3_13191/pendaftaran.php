<?php
    echo "<h1>Pendaftaran Akun</h1>";
    echo'<form method = "POST" action="">
        <p>Nama     : <br /><input type="text" name="nama" /></p>
        <p>Telepon      : <br /><input type="text" name="telepon" /></p>
        <p>Verifikasi</p>
        <select name="verifikasi" id="verifikasi">
            <option>WhatsApp</option>
            <option>SMS</option>
        </select>
        <br /> <br />
        <button type="submit">Kirim</button>
    </form>';
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nama = $_POST['nama'];
    $telepon = $_POST['telepon'];
    $email = $_POST['email'];
    echo "Terima Kasih, " . htmlspecialchars($nama) . "! Informasi Selanjutnya Akan Dikirim ke Nomor Telepon " . htmlspecialchars($telepon) . " dan email " . htmlspecialchars($email);
    }else{
        echo "Silakan Isi Formulir Diatas untuk mengirimkan data kontak.";
    }
?>