document.querySelector('#somar').addEventListener('click', () => {
    var num1 = document.querySelector('#c')
    var num2 = document.querySelector('#d')
    if (num1.value >= 2 && num1.value <= 10 && num2.value >= 2 && num2.value <= 10) {
        var resultado = Number(num1.value) + Number(num2.value)
        document.querySelector("#sominha").innerHTML = resultado
    } else {
        document.querySelector("#sominha").innerHTML = "digite um valor valido"
    }
})