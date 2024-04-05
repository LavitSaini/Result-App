let form = document.querySelector("form");
let input = document.querySelector("form input");
let studentsDataRoot = document.querySelector(".student-data");
let gradesMarksRoot = document.querySelector(".grades-marks");

// function to display the first semester student result data
function displayFirstSemesterStudentResultData(
  rollNumber,
  semester,
  array,
  root = studentsDataRoot
) {
  let clutter = ``;
  let check = true;
  array.forEach((data) => {
    if (data.rollNo === Number(rollNumber)) {
      clutter += `<ul class="student-info">
      <li>Name: ${data.name}</li>
      <li>Father Name: ${data.fatherName}</li>
      <li>Roll Number: ${data.rollNo}</li>
      <li>Semester: ${semester[0].toUpperCase() + semester.slice(1)}</li>
    </ul>`;

      clutter += `<table class="student-result">
    <thead>
      <tr>
        <th>Subjects (With Code Number)</th>
        <th>Grades</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mentoring and Professional Development Laboratory (BMPD102-18)</td>
        <td>${data["Mentoring and Professional Development Laboratory (BMPD102-18)"]}</td>
      </tr>
      <tr>
        <td>English (BTHU103/18)</td>
        <td>${data["English (BTHU103/18)"]}</td>
      </tr>
      <tr>
        <td>English Practical/Laboratory (BTHU104/18)</td>
        <td>${data["English Practical/Laboratory (BTHU104/18)"]}</td>
      </tr>
      <tr>
        <td>Human Values, De-addiction and Traffic Rules (HVPE101-18)</td>
        <td>${data["Human Values, De-addiction and Traffic Rules (HVPE101-18)"]}</td>
      </tr>
      <tr>
        <td>Human Values, De-addiction and Traffic Rules (Lab/Seminar) (HVPE102-18)</td>
        <td>${data["Human Values, De-addiction and Traffic Rules (Lab/Seminar) (HVPE102-18)"]}</td>
      </tr>
      <tr>
        <td>Mathematics (UGCA1901)</td>
        <td>${data["Mathematics (UGCA1901)"]}</td>
      </tr>
      <tr>
        <td>Fundamentals of Computer and IT (UGCA1902)</td>
        <td>${data["Fundamentals of Computer and IT (UGCA1902)"]}</td>
      </tr>
      <tr>
        <td>Problem Solving using C (UGCA1903)</td>
        <td>${data["Problem Solving using C (UGCA1903)"]}</td>
      </tr>
      <tr>
        <td>Workshop on Desktop Publishing (UGCA1904)</td>
        <td>${data["Workshop on Desktop Publishing (UGCA1904)"]}</td>
      </tr>
      <tr>
        <td>Problem Solving using C Laboratory (UGCA1905)</td>
        <td>${data["Problem Solving using C Laboratory (UGCA1905)"]}</td>
      </tr>
      <tr>
        <td>Fundamentals of Computer and IT Laboratory (UGCA1906)</td>
        <td>${data["Fundamentals of Computer and IT Laboratory (UGCA1906)"]}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>CGPA</td>
        <td>${data.cgpa}</td>
      </tr>
      <tr>
        <td>Credits</td>
        <td>${data.credits}</td>
      </tr>
      <tr>
        <td>Result Status</td>
        <td>${data.resultStatus}</td>
      </tr>
    </tfoot>
  </table>`;

      clutter += `<table class="grade-marks">
  <thead>
    <tr>
        <th>Grade</th>
        <th>Qualitative. Meaning</th>
        <th>Grade Point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>O</td>
        <td>Outstanding</td>
        <td>10</td>
    </tr>
    <tr>
        <td>A+</td>
        <td>Excellent</td>
        <td>9</td>
    </tr>
    <tr>
        <td>A</td>
        <td>Very Good</td>
        <td>8</td>
    </tr>
    <tr>
        <td>B+</td>
        <td>Good</td>
        <td>7</td>
    </tr>
    <tr>
        <td>B</td>
        <td>Above Average</td>
        <td>6</td>
    </tr>
    <tr>
        <td>C</td>
        <td>Average</td>
        <td>5</td>
    </tr>
    <tr>
        <td>P</td>
        <td>Marginal/Pass</td>
        <td>4</td>
    </tr>
    <tr>
        <td>F</td>
        <td>Failed/ReAppear</td>
        <td>0</td>
    </tr>
    <tr>
        <td>Ab</td>
        <td>Absent</td>
        <td>-</td>
    </tr>
    <tr>
        <td>E</td>
        <td>Detained</td>
        <td>0</td>
    </tr>
    <tr>
        <td>I</td>
        <td>Incomplete</td>
        <td>-</td>
    </tr>
    <tr>
        <td>S/UN</td>
        <td>Satisfactory/Not-Satifactory</td>
        <td>-</td>
    </tr>
  </tbody>
  </table>`;
      check = false;
    }
  });
  root.innerHTML = clutter;
  if (check) {
    let h2 = document.createElement("h2");
    h2.classList.add("no-result-found");
    h2.innerText = "No Result found!";
    root.append(h2);
  }
}

