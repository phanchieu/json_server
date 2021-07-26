## How to use Json Server

# Doc: https://github.com/typicode/json-server

# Require: NodeJS

# Create package.json

$ npm init

# Install Local JSON Server

$ npm i json-server

# Create a database.json file with some data

{
"users": [
{
"id": 1,
"name": "abc",
"phone": "0000000",
"Date_of_birth": "11/11/2021",
"email": "abc@gmail.com",
"password": "123123",
}
]
}

# Run JSON Server

# 1.Add This Code: package.json/scripts

"start":"json-server --watch database.json",

# 2. Run Server

$ npm start
