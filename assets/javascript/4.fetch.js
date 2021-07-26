/* Check List
1. Event listener --> OK
2. JSON --> OK
3. Promise --> OK
4. Fetch --> NOW
*/
// ----------------------------------------------------------
// 4. Fetch
// Khái niệm Fetch sẽ sử dụng để lấy data từ phía Back End trả về
// 4.1. Front - End: Xây dựng giao diện người dùng
// 4.2. Back - End: Xây dựng logic xử lý + Cơ sở dữ liệu

// API --> Application programing interface
// Cổng giao tiếp giữa các phần mềm

// Backend -> API (URL) --> Fetch --> JSON/XML
// --> JSON.parse --> Javascript types
// --> Render ra giao diện với HTML
// https://jsonplaceholder.typicode.com/ => Test API
// var postAPI = "https://jsonplaceholder.typicode.com/posts";

// // stream
// fetch(postAPI)
//   .then(function (response) {
//     // JSON.parse: JSON --> Javascript types
//     return response.json();
//   })
//   .then(function (posts) {
//     var htmls = posts.map(function (post) {
//       return `<li>
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       </li>`;
//     });

//     var html = htmls.join(",");
//     document.getElementById("post-block").innerHTML = html;
//   })
//   .catch(function (error) {
//     alert("Có Lỗi!!!");
//   });

// 4.3.JSON Server: API Server (Fake) <=> Mock API (Dùng khi chưa biết backend)
// Sử dụng file Readme.md rồi tiếp tục
// var courseApi = "http://localhost:3000/course";

// fetch(courseApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (courses) {
//     console.log(courses);
//   });

// 4.4 Postman
// 4 Action: CRUD
// - Creat: Tạo mới --> POST
// - Read: Lấy dữ liệu --> GET
// - Update: Chỉnh sửa --> PUT/PATCH
// - Delete: Xóa --> DELETE

// 4.5 Example (course manager course.js)
