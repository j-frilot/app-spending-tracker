const spending_data = [
    {
        id: 1,
        day: '2021-01-25',
        price: '19.99',
        item: 'sneakers',
        store: 'shoe king',
        category: 'clothing'
    },
    {
        id: 2,
        day: '2021-02-01',
        price: '35.00',
        item: 'gas',
        store: 'quick stop',
        category: 'gas'
    },
    {
        id: 3,
        day: '2021-04-04',
        price: '899.50',
        item: 'television',
        store: 'electronic city',
        category: 'house items'
    }
];

// console.log(spending_data);

const addBtn = document.getElementById('add-button');

const getItemsFromForm = (e) => {
    e.preventDefault();
    // console.log("getItemsFromForm Function");
    // console.log(
    //     `Item: ${item.value}, Store: ${store.value}, Price: $${price.value}, Date: ${date.value}, Category: ${category.value}`
    // );

    // const newItem = [];
    // newItem.push(date.value);
    // newItem.push(price.value);
    // newItem.push(item.value);
    // newItem.push(store.value);
    // newItem.push(category.value);

    const newItem = {};
    newItem.day = date.value;
    newItem.price = price.value;
    newItem.item = item.value;
    newItem.store = store.value;
    newItem.category = category.value;

    spending_data.push(newItem);
    // console.log(spending_data);

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

    const addedData = spending_data[spending_data.length - 1];
    console.log(addedData.store);

    tableBody.innerHTML += `<tr><td>${addedData.day}</td><td>$${addedData.price}</td><td>${addedData.item}</td><td>${addedData.store}</td><td>${addedData.category}</td></tr>`;
};

addBtn.addEventListener('click', (e) => {
    getItemsFromForm(e);
    clearForm();
});
