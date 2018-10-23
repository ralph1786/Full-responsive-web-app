import jump from "../node_modules/jump.js/dist/jump.module.js";

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

button1.addEventListener("click", function() {
  jump(".target1", {
    duration: 1500
  });
});

button2.addEventListener("click", function() {
  jump(".target2", {
    duration: 1500,
    offset: -300
  });
});

button3.addEventListener("click", function() {
  jump(".target3", {
    duration: 1500,
    offset: -110
  });
});

button4.addEventListener("click", function() {
  jump(".target4", {
    duration: 1500,
    offset: -100
  });
});

button5.addEventListener("click", function() {
  jump(".target5", {
    duration: 2000,
    offset: -120
  });
});