// function to display the second semester student result data
function displaySecondSemesterStudentResultData(
  rollNumber,
  semester,
  array,
  root = studentsDataRoot
) {
  let clutter = ``;
  let check = true;
  array.forEach((data) => {
    if (data.rollNo === Number(rollNumber)) {
      clutter += `<ul class="student-info">
      <li>Name: ${data.name}</li>
      <li>Father Name: ${data.fatherName}</li>
      <li>Roll Number: ${data.rollNo}</li>
      <li>Semester: ${semester[0].toUpperCase() + semester.slice(1)}</li>
    </ul>`;

      clutter += `<table class="student-result">
    <thead>
      <tr>
        <th>Subjects (With Code Number)</th>
        <th>Grades</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mentoring and Professional Development Laboratory (BMPD-202-18)</td>
        <td>${data["Mentoring and Professional Development Laboratory (BMPD-202-18)"]}</td>
      </tr>
      <tr>
        <td>Environmental Studies (EVS-102-18)</td>
        <td>${data["Environmental Studies (EVS-102-18)"]}</td>
      </tr>
      <tr>
        <td>Fundamentals of Statistics (UGCA-1907)</td>
        <td>${data["Fundamentals of Statistics (UGCA-1907)"]}</td>
      </tr>
      <tr>
        <td>Computer System Architecture (UGCA-1908)</td>
        <td>${data["Computer System Architecture (UGCA-1908)"]}</td>
      </tr>
      <tr>
        <td>Object Oriented Programming using C++ (UGCA-1909)</td>
        <td>${data["Object Oriented Programming using C++ (UGCA-1909)"]}</td>
      </tr>
      <tr>
        <td>Object Oriented Programming using C++ Laboratory (UGCA-1910)</td>
        <td>${data["Object Oriented Programming using C++ Laboratory (UGCA-1910)"]}</td>
      </tr>
      <tr>
        <td>Fundamentals of Statistics Laboratory (UGCA-1911)</td>
        <td>${data["Fundamentals of Statistics Laboratory (UGCA-1911)"]}</td>
      </tr>
      <tr>
        <td>Computer System Architecture Laboratory (UGCA-1912)</td>
        <td>${data["Computer System Architecture Laboratory (UGCA-1912)"]}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>CGPA</td>
        <td>${data.cgpa}</td>
      </tr>
      <tr>
        <td>Credits</td>
        <td>${data.credits}</td>
      </tr>
      <tr>
        <td>Result Status</td>
        <td>${data.resultStatus}</td>
      </tr>
    </tfoot>
  </table>`;

      clutter += `<table class="grade-marks">
  <thead>
    <tr>
        <th>Grade</th>
        <th>Qualitative. Meaning</th>
        <th>Grade Point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>O</td>
        <td>Outstanding</td>
        <td>10</td>
    </tr>
    <tr>
        <td>A+</td>
        <td>Excellent</td>
        <td>9</td>
    </tr>
    <tr>
        <td>A</td>
        <td>Very Good</td>
        <td>8</td>
    </tr>
    <tr>
        <td>B+</td>
        <td>Good</td>
        <td>7</td>
    </tr>
    <tr>
        <td>B</td>
        <td>Above Average</td>
        <td>6</td>
    </tr>
    <tr>
        <td>C</td>
        <td>Average</td>
        <td>5</td>
    </tr>
    <tr>
        <td>P</td>
        <td>Marginal/Pass</td>
        <td>4</td>
    </tr>
    <tr>
        <td>F</td>
        <td>Failed/ReAppear</td>
        <td>0</td>
    </tr>
    <tr>
        <td>Ab</td>
        <td>Absent</td>
        <td>-</td>
    </tr>
    <tr>
        <td>E</td>
        <td>Detained</td>
        <td>0</td>
    </tr>
    <tr>
        <td>I</td>
        <td>Incomplete</td>
        <td>-</td>
    </tr>
    <tr>
        <td>S/UN</td>
        <td>Satisfactory/Not-Satifactory</td>
        <td>-</td>
    </tr>
  </tbody>
  </table>`;
      check = false;
    }
  });
  root.innerHTML = clutter;
  if (check) {
    let h2 = document.createElement("h2");
    h2.classList.add("no-result-found");
    h2.innerText = "No Result found!";
    root.append(h2);
  }
}

