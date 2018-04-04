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
        domString += `<li>`;
        domString +=    `<a href="#" data-hero-id="${superhero.id}">${superhero.name}</a>`;
        domString += `<li>`;

        
    });
    printToDom(domString,"awesome-dropdown");

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