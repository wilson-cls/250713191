var iJam;
var sJenis;

iJam = prompt("Masukkan Lama Parkir (jam).", 1);
sJenis = prompt("Jenis Kendaraan: (M)otor atau Mo(B)il", "M");

if(iJam > 3){
    if(sJenis == "M"){
        alert("Tarif Parkir Motor Rp 6.000");
    }else{
        alert("Tarif Parkir Mobil Rp 12.000");
    }
}else{
    if(sJenis == "M"){
        alert("Tarif Parkir Motor Rp 3.000");
    }else{
        alert("Tarif Parkir Mobil Rp 6.000");
    }
}