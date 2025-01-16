// #1
document.getElementById('myPara').innerText = 'My Paragraph';

// #2
document.querySelector("#container img").src = "dog.jpg";

// #3
var newParagraph = document.createElement('p');
newParagraph.innerText = "New Element";
document.getElementById('container').appendChild(newParagraph);

// #4
document.getElementById('myPara').style.color = 'blue';
