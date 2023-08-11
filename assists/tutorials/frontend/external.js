//alert("denemöe999")
/*
sd
f
sdf
sd
f
sd */
// alert("pop-up1");
// window.alert("pop-up2");
// document.writeln("Sayfada göster<br/>");
// window.document.writeln("Sayfada göster");

// console.log("console log");
// console.error("console log");
// console.warn("console log");
// console.info("console log");

// single thread

// var degiskenAdi=44;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// var degiskenAdi55=44.23;
// console.log(degiskenAdi55);
// console.log(typeof degiskenAdi55);

// var $degiskenAdi55="Merhabalar Güzel insanlar";
// console.log($degiskenAdi55);
// console.log(typeof $degiskenAdi55);

// var _$degiskenAdi55=true;
// console.log(_$degiskenAdi55);
// console.log(typeof _$degiskenAdi55);

//var 44&~_$degiskenAdi55=true;

// var _$degiskenAdi55=[];
// var _$degiskenAdi55={};

// Hoisting
// carName="Audi";
// var carName;

///////////////////////////////////////////// 
// let
// let deneme=44;
// console.log(deneme);
// deneme=66;
// console.log(deneme);

// const
// const deneme99=14525;
// deneme99=66666;

///////////////////////////////////////////// 
// Operatör
// + - * / % ++ --
// &&=VE ||=VEYA  ! DEĞİL
// let number1=12;
// let number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// =   ATAMA
// ==  EŞİT (Türüne bakmadan)
// === EŞİT (Türüne bakarak)

///////////////////////////////////////////// 
// let userName=Number(prompt("Lütfen sayı giriniz"));
// console.log(userName);

///////////////////////////////////////////// 
// NaN: Not A Number
// console.log(3/4);
// console.log(3/"asd");

// // infinity
// console.log(0/5);
// console.log(5/0);

// // undefined
// let data;
// console.log(data);

// new 
// null
// zero
/////////////////////////////////////////////
//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?
let s1=Number(prompt("sayi 1 gir : "));
let s2=Number(prompt("sayi 2 gir : "));
let sum=s1+s2;
console.log(sum);
//Örnek-2
/* 
Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 
*/
let s3=Number(prompt("derece  gir : "));
let s4=(s3*9/5)+32;
console.log(s4);

//Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
let x=Number(prompt("x gir : "));
let k=Number(prompt("k  gir : "));
let hesapla=(3*x)+(4*k);
console.log(hesapla);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
console.log(4 + 3 * 2 * (3 / (3 - 1) * 6 + 9 / 1 + (3 / 3)));


///////////////////////////////////////////// 
// Math 
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.abs(-25));
// console.log(Math.pow(6,2));

// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

// console.log(Math.min(4,5,6,1,1000));
// console.log(Math.max(4,5,6,1,1000));

// console.log(Math.sin(45));
// console.log(Math.asin(1));

// console.log(Math.floor(Math.random()*9+1));

// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
console.log(Math.abs(-5.9));
// 2-yuvarlama yapsın  6.0
console.log(Math.ceil(Math.abs(-5.9)));
// 3-karesini alsın 36.00
console.log(Math.pow(Math.round(Math.abs(-5.9))));
// 4-karekök alsın 6.0
console.log(Math.sqrt(Math.round(Math.abs(-5.9))));
// 5-yuvarlama yapsın 6.0
console.log(Math.round(Math.round(Math.abs(-5.9))));
// 6-)çıkan sonucu 5 bölsün 6/5=1
let yeni=Math.round(Math.ceil(Math.abs(-5.9)))/5;
console.log(yeni);
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
let eski=-5.9;
let kücük=(Math.min(yeni,eski));
console.log(kücük);
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
if(kücük%2==0){
kücük=kücük+5;
}
else kücük=kücük+3;
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?

const sayi = prompt("Bir sayi giriniz:");
const numara = parseInt(sayi);
  if (numara < 0) {
    console.log("Girilen sayı negatif.");
} else if (numara > 0) {
    console.log("Girilen sayı pozitif.");
} else if(numara==0) {
    console.log("Girilen sayı sıfır.");
}
else console.log("Geçersiz sayı girdiniz.")




// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
const password = prompt("Password gir");
const repassword = prompt("Repassword gir");

if (password === repassword) {
    console.log("aynı");
} else {
    console.log("birbirine uymadı");
}


///////////////////////////////////////////// 
// string 

///////////////////////////////////////////// 
// Function 

///////////////////////////////////////////// 
// conditional 

///////////////////////////////////////////// 
// Loop
// break return continue

///////////////////////////////////////////// 
// Dizi

///////////////////////////////////////////// 
// Object 

///////////////////////////////////////////// 
// callback, promise, asyn-await