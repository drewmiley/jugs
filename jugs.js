const euclid = (a, b) => {
    let aCopy = a;
    let bCopy = b;
    let aComb = [1, 0];
    let bComb = [0, 1];
    do {
        if (aCopy >= bCopy) {
            const remainder = aCopy % bCopy;
            const mult = (aCopy - remainder) / bCopy;
            aCopy -= mult * bCopy;
            aComb = [
                aComb[0] - mult * bComb[0],
                aComb[1] - mult * bComb[1]
            ];
        } else {
            const remainder = bCopy % aCopy;
            const mult = (bCopy - remainder) / aCopy;
            bCopy -= mult * aCopy;
            bComb = [
                bComb[0] - mult * aComb[0],
                bComb[1] - mult * aComb[1]
            ];
        }
    } while (aCopy % bCopy || bCopy % aCopy);
    return aCopy == 0 ? bComb : aComb;
}

const hcf = (a, b) => {
    const euclidMultipliers = euclid(a, b);
    return euclidMultipliers[0] * a + euclidMultipliers[1] * b;
}

const solveJugsByEuclid = (jug1, jug2, fill) => {
    const euclidMultipliers = euclid(jug1, jug2);
    const jug1Multiplier = fill * euclidMultipliers[0];
    const jug2Multiplier = fill * euclidMultipliers[1];
    output.innerText = `${ fill } = ${ jug1Multiplier % jug2 } * ${ jug1 } + ${ jug2Multiplier % jug1 } * ${ jug2 }`;
}

const solveJugsByFermat = (jug1, jug2, fill) => {
    const a = Math.min(jug1, jug2);
    const m = Math.max(jug1, jug2);
    const totientM = [...Array(m).keys()]
        .filter(d => d)
        .filter(d => hcf(d, m) === 1)
        .length;
    const inverse = [...Array(totientM - 1).keys()].reduce(inverse => (inverse * a) % m, 1);
    const jug1Multiplier = jug1 >= jug2 ?
        fill * (1 - inverse * jug2) / m :
        fill * inverse;
    const jug2Multiplier = jug1 >= jug2 ?
        fill * inverse :
        fill * (1 - inverse * jug1) / m;
    output.innerText = `${ fill } = ${ jug1Multiplier % jug2 } * ${ jug1 } + ${ jug2Multiplier % jug1 } * ${ jug2 }`;
}

const solve = (euclid = true) => {
    const output = document.getElementById("output");
    output.innerText = "";
    const jug1 = parseInt(document.getElementById("jug1").value, 10);
    const jug2 = parseInt(document.getElementById("jug2").value, 10);
    const fill = parseInt(document.getElementById("fill").value, 10);
    if (isNaN(jug1 + jug2 + fill)) {
        output.innerText = "Invalid Input";
    } else if (jug1 <= 0 || jug2 <= 0 || fill <= 0) {
        output.innerText = "Inputs should be greater than 0";
    } else if (hcf(jug1, jug2) > 1) {
        output.innerText = "Jug levels should be coprime";
    } else {
        if (euclid) {
            solveJugsByEuclid(jug1, jug2, fill);
        } else {
            solveJugsByFermat(jug1, jug2, fill);
        }
    }
}

(function () {
    document.getElementById("solveByEuclid").onclick = () => solve(true);
    document.getElementById("solveByFermat").onclick = () => solve(false);
})();
