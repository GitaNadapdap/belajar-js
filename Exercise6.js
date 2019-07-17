//bagian pertama
console.log('LOOPING PERTAMA');
var love = 0;
while(love < 20) { // Loop akan terus berjalan selama nilai deret masih di atas 0
    // console.log('LOOPING PERTAMA');
    love += 2;
    console.log(+love+ ' ' + '-' + ' '+ 'I love coding');
}

    console.log('LOOPING KEDUA');
    var love = 20;
    while (love >= 2){
    love -= 2; // Menambahkan nilai variable jumlah dengan angka deret
    // love--; // Mengubah nilai deret dengan mengurangi 1
    console.log(+love+ ' ' + '-' + ' '+ 'I will become fullstack developer');
}

//bagian kedua
console.log('LOOPING PERTAMA');
for(var love = 1; love < 21; love++) {
    console.log(+love+ ' ' + '-' + ' '+ 'I love coding');
}

console.log('LOOPING KEDUA');
for(var love = 20; love >= 1 ; love --) {
    console.log(+love+ ' ' + '-' + ' '+ 'I will become fullstack developer');
}

