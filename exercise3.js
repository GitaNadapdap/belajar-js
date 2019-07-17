var nama = "Onai", peran ='';
// var peran1='Ksatria';
// var peran2='Tabib';
// var peran3='Penyihir';

if(nama==' ' && peran ==''){
    console.log('Nama harus diisi!');
} else if(nama=='Onai' && peran =='') {
    console.log('Halo'+ ' ' +nama+ ',Pilih peranmu');
}
else if(nama=='Nina' && peran=='Ksatria'){
    console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
}
else if(nama=='G-Nap' && peran=='Tabib'){
    console.log('Halo Tabib G-Nap, kamu akan membantu temanmu yang terluka.');
}
else if(nama=='Unk' && peran=='Penyihir'){
    console.log('Selamat datang di Dunia Proxytia Unk');
    console.log('Halo Penyihir Unk, ciptakan keajaiban yang membantu kemenanganmu!');
}
else{
    console.log("Peran anda belum ada, Silahkan mendaftar");
}