// function to display the third semester student result data
function displayThirdSemesterStudentResultData(
  rollNumber,
  semester,
  array,
  root = studentsDataRoot
) {
  let clutter = ``;
  let check = true;
  array.forEach((data) => {
    if (data.rollNo === Number(rollNumber)) {
      clutter += `<ul class="student-info">
      <li>Name: ${data.name}</li>
      <li>Father Name: ${data.fatherName}</li>
      <li>Roll Number: ${data.rollNo}</li>
      <li>Semester: ${semester[0].toUpperCase() + semester.slice(1)}</li>
    </ul>`;

      clutter += `<table class="student-result">
    <thead>
      <tr>
        <th>Subjects (With Code Number)</th>
        <th>Grades</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>${data["Mentoring and Professional Development Laboratory (BMPD-302-18)"]}</td>
      </tr>
      <tr>
        <td>Computer Networks (UGCA-1913)</td>
        <td>${data["Computer Networks (UGCA-1913)"]}</td>
      </tr>
      <tr>
        <td>Computer Networks Laboratory (UGCA-1916)</td>
        <td>${data["Computer Networks Laboratory (UGCA-1916)"]}</td>
      </tr>
      <tr>
        <td>Python Laboratory (UGCA-1917)</td>
        <td>${data["Python Laboratory (UGCA-1917)"]}</td>
      </tr>
      <tr>
        <td>Data Structures Laboratory (UGCA-1918)</td>
        <td>${data["Data Structures Laboratory (UGCA-1918)"]}</td>
      </tr>
      <tr>
        <td>Pc Assembly and Troubleshooting (UGCA-1919)</td>
        <td>${data["Pc Assembly and Troubleshooting (UGCA-1919)"]}</td>
      </tr>
      <tr>
        <td>Pc Assembly and Troubleshooting Laboratory (UGCA-1920)</td>
        <td>${data["Pc Assembly and Troubleshooting Laboratory (UGCA-1920)"]}</td>
      </tr>
      <tr>
        <td>Python (UGCA-1914)</td>
        <td>${data["Python (UGCA-1914)"]}</td>
      </tr>
      <tr>
        <td>Data Structures (UGCA-1915)</td>
        <td>${data["Data Structures (UGCA-1915)"]}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>CGPA</td>
        <td>${data.cgpa}</td>
      </tr>
      <tr>
        <td>Credits</td>
        <td>${data.credits}</td>
      </tr>
      <tr>
        <td>Result Status</td>
        <td>${data.resultStatus}</td>
      </tr>
    </tfoot>
  </table>`;

      clutter += `<table class="grade-marks">
  <thead>
    <tr>
        <th>Grade</th>
        <th>Qualitative. Meaning</th>
        <th>Grade Point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>O</td>
        <td>Outstanding</td>
        <td>10</td>
    </tr>
    <tr>
        <td>A+</td>
        <td>Excellent</td>
        <td>9</td>
    </tr>
    <tr>
        <td>A</td>
        <td>Very Good</td>
        <td>8</td>
    </tr>
    <tr>
        <td>B+</td>
        <td>Good</td>
        <td>7</td>
    </tr>
    <tr>
        <td>B</td>
        <td>Above Average</td>
        <td>6</td>
    </tr>
    <tr>
        <td>C</td>
        <td>Average</td>
        <td>5</td>
    </tr>
    <tr>
        <td>P</td>
        <td>Marginal/Pass</td>
        <td>4</td>
    </tr>
    <tr>
        <td>F</td>
        <td>Failed/ReAppear</td>
        <td>0</td>
    </tr>
    <tr>
        <td>Ab</td>
        <td>Absent</td>
        <td>-</td>
    </tr>
    <tr>
        <td>E</td>
        <td>Detained</td>
        <td>0</td>
    </tr>
    <tr>
        <td>I</td>
        <td>Incomplete</td>
        <td>-</td>
    </tr>
    <tr>
        <td>S/UN</td>
        <td>Satisfactory/Not-Satifactory</td>
        <td>-</td>
    </tr>
  </tbody>
  </table>`;
      check = false;
    }
  });
  root.innerHTML = clutter;
  if (check) {
    let h2 = document.createElement("h2");
    h2.classList.add("no-result-found");
    h2.innerText = "No Result found!";
    root.append(h2);
  }
}

