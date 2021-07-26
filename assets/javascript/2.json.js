/* Check List
1. Event listener --> OK
2. JSON --> NOW
*/
// ----------------------------------------------------------
//2. JSON
//2.1 JSON là gì?
//- Là một định dạng dữ liệu (chuỗi)
//- JSON (JavaScript Object Notation)
//- JSON thể hiện được các data dạng Number, String Boolean, Null, Array, Object (Trừ function)
//- EnCode/DeCode (Mã hóa/Giải mã) => With JSON: Stringìfy/Parse
//+ Stringify: Từ JavaScript Types --> JSON
//+ Parse: Từ JSON --> JavaScript Types

// Ví dụ về chuỗi json
// var json = '["JavaScript","PHP"]';
// var json = '{"name":"Quyen Dang","age":18}';

// Convert sang JS (Syntax: JSON.parse(<JSON_String>) )
// var a = 'true';//'1','false','null',
// console.log(JSON.parse(a));//true
// console.log(typeof JSON.parse(a));//boolean

// var str = '"Hello"';
// console.log(JSON.parse(str));//Hello
// console.log(typeof JSON.parse(str));//string

// With array and object
// var json = '["JavaScript","PHP"]';
// var arr = JSON.parse(json);
// var json = '{"name":"Quyen Dang","age":18}';
// var object = JSON.parse(json);
// console.log(JSON.parse(json));
// console.log(typeof JSON.parse(json));

// Convert sang JSON (Syntax: JSON.stringify(<JS_Types>) )
// var arr = ['JavaScript', 'PHP'];
// var object = { name: 'Quyen Dang', age: 18 };
// console.log(JSON.stringify(arr));
// console.log(typeof JSON.stringify(arr));
