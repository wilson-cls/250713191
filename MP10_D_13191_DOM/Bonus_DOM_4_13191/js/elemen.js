function ubahLabelBangun(){
    var jenis = document.getElementById("jenisBangun").value;
    var label = document.getElementById("labelUkuran");
    var bentuk = document.getElementById("bentukVisual");

    if(jenis === "persegi"){
        label.firstChild.data = "Panjang Sisi (Cm)";
        bentuk.style.borderRadius = "0px";
        bentuk.style.backgroundColor = "coral";
    }else{
        label.firstChild.data = "Jari - Jari / r (Cm)";
        bentuk.style.borderRadius = "50px";
        bentuk.style.background = "lightgreen";
    }
}

function hitungBangun(){
    var jenis = document.getElementById("jenisBangun").value;
    var nilai = parseFloat(document.getElementById("nilaiUkuran").value);
    var luas = 0;
    var keliling = 0;

    if(jenis === "persegi"){
        luas = nilai * nilai;
        keliling = 4 * nilai;
    }else{
        luas = (3.14 * nilai * nilai).toFixed(2);
        keliling = (2 * 3.14 * nilai).toFixed(2);
    }

    document.getElementById("bonusLuas").firstChild.data = luas;
    document.getElementById("bonusKeliling").firstChild.data = keliling;

    var bentukVisual = document.getElementById("bentukVisual");
    bentukVisual.style.width = (nilai*10) + "px";
    bentukVisual.style.height=(nilai*10) + "px";
}