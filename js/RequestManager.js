export class RequestManager {
    constructor(url) {
        this.url = "https://restcountries.com/v3.1/";
        this.countryName = 'name/';
        this.capitalName = 'capital/';
        this.alphaCode = 'alpha/';
    }
    // звернення до сервера
    reqestToServer(url) {
        return new Promise((resolve, reject) => (
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    ))}
    // отримуємо данні по назві країни
    async getDataByCounry(nameCounty) {
        const url = this.url + this.countryName + nameCounty;
        return await this.reqestToServer(url);
        
    }
    // отримуємо данні по столиці
    async getDataByCapital(nameCapital) {
        const url = this.url + this.capitalName + nameCapital;
        return await this.reqestToServer(url);

    }
    // отримуємо данні по буквеному коду
    async getDataByCode(code) {
        const url = this.url + this.alphaCode + code;
        return await this.reqestToServer(url);

    }
}