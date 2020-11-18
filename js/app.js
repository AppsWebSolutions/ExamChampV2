const container = document.querySelector(".container");
const examSegments = [
  {
    name: "Engineering Entrance Exams",
    image: "images/engineering.jpg",
    altTag: "Engineering Exam Image"
  },
  {
    name: "Medical Entrance Exams",
    image: "images/medical.jpg",
    altTag: "Medical Exam Image"
  },
  {
    name: "Diploma Engg Entrance Exams",
    image: "images/polytechnic.jpg",
    altTag: "Diploma Exam Image"
  },
  {
    name: "All Board Exams",
    image: "images/board.jpg",
    altTag: "Board Exam Image"
  },
  {
    name: "Central & State Govt Job Exams",
    image: "images/govtJob.jpg",
    altTag: "Govt Job Exam Image"
  }
];
const showExamSegments = () => {
  let output = "";
  examSegments.forEach(
    ({ name, image, altTag }) =>
      (output += `
              <div class="card">
                <a href="#" class="card--link--underline">
                <img class="card--avatar" src=${image} alt=${altTag} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link card--link--underline" href="#">View Details</a>
                </a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showExamSegments);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
