const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/* let votesInteresting = 23;
let votesMindBlowing = 5;
const text = "Lisbon is a capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindBlowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 40;
const isCorrect = votesFalse === totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533ccc")); */

function calculateFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Impossible year";
}
const age1 = calculateFactAge(2015);
console.log(age1);

console.log(calculateFactAge(2020));
console.log(calculateFactAge(1990));
console.log(calculateFactAge(2037));

let votesInteresting = 20;
let votesMindBlowing = 0;

if (votesInteresting === votesMindBlowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindBlowing) {
  console.log("Mindblowing fact!");
}

// falsy values: 0, '', null, undefined
// truthy values: everything else...
if (votesMindBlowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special...");
}
