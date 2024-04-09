export class LocalStorageManager {
    deleteMainCountry() {
        if (localStorage.hasOwnProperty("mainCountry")) {
            localStorage.removeItem("mainCountry");
        }
    }
    deleteBroserCountry() {
        if (localStorage.hasOwnProperty("Broser")) {
            localStorage.removeItem("Broser");
        }
    }
    deleteBrosersCountry() {
        if (localStorage.hasOwnProperty("Brosers")) {
            localStorage.removeItem("Brosers");
        }
    }
    addMainCountry(counrty) {
        localStorage.mainCountry = JSON.stringify(counrty);
    }

    addBroserCountry(counrty) {
        localStorage.Broser = JSON.stringify(counrty);
    }
    addBrosersCountry(counrty) {
        const brs =JSON.stringify(counrty)
        localStorage.setItem("Brosers",brs) ;
    }

    getMainCounry() {
        if (localStorage.hasOwnProperty("mainCountry")) {
            return JSON.parse(localStorage.getItem("mainCountry"));
        }
        else {
            throw new Error("key mainCountry  is not found in LocalStorage")
        }
    }

    getBroserCountry() {
        if (localStorage.hasOwnProperty("Broser")) {
            return JSON.parse(localStorage.getItem("Broser"));
        }
        else {
            throw new Error("key Broser  is not found in LocalStorage")
        }
    }
    getBrosersCountry() {
        if (localStorage.hasOwnProperty("Brosers")) {
            return JSON.parse(localStorage.getItem("Brosers"));
        }
        else {
            throw new Error("key Broser  is not found in LocalStorage")
        }
    }

    logSearchResult(type, name, status) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const logData = {
          [type]: {
            [type === 'countries' ? 'country' : 'capital']: name,
            created_at: currentDate,
            browser: navigator.userAgent,
            status: status
          }
        };
        let searchData = JSON.parse(localStorage.getItem('searchData')) || { countries: [], capitals: [] };
        searchData[type].push(logData[type]);
        localStorage.setItem('searchData', JSON.stringify(searchData));
      }
}