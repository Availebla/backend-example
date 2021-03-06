//syntax: $.getJSON(url, [data], [callback]);
//AJAX library
// const b1 = document.getElementById("b1");
// b1.addEventListener("click", getFromServer);

// $(".mypanel").html("Hello there!")

let names = ["Dixant", "Jon", "Keith"];

let details = {
  first_name: "Dixant",
  last_name: "Mittal",
};

let users = [
  {
    first_name: "Dixant",
    last_name: "Mittal",
  },
  {
    first_name: "Jon",
    last_name: "Scheele",
  },
];

// $(".mypanel").html("Hello, " + names[0]);
// $(".mypanel").html("Hello, " + details.last_name);
// $(".mypanel").html("Hello, " + users[0].last_name);

// <ul>
//   <li>Dixant</li>
//   <li>Jon</li>
//   <li>Keith</li>
// </ul>;

// let code = "<ul>";
// names.forEach((name) => {
//   code = code + "<li>" + name + "</li>";
// });
// code = code + "</ul>";

let code = "<ul>";
users.forEach((user) => {
  code += `<li> First Name: ${user.first_name} | Last Name: ${user.last_name} </li>`;
});
code += "</ul>";

$(".mypanel").html(code);

// // 1.normal functions
// function add(x, y) {
//   return x + y;
// }
// console.log(add(2,3));

// // 2.anonymous functions
// let add = function (x, y) {
//   return x + y;
// };
// console.log(add(4,5));

function add_async(x, y, cb) {
  let sum = x + y;
  cb(sum);
}
// // 3.arrow functions
let add = (x, y) => {
  return x + y;
};

let subtract = (x, y) => {
  return x - y;
};

// Callback Function using the above two arrow functions as inputs
function perform_operation(x, y, operation) {
  return operation(x, y);
}

console.log(perform_operation(2, 3, add));
console.log(perform_operation(2, 3, subtract));

//Synchronous Code execution example below
console.log("Hello");
let sum = add(2, 3);
console.log("sum: " + sum);

//Asynchronous Code execution using callback function
console.log("Hello");
add_async(2, 3, function (sum) {
  console.log("Sum: " + sum);
});
