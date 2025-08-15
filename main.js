let btn = document.getElementById("btn");
let img = document.getElementById("img");
let explanation = document.getElementById("explanation");



async function fetchData(){
    try{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?count=1&api_key=ogOmfaHWn99SLH4sHwoQcszWK8Y7aADKfQ4ArUat
`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

        let shorter = data[0].explanation.split(".")[0] + ".";
        console.log(shorter)
        explanation.innerHTML=shorter;
        img.src = data[0].url;
        img.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
