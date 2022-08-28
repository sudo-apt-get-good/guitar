import Guitar from "../utils/guitarClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const snField = document.getElementById("snField");
        const searchPanel = document.getElementById("searchPanel");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const builder = document.getElementById("builder");
        const model = document.getElementById("model");
        const type = document.getElementById("type");
        const backwood = document.getElementById("backwood");
        const topwood = document.getElementById("topwood");
        const price = document.getElementById("price");

        self.controller = controller;

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(snField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalGuitar = new Guitar("", price.value, builder.value, model.value, type.value, backwood.value, topwood.value);
            self.controller.search(optimalGuitar);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim");
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

}