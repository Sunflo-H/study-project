
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => console.log(json));
}

// main
loadItems()
.then(items=>{
    // console.log('success');
    // displayItems(items);
    // setEventListeners(items);
})
.catch(console.log);
