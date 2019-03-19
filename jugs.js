const hcf = (a, b) => {
    return 1;
}

const solveJugs = (jug1, jug2, fill) => {
    console.log("Jugs");
}

(function () {
    document.getElementById("solve").onclick = () => {
        const jug1 = parseInt(document.getElementById("jug1").value, 10);
        const jug2 = parseInt(document.getElementById("jug2").value, 10);
        const fill = parseInt(document.getElementById("fill").value, 10);
        if (isNaN(jug1 + jug2 + fill)) {
            console.log("Invalid Input");
        } else if (jug1 <= 0 || jug2 <= 0 || fill <= 0) {
            console.log("Inputs should be greater than 0");
        } else if (hcf(jug1, jug2) > 1) {
            console.log("Jug levels should be coprime");
        } else {
            solveJugs(jug1, jug2, fill);
        }
    }
})();
