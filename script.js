var list = [];
var showEnabled;
function onAdd() {
    var inputEmail = document.getElementById("email").value;
    if (isDuplicate(inputEmail)) {
        return;
    } else {
        insertData(inputEmail);
        list.push({ isEnabled: true, email: inputEmail });
    }
    console.log(list);
}

function insertData(data) {
    var table = document.getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = `<input type="checkbox" name="isEnabled" checked>`
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button type="button" onClick="onDelete(this)">Delete</button>`
}

function displayList(listData) {
    let listLength = listData.length;
    var table = document.getElementsByTagName("tbody")[0];
    for (let i = 0; i < listLength; i++) {
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = `<input type="checkbox" name="isEnabled" checked>`
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button type="button" onClick="onDelete(this)">Delete</button>`

    }
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementsByTagName("tbody")[0].deleteRow(row.rowIndex - 1);
}

function isDuplicate(data) {
    return false;
}

function toggle(self) {
    showEnabled = document.getElementById("toggle").Checked;
    console.log(showEnabled);

}