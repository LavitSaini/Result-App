(() => {
  let form = document.querySelector("form");
  let input = document.querySelector("form input");
  let studentsResultRoot = document.querySelector(".student-result");

  // function to display the loader
  function displayLoader() {
    let clutter = `<!-- Loader -->
      <div class="loader">
        <div class="spinner"></div>
      </div>`;
    studentsResultRoot.innerHTML = clutter;
  }

  // function to display the grade table
  function displayGradeTable() {
    let clutter = `<table class="grade-marks">
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
    studentsResultRoot.innerHTML += clutter;
  }

  // function to display the result table
  function displayResultTable(rollNumber, semester, resultData) {
    let clutter = ``;
    let check = true;
    resultData.forEach((data) => {
      if (data.rollNo === Number(rollNumber)) {
        let allKeys = Object.keys(data).sort();
        let maxIndex = allKeys.length - 1;
        console.log(allKeys);
        let allSubjectsKeys = allKeys.filter((key) => key.includes(" "));
        clutter += `<ul class="student-info">
      <li>Name: ${data[allKeys[maxIndex - 2]]}</li>
      <li>Father Name: ${data[allKeys[maxIndex - 3]]}</li>
      <li>Roll Number: ${data[allKeys[maxIndex]]}</li>
      <li>Semester: ${semester[0].toUpperCase() + semester.slice(1)}</li>
    </ul>`;

        clutter += `<table class="result-table">
    <thead>
      <tr>
        <th>Subjects (With Code Number)</th>
        <th>Grades</th>
      </tr>
    </thead>
    <tbody>
      ${allSubjectsKeys
        .map((subKey) => {
          console.log(subKey);
          return `<tr>
          <td>${subKey}</td>
          <td>${data[subKey]}</td>
        </tr>`;
        })
        .join("")}
    </tbody>
    <tfoot>
      <tr>
        <td>CGPA</td>
        <td>${data[allKeys[maxIndex - 5]]}</td>
      </tr>
      <tr>
        <td>Credits</td>
        <td>${data[allKeys[maxIndex - 4]]}</td>
      </tr>
      <tr>
        <td>Result Status</td>
        <td>${data[allKeys[maxIndex - 1]]}</td>
      </tr>
    </tfoot>
  </table>`;
        check = false;
      }
    });
    studentsResultRoot.innerHTML = clutter;

    if (check) {
      let h2 = document.createElement("h2");
      h2.classList.add("no-result-found");
      h2.innerText = "No Result found!";
      studentsResultRoot.append(h2);
    } else{
      displayGradeTable();
    }
  }

  // function to display whole student result according to semester
  function displayStudentResult(rollNo, semester) {
    if (semester === "first") {
      displayResultTable(rollNo, semester, firstSemesterData);
    } else if (semester === "second") {
      displayResultTable(rollNo, semester, secondSemesterData);
    } else if (semester === "third") {
      displayResultTable(rollNo, semester, thirdSemesterData);
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
      studentsResultRoot.innerHTML = "";
      return;
    } else if (isNaN(value)) {
      // Roll Number can only contains numbers
      input.classList.add("error");
      input.nextElementSibling.innerText = "Please enter correct Roll Number";
      studentsResultRoot.innerHTML = "";
      return;
    } else if (value.length < 7) {
      // Roll Number cannot be less than 7 digits
      input.classList.add("error");
      input.nextElementSibling.innerText =
        "Roll Number cannot be less than 7 digits";
      studentsResultRoot.innerHTML = "";
      return;
    } else if (value.length > 7) {
      // Roll Number cannot be greater than 7 digits
      input.classList.add("error");
      input.nextElementSibling.innerText =
        "Roll Number cannot be greater than 7 digits";
      studentsResultRoot.innerHTML = "";
      return;
    } else {
      input.classList?.remove("error");
      input.nextElementSibling.innerText = "";
      displayLoader();
      setTimeout(() => {
        displayStudentResult(value, semester);
      }, 300);
    }
  }

  form.addEventListener("submit", handleFrom);
})();
