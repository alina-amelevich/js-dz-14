'use strict';

class HashStorageClass {
    constructor() {
        this.storage = {};
    }
    addValue(key,value) {
        this.storage[key] = value; 
    }
    getValue(key) {
        return this.storage[key]; 
    }
    deleteValue(key) {
        if (!(key in this.storage)) {
            return false;
        }
        delete this.storage[key];
        return true;
    }
    getKeys() {       
        return Object.keys(this.storage);
    }
}

let drinkStorage = new HashStorageClass(); 

function addDrink() {
    let name = prompt('Введите название напитка');
    if (!name) {
        return;
    }
    let alco = confirm('Если напиток алкольный, нажмите "ок", если безалкогольный, нажмите "отмена"')
        ? 'да' 
        : 'нет';
    let recipeInfo = prompt('Введите рецепт приготовления напитка');
    if (recipeInfo === null) {
        if (confirm('Хотите отменить добавление напитка?')) {
            return;
        }
        recipeInfo = prompt('Введите рецепт приготовления напитка');
    }
    if (recipeInfo === '') {
        recipeInfo = 'не указан';
    }
    drinkStorage.addValue(name, { alсoholic: alco, recipe: recipeInfo});
    alert('Напиток упешно добавлен в хранилище!');
}

function getDrink() {
    let name = prompt('Введите название напитка');
    if (!name) {
        return;
    }
    let info = drinkStorage.getValue(name);
    if (!info) {
        return alert('Напиток не найден! \nВозможно вы неверно указали название');
    }
    alert('напиток ' + name + '\n' + 'алкогольный: ' + info.alсoholic + '\n' + 'рецепт приготовления: ' + info.recipe);
}

function deleteDrink() {
    let name = prompt('Введите название напитка, который хотите удалить');
    if (!name) {
        return;
    }
    drinkStorage.deleteValue(name)
        ? alert('Напиток удален из хранилища!')
        : alert('Напиток не найден!');
}

function getKeysDrink() {
    let drinks = drinkStorage.getKeys();
    if (drinks.length === 0) {
        return alert('Вы не добавили ни одного напитка!');
    }
    alert('Напитки в хранилище: ' + drinks.join(', '));
}


