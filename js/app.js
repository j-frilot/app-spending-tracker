//FETCHING
const tableBody = document.getElementById('table-body');
async function getData() {
    let url = 'http://localhost:5000/api/alldata';
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function postData() {
    let rows = await getData();
    let html = '';
    rows.forEach((row) => {
        let addRow = `<tr><td>${row.day}</td><td>${row.price}</td><td>${row.item}</td><td>${row.store}</td><td>${row.category}</td></tr>`;
        html += addRow;
    });
    tableBody.innerHTML = html;
}

postData();
console.log(getData());

const addBtn = document.getElementById('add-button');

const getItemsFromForm = (e) => {
    e.preventDefault();

    const newItem = {};
    newItem.day = date.value;
    newItem.price = price.value;
    newItem.item = item.value;
    newItem.store = store.value;
    newItem.category = category.value;

    // spending_data.push(newItem);
    // console.log(spending_data);

    // addItemToList(newItem);
    console.log(newItem);
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
    const addedData = spending_data[spending_data.length - 1];
    console.log(addedData.store);

    // //FETCHING
    // async function getData() {
    //     let url = 'http:localhost:5000/api/alldata';
    //     try {
    //         let response = await fetch(url);
    //         let data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async function postData() {
    //     let rows = await getData();
    //     let html = '';
    //     rows.forEach((row) => {
    //         let addRow = `<tr><td>${row.day}</td><td>${row.price}</td><td>${row.item}</td><td>${row.store}</td><td>${row.category}</td></tr>`;
    //         html += addRow;
    //     });
    //     tableBody.innerHTML = html;
    // }
};

addBtn.addEventListener('click', (e) => {
    getItemsFromForm(e);
    clearForm();
});