// function to handle the form input
function handleFrom(e) {
  e.preventDefault();
  let value = input.value;
  let semester = e.target.elements.semester.value;

  // Checking form validation
  if (value.trim() === "") {
    // Roll Number field cannot be empty
    input.classList.add("error");
    input.nextElementSibling.innerText = "Roll Number field cannot be empty";
    studentsDataRoot.innerHTML = "";
    return;
  } else if (isNaN(value)) {
    // Roll Number can only contains numbers
    input.classList.add("error");
    input.nextElementSibling.innerText = "Please enter correct Roll Number";
    studentsDataRoot.innerHTML = "";
    return;
  } else if (value.length < 7) {
    // Roll Number cannot be less than 7 digits
    input.classList.add("error");
    input.nextElementSibling.innerText =
      "Roll Number cannot be less than 7 digits";
    studentsDataRoot.innerHTML = "";
    return;
  } else if (value.length > 7) {
    // Roll Number cannot be greater than 7 digits
    input.classList.add("error");
    input.nextElementSibling.innerText =
      "Roll Number cannot be greater than 7 digits";
    studentsDataRoot.innerHTML = "";
    return;
  } else {
    input.classList?.remove("error");
    input.nextElementSibling.innerText = "";
    studentsDataRoot.innerHTML = "";
    setTimeout(() => {
      if (semester === "first") {
        displayFirstSemesterStudentResultData(
          value,
          semester,
          firstSemesterData
        );
      } else if (semester === "second") {
        displaySecondSemesterStudentResultData(
          value,
          semester,
          secondSemesterData
        );
      } else if (semester === "third") {
        displayThirdSemesterStudentResultData(
          value,
          semester,
          thirdSemesterData
        );
      }
    }, 300);
  }
}

form.addEventListener("submit", handleFrom);
