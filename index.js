let studentArray = ['Mary', 'Joan', 'Eva', 'Frida', 'Taylor', 'Agnes'];

function other(students) {
  return students.toLowerCase();
}

function lowerCaseStudentNames(names) {
  return names.map(other);
}

function firstAndLast (student) {
    const studentFirst = student.split(' ')[0];
    const studentLast = student.split(' ')[1];
    return { firstName: studentFirst, lastName: studentLast}; 
}
function nameToAttributes(hi){
  return hi.map(firstAndLast);
}


