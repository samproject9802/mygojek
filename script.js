const students = [{
    name: "Alice", 
    age: 20
}, {
    name: "Bob", 
    age: 21
}, {
    name: "Jane", 
    age: 20
}];

function displayTable(data) {

    let table = document.getElementById('presidents');
    
    let thead = document.createElement('thead');
    let trwidget = document.createElement('tr');

    let thekeys = Object.keys(data[0]);

    for (let x = 0; x < thekeys.length; ++x) {
        let headings = document.createElement('th');

        headings.innerHTML = thekeys[x];

        trwidget.appendChild(headings);
    }

    let tbody = document.createElement('tbody');

    for (let i = 0; i < data.length; ++i) {
        let student = data[i];

        let row = document.createElement('tr');

        let properties = Object.keys(data[i]);

        for (let j = 0; j < properties.length; ++j) {
            let cell = document.createElement('td');

            cell.innerHTML = student[properties[j]];

            row.appendChild(cell);

        }
        tbody.appendChild(row);
    }
    thead.appendChild(trwidget);

    table.appendChild(thead);

    table.appendChild(tbody);

}

function averageOfData(data) {
    let myDataArr = data;
    let sumOfData = 0;
    for (let z = 0; z < myDataArr.length; z++) {
        sumOfData += myDataArr[z]['age'];
    }
    return sumOfData / myDataArr.length;
}

displayTable(students);

const handleClick = () => {
    console.log("Average : ",averageOfData(students));
    document.getElementById('avgResult').innerHTML = averageOfData(students);
}
