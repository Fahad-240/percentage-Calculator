function calculatePercentage() {
    ///////////////////Total/////////////////////////
    let total1 = document.getElementById("total1").value;
    let total2 = document.getElementById("total2").value;
    let total3 = document.getElementById("total3").value;
    let total4 = document.getElementById("total4").value;
    let total5 = document.getElementById("total5").value;
    let total6 = document.getElementById("total6").value;
    ////////////////////obtain///////////////////////////
    let obtain1 = document.getElementById("obtain1").value;
    let obtain2 = document.getElementById("obtain2").value;
    let obtain3 = document.getElementById("obtain3").value;
    let obtain4 = document.getElementById("obtain4").value;
    let obtain5 = document.getElementById("obtain5").value;
    let obtain6 = document.getElementById("obtain6").value;

    let totalMark = Number(total1) + Number(total2) + Number(total3) + Number(total4) + Number(total5) + Number(total6)
    let obtainMark = Number(obtain1) + Number(obtain2) + Number(obtain3) + Number(obtain4) + Number(obtain5) + Number(obtain6)

    let percentage = (obtainMark / totalMark) * 100;

    let grade = "";

    if (percentage >= 90) {
        grade = "A+"
        document.getElementById("result").innerText = "Contratulation you're passes"  +  percentage.toFixed(2) +  "%"  + "with grade A+"
    }
    else if (percentage >= 70) {
        grade = "A"
        document.getElementById("result").innerText = "Contratulation you're passes" + percentage.toFixed(2) + "%" + "with grade A"
    }
    else if (percentage >= 60) {
        grade = "B"
        document.getElementById("result").innerText = "Contratulation you're passes" + percentage.toFixed(2) + "%" + "with grade B"
    }
    else if (percentage >= 50) {
        grade = "C"
        document.getElementById("result").innerText = "Contratulation you're passes" + percentage.toFixed(2) + "%" + "with grade C"
    }
    else if (percentage >= 40) {
        grade = "D"
        document.getElementById("result").innerText = "Contratulation you're passes" + percentage.toFixed(2) + "%" + "with grade D"
    }
    else {
        grade = "Fail"
        document.getElementById("result").innerText = "Oops you're Fail" + percentage.toFixed(2) + "%";
    }
}