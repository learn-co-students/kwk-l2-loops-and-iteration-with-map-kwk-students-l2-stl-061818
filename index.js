// Code your solution in this file.

function other (student){
  return student.toLowerCase();
}

function lowerCaseStudentNames(list) {
return list.map(other) 
}

let students = ['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman'];

function nameToAttributes(students){
  return students.split();
}

function splitName(name) {
  const studentFirst = name.split(" ")[0];
const studentLast = name.split(" ")[1];
 
 return {
   firstName : studentFirst, lastName : studentLast
 }; 
}

function nameToAttributes(list){
  return list.map(splitName);
}

function attributesToPhrase(){
  const = ''
}














