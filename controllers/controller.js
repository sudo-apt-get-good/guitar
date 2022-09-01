export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(guitar) {
        return `<tr class="customerrow">
        <td>${guitar.getSerialNumber()}</td>
        <td>${guitar.getBuilder()}</td>
        <td>${guitar.getModel()}</td>
        <td>${guitar.getType()}</td>
        <td>${guitar.getBackWood()}</td>
        <td>${guitar.getTopWood()}</td>
        <td>${guitar.getPrice()}</td>
        </tr>
        `
    }

    snSearch(serialNumber) {
        const guitar = this.model.guitarList.getGuitar(serialNumber);
        let template = "";

        if (guitar !== null) {
            template = this.buildTemplate(guitar);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    search(searchGuitar) {
        const guitar = this.model.guitarList.search(searchGuitar);
        let template = "";

        if (guitar !== null) {
            template = this.buildTemplate(guitar);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    showAllGuitars() {
        let template = ""
        for (const guitar of this.model.guitarList.allGuitars()) {
            template += this.buildTemplate(guitar);
        }
        this.view.message(template);
    }
    

}