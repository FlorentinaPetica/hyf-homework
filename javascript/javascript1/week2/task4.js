console.log('Task4 - Student manager')

const class07Students = [];
function addStudentToClass(studentName) {
  
  if (studentName == '') {
    return;
  } else if (studentName == 'Queen') {
    class07Students.push(studentName);
  }
  
  if (class07Students.length >= 6) {
    console.log('To many students!')
  } else if (class07Students.includes(studentName)) {
    console.log('This student is already in this class07.')
  }
  else {
  return class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass('student a');
addStudentToClass('student b');
addStudentToClass('student c');
addStudentToClass('student c');
addStudentToClass('student d');
addStudentToClass('');
addStudentToClass('student e');
addStudentToClass('student f');
addStudentToClass('gstudent g');
addStudentToClass('Queen');
addStudentToClass('studend h');

console.log(class07Students);
console.log(getNumberOfStudents());