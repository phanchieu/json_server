/* Check List
1. Event listener --> OK
2. JSON --> OK
3. Promise --> NOW
*/
// ----------------------------------------------------------
//3. Promise
//   - Sync => OK
//   - Async => OK
//   - Pain (Nỗi đau nào sinh ra nó) => OK
//   - Lý thuyết, cách hoạt động => OK
//   - Thực hành, ví dụ
//   - Ứng dụng thực tế của Promise

// Sync/Async
// Example:

// sleep
// setTimeout(() => {
//   console.log(1);
// }, 1000);

// console.log(2);

// => Sync (Đồng bộ) là chạy theo luồng từ trên xuống dưới cái gì vào trước thì ra trước
// => Async (Bất đồng bộ) là không chạy theo luồng từ trên xuống dưới (bẻ gãy luồng)
// và lý do chính là không biết khi nào nó xong
// When Async:
// setTimeout, setInterval, fetch(call API),
// XMLHttpRequest, file reading, request animation frame
// => Để khi nào chúng ta biết được các thao tác này khi nào là xong
// thì JS đã cung cấp cho chúng ta 1 khái niệm callback để xử lý các thao tác async

//3.1. Promise (Pain)
// Callback hell
// Pyramid of doom
// Example:
// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//       setTimeout(function () {
//         console.log(4);
//         setTimeout(function () {
//           console.log(5);
//           setTimeout(function () {
//             console.log(6);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//3.2. Promise (concept)
// Khi gặp callback hell thì nên xài promise
// (nên nhớ nó k0 thay thế callback mà là nó giải quyết vấn đề callback hell)
// 1.new Promise
// 2.Executor

// Promise có 3 state (tình trạng/trạng thái)
// 1.Pending (Chờ) => Gây ra Memory Leak
// 2.Fulfilled => có trả về resolve (Thành Công)
// 3.Rejected => có trả về reject (Thất bại)

// Define Object Constructor Promise (like: Number,String,Array,Object,...)
// Truyền vào 1 function với object constructor là promise
// var promise = new Promise(
//   // Executor function: nghĩa là function sẽ được thực thi khi Promise được gọi
//   // và được gọi trước biến promise được nhận lại ở trên
//   // Trả về 2 tham số khi nó được thực thi: resolve (giải quyết), reject (từ chối) (2 tham số đều là hàm)
//   function (resolve, reject) {
//     // Logic
//     // Thành công: resolve()
//     // Thất bại: reject()
//     // Note: luôn luôn phải gọi 1 trong 2 thằng nếu k0 nó sẽ bị treo (Memory Leak)

//     // Fake Call API
//     // resolve([{
//     //   id: 1,
//     //   name: 'JavaScript',
//     // }]);

//     // Fake Error
//     reject('Có Lỗi');
//   }
// );

// Sử dụng Promise
// promise
//   .then(function (response) {//Khi resolve được gọi thì callback của then sẽ được gọi
//     // Nếu lời hứa được chấp thuận => success
//     console.log('Successfully!');
//     console.log(response);
//   })
//   .catch(function (error) {//Khi reject được gọi thì callback của catch sẽ được gọi
//     // Bắt lỗi khi reject
//     console.log('Failure!!!');
//     console.log(error);
//   })
//   .finally(function () {//Khi 1 trong 2 ông resolve hoặc reject được gọi thì callback của finally sẽ được gọi
//     // Khi chạy xong promise
//     console.log('Done!');
//   });

// Trả lời PV:
/*
Em có biết khái niệm Promise k0 => Có => Trình bày luôn:
  Promise là 1 khái niệm sinh ra để xử lý những thao tác bất đồng bộ (async)
  và trước khi có promise chúng ta sẽ sử dụng callback và callback sẽ xảy ra
  1 cái vấn đề là callback hell nó sẽ bị sâu vào khó nhìn, rối loạn, khó hiểu
  thế nên thằng Promise được sinh ra từ phiên bản JS mới hơn phiên bản ES6
  và chúng ta có thể sử dụng nó để khắc phục tình trạng callback hell
  để giúp chúng ta viết code không bị sâu vào dễ đọc dễ hiểu hơn
*Nói Kĩ Hơn:
  Để tạo ra được 1 promise thì các bạn sử dụng từ khóa new Promise và trong
  object constructor của nó ta sẽ truyền vào 1 Executor function và khi Executor
  function chúng ta được thực thì chúng ta sẽ nhận được 2 tham số dạng hàm
  1 là resolve, 2 là reject chúng ta call resolve khi thao tác xử lý của chúng ta thành công
  ,call reject khi thao tác xử lý của chúng ta thất bại.

  Khi chúng ta sử dụng thằng Promise thì đối tượng promise được tạo ra chúng ta sẽ
  sử dụng qua các method là .then và .catch, then và catch đều được nhận các callback
  function và then được thực thi khi Promise của chúng ta resolve và catch được gọi
  khi Promise của chúng ta bị reject()

*/

//3.3. Promise (chain)
// var promise = new Promise(function (resolve, reject) {
//   resolve();
// });

