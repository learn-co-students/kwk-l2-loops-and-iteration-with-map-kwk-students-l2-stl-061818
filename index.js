// Code your solution in this file.
let studentNames = ['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']

  function lowerCaseStudentNames(list) {
    return list.map(hi);
    
}

  function hi(student) {
    return student.toLowerCase();
}

  function splitName(name) {
    const studentFirst = name.split(" ")[0];
    const studentLast = name.split(" ")[1];
    
    return { firstName : studentFirst, lastName : studentLast};
  }
  
  function nameToAttributes(list) {
    return list.map(splitName);
  }
  
  function attributesToPhrase() {
    
  }
  
  
  
  
  
