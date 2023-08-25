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

document.getElementById(
  "25Aug23"
).innerHTML = `<h1>Hey Kishor Welcome You are the captain of this ship.....</h1>`;
document
  .getElementById("25Aug23buttonShow")
  .addEventListener("click", function () {
    document.getElementById("25Aug23").innerHTML =
      `Today is` +
      new Date() +
      `And I am feeling very excited about the day,I will learn a lot today`;
  });

document
  .getElementById("25Aug23buttonHide")
  .addEventListener("click", function () {
    document.getElementById("25Aug23").innerHTML =
      "I know you completed today's Task All the best for your future endeavour";
  });
