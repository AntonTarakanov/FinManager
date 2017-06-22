"use strict";

let inputBlock = document.getElementById("options");
inputBlock.addEventListener("click", acceptData);

function acceptData (){
    let dataCredit = {
        number: document.getElementById("sum").value,
        countMonths: document.getElementById("count").value,
        percent: document.getElementById("percent").value,
        outputText: document.getElementById("outputText")
    };
    console.log("dataCredit.percent-dataCredit.countMonths --- "+dataCredit.percent+"-"+dataCredit.countMonths);
    dataCredit.percentMonths = dataCredit.percent/12/100;

    outputText.textContent = calculate(dataCredit);
}

function calculate(data){
    let tempValue = Math.pow((1+data.percentMonths),data.countMonths);
    console.log("percentMonths = "+data.percentMonths+".");
    console.log("tempValue = "+tempValue+".");
    return (data.number*data.percentMonths*tempValue)/(tempValue-1);
}

