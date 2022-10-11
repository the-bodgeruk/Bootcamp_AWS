function getTime() {
let APIendPoint = 'http://localhost:3000/time';

fetch(APIendPoint)
  .then( response => response.text())
  .then(data => {
    const timeElement = document.getElementById('time');
    timeElement.innerText = data;
  })

}

setInterval(() => getTime(), 1000);