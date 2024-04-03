let form = document.querySelector("form");
let input = document.querySelector("form input");
let studentsDataRoot = document.querySelector(".student-data");

// function to display the student data
function displayStudentData(
  rollNumber,
  root = studentsDataRoot,
  array = studentsData
) {
  let clutter = ``;
  array.forEach((data) => {
    if (data.rollNo === Number(rollNumber)) {
      clutter += `<ul class="student-info">
      <li>Name: ${data.name}</li>
      <li>Father Name: ${data.fatherName}</li>
      <li>Roll Number: ${data.rollNo}</li>
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
        <td>Mentoring and Professional Development Laboratory (BMPD-302-18)</td>
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
        <td>Python Practical (UGCA-1917)</td>
        <td>${data["Python Practical (UGCA-1917)"]}</td>
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
    }
  });
  root.innerHTML = clutter;
}

// function to handle the form input
function handleFrom(e) {
  e.preventDefault();
  let value = input.value;

  // Checking form validation
  if (isNaN(value)) {
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
      displayStudentData(value);
    }, 300)
  }
}

form.addEventListener("submit", handleFrom);
