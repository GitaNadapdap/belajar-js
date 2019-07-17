//bagian pertama
// var rows=1;
// while (rows < 6){
//     rows++;
//     console.log('*');
// }

//bagian kedua
// var rows=5;
//
// for (row1=0; row1<rows; row1++){
//     var temp = '';
//     for (row2=0; row2<rows; row2++){
//     temp += '*';
// }
//     console.log(temp);
// }

//bagian ketiga
var rows = 5;
for (row1=0; row1<=rows; row1++){
    temp = '*';
    for (row2=0; row2<row1; row2++){
        temp +='*';
    }
    console.log(temp);
}