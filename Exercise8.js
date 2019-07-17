//tugas1
// function shoutOut(){
// return "Halo Function!"
// }
// console.log(shoutOut());

//tugas2
// function calculateMultiply(num1, num2) {
//     return num1 * num2
// }
// var num1 = 5;
// var num2 = 6;
//
// var hasilPerkalian = calculateMultiply(num1,num2);
// console.log(hasilPerkalian);

//tugas3
function processSentence(name, age, address, hobby) {
    return 'nama saya' + ' ' + name + ', ' + 'umur saya' + ' ' + age + 'tahun' + ', alamat saya' +' ' + address + ' ' + 'dan saya punya hobby yaitu' + hobby + '!';
}

var name = "Gita";
var age = 20;
var address = "Jln. Lumban Balian, Silimbat";
var hobby = "Travelling";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);