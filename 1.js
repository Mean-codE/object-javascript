//* OBJECT
/*adalah type data structure lain dalam javascript yaitu objeck, sebelum membahasa tentang objek pasti kita menyimpan value yang related di sebuah array*/

//seperti
const handy = [
  30 - 5,
  Number(`170`),
  30 - 5 === 25 ? `saya benar - benar berusia 25` : `saya sudah mati`,
  typeof 30 === typeof Number("20"),
  ["funi", "aku", "sayang"],
];
//sekarang kita tahu secvara intuitif bahwa elemen pertama di array handy adalah ekspresi untuk usia saya , array kedua adalah sebuah ekspresi untuk tinggi badan dan seterusnya. tapi kita lihat bahwa di array tidak ada cara untuk memberi nama pada elemen - elemen ini.

/*jadi saya tidak dapat mengkases mereka secara ekspresi dengan variabel tapi harus berupa index. dan karena itu untuk mengatasi amsalah itu, saya memiliki struktur data lain dalam javascript yang bernama OBJECT. jadi dalam object kita membuat sebuah vairabel tanpa declarasi  bernama keys dan value nya adalah berupa ekspresi yang mana ekspresi akan di calculated dan di assign atau di masukan ke dalam variabel sebagai final value dari setipa vairable. bisa disebut juga key- value pairs. */

// const handy2 = {
//   lastname: "arifin",
//   age: 30 - 5,
//   height: Number(`170`),
//   confirmation:
//     30 - 5 === 25 ? `saya benar - benar berusia 25` : `saya sudah mati`,
//   fav: ["funi", "aku", "sayang"],
// };

//*bisa dilihat disini untuk membuat sebuah object diperlukan curly braces{}
//jadi dalam bahsa object variabel sepreti lastname ini dinamakan dengan keys dan setiap keys mempunyai value yang didapat dari kalkulasi ekspression yang kita tulis. jadi ini adalah keunggulan dari menggunakan object dari pada array. setiap keys ini juga bisa disebut dengan properties yang mana bisa dsibut bahwa objek handy2 memiliki 5 properties.
//objek adalah konsep paling mendasar di seluruh bahasa javascript, yang mana ada banyak cara untuk membuat sebuah objek dan ini adalah cara yang paling sederhana untuk membuat sebuah objek dan ini juga bisa disebut dengan poembuatan objek emngugnakan literal syntax karena kita menggunakan curly braces dan benar benar menulis seluruh isi objek secara langsung.

//*recap, jadi kita menggunakan objek untuk mengelompokan variabel yang mempunyai value dari hasil kalkulasi ekspresi ke dalam 1 variabel utama, dalam contoh idisni yaitu handy2 yang mana mempunyai variabel age yang berisikan value 25 dari hasil kalkulasi 30-5

//pembeda utama yang membedakan object dengan array adalah bahwa objek tidak mempedulikan urutan lagi seperti di array yang harus emnggunakan index ketika kita ingin menggunakan datanya sebagai contoh handy2.age bukan handy2[1]
const handy2 = {
  firstname: `handy`,
  lastname: "arifin",
  age: 30 - 5,
  height: Number(`170`),
  confirmation:
    30 - 5 === 25 ? `saya benar - benar berusia 25` : `saya sudah mati`,
  fav: ["funi", "aku", "sayang"],
  friends: [`jonas`, `micahel`, `yurino`],
  numberofFriends: () => {
    return handy2.friends.length;
  },
};
//*cara mengambil data dan juga cara mengubah data di dalam objek menggunakan notasi titik dan tanda kurung
console.log(handy2);

console.log(handy2.age);
//sturktur data flownya akan jadi dalam fungsi log kita menetapkan handy2.age sebagai eskpresi dan ekspresi harus di eksekusi terlebih dahulu untuk dilempar ke vairabel lokal fucngsi built in. handy2.age ini sudah menjadi 25 karena pada dasarnya saat kita memnbuat object handy2 kita telah membuat ekspresi 30-5 di ekseskusi terlebih dahulu dan value finalnya 25 telah masuk ke dalam variabel age. jadi ketika kita menggunakan console.log() hitungan ekspresi 30-5 sudah tidak ada

