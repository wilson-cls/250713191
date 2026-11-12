<?php
    require 'koneksi.php';
    $conn = mysqli_connect('localhost', 'root', '', 'mp9_film');

    if(!$conn){
        die('Koneksi gagal: ' . mysqli_connect_error());
    }
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $id = trim($_GET['id'] ?? '');
        if($id == '' || !ctype_digit($id)){
            echo '<p style="color:red;">!! ID TIDAK VALID. !!</p>';
        }else{
            $hapus = mysqli_prepare($conn, 'DELETE FROM film WHERE id = ?');
            mysqli_stmt_bind_param($hapus, 'i', $id);
            mysqli_stmt_execute($hapus);

            if(mysqli_stmt_affected_rows($hapus) === 1){
                echo '<p>Data Berhasil Dihapus.</p>';
            }else{
                echo '<p>Data Tidak Ditemukan.</p>';
            }
        }
    }
?>