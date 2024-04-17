function eidicalc() {
    var eidi = 0;
    var un = document.getElementById("uname");
    var noteValues = [10, 20, 50, 100, 500, 1000, 5000];
    for (var i = 0; i < noteValues.length; i++) {
        var noteInput = document.getElementById(noteValues[i]);
        if (noteInput.value !== "") {
            eidi += (noteInput.value * noteValues[i]);
        }
        noteInput.value = "";
    }
    if (un.value === "") {
        alert("Enter Username Please");
    } else {
        if (eidi !== 0) {
            alert("Rs: " + eidi + "/- Sent to " + un.value);
        }
    }
    un.value="";
}