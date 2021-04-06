/* globals require */
console.log("Hello, Airtable");


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyukHfFqySAQg0LN" }).base(
  "apptTQmZEzaZaZi4E"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("doors").select({view:"By nbhd"}).eachPage(gotPageOfDoors, gotAllDoors);

// an empty array to hold our book data
const doors = [];

// callback function that receives our data
function gotPageOfDoors(records, fetchNextPage) {
  console.log("gotPageOfDoors()");
  // add the records from this page to our array
  doors.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllDoors(err) {
  console.log("gotAllDoors()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading doors");
    console.error(err);
    return;
  }

  // call functions to log and show the doors
  consoleLogDoors();
    showDoors();
 }

//  loop through the doors and console.log them
 function consoleLogDoors() {
     console.log("consoleLogDoors()");
     doors.forEach((door) => {
         console.log("Door:", door);
     });
 }

//  loop through the doors, create an a tag, img, and div for each one
function showDoors() {
console.log("showDoors()");
doorsArray.forEach((door) => {

    var doorImage = document.createElement("img");
    doorImage.src = door.fields.image[0].url;
    document.querySelector(".door-img").append(doorImage);
    document.body.append(doorImage);
});
}
  
         
    // create elements
    // give elements content
    // append elements to document or li
    //    <a href="">
    //   <img src="door.jpg"> 
    //   <div class="knock">
    // CLICK TO KNOCK
    //   </div>
    // </a>

    //    if (doorlist) {
//     // define and create elements
//     let el = document.createElement('li');
//     el.classList.add('door-image');
//     let img = document.createElement('img');
//     let hp = document.createElement('button');

//     // Set innerHTML of the elements
//     img.src =
    
//     // append them to the list
//     doorlist.append(el);
//     el.append(img)
