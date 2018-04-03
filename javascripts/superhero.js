function printToDom(domString,divId)
{
    document.getElementById(divId).innerHTML= domString;
}




function executeThisCodeAfterFileLoaded()
{
    const data = JSON.parse(this.responseText);
    buildDomDtring(data.superheroes);

}

function executeThisCodeIfXHRFails() 
{
    console.log("something went wrong")

}

function buildDomDtring(superheroes)
{
    let domString = "";
    superheroes.forEach(superhero => {
        domString += `<div class=cards>`;
        domString += `<h1> ${superhero.name}</h1>`;
        domString += `</div>`

        
    });
    printToDom(domString,"card-holder");

};

function startApplication()
{
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener("load",executeThisCodeAfterFileLoaded);
    myrequest.addEventListener("error",executeThisCodeIfXHRFails);
    myrequest.open("GET","db/superheroes.json");
    myrequest.send(myrequest);
}
startApplication();