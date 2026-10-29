function fn_ValForm(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var jenisAcara = document.getElementById("kategori").value;
    var jenisPeserta = "";
    var Acara = "";
    var bebas=/^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    var sMsg = "";
    if(nama == ""){
        sMsg += "\n* Anda Belum Mengisikan Nama";
    }
    if(email == ""){
        sMsg += "\n* Anda Belum Mengisikan Email";
    }
    /* Soal C */
    else if(!bebas.test(email)){
        sMsg += "\n* Email Belum Valid";
    }
    if(umur == ""){
        sMsg += "\n* Anda Belum Mengisikan Umur";
    }else{
        /* Soal D */
        if(umur <= 25){
            jenisPeserta = "Peserta Mahasiswa";
        }
        if(umur > 25){
            jenisPeserta = "Peserta Umum";
        }
        if(umur < 15 || umur >60){
            sMsg += "\n* Umur Harus Berada Diantara 15 Sampai 60 Tahun";
        }
    }
    if(jenisAcara == ""){
        sMsg += "\n* Anda Belum Mengisikan Jenis Acara";
    }  



    /* Soal E */
    switch(jenisAcara){
        case "W":
            Acara = "Workshop";
            break;
        
        case "S":
            Acara = "Seminar";
            break;

        case "L":
            Acara = "Lomba Coding";
            break;
    }

    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        /* Soal F */
        alert("Terimakasih " + nama + "! Anda terdaftar di acara "+ Acara +" Info = "+ jenisPeserta);
        return true;
    }
}