const addBtn = document.getElementById("add-button");

const getItemsFromForm = () => {
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

const addItemToList = (newItem) => {
    const tableBody = document.getElementById("table-body");

    for (let i = 0; i < newItem.length; i++) {
        let newRow = tableBody.insertRow(-1);

        for (let j = 0; j < newItem[i].length; j++) {
            let cell = newRow.insertCell(j);
            cell.innerHTML = newItem[i][j];
        }
    }
};

addBtn.addEventListener("click", getItemsFromForm);
