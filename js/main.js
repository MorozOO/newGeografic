import { FormManager } from "./FormManager.js";
import { RenderManager } from "./RenderManager.js";
import { LocalStorageManager } from "./LocalStorageManager.js";
import { CounryManager } from "./CounryManager.js";

document.addEventListener("DOMContentLoaded", async () => {
    const formManager = new FormManager();
    const counryManager = new CounryManager();
    const renderManager = new RenderManager();
    const localStorageManager = new LocalStorageManager();
    localStorageManager.deleteBrosersCountry();
    localStorageManager.deleteMainCountry();
    const form = document.querySelector('#searchForm');
    const more = document.querySelector('.more');
    const neighborhood_btn = document.querySelector('#neighborhood_btn');
    const neighborhood_info = document.querySelector('#detalied_neighborhood');
    renderManager.noneDisplayAction();
    form.addEventListener('input', (e) => { formManager.activBtn(e); });
    form.addEventListener('submit', async (e) => {
        renderManager.diaplayAction();
        renderManager.neighborhoodBtnActiv(neighborhood_btn);
        renderManager.displayLinkShowInfo(more);
        renderManager.nonDisplayMoreInfo();
        localStorageManager.deleteMainCountry();
        localStorageManager.deleteBroserCountry();
        localStorageManager.deleteBrosersCountry();
        renderManager.removeListBroser();
        formManager.getFormFields(e);
        await counryManager.getCountrydata(formManager.formValues);
        renderManager.displayMainCountryHtml(localStorageManager.getMainCounry());        
    });
    more.addEventListener('click', (e) => { 
        renderManager.displayMoreInfo(e,localStorageManager.getMainCounry()); 
        renderManager.noneDisplayLinkShowInfo(more);
    });
        neighborhood_btn.addEventListener('click', async(e) => { 
            renderManager.neighborhoodBtnNotActiv(neighborhood_btn);
            if(localStorageManager.getMainCounry().hasOwnProperty("borders")){
                renderManager.displayBroserCount(e,localStorageManager.getMainCounry().borders.length);
                let brs = new Array();
                await localStorageManager.getMainCounry().borders.forEach(async(element) => {
                    await counryManager.getCountrydataCode(element);
                    await brs.push(localStorageManager.getBroserCountry());
                    await  renderManager.displayListBroser(e, localStorageManager.getBroserCountry())
                    localStorageManager.deleteBroserCountry();

                });
            }
            else{
                renderManager.displayBroserCount(e,0);
            }
        });
});