// Promise: có thể sử dụng nhiều then nối nhau khi resolve được call
// và mỗi then đều có thể return về 1 data để then kế tiếp có thể sử dụng
// thay cho việc sử dụng callback hell 1 cách dày đặc đi sâu và khó đọc nó thẳng hàng và chạy tuần tự từ trên xuống
// Ông đằng sau cần data từ ông đằng trước để làm việc tiếp
// promise
//   .then(function () {
//     return 1;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 3;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log("Failure!!!");
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Done!");
//   });

// Nếu Ông trước k0 return thì data của ông sau sẽ là undefined
// promise
//   .then(function () {})
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log("Failure!!!");
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Done!");
//   });

// Nếu return về 1 Promise hay 1 function return về Promise
// thì khi Promise được thực hiện và trả về và then kế tiếp mới được chạy
// promise
//   .then(function () {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve([1, 2, 3]);
//       }, 3000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log("Failure!!!");
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Done!");
//   });

// Bài toán mỗi 1s in ra 1 số
// function sleep(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms); //sau bao nhiêu ms thì resolve
//   });
// }

// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000); //gọi hàm trả về 1 promise sau 1s
//   })
//   .then(function () {
//     console.log(2);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   });

// TH bị reject khi sử dụng Promise
// function sleep(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms); //sau bao nhiêu ms thì resolve
//   });
// }

// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000); //gọi hàm trả về 1 promise sau 1s
//   })
//   .then(function () {
//     console.log(2);
//     return new Promise(function (resolve, reject) {
//       reject("Co Loi!"); //reject này sẽ bị catch bắt được
//     }); //Khi bị reject sẽ k0 thực hiện tiếp next then
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleep(1000);
//   })
//   .catch(function (error) {
//     //reject bị catch ở đây
//     console.log(error);
//   });

// 3.4. Promise Methods (resolve, reject ,all)
/*
  1. Promise.resolve
  2. Promise.reject
  3. Promise.all
*/

// var promise = new Promise(function (resolve, reject) {
//   // Logic
//   // resolve("Success!");
//   //
//   reject("Some thing wrong!");
// });

// Thư viện: output luôn luôn là 1 promise
// var promise = Promise.resolve("Success!"); //luôn vào then trừ phi trong resolve có Promise reject
// var promise = Promise.reject("Some thing wrong!"); //luôn vào catch

// promise
//   .then(function (result) {
//     console.log("result:", result);
//   })
//   .catch(function (error) {
//     console.log("error:", error);
//   });

// Thay vì mất 4s để chạy nối tiếp 2 promise thì nên sử dụng Promise.all
// để chạy song song thì chỉ mất 2s là chạy xong cả 2
// Example:
// var promise1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([1]);
//   }, 1000);
// });

// var promise2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve([2, 3]);
//   }, 2000);
// });

// var promise3 = Promise.reject("Something went wrong!");

//giúp chạy song song các Promise để Promise nào trước hay sau đều ok
// var promise = Promise.all([promise1, promise2]);

// promise
//   .then(function (result) {
//     var result1 = result[0];
//     var result2 = result[1];

//     console.log(result1.concat(result2));
//   })
//   .catch(function (error) {
//     console.log("error:", error);
//   });

// Sử dụng ES6
// promise
//   .then(function ([result1, result2]) {
//     console.log(result1.concat(result2));
//   })
//   .catch(function (error) {
//     console.log("error:", error);
//   });

// TH có 1 ông reject thì Promise.all sẽ bỏ qua hết mấy promise resolve kia
// và đẩy ra Promise reject đó
// Promise.all([promise1, promise3])
//   .then(([result1, result2]) => console.log(result1.concat(result2)))
//   .catch((error) => {
//     console.log(error);
//   });

// 3.5. Thực hành, ví dụ (Chức năng comment)
// var users = [
//   {
//     id: 1,
//     name: "Kien Dam",
//   },
//   {
//     id: 2,
//     name: "Quyen Dang",
//   },
//   {
//     id: 3,
//     name: "Hung Dam",
//   },
//   // ...
// ];

// var comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: "Anh Quyen chua ra video :(",
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: "Vua ra xong em oi!",
//   },
//   {
//     id: 3,
//     user_id: 1,
//     content: "Cam on anh ^^",
//   },
// ];

// 1.Lấy comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Fake API

// Kiến thức cần có
// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM

// function getComments() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(comments);
//     }, 1000);
//   });
// }

// function getUsersByIds(userIds) {
//   return new Promise(function (resolve, reject) {
//     var result = users.filter(function (user) {
//       return userIds.includes(user.id); //Lấy ra user có id nằm trong userIds (includes = bao gồm)
//     });

//     setTimeout(function () {
//       //tạo độ trễ
//       resolve(result);
//     }, 1000);
//   });
// }

// Callback hell
// Promise hell
// Async / Await

// getComments()
//   .then(function (comments) {
//     var userIds = comments.map(function (comment) {
//       return comment.user_id;
//     });

//     return getUsersByIds(userIds).then(function (users) {
//       return {
//         users: users,
//         comments: comments,
//       };
//     });
//   })
//   .then(function (data) {
//     var commentBlock = document.getElementById("comment-block");

//     var html = "";
//     data.comments.forEach(function (comment) {
//       var user = data.users.find(function (user) {
//         return user.id === comment.user_id;
//       });

//       html += `<li>${user.name}: ${comment.content}</li>`;

//       commentBlock.innerHTML = html;
//     });
//   });
