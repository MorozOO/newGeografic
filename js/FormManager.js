export class FormManager {
    constructor() {
        this.search = '';
        this.choice = '';
    }
    activBtn(event) {
        const btnSearch = document.querySelector('.btnSearch');
        const inputVal = event.target.value.trim();
        btnSearch.disabled = (inputVal.length < 3 && inputVal.length < 160) ? true : false;
    }
    getFormFields(event) {
        event.preventDefault();
        this.search = document.querySelector('#input').value.toLowerCase();
        document.getElementsByName('search_item').forEach(radioBtn => {
            if (radioBtn.checked) {
                this.choice = radioBtn.value;
            }
        });
        document.querySelector('input').value = "";
        
    }
    get formValues(){
        let obj = {
            name: this.search,
            choice: this.choice,
        };
        return obj;        
    }
}