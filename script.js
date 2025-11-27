const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

loadFacts();

// Load data from Supabase
async function loadFacts() {
  // Constant API variables
  const BASE_URL = "https://pkbjkvovgkqebxwmbjwb.supabase.co/rest/v1/facts";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrYmprdm92Z2txZWJ4d21iandiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODA3MjQsImV4cCI6MjA3OTc1NjcyNH0.2ZTkIcaw-lLQepttUvqleom_V8PZ_R1amcxzbsJoG0s";

  const response = await fetch(BASE_URL, {
    headers: {
      apikey: API_KEY,
      authorization: `Bearer ${API_KEY}`,
    },
  });
  const data = await response.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Meynard</li>");

  const htmlArray = dataArray.map((fact) => {
    const category = CATEGORIES.find((c) => c.name === fact.category);
    const color = category ? category.color : "#78716c"; // fallback

    return `
    <li class="fact">
      <p>
        ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${color}">
        ${fact.category}
      </span>
    </li>
    `;
  });
  console.log(htmlArray);
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
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

/* function calculateFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}
const age1 = calculateFactAge(2015);
console.log(age1);
console.log(calculateFactAge(2020));
console.log(calculateFactAge(2037));

const calculateFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;
console.log(calculateFactAge2(2015));
console.log(calculateFactAge2(2037)); */

/* let votesInteresting = 20;
let votesMindBlowing = 5;

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

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindBlowing;

const message =
  votesFalse < totalUpvotes
    ? "The fact is true"
    : "Might be false, check more sources...";
// alert(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calculateFactAge(
  2015
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}`;
console.log(str); */

/* // Array
const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact[0]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact; // structuring
console.log(createdIn);

// creating new array with spread operator
const newFact = [...fact, "society"];
console.log(newFact);

// Loop/iterate over array
// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// Map an array
// const timesTen = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// console.log(timesTen);

// Map with arrow function
const timesTen = [2, 4, 6, 8].map((el) => el * 10);
console.log(timesTen);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calculateFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const factAges = initialFacts.map((el) => calculateFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));

// Object
const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact "${
      this.text
    }" is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(isCorrect);
console.log(factObj.createSummary()); */
