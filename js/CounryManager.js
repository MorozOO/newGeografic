import { RequestManager } from "./RequestManager.js";
import { LocalStorageManager } from "./LocalStorageManager.js";

const localStorageManager = new LocalStorageManager();

export class CounryManager {

    async getDataByCountryName(manager, name) {
        return await manager.getDataByCounry(name);
    }

    async getDataByCapital(manager, name) {
        return await manager.getDataByCapital(name);
    }

    async getDataByCode(manager, code) {
        return await manager.getDataByCode(code);
    }

    setSountryData(obj) {
        let info = obj[0];
        let counry = {
            "name": info.name.common,
            "capital": info.capital[0],
            "population": this.formatPopulation(info.population),
            "currency": this.nameCurrency(info.currencies),
            "flag": info.flags.svg,
            "region": info.region,
            "area": this.formatArea(info.area),
            "timezones": info.timezones,
            "borders": info.borders,
        }
        return counry;

    }
    localStorageAddMainCountry(country) {
        localStorageManager.addMainCountry(this.setSountryData(country));
    }
    localStorageAddBroserCountry(country) {
        localStorageManager.addBroserCountry(this.setSountryData(country));
    }

    nameCurrency(currency) {
        for (let cur in currency) {
            return currency[cur].name;
        }
        ;
    }

    formatPopulation(population) {
        return (population / 10000000).toFixed(1) + " millions"
    }
    formatArea(area) {
        return area + ` km<sup>2</sup>`
    }

    async getCountrydata(obj) {
        const requestManager = new RequestManager();
            if (obj.choice == "country") {
                await this.getDataByCountryName(requestManager, obj.name)
                    .then(
                        requst => this.localStorageAddMainCountry(requst)
                    );
            } else {
                await this.getDataByCapital(requestManager, obj.name)
                    .then(
                        requst => this.localStorageAddMainCountry(requst)
                    );
            }
        }
        async getCountrydataCode(code) {
            const requestManager = new RequestManager();
            await this.getDataByCode(requestManager, code)
            .then(
                requst => this.localStorageAddBroserCountry(requst)
            );
        }
}