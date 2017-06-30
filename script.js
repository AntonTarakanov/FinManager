"use strict";

let doCredit = document.getElementById("do-credit");
doCredit.addEventListener("click", getCredit);
let doEarly = document.getElementById("do-early");
doEarly.addEventListener("click", getEarly);

function getCredit (){
    let dataCredit = getData("credit");
    outPay(calculateCredit(dataCredit), "credit");
}

function getEarly () {
    let dataEarly = getData("early");
    let amount = document.getElementById("amount-early").value;
    let payOne = calculateCredit(dataEarly);
    dataEarly.number = dataEarly.number - amount;
    let payTwo = calculateCredit(dataEarly);
    let economy = getEconomy(payOne, payTwo, dataEarly.countMonths)-amount;
    outEconomy(payTwo, economy);
}

function outEconomy (pay, economy) {
    let outPay = document.getElementById('out-early');
    outPay.textContent = pay;
    let outSaving = document.getElementById('saving');
    outSaving.textContent = economy;
}

function getData (id) {
    let data = {
        number: document.getElementById("sum-"+id).value,
        countMonths: document.getElementById("count-"+id).value,
        percent: document.getElementById("percent-"+id).value,
    };
    return data;
}

function getEconomy (x, y, count) {
    return x*count-y*count;
}

function calculateCredit (data){
    data.percentMonths = data.percent/12/100;
    let tempValue = Math.pow((1+data.percentMonths),data.countMonths);
    return (data.number*data.percentMonths*tempValue)/(tempValue-1);
}

function outPay (pay, id){
    let out = document.getElementById("out-"+id);
    out.textContent = pay;
}