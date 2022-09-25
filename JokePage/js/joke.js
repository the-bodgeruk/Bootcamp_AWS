function getJoke() {
  let APIendPoint = 'https://v2.jokeapi.dev/joke/';
  let category = "any";
  let params = '?format=json&type=twopart';
  //let blackList = 'blacklistFlags=';

  let blacklistValues = '';

  if (document.getElementById('cbNsfw').checked) {
    if (blacklistValues) blacklistValues += ',nsfw';
    else blacklistValues += 'nsfw';
  }

  if (document.getElementById('cbReligious').checked) {
    if (blacklistValues) blacklistValues += ',religious';
    else blacklistValues += 'religious';
  }

  if (document.getElementById('cbPolitical').checked) {
    if (blacklistValues) blacklistValues += ',political';
    else blacklistValues += 'political';
  }

  if (document.getElementById('cbRacist').checked) {
    if (blacklistValues) blacklistValues += ',racist';
    else blacklistValues += 'racist';
  }

  if (document.getElementById('cbSexist').checked) {
    if (blacklistValues) blacklistValues += ',sexist';
    else blacklistValues += 'sexist';
  }

  if (document.getElementById('cbExplicit').checked) {
    if (blacklistValues) blacklistValues += ',explicit';
    else blacklistValues += 'explicit';
  }


  if (blacklistValues) {
    params += '&blacklistFlags=' + blacklistValues;
  }

  console.log(`params =  ${params}`);

  fetch(APIendPoint + category + params)             // Get response
    .then(response => response.json())    // Convert to a response object
    .then(data => {
      console.log(`All data: ${data}`);                  // data is a JS Object
      console.log(`All data: ${JSON.stringify(data)}`);  // Convert the whole JSON object to a string to display
      // console.log(`Error property: ${data.error}`);
      // console.log(`Racist property: ${data.flags.racist}`);
      console.log(`Explicit property: ${data.flags.explicit}`);
      // console.log(`Joke setup: ${data.setup}`);
      // console.log(`Joke Punchline: ${data.delivery}`);

      let jokeTxt = `${data.setup}<br><br>${data.delivery}`
      let jokeElem = document.getElementById('showJoke');
      jokeElem.innerHTML = jokeTxt;
    });

  console.log(`Do me first`);
}