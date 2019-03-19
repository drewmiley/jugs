const euclid = (a, b) => {
    console.log(a);
    console.log(b);
    return [1, 1];
}

const hcf = (a, b) => {
    const euclidMultipliers = euclid(a, b);
    const hcf = euclidMultipliers[0] * a + euclidMultipliers[1] * b;
    console.log(hcf);
    return 1;
}

const solveJugs = (jug1, jug2, fill) => {
    const euclidMultipliers = euclid(jug1, jug2);
    const jug1Multiplier = fill * euclidMultipliers[0];
    const jug2Multiplier = fill * euclidMultipliers[1];
    output.innerHTML = `${ fill } = ${ jug1Multiplier } * ${ jug1 } + ${ jug2Multiplier } * ${ jug2 }`;
}

(function () {
    document.getElementById("solve").onclick = () => {
        const output = document.getElementById("output");
        output.innerHTML = "";
        const jug1 = parseInt(document.getElementById("jug1").value, 10);
        const jug2 = parseInt(document.getElementById("jug2").value, 10);
        const fill = parseInt(document.getElementById("fill").value, 10);
        if (isNaN(jug1 + jug2 + fill)) {
            output.innerHTML = "Invalid Input";
        } else if (jug1 <= 0 || jug2 <= 0 || fill <= 0) {
            output.innerHTML = "Inputs should be greater than 0";
        } else if (hcf(jug1, jug2) > 1) {
            output.innerHTML = "Jug levels should be coprime";
        } else {
            solveJugs(jug1, jug2, fill);
        }
    }
})();
