/**
 * The function `findStudent` searches for a specific student in the `studentList` array and logs
 * "Student Found" if the student is found.
 * @param stds - studentList, which is an array containing the list of students
 * @param specificStd - "Sher"
 */
const studentList = ["Sher", "Ahmed", "Qasim"];

function findStudent(stds, specificStd) {
  studentList.forEach((e) => {
    if (e === specificStd) {
      console.log("Student Found");
    }
  });
}

findStudent(studentList, "Sher");
