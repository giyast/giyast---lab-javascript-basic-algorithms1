console.log("I'm ready!");
//1
var hacker1 = 'Jonyyy' ;
console.log("The driver's name is ", hacker1);

var hacker2 = 'Jason' ;
console.log("The navigator's name is ", hacker2);
//2
if (hacker1.length > hacker2.length) {
  console.log("the driver has the longest name, it has", hacker1.length + " charaters");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has ", hacker2.length + " charaters");
} else {
  console.log("Wow, you both have equally long names,", hacker1.length + " charaters");
}
//3
  //a
let driverName = ""
for (let i = 0; i <= hacker1.length; i++) {
  driverName += hacker1[i] + " "
}
  console.log(driverName.toUpperCase());

  //b

let newname = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newname += hacker2[i];
}

console.log(newname); 
 

  //c
hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

//Bonus 1

let longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec aliquet velit, sed commodo ipsum. Vivamus pulvinar tortor quis tortor lobortis, et consectetur ligula porttitor. Proin risus augue, feugiat at elementum et, porttitor et elit. Phasellus scelerisque sit amet augue cursus vehicula. Cras enim enim, lobortis et eleifend id, fermentum a diam. Mauris ut leo ac est euismod vestibulum at eget tellus. Nam convallis pulvinar faucibus. Praesent in imperdiet magna. Aliquam non accumsan est. Nulla nec augue ultrices, tempus nunc vel, cursus elit. Ut luctus lorem rutrum, ornare purus quis, elementum diam.

Cras varius est nibh, at euismod ipsum egestas sit amet. Fusce vestibulum ante ac leo hendrerit efficitur. Cras eget ipsum sem. Nunc sollicitudin justo erat, vitae pharetra justo pharetra vitae. Praesent sagittis pellentesque urna. Nulla at est ut turpis lobortis fermentum. Duis fermentum ante eget hendrerit consectetur. Fusce aliquam lobortis mauris quis commodo. Morbi lacinia fermentum sem. Quisque aliquam sem et ipsum faucibus scelerisque. Quisque maximus tincidunt purus, et viverra ex aliquam eleifend. Sed blandit risus at gravida ultrices. Phasellus mattis, ligula ac sodales ultricies, turpis augue pharetra sem, sed imperdiet purus erat quis ante. Proin maximus venenatis lacinia. Proin ut risus auctor, ultrices felis et, sagittis ipsum. Nam luctus ex a sem cursus, vitae sagittis elit sollicitudin.

Maecenas eu sapien efficitur, vulputate nunc sit amet, congue nunc. Nam ultrices enim mi, vestibulum laoreet erat hendrerit non. Fusce finibus urna ac hendrerit finibus. Quisque quam massa, aliquam at nunc non, eleifend viverra dui. Integer egestas pretium ante, sit amet fermentum sem euismod non. Etiam venenatis, erat a maximus congue, sem leo porttitor risus, vitae commodo eros massa eget nisi. Morbi hendrerit maximus est id vestibulum. Vivamus congue nisl ac dolor elementum fermentum.`

console.log(longtext.length)

function WordCount(str) { 
  return str.split(" ").length;
}
function EtCount(str) { 
  return str.split("et").length;
}

console.log(WordCount(longtext));
console.log(EtCount(longtext));

//Bonus 2

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}
