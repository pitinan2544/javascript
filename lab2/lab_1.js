
// Variable
// lab 1
//     let a = 0;
//     a++
//     a += 3;
//     a *= 17;
//     a %= 7;
//     console.log(a)
//     ans 5

// LAB2
// let a = 1;
// let b = 2;
// let c = a++;
// let d = ++c;
// let e = ++d + d++ + d;
// console.log(b);
// ans 2

//                          Comparison
// String Compare : Example
// console.log('A' < 'Z'); // true
// console.log('A' < 'a'); // true
// console.log('coco' < 'code'); // true
// console.log('1' < '2'); // true
// console.log('Be' < 'Bee'); // true

// Lab1 
// console.log('1' > 4);
// console.log('' <= 1);
// console.log('apple' > 'pineapple');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN !== 2);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// ans 
// VM708:1 false
// VM708:2 true
// VM708:3 false
// VM708:4 true
// VM708:5 false
// VM708:6 true
// VM708:7 false
// VM708:8 false

//                  Logical Operator

// LAB : Guest Result
// alert(null || 2 || undefined);
// ans 2
// alert(alert(1) || 2 || alert(3));
// ans 1 && 2
// alert(1 && null && 2);
// ans null
// alert(alert(1) && alert(2));
// ans 1 และ undefined
// alert(null || (2 && 3) || 4);
// ans 3


// โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน
// if (-1 || 0) alert('first');
// ans first
// if (-1 && 0) alert('second');
// ans ไม่ทำงาน
// if (null || (-1 && 1)) alert('third');
// ans third