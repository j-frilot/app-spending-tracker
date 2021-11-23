// GETTING DATA FROM DB BASED ON WHICH SORT SELECTION

///////////  SORTING BY DATE  ////////////////////
const sortDateButton = document.getElementById('sort-date');
let dateAsc = false;
sortDateButton.addEventListener('click', () => {
    // TOGGLING THE SORTING DATE BUTTONG BACK AND FORTH AND SWITCHING API PATH
    let dateApi = 'http://localhost:5000/api/alldata';

    if (!dateAsc) {
        dateAsc = true;
        dateApi = 'http://localhost:5000/api/dayAsc';
    } else {
        dateAsc = false;
        dateApi = 'http://localhost:5000/api/alldata';
    }
    // console.log(dateAsc, dateApi);

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    async function getDataByDate() {
        try {
            let response = await fetch(dateApi);
            let data = await response.json();
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function postDataByDate() {
        let rows = await getDataByDate();
        let html = '';
        rows.forEach((row) => {
            let addRow = `<tr><td>${row.Day}</td><td>${row.Price}</td><td>${row.item}</td><td>${row.store}</td><td>${row.category}</td></tr>`;
            html += addRow;
        });
        tableBody.innerHTML = html;
    }

    postDataByDate();
});

/////////// SORTING BY PRICE  ////////////////////
