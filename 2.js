//OBJECT METHOD
//jadi kita telah mempelajari bahwa object sama sperti array yang dapat menampung banyak value termasukl array dan juga object lagi.

//fungsi sebenarnya hanyalah type value juga, dan karena fungsi adalah value maka kita bisa masukan fungsi ke dalam sebauh object yang maan dipasangkan dengan key-value pairs yang mana nilai adalah fungsi itu sendiri , dan itu berati kita sebenarnyad apat mengugnakan fungsi itu

//ktia bisa analogiklan bahwa key ini adalah sebuah variuabel di dalam objek

const handy = {
  //1 bracket penuh ini juga merupakan sebuah ekspresi dari variabel handy yang berupa objek dan didalam objek kita buat ekspresi lagi untuk membuat sebuah value dari tiap key nya
  firstName: `handy`, //ini kan berarti sebuah value dari hasil eskpresi `handy`
  lastName: `arifin`,
  birthYear: 2000 * 1 - 1000 + 1000, //ini kan berarti value yang ada didalam burthyear adalkah 2000 dari hasil ekspresi 2000*1000
  friends: [`funny`, `boo`, `gebi`, `cesi`],
  job: `software engineer`,
  calcage: function (currentYear) {
    // console.log(this);
    this.age = currentYear - this.birthYear;
    return this.age;
  },
};

//bisa kita lihat disini bahwa kita bisa mengaskes vairabel dalam objek menggunaakn this. yang artinya this ini sama saja dengna handy.birthyear atua objekini.namakey. dengan ini kita bisa gunakan key di dalam fungsi untuk tetap dry dan tiodak perlu adnaya argumnen. jadi secara otmatis ketiak kita emngugnakna this di dalam fungsi maka dia akan mencarii proerty di dalam objeknya yang mempunyai method juga.
// sebagia contoh method di obejk handy berati this nya. dan this ini secara otomatis mencari semua vairabel yang mau digunakan persis didalam objeknya. jadi objek ada poerty dan ada method method ini ketika ada this didalam fungsi methodnya maka akan emncari proertry di dalam objek
//this.age ini maksudanya adalah ketika kita menjalanakna sebuah fungsi maka this.age akan menjadi proerty baru yang mempunyai value dari hasil ekspresi currentYear - this.Birthyeat. dan maksudnay juga adalah ktika kita mengaktifakn fungsi calcage lebih dari satu kali berarti kita mengoverwrite value nya berdasarkan argumen untuk current year

//jadi didalam sebuah objek kita bisa membuat sebuah fungsi dan ini dinamakan dengna sebuah method fungis ini sebanrnya sama saja seperti kita membuat sebuah fungsi dari variabel biasa speerti:
const calcage = function (currentYear, birthYear) {
  return currentYear - birthYear;
};
//pembuatan fungsi ini sama saja yang amna nilai dair vairable calcage di global scope dan di block scope objek adalah anonym fungsi
//tapi hanay fucniton ekspression saja yang bisa dibuat dan di attach sebagai method di objeck
//jadi karena fungis ini adalah bagian dari value berati kita bisa buat eksrpesi yang menghasilkan fungsi di dalam vairabel dan karena object berbasis key-value pairs yang mana mempunyai variabel maka kita bisa buat fungsi sebagai nilai di key objek. jadi ini sepreti ada poeprrty dari objek yang ditugaskan seabgai method atua fungsi

console.log(handy.calcage(2025));
const age = `age`;
console.log(handy[`calc` + age](2030));
//jadi cara membacanya adalah dari kiri kekanan, yang mana handy adalah variabel objek setelah itu ada braket dan kita gunakan eskrpesi untuk menghasilkan string yang namanya sama dengan proeprty. setelah itu gunakan invoking dan tambhaakn ekspresi lagi 2030 setalh itu 2030 di evaluasi dan dimasukan ke variable loka fungsi setelah itu ada pengembalian sebuah fungsi return berupa 30. dan 30 ini di evaluasi dan masuk ke dalamn parameter lokal fungis .log dan .log akan menampilkan nya ke developer console

//disini kita juga melihat bahwa kita hanay perlu memasukan 1 arugmen karena handy.calcage(2025) yang berarti memanggil method calcage di dalam objek handy dan simply keyword this yang ada di dalam emthod akan mereference juga ke dalam objek handy

//kita juga bisa menghitung dan emnyimpannya langsung di objek dan kemudian ketika kita membtuhkannya kita bisa bisa mengambil usia di properti dari objek

console.log(handy);
const myAge = handy.calcage(2025);
console.log(myAge);

const jonas = {
  firstName: `jonas`,
  lastName: `Schemedtman`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`michael`, `peter`, `steven`],
  hasDriverLicense: true,
  calcage: function (currentYear) {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcage(2025)}-year old ${
      this.job
    }, and he has ${
      this.hasDriverLicense ? `a driver license` : `no driver's license`
    }`;
  },
};

//ketika ada keyword this di fucntion dan kita aktifkan itu berarti this ini bearati nama variabel kita sendiri

console.log(jonas.getSummary());
console.log(jonas);

//dalam array seperti
const nama = [`handy`, `lydia`, `fanny`];
nama.push(`janice`);
//bisa kita lihat bahwa array juga merukana type data object juga yang mana kita bisa menggunakan nama.push yang berarti kita bisa manipulasi mereka dan bisa bayangkan juga berati dari objek nama mempunyai  built in method yaitu push
