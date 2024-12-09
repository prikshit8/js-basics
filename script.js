// document.getElementById is just a way
// to access html element in js
const button = document.getElementById("btn");
const inputEle = document.getElementById("input-name");

// inputEle.addEventListener("change", function () {
//   alert(inputEle.value);
// });

inputEle.addEventListener("input", function () {
  console.log(inputEle.value);
});

button.addEventListener("click", function () {
  //   alert("button clicked");
  window.location.href = "https://www.google.com";
});

// button.addEventListener('mouseenter',function(){
//     button.style.backgroundColor = 'red';
// })

// button.addEventListener('mouseleave',function(){
//     button.style.backgroundColor = 'white';
// })

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "white";
});

// const div1 = document.getElementById('div-1');
// console.log(div1);
