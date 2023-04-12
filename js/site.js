function displayResults() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let table = document.getElementById("results");

    if(startValue=="" || endValue==""){
        table.innerHTML = "<tr><td>Error: Missing Value</td></tr>";
        return;
    }

    startNumber = parseInt(startValue);
    endNumber = parseInt(endValue);

    if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
        table.innerHTML = "<tr><td>Error: Please input valid numbers</td></tr>";
        return;
    }

    table.innerHTML = "";

    if (startNumber <= endNumber) {
        for (i = startNumber; i <= endNumber; i++) {
            if (i % 2 == 0) {
                table.innerHTML += "<tr><td><strong>" + i + "</strong></td></tr>";
            } else {
                table.innerHTML += "<tr><td>" + i + "</td></tr>";
            }
        }
    }
    else {
        for (i = startNumber; i >= endNumber; i--) {
            if (i % 2 == 0) {
                table.innerHTML +=
                    "<tr><td><strong>" + i + "</strong></td></tr>";
            } else {
                table.innerHTML += "<tr><td>" + i + "</td></tr>";
            }
        }
    }
}
