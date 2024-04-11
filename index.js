// Write your code here!
document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');
newHeader.id = 'Muthoni';
newHeader.textContent = 'YOUR-NAME is the champion'; 
// return YOUR-NAME with your actual name

document.body.appendChild(newHeader);
