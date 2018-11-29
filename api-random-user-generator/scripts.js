// let states = [ "Alabam","Alask","Arizon","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio", "Oklahoma","Oregon","Pennsylvania", "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",  "Virginia","Washington","West Virginia","Wisconsin","Wyoming" ];
let countries = ["US","BR","FR","GB","NZ","AU", "SCT", "MX", "SP", "AR", "CA", "IT"];
// function createNode(element) {
//   return document.createElement(element); // Create the type of element you pass in the parameters.
// }
// function append(parent, el) {
//   return parent.appendChild(el);  // Append the second parameter(element) to the first one
// }

// // lu = createNode('ul')
// // append('img', 'src');

// const ul = document.getElementById('authors');  // Get the list where we will place our authors

// const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
  
// fetch(url)
//   .then((resp) => resp.json()) // Transform the data into json 
//   .then(function(data) {
//     // Create and append the li's to the ul
//     let authors = data.results; // Get the results
//     return authors.map(function(author) { // Map through the results and for each run the code below
//       let li = createNode('li'),  // Create the elements we need
//           img = createNode('img'),
//           span = createNode('span');

//       img.src = author.picture.medium; // Add the source of the image to be the src of the img element
//       span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
//       append(li, img);  // Append all our elements
//       append(li, span);
//       append(ul, li);

//     })
//     // .catch(function(error) {
//       // console.log(error);
//     // }); 
//   })


// const img = document.getElementsByClassName('isThisRight');

// img.src = data.results[j].picture.medium 

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://randomuser.me/api/?results=25', true);

request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  
  if(request.status >= 200 && request.status < 400) {
      
  const card = document.getElementById('card');
  const img = document.getElementsByClassName('thisImage')[0];
  img.setAttribute("height", "400");
  // img.setAttribute("width", "100");
  img.src = data.results[0].picture.large;
  
  //================================================================================

  allUsers = data.results;
  // // console.log(allUsers.length);
  // // console.log(countries.length);
  // // console.log(allUsers[0].nat);


  for(let i = 0; i < allUsers.length; i++) {
    if (countries.includes(allUsers[i].nat)) {
       console.log(allUsers[i].nat)
      }
  }
  // for(let i = 0; i < allUsers.length; i++) {
  //   for(let j = 0; j < countries.length; j++) {
  //     if(allUsers[i].nat == countries[j]) {
  //       console.log(allUsers[i].nat);
  //     }  
  //   }
  // }

  } else {
    console.log("Something Went wrong!")
  }
}

// Send request
request.send();

