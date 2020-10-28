// huge variable of all students, it's an array of objects. Each student is an object with different properties
let students = [
  {
    name: 'Alfred',
    living: 'Amsterdam',
    shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
    longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz7L26mZeMjYhNBvYVnG0R6b7WaaXwWGz2dQ&usqp=CAU',
    hobbies: ['Running', 'Games', 'Coding']
  },
  {
    name: 'Aya',
    living: 'Berlin',
    shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
    longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREyUFUZJS6ffZx-eaeBnkCNDkusil0dLKxSw&usqp=CAU',
    hobbies: ['Dancing', 'Beer', 'Sports']
  },
  {
    name: 'Carlos',
    living: 'San Salvador',
    shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
    longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFfo5vMUf8N8QfkKjUIaJHjLMvxHajQgiAXA&usqp=CAU',
    hobbies: ['Coding', 'Dancing', 'Beer']
  },
  {
    name: 'Dean',
    living: 'Dublin',
    shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
    longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFswRIpsAe1k37Mn9Ve8Xe2fLdby2MfXuxVQ&usqp=CAU',
    hobbies: ['Running', 'Dancing', 'Beer']
  },
  {
    name: 'Dima',
    living: 'Minsk',
    shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
    longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
    picture: 'https://cdn.akc.org/content/hero/funny_dog_pictures_header.jpg',
    hobbies: ['Games', 'Coding', 'Beer']
  },
  {
    name: 'Fabien',
    living: 'London',
    shortAbout: 'Short loin sausage rump doner drumstick. Jerky venison strip steak, andouille porchetta cow frankfurter leberkas sirloin pork meatloaf cupim alcatra pig. T-bone leberkas jowl porchetta, filet mignon spare ribs tail kevin.',
    longAbout: ['Bacon ipsum dolor amet jerky biltong meatball pork chop rump, t-bone tongue short ribs burgdoggen leberkas hamburger venison. Buffalo chuck tri-tip pork loin short loin strip steak kevin pork t-bone hamburger. Kevin frankfurter flank filet mignon, ground round pork chop tongue pork biltong short ribs hamburger venison chislic fatback burgdoggen. T-bone chuck chislic ground round boudin pork loin.',
      'Landjaeger meatloaf pork belly, bacon pancetta porchetta venison. Pork loin drumstick turducken prosciutto. Turkey tail hamburger cow, strip steak buffalo chuck. Pork belly ground round chicken beef ribs frankfurter.',
      'Hamburger pig shank, sausage jerky shoulder ground round. Picanha strip steak leberkas, shankle chuck ground round bresaola jowl sausage pork loin filet mignon pig corned beef. Porchetta ball tip salami, turducken tongue bacon meatball chislic cow flank tenderloin. Ribeye ground round flank turkey.'],
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz7L26mZeMjYhNBvYVnG0R6b7WaaXwWGz2dQ&usqp=CAU',
    hobbies: ['Games', 'Dancing', 'Beer']
  }
]

// I store in this variable the html element where I'll want to add all my stuff
let classContainer = document.getElementById('class')
// Initialize an empty variable where I'll be adding all the html content
let classToHtml = '';

// creates a variable that will contain all buttons that have that class
let buttonsOfCategories = document.querySelectorAll('.categories-option')
let filteredStudents = [];

// llops over all the buttons we have and listens to a click event on a certain button
for(let i=0; i<buttonsOfCategories.length; i++){
  buttonsOfCategories[i].addEventListener('click', function(e){
    filteredStudents = [] // sets an empty array to store the filtered students
    //loops over all students
    for(let i=0; i<students.length; i++){
      // on each iteration checks if the button value is inside the hobbies array, if so, it pushes that element to the filteredStudents array
      if(students[i].hobbies.includes(e.target.innerText)) {
        filteredStudents.push(students[i])
      }
      // if the category was All, it reassigns the value to be the whole students array
      if(e.target.innerText === 'All') {
        filteredStudents = students
      }
    }
    //cleans the html and calls the fn that adds html code to the array
    resetStudentsContainer()
    showStudentList(filteredStudents)
  })
}


// Function that will convert and return any given html tag in a <TAG>SOMETHING</TAG> structure
const convertArrayToHtmlTag = function (array, tag) {
  let arrayToHtml = '';
  for (let i = 0; i < array.length; i++) {
    arrayToHtml += `<${tag}>${array[i]}</${tag}>`;
  }
  return arrayToHtml;
}

// reset html
function resetStudentsContainer() {
  classToHtml = '';
  classContainer.innerHTML = '';
}

function showStudentList(arrayOfStudents) {
  // Loop to iterate over all students we have in the students array
  for (let i = 0; i < arrayOfStudents.length; i++) {

    // On each iteration is adding this html code with some variable content to the classToHtml variable, so at the end of the for loop, this variable will be filled of this html structure for each student
    // At line 236, it calls the createListFromArray function to receive the hobbies as an html list
    classToHtml += `
  <div class="col-sm">
    <div class="card" style="width: 18rem;">
      <img src="${arrayOfStudents[i].picture}" class="card-img-top img-student" alt="${arrayOfStudents[i].name}">
      <div class="card-body">
        <h5 class="card-title">${arrayOfStudents[i].name} <small class="text-muted">living in ${arrayOfStudents[i].living}</small></h5>
        <p class="card-text">${arrayOfStudents[i].shortAbout}</p>
        <p>List of hobbies:
          <ul>
            ${convertArrayToHtmlTag(arrayOfStudents[i].hobbies, 'li')}
          </ul>
        </p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${arrayOfStudents[i].name}Modal${i}">
          Know more
        </button>
      </div>
    </div>
  </div>
  <div class="modal fade" id="${arrayOfStudents[i].name}Modal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${arrayOfStudents[i].name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img src="${arrayOfStudents[i].picture}" class="card-img-top img-student" alt="${arrayOfStudents[i].name}">
          <div>${convertArrayToHtmlTag(arrayOfStudents[i].longAbout, 'p')}</div>
          <p>List of hobbies:
          <ul>${convertArrayToHtmlTag(arrayOfStudents[i].hobbies, 'li')}</ul>
        </p>
        </div>
      </div>
    </div>
  </div>
  `;
  }
  // It changes the innerHtml of the classContainer (the eelement we selected before with the id) to the content that classToHtml has after the loop has finished
  classContainer.innerHTML = classToHtml
}


showStudentList(students)


