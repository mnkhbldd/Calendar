const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
container.className = "container";

// function createElement(ElementName, ElementClassName, Append, InnerText) {
//   let element = document.createElement(ElementName);
//   element.className = ElementClassName;
//   Append.appendChild(element);
//   element.innerText = InnerText;
// }

// for (let i = 0; i <= 30; i++) {
//   createElement("div", "numbers", container, i + 1);
// }

const dates = [
  {
    date: 1,
    isDone: true,
  },
  {
    date: 2,
    isDone: false,
  },
  {
    date: 3,
    isDone: true,
  },
  {
    date: 4,
    isDone: true,
  },
  {
    date: 5,
    isDone: false,
  },
  {
    date: 6,
    isDone: true,
  },
  {
    date: 7,
    isDone: false,
  },
  {
    date: 8,
    isDone: true,
  },
  {
    date: 9,
    isDone: false,
  },
  {
    date: 10,
    isDone: true,
  },
  {
    date: 11,
    isDone: false,
  },
  {
    date: 12,
    isDone: true,
  },
  {
    date: 13,
    isDone: false,
  },
  {
    date: 14,
    isDone: true,
  },
  {
    date: 15,
    isDone: false,
  },
  {
    date: 16,
    isDone: true,
  },
  {
    date: 17,
    isDone: false,
  },
  {
    date: 18,
    isDone: true,
  },
  {
    date: 19,
    isDone: false,
  },
  {
    date: 20,
    isDone: true,
  },
  {
    date: 21,
    isDone: false,
  },
  {
    date: 22,
    isDone: true,
  },
  {
    date: 23,
    isDone: false,
  },
  {
    date: 24,
    isDone: true,
  },
  {
    date: 25,
    isDone: false,
  },
  {
    date: 26,
    isDone: true,
  },
  {
    date: 27,
    isDone: false,
  },
  {
    date: 28,
    isDone: true,
  },
  {
    date: 29,
    isDone: false,
  },
  {
    date: 30,
    isDone: true,
  },
  {
    date: 31,
    isDone: false,
  },
];

function renderDay(isDone, innerText) {
  const nums = document.createElement("div");
  nums.className = "numbers";
  container.appendChild(nums);

  if (isDone) {
    nums.innerText = innerText;
  } else {
    nums.innerText = "";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.innerHTML =
      '<path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-17h2v6h-2zm0 8h2v2h-2z"/>';
    nums.appendChild(svg);
    nums.classList.add("completed");
  }
}

for (let i = 0; i < dates.length; i++) {
  renderDay(dates[i].isDone, dates[i].date);
}