//cara lain untuk kita menampilkan data dari objek bisa menggunakan brakcet
const ge = "ge";
console.log(handy2["a" + ge]);
//ini adalah cara untuk kita bisa menggunakan dan menampilkan objek data. data flownya sederhana bahwa ekspresi pasti akan di eksekusi terlebih dahulu untuk mendapatkan sebuah final value. disini variabel ge telah mempunyai final value dari hasil ekseskusi ekspresision "ge" yaitu adalah string ge. setelahnya ketika kita konsole.log(handy2["a"+ge]) nah disini eskpresi di dalam braket akan bertemu dimaana a + eksekusi sub ekspresison ge yaitu string ge dan hasilnya ketiak string bertemu + akan concentenate yang mana hasil ekspresi brakcet ini jadi age
//semau property akan otomatis diurutkan berdasarkan abjad key nya

console.log(handy2.age);
console.log(handy2[`a` + `g` + `e`]);
//ketika kita ingin mengakses data dalam array dan object kita membutuhkan yang namanay operasi yaitu serpti handy2[] jadiu kurung ini dinamakan oiperasi yang membutuhkan eksrpesi untuk bisa menggunakn setiap data dalam arrrya or objek, kalau array ahrus berupa nunmber dan kalau objek bisa berupa string

const nameKey = "name";
console.log(`${handy2[`last` + nameKey]} ${handy2[`first` + nameKey]}`);

//special case ketika kita belum tahu properti mana yang ingin kita tampilkan, dan sebagai gantinya kita mendapatkan inforamsi ini dari beberapa antarmuka. untuk itu kita bisa menggunakna promtp funciton

// const interestedIn = prompt(
//   `waht do you want to know abouyt handy ?, choose between firstname, lastname`
// );
// console.log(interestedIn);
//ketiak kita mau mengakses job dari si object kita apsti akan menggunakan handy2.interestedIn, tapi ini tidak bisa dialkuka dan menghasilkan nilai undefined, ini terjadi dan pasti terjadi ketika kita ingin mengakes properry di object karena object hanya mengenal proeprtynya saja secara ekspilist bukan dengan menggunakn variabel lain yang menyimpan naama yang sama. kalau mau menggunakan hasil eksrpesi kita perlu menggunakan bracket operation untuk membuat ini bisa mengaksesnya handy2[interestedIn]

//karena if else adlah truthy values berati kita bisa mengugnakan ekspresiion yang menunjukan apakahitu truthy atua falsy. karena kita tahu untuk emmebuat ini truty dan falsy bahwa undefined adalah nilai falsy, kita bisa gunakan logik ini untuk bisa melakukan sesuatu

if (handy2.age) {
  console.log(handy2.age);
} else {
  console.log(`wrong`);
}

//cara kita menambahkan properry ke dalam sebuah objekk, yang mana ini cukup gampang yang mana ketiak kita mau menambahkan properti kita bisa gunakan nama objek.namaproperty. rulesnya adalah ketika kita menggunakan nama property yang sudah ada maka value yang lama akan digantikan dengan hasil ekspresi yang baru. jika tidak maka ada penambahan property baru di dalam objek

handy2.job = `software engineer`;
console.log(handy2);
handy2[`email`] = String("handiarifin" + 80 + "@gmail.com");
console.log(handy2);

console.log(
  `${handy2.firstname} has ${handy2.friends.length}, and his best friend is  called ${handy2.friends[1]} `
);

//intinya ekspreis ini akan di evaluasi terlebih dahulu untuk membentuks ebauh nilai asli kita pakai eskrpesi variabel untuk emngevaluasi nilai dari subvariabel firsname. disini firestrname telah mempunyai nilai `handy`. jadi jika kite menggunakna ekspresi varuabel kita simply hanya menggunaakn valuenya saja yaitu pastiu adalah handy
