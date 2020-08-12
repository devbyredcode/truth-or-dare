import '../scss/main.scss';

window.addEventListener("DOMContentLoaded", function(){
    !isAlreadyHasDataSaved() && setInitialDataSaved();
});

const inputItem = document.querySelector("#inputAddItem");
const btnAddItem = document.querySelector("#btnAddItem");
const itemList = document.querySelector("#punishmentItem");
const btnShuffle = document.querySelector("#btnShuffle");

btnShuffle.addEventListener("click", function(){
    shuffleItem();
});

btnAddItem.addEventListener("click", function(){
    saveItem();
});

const isAlreadyHasDataSaved = () =>{
    const savedData = getDataFromBrowser();
    
    if(savedData != null){
        objectParse(savedData).map((item, index)=>{
            const initialName = item.charAt(0);
            $('#punishmentItem').append(`<div class="item-list"><span class="symbols">${initialName}</span>${item}</div>`);
        })
        return true
    }
    
    return false;
} 

const setInitialDataSaved = () => {
    const data = []
    saveDataToBrowser(stringParse(data));
}

const saveItem = () => {
    const existingData = objectParse(getDataFromBrowser());
    const newItem = inputItem.value;
    if(newItem != ""){ 
        const newData = [
            ...existingData, newItem 
        ];
        
        saveDataToBrowser(stringParse(newData));
        resetValueInput();
        $('#modalAddItem').modal('hide');
        const initialName = newItem.charAt(0);
        $('#punishmentItem').append(`<div class="item-list"><span class="symbols">${initialName}</span>${newItem}</div>`);

    }else{
        alert('ERROR')
    }
}

const objectParse = string => {
    return JSON.parse(string);
}

const stringParse = object => {
    return JSON.stringify(object);
}

const saveDataToBrowser = data => {
    localStorage.setItem('random-punishment-item', data);
}

const getDataFromBrowser = () => {
    return localStorage.getItem('random-punishment-item');
}

const resetValueInput = () => {
    inputItem.value = "";
}

const shuffleItem = () => {
    const data = objectParse(getDataFromBrowser())
    const number = Math.floor(Math.random() * Math.floor(data.length));

    alert(data[number]);
}