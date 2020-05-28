import './meal-item.js';

class MealList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meals(items) {
        this._items = items;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = "";
        this._items.forEach(item => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = item;
            this.shadowDOM.appendChild(mealItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
    }
}

customElements.define("meal-list", MealList);