const express =  require(`express`);

const app = express();

app.get(`/`, (req, res) => res.send(`We have an API!`));

app.get(`/time`, (req, res) => {
    let today = new Date();
    let time = today.getHours() + `:` + today.getMinutes() + `:` + today.getSeconds();
    res.send(time);
})

app.get(`/date`, (req, res) => {
    let today = new Date();
    let date = today.getDay() + `/` + today.getMonth() + `/` + today.getFullYear();
    res.send(date);
})

app.get(`/dateTime`, (req, res) => {
    let today = new Date();
    let time = today.getHours() + `:` + today.getMinutes() + `:` + today.getSeconds() + `  ` + today.getDay() + `/` + today.getMonth + `/` + today.getFullYear;
    res.send(time);
})

app.listen(3000, () => console.log(`Listening on port 3000`));

