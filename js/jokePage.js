


function getJoke(categories, blacklist )
{
    const https = require("https"); // Native module, no need to explicitly install

    const baseURL = "https://v2.jokeapi.dev";
    
    const params = [
        "idRange=0-100"
    ];

    https.get(`${baseURL}/joke/${categories.join(",")}?${params.join("&")}`, res => {
        console.log("\n");
        res.on("data", chunk => {
            // On data received, convert it to a JSON object
            let randomJoke = JSON.parse(chunk.toString());

            if(randomJoke.type == "single")
            {
                // If type == "single", the joke only has the "joke" property
                console.log(randomJoke);
                console.log(randomJoke.joke);
                console.log("\n");
            }
            else
            {
                // If type == "twopart", the joke has the "setup" and "delivery" properties
                console.log(randomJoke);
                console.log(randomJoke.setup);
                setTimeout(() => {
                    console.log(randomJoke.delivery);
                    console.log("\n");
                }, 3000);
            }
        });

        res.on("error", err => {
            // On error, log to console
            console.error(`Error: ${err}`);
        });
    });

}

// Test function

testcategories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
testblacklist="nsfw,religious,racist";

getJoke(testcategories, testblacklist);