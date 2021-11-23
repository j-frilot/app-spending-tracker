//FETCHING FULL SPENDING LOG FROM DB
const tableBody = document.getElementById('table-body');
async function getData() {
    let url = 'http://localhost:5000/api/alldata';
    try {
        let response = await fetch(url);
        let data = await response.json();
        // console.log('Success: ', data);
        return data;
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

async function postData() {
    let rows = await getData();
    let html = '';
    // console.log(rows);
    rows.forEach((row) => {
        let addRow = `<tr><td><button class="delete-button" type="submit">(D)  </button> ${row.Day}</td><td>${row.Price}</td><td>${row.item}</td><td>${row.store}</td><td>${row.category}</td></tr>`;
        html += addRow;
    });
    tableBody.innerHTML = html;
}

postData();

////////////////////////

const addBtn = document.getElementById('add-button');

// GETTING VALUES FROM FORM TO ADD ITEM
const getItemsFromForm = (e) => {
    e.preventDefault();

    const newItem = {};
    newItem.day = date.value;
    newItem.price = price.value;
    newItem.item = item.value;
    newItem.store = store.value;
    newItem.category = category.value;

    console.log(newItem); //an object
    addItemToList(newItem);
};

// CLEARING FORM AFTER HITTING BUTTON ON FORM
const clearForm = () => {
    item.value = '';
    store.value = '';
    price.value = '';
    date.value = '';
    category.value = '';
};

// ADDING THE NEW DATA TO THE DB AND ADD IT TO TABLE BELOW
const addItemToList = (newItem) => {
    fetch('http://localhost:5000/api/adddata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
    }).then((res) => {
        console.log('complete', res);
    });
};

addBtn.addEventListener('click', (e) => {
    getItemsFromForm(e);
    clearForm();
});
getData();

// CLICKING DELETE BUTTON AND DELETING ROW
