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
}