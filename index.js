const studentNames = ['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']

function lowerCaseStudentNames(list) {
  return list.map(hi);
  
}  
 
function hi(student) {
  return student.toLowerCase();
}

function splitName(name) {
  const studentFirst = name.split(" ")[0];
  const studentLast = name.split(" ")[1];
  
  return { firstName : studentFirst, lastName : studentLast}
}

function nameToAttributes(list) {
  return list.map(splitName)
}

function identifyFromObjects(object) {
  const name = object.name
  const hometown = object.hometown
  
  return `${name} is from ${hometown}`
}

function attributesToPhrase(list) {
  return list.map(identifyFromObjects)
}




