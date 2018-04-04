let selectedHero = "";

function printToDom(domString,divId)
{
    document.getElementById(divId).innerHTML= domString;
}


const selectHero = (e) => {
    selectedHero = e.target.dataset.heroId;
    document.getElementById('awesome-button').classList.add('hide');
    genericHeroRequest(loadFileforSingleHero);

}

const addheroSelectionEventListeners = () => {
    const heroNames = document.getElementsByClassName('hero-name');
    for(let i=0; i<heroNames.length; i++){
        heroNames[i].addEventListener('click',selectHero);
    }
};

const displaySuperhero = (heroes) => {
    let domString = "";
    heroes.forEach(hero => {
      if (hero.id === selectedHero) {
        domString += `<div class="row">`;
        domString += `<div class="col-sm-4">`;
        if (hero.gender === "Male") {
          domString += `<img class="charImage maleImage" src="${
            hero.image
          }">`;
        } else {
          domString += `<img class="charImage femaleImage" src="${
            hero.image
          }">`;
        }
        domString += `</div>`;
        domString += `<div class="col-sm-6">`;
        domString += `<h2>Selected Hero: ${hero.name}</h2>`;
        domString +=     `<p class='charDescription'>${hero.description}</p>`;
        domString += `</div>`;
      }
    });
    printToDom(domString, "selected-hero");
  };

function loadFileforSingleHero(){
    const data = JSON.parse(this.responseText);
    displaySuperhero(data.superheroes);

}

function executeThisCodeIfXHRFails() 
{
    console.log("something went wrong")

}



function executeThisCodeAfterFileLoaded()
{
    const data = JSON.parse(this.responseText);
    buildDomDtring(data.superheroes);
    addheroSelectionEventListeners();

}


function buildDomDtring(superheroes)
{
    let domString = "";
    superheroes.forEach(superhero => {
        domString += `<li>`;
        domString +=    `<a class="hero-name" data-hero-id="${superhero.id}">${superhero.name}</a>`;
        domString += `</li>`;

        
    });
    printToDom(domString,"awesome-dropdown");

};



const genericHeroRequest = (successFunction) => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener("load",successFunction);
    myrequest.addEventListener("error",executeThisCodeIfXHRFails);
    myrequest.open("GET","/db/superheroes.json");
    myrequest.send(myrequest);

}

function startApplication()
{
    genericHeroRequest(executeThisCodeAfterFileLoaded);
}
startApplication();