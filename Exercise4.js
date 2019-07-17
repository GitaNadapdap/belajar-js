var tanggal=7;
var bulan=2;
bulan = 1;
var tahun=1999;

switch (bulan) {
    case 1: {console.log(+tanggal+ ' ' + 'januari' + ' ' +tahun); break;}
    case 2: {console.log(+tanggal+ 'Februari' +tahun); break;}
    case 3: "Maret";
    case 4: "April";
    case 5: "Mei";
    case 6: "Juni";
    case 7: "Juli";
    case 8: "Agustus";
    case 9: "September";
    case 10: "Oktober";
    case 11: "Novembaer";
    case 12: "Desember";
    default:
        console.log("Bulan hanya ada sampai 12");
}
