// // Code your solution in this file.
// let names=['Adele','Beyonce','Lady','Madonna','Rihanna','Taylor']
// function lowerCasestudentNames(names){
//   console.log(names)
// }

function lowerCaseStudentNames(students){
  return students.map(function (name){
    return name.toLowerCase()
  });
}
console.log(lowerCaseStudentNames(['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']))

function nameToAttributes(names){
  return names.map(function (celebrity){
    let first=celebrity.split(" ")[0] //splits up string by spaces
    let last=celebrity.split(" ")[1]
    return { firstName:first, lastName:last}
  })
}

function attributesToPhrase(info){
  return info.map(function(person){
    return `${person.name} is from ${person.hometown}`;
  })
}