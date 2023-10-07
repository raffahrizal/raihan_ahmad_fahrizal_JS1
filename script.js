// if
var usia = 25;

if (usia < 17) {
    console.log("Anda adalah seorang anak.");
} else {
    if (usia >= 17 && usia < 45) {
        console.log("Anda adalah seorang dewasa.");
    } else {
        console.log("Anda adalah seorang senior.");
    }
}

// switch
var hari = prompt("Masukkan nama hari dalam seminggu:").toLowerCase();

switch (hari) {
  case "senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  case "rabu":
    console.log("Hari ini adalah Rabu.");
    break;
  case "kamis":
    console.log("Hari ini adalah Kamis.");
    break;
  case "jumat":
    console.log("Hari ini adalah Jumat.");
    break;
  case "sabtu":
    console.log("Hari ini adalah Sabtu.");
    break;
  case "minggu":
    console.log("Hari ini adalah Minggu.");
    break;
  default:
    console.log(" input yang tidak valid.");
    break;
}

// for
for (let i = 0; i <= 7; i++) {
    console.log(i);
  }
  
for (let i = 11; i <= 15; i++) {
    console.log(i);
  }

// while dan do while
let j = 11;
while (j <= 15) {
  console.log(j);
  j++;
}

let k = 11;
do {
  console.log(k);
  k++;
} while (k <= 15);

let counter = 1;

do {
  console.log("Hari ke-" + counter);
  counter++;
} while (counter <= 7);


// functiom
function hitungLuasSegitiga(alas, tinggi) {
    var luas = (alas * tinggi) / 2;
    return luas;
  }
  

  var alasSegitiga = 9;
  var tinggiSegitiga = 14;
  var hasilLuas = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  
 
  console.log("Luas segitiga dengan alas", alasSegitiga, "dan tinggi", tinggiSegitiga, "adalah:", hasilLuas);

  // raihan punya

  