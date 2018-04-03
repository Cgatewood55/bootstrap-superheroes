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
        domString += `<div class="col-sm-3">`;
        domString += `<div class="panel panel-default">        `;
        domString += `<div class ="panel-heading">`;
        domString += `<h3 class="panel-title">${superhero.name}</h3>`;
        domString += `</div>`;
        domString += `<div class = "panel-body">`;
        domString += `<img class="charImage" src"${superhero.image}">`;
        domString += `<p class="charDescription">${superhero.description}</p>`;
        domString += `Panel content`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;

        
    });
    printToDom(domString,"card-holder");

};

function startApplication()
{
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener("load",executeThisCodeAfterFileLoaded);
    myrequest.addEventListener("error",executeThisCodeIfXHRFails);
    myrequest.open("GET","/db/superheroes.json");
    myrequest.send(myrequest);
}
startApplication();