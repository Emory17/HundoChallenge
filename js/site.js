function displayResults() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let table = document.getElementById("results");

    startNumber  = parseInt(startValue);
    endNumber = parseInt(endValue);

    table.innerHTML = "";

    if (startNumber <= endNumber) {
        for (i = startValue; i <= endValue; i++) {
            if (i % 2 == 0) {
                table.innerHTML += "<tr><td><strong>" + i + "</strong></tr></td>";
            } else {
                table.innerHTML += "<tr><td>" + i + "</tr></td>";
            }
        }
    } else {
        for (i = startValue; i >= endValue; i--) {
            if (i % 2 == 0) {
                table.innerHTML += "<tr><td><strong>" + i + "</strong></tr></td>";
            } else {
                table.innerHTML += "<tr><td>" + i + "</tr></td>";
            }
        }
    }
}
