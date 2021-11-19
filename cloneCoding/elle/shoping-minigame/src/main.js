
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `
    <li class="shopping-list">
        <img src="${item.image}" alt="${item.type}">
        <span class="item_description">${item.gender}, ${item.size} size</span>
    </li>
    `
}

function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const filters = document.querySelector('.filter');
    logo.addEventListener('click',()=>displayItems(items));
    filters.addEventListener('click',event=>{
        onButtonClick(event,items);
    });
    // onButtonClick(event,items));
}

function onButtonClick(event , items){
    if(event.target.dataset.key=='color'){
        let color = event.target.dataset.value;
        let filtered_items = items.filter(item=>item.color===color);
        displayItems(filtered_items);
    }
    else if(event.target.dataset.key=='type') {
        let type = event.target.dataset.value;
        let filtered_items = items.filter(item=>item.type===type);
        displayItems(filtered_items);
    }
    // items.filter(item => )
}

// main
loadItems()
    .then(items => {
        console.log(items);
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log());    
