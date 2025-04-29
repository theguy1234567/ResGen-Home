let nextBTN = document.getElementById("nextbtn");
let form = document.querySelector("form");
let genBTN = document.getElementById("genbtn");
let Name = "";
let email = "";
let contact = "";

form.addEventListener("submit", function (event) {
  // Prevent form submission to keep the page from reloading
  event.preventDefault();

  // Getting the input values when the form is submitted
  Name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  contact = document.getElementById("Contact").value;

  // Validate inputs
  if (!Name || !email || !contact) {
    alert("Please fill in all fields.");
    return;
  }

  // If all fields are filled, reveal the next container
  let container = document.getElementById("block-container");
  container.style.visibility = "visible";
  container.style.opacity = 1;
});
let achBTN = document.getElementById("ach");
let expBTN = document.getElementById("exp");
let eduBTN = document.getElementById("edu");
achBTN.addEventListener("click", function () {
  handleBTNclick("Achievements");
});
expBTN.addEventListener("click", function () {
  handleBTNclick("Experiance");
});
eduBTN.addEventListener("click", function () {
  handleBTNclick("Education");
});
let array = [];

function handleBTNclick(buttontype) {
  switch (buttontype) {
    case "Achievements":
      console.log("achievements clicked");
      if (!array.includes("Achievements")) {
        array.push("Achievements");
      }

      break;
    case "Experiance":
      console.log("exp clicked");
      if (!array.includes("Experience")) {
        array.push("Experience");
      }
      break;
    case "Education":
      console.log("edu clicked");
      if (!array.includes("Education")) {
        array.push("Education");
      }

      break;
    default:
      console.log("no btn clicked");
      break;
  }

  let ptag = document.getElementById("track");
  ptag.innerHTML = "Blocks chooses: " + array.join(",");
}

console.log(array);
genBTN.addEventListener("click", function () {
  if (array.length != 3) {
    alert("select atleast three blocks to add");
  }
  GenResume();
});

let blockBTN = document.getElementById("blockbtn");
blockBTN.addEventListener("click", function () {
  if (array.length < 3) {
    alert("atleast three blokc need to be slected");
    return;
  }

  inputBlocks();
});

function inputBlocks() {
  let blocContainer = document.getElementById("blockcont");
  blocContainer.style.visibility = "visible";
  blocContainer.style.opacity = 1;
  let p1 = document.getElementById("inp1");
  let p2 = document.getElementById("inp2");
  let p3 = document.getElementById("inp3");
  p1.innerHTML = "Enter your " + array[0];
  p2.innerHTML = "Enter your " + array[1];
  p3.innerHTML = "Enter your " + array[2];
}

function GenResume() {
  inp1 = document.getElementById("input1").value;
  inp2 = document.getElementById("input2").value;
  inp3 = document.getElementById("input3").value;

  let inp1List = inp1
    .split(",")
    .map((item) => `<li>${item.trim()}</li>`)
    .join("");
  let inp2List = inp2
    .split(",")
    .map((item) => `<li>${item.trim()}</li>`)
    .join("");
  let inp3List = inp3
    .split(",")
    .map((item) => `<li>${item.trim()}</li>`)
    .join("");

  const ResumeHTML = `
  <div class="heading"> 
    <h1>${Name}</h1>
  </div>

  
    <div class="details">
      <p>E-mail:<strong>${email}</strong></p>

      <p>Contact:<strong>${contact}</strong></p>
    </div>
    <hr />
    <div class="Summry">
    <h1>About Me:</h1>
      <p>Motivated and dedicated student with a strong academic background and a passion for continuous learning. Skilled in problem-solving, communication, and teamwork, with hands-on experience through projects and extracurricular activities. Eager to apply knowledge and contribute effectively to new challenges and opportunities for growth.</p>
    </div>
    <hr />
    <div class="inp1">
      <h1>${array[0]}</h1>
      <p>Over the course of my academic and professional experiences, I have consistently strived to excel and contribute meaningfully. I am proud to have accomplished the following milestones, each reflecting my dedication, skills, and passion for continuous growth:</p>
      <ul>${inp1List}</ul>
    </div>
    <hr />
    <div class="imp2">
    <h1>${array[1]}</h1>
      <p>Throughout my professional journey, I have had the opportunity to work across diverse roles and projects, allowing me to build a strong foundation in technical, operational, and collaborative environments. These experiences have helped me develop a results-driven approach and a deep understanding of industry best practices. Through these opportunities, I have gained the following professional experiences:</p>
      <ul>${inp2List}</ul>
    </div>
    <hr />
    <div class="inp3">
      <h1>${array[2]}</h1>
      <p>My educational background has played a critical role in shaping my technical expertise, problem-solving abilities, and professional discipline. Through a combination of theoretical learning, practical application, research projects, and academic leadership opportunities, I have developed a strong foundation to excel in complex and evolving professional environments. My education has not only strengthened my domain-specific knowledge but also enhanced my communication, teamwork, and analytical thinking skills</p>
      <ul>${inp3List}</ul>
    </div>
    <hr />
  `;
  document.getElementById("resume").innerHTML = ResumeHTML;
}
let dBtn = document.getElementById("downloadBtn");
dBtn.addEventListener("click", function () {
  const Resume = document.getElementById("resume");

  // Check if resume is generated
  if (Resume.innerHTML.trim() === "") {
    alert("Please generate the resume first!");
    return;
  }

  const opt = {
    margin: 0.5,
    
    filename: `${Name}_Resume.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(Resume).save();
});

let clearBTN = document.getElementById("clrBTN");
clearBTN.addEventListener("click", function () {
  location.reload();
});
