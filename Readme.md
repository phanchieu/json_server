## How to use Json Server

# Doc: https://github.com/typicode/json-server

# Require: NodeJS

# Create package.json

$ npm init

# Install Local JSON Server

$ npm i json-server

# Create a database.json file with some data

{
"course": [
{
"id": 1,
"name": "Kiến thức cơ bản, tổng quan cho người mới bắt đầu",
"description": "Kiến thức cơ bản dành cho dân IT, không phân biệt bạn theo Front-end, Back-end hay Devops"
}
]
}

# Run JSON Server

# 1.Add This Code: package.json/scripts

"start":"json-server --watch database.json",

# 2. Run Server

$ npm start
