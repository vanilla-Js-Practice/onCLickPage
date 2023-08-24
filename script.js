document.getElementById("button").addEventListener("click", function () {
  alert("Hi it's Vanilla");
});

document.getElementById("app").innerHTML = `
<h1>Hi Its Vanilla Js</h1>
<p>Ready To Learn and Explore the fullest!!</p>
`;

document.getElementById("print").addEventListener("click", function () {
  document.getElementById(
    "name"
  ).innerHTML = `Hi Its Kishor the Marvel and Maverick`;
});

document.getElementById("erase").addEventListener("click", function () {
  document.getElementById("name").innerHTML = ``;
});
