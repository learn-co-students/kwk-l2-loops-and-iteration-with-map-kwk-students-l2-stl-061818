// Code your solution in this file.
let names = ['Adele', 'Beyonce', 'Lady', 'Madonna', 'Rihanna', 'Taylor'];


function lowerThis(name) {
  return name.toLowerCase();
}

function lowerCaseStudentNames(array) {
  return array.map(lowerThis);
}

/*
console.log(lowerCaseStudentNames());


  
  /*
  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    return name.toLowerCase();
  }
  */
  

  function splitName(name) {
    const studentFirst = name.split(" ")[0];
    const studentLast = name.split(" ")[1];
    
    return { firstName : studentFirst, lastName : 
    studentLast);
  }
  function nameToAttributes(list) {
   return list.map(splitName);
  }
  