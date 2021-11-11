const addBtn = document.getElementById('add-button');

const getItemsFromForm = (e) => {
    e.preventDefault();
    // console.log("getItemsFromForm Function");
    // console.log(
    //     `Item: ${item.value}, Store: ${store.value}, Price: $${price.value}, Date: ${date.value}, Category: ${category.value}`
    // );

    const newItem = [];
    newItem.push(date.value);
    newItem.push(price.value);
    newItem.push(item.value);
    newItem.push(store.value);
    newItem.push(category.value);

    addItemToList(newItem);
};

//function to clear form fields
const clearForm = () => {
    item.value = '';
    store.value = '';
    price.value = '';
    date.value = '';
    category.value = '';
};

//function to add new items to table
const addItemToList = (newItem) => {
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML += `<tr><th>${newItem[0]}</th><th>${newItem[1]}</th><th>${newItem[2]}</th><th>${newItem[3]}</th><th>${newItem[4]}</th></tr>`;
};

addBtn.addEventListener('click', (e) => {
    getItemsFromForm(e);
    clearForm();
});
