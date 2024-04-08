export class RenderManager {
    #action = document.querySelector(".content");
    #nameCounty = document.querySelector(".name");
    #flag = document.querySelector(".flag");
    #capital = document.querySelector(".capital span");
    #people = document.querySelector(".people span");
    #currency = document.querySelector(".currency span");
    #moreInfo = document.querySelector(".moreInfo");
    #listBrs = document.querySelector(".neighborhoo-list ul");
    #brsLen = document.querySelector("#counter_neighborhood");
    
    diaplayAction(){
        this.#action.style.display = 'flex';
    }
    noneDisplayAction(){
        this.#action.style.display = 'none';
    }

    
    displayMainCountryHtml(country){
        this.#nameCounty.textContent = country.name;
        this.#flag.src = country.flag;
        this.#capital.textContent = country.capital;
        this.#people.textContent = country.population;
        this.#currency.textContent = country.currency;
    }

    displayMoreInfo(event,country){
        event.preventDefault();
        this.removeMoreInfo();
        this.#moreInfo.insertAdjacentHTML("beforeend", this.htmlMoreInfo(country));
    }
    removeMoreInfo(){
        this.#moreInfo.textContent = "";
    }
    htmlMoreInfo(country){
        return`        
        <h3 class="region" style="margin-top:8px;">Region: <span>${country.region}</span></h3>
        <h3 class="area">Area: <span>${country.area}</span></h3>
        <h3 class="timezones">Timezones: <span>${country.timezones}</span></h3>
        `
    }
    displayBroserCount(event,count){
        this.#brsLen.textContent = count;
    }
    displayListBroser(event,brs){
        this.#listBrs.insertAdjacentHTML("beforeend", this.htmlListBroser(brs));
       
    }
    removeListBroser(){
        this.#listBrs.textContent = "";
       
    }
    htmlListBroser(country){
        return`<li class="broser">
        <img src="${country.flag}">
        <span class="broser-title">${country.name}</h4>
      </li>`
    }    
 }