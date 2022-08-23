export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const snField = document.getElementById("snField");
        self.controller = controller;

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(snField.value);
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

}