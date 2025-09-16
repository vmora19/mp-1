let one = document.getElementById("input-one");
let two = document.getElementById("input-two");
let output = document.getElementById("output")

function doAddition(){
    num = Number(one.value) + Number(two.value)
    if (isNegative(num)){
        output.style.backgroundColor = "red"
    }
    else{
        output.style.color = "white"
        output.style.backgroundColor = "#a53860"
    }
    output.innerHTML = String(num)
}

function doSubtraction(){
    num = Number(one.value) - Number(two.value)
    if (isNegative(num)){
        output.style.backgroundColor = "red"
    }
    else{
        output.style.color = "white"
        output.style.backgroundColor = "#a53860"
    }
    output.innerHTML = String(num)
}

function doMultiplication(){
    num = Number(one.value) * Number(two.value)
    if (isNegative(num)){
        output.style.backgroundColor = "red"
    }
    else{
        output.style.color = "white"
        output.style.backgroundColor = "#a53860"
    }
    output.innerHTML = String(num)
}

function doDivision(){
    num = Number(one.value) / Number(two.value)
    if (isNegative(num)){
        output.style.backgroundColor = "red"
    }
    else{
        output.style.color = "white"
        output.style.backgroundColor = "#a53860"
    }
    output.innerHTML = String(num)
}

function doPower(){
    let num = Number(one.value)
    let numTwo = Number(two.value)

    if (numTwo !== 0){
        for (i = 0 ; i < (Number(two.value) - 1); i++){
            num *= Number(one.value)
        }  
    }
    else{
        num = 1
    }
    if (isNegative(num)){
        output.style.backgroundColor = "red"
    }
    else{
        output.style.color = "white"
        output.style.backgroundColor = "#a53860"
    }
    output.innerHTML = String(num)
}

function doClear(){
    one.value = ""
    two.value = ""
    output.innerHTML = ""

    output.style.backgroundColor = "#a53860";
    output.style.color = "white";
}

function isNegative(num){
    if (num < 0){
        return true
    }
    else{
        return false
    }
}