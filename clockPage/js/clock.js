function getTime() {
let APIendPoint = 'http://localhost:3000/time';

fetch(APIendPoint)
  .then( response => response.text())
  .then(data => {
    const timeElement = document.getElementById('time');
    timeElement.innerText = data;
  })

}

function getDate() {
  let APIendPoint = 'http://localhost:3000/date';
  
  fetch(APIendPoint)
    .then( response => response.text())
    .then(data => {
      const timeElement = document.getElementById('time');
      timeElement.innerText = data;
    })
  
  }

  function getDateTime() {
    let APIendPoint = 'http://localhost:3000/dateTime';
    
    fetch(APIendPoint)
      .then( response => response.text())
      .then(data => {
        const timeElement = document.getElementById('time');
        timeElement.innerText = data;
      })
    
    }

setInterval(() => getTime(), 1000);