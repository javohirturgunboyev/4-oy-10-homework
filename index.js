// ForEach metodi yordamida ishlanadigan masalalar

// 1-masalasi


// function elementlarniKvadratgaOshirish(massiv) {
//     let yangiMassiv = [];
//     massiv.forEach(element => {
//       yangiMassiv.push(element * element); 
//     });
//     return yangiMassiv;
//   }
  
//   let originalMassiv = [1, 2, 3, 4, 5];
//   let kvadratMassiv = elementlarniKvadratgaOshirish(originalMassiv);
  
//   console.log("Original massiv:", originalMassiv);
//   console.log("Kvadrat massiv:", kvadratMassiv);



//   2-masalasi

// function musbatlarniSaqlash(massiv) {
//     let yangiMassiv = [];
//     massiv.forEach(element => {
//       if (element > 0) {
//         yangiMassiv.push(element);
//       }
//     });
//     return yangiMassiv;
//   }
  
//   let originalMassiv = [-2, 1, -3, 4, 5, -6, 7];
//   let musbatMassiv = musbatlarniSaqlash(originalMassiv);
  
//   console.log("Original massiv:", originalMassiv);
//   console.log("Musbat massiv:", musbatMassiv);



// 3-masalasi

// let massiv = [1, 2, 3, 4, 5];

// massiv.forEach(element => {
//   let natija = element * 2;
//   console.log(natija);
// });




// 4-masalasi



// filter metodi yordamida ishlanadigan masalalar


// 1-masalasi


// function musbatRaqamlar(massiv) {
//     return massiv.filter(x => x > 0);
//   }
  
//   let berilganMassiv = [-2, 5, 0, -8, 10, -3, 7];
//   let yangiMassiv = musbatRaqamlar(berilganMassiv);
//   console.log(yangiMassiv);
  


// 2-masalasi

// function juftSonlar(massiv) {
//     return massiv.filter(x => x % 2 === 0);
//   }
  
//   let berilganMassiv = [3, 7, 2, 8, 4, 5];
//   let yangiMassiv = juftSonlar(berilganMassiv);
//   console.log(yangiMassiv);
  




// 3-masalasi


// function kambelgistringlar(massiv) {
//     return massiv.filter(x => x.length < 5);
//   }
  
//   let berilganMassiv = ["apple", "banana", "dog", "orange", "kiwi", "grape", "melon", "end" ];
//   let yangiMassiv = kambelgistringlar(berilganMassiv);
//   console.log(yangiMassiv);
  


// 4-masalasi


// function kattaYoshlar(massiv) {
//     return massiv.filter(x => x > 18);
//   }
  
//   let berilganMassiv = [15, 22, 18, 30, 10, 25];
//   let yangiMassiv = kattaYoshlar(berilganMassiv);
//   console.log(yangiMassiv);
  



// map metodi yordamida ishlanadigan masalalar


// 1-masalasi


// let massiv = [1, 2, 3, 4, 5];

// let yangiMassiv = massiv.map(element => element * element);

// console.log(yangiMassiv); 



// 2-masalasi


// let massiv = [1, 2, 3, 4, 5];

// let yangiMassiv = massiv.map(element => element + 5);

// console.log(yangiMassiv); 



// 3-masalasi


// let massiv = ["salom", "hayr", "yangi", "massiv"];

// let yangiMassiv = massiv.map(string => string.toUpperCase());

// console.log(yangiMassiv); 




// 4-masalasi



// let berilganMassiv = [1, 2, 3, 4, 5];

// let hisoblash = (raqam) => raqam * raqam;

// let yangiMassiv = berilganMassiv.map(hisoblash);

// console.log(yangiMassiv); 






// some/every metodi yordamida ishlanadigan masalalar

// 1-masalasi




// const berilganMassiv = [1, 2, 3, -4, 5];

// const manfiyBorMi = berilganMassiv.some(element => element < 0);

// const hechManfiyMi = berilganMassiv.every(element => element >= 0);

// console.log("Hech bo'lmaganda bitta manfiy son bor: ", manfiyBorMi);
// console.log("Hech bo'lmaganda bitta manfiy son yo'qligi: ", !hechManfiyMi);





// 2-masalasi


// const berilganMassiv = ['salom', 'hayr', 'bugun', 'sizni', 'tabriklayman'];

// const borMi = berilganMassiv.some(element => typeof element === 'string' && element.length > 10);

// const hechBoLmaganMi = berilganMassiv.every(element => typeof element !== 'string' || element.length <= 10);

// console.log("Hech bo'lmaganda bitta string uzunligi 10 ta belgidan katta bo'lgan string bor: ", borMi);
// console.log("Hech bo'lmaganda bitta string uzunligi 10 ta belgidan katta bo'lgan string yo'qligi: ", !hechBoLmaganMi);




// umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy, umumiy

// 1-masalasi


// let berilganMassiv = [1, 2, 3, 4, 5];

// let qidiriladiganElement = 3;

// let mavjudMi = berilganMassiv.includes(qidiriladiganElement);

// console.log("Berilgan massivda", qidiriladiganElement, "mavjud: ", mavjudMi);



// 2-masalasi



// let berilganMassiv = [1, 2, 3, 4, 5, 3];

// let qidiriladiganElement = 3;

// let birinchiUchraganIndeks = berilganMassiv.indexOf(qidiriladiganElement);

// console.log("Berilgan massivda", qidiriladiganElement, "ning birinchi uchragan indeksi: ", birinchiUchraganIndeks);


// 5-masalasi



// let berilganMassiv = [5, 12, 8, 15, 3];

// let shart = (element) => element > 10;

// let birinchiIndeks = berilganMassiv.findIndex(shart);

// console.log("Shartga mos keladigan birinchi elementning indeksi: ", birinchiIndeks);




// 7-masalasi



// let berilganMassiv = [5, 12, 8, 15, 3];

// let shart = (element) => element > 10;

// let oxirgiIndeks = berilganMassiv.findLastIndex(shart);

// console.log("Shartga mos keladigan oxirgi elementning indeksi: ", oxirgiIndeks);
 



// 9-masalasi



// let berilganMassiv = [5, 12, 8, 15, 3];

// let oshishTartibidaSaralanganMassiv = berilganMassiv.slice().sort((a, b) => a - b);

// console.log("Massiv o'sish tartibida saralandi: ", oshishTartibidaSaralanganMassiv);



// 11-masalasi


// let berilganMassiv = [5, -3, 12, 0, -8, 15, -2];

// let musbatQiymatlar = berilganMassiv.filter(element => element > 0);

// console.log("Musbat qiymatlar: ", musbatQiymatlar);



// 13-masalasi


// let berilganMassiv = [5, -3, 12, 0, -8, 15, -2];

// let manfiyBorMi = berilganMassiv.some(element => element < 0);

// console.log("Berilgan massivda manfiy sonlar bor: ", manfiyBorMi);



// 14-masalasi


// let berilganMassiv = [5, 3, 12, 0, 8, 15, 2];

// let barchaMusbatMi = berilganMassiv.every(element => element > 0);

// console.log("Berilgan massivdagi barcha sonlar musbat: ", barchaMusbatMi);


// 15-masalasi


