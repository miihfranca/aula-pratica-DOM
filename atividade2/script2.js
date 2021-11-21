function alo(){
    var name = document.getElementById('nome')
    document.getElementById('msg').innerHTML = name.value.toUpperCase()
}
function soma(){
    var idade = document.getElementById('idade').value
    var sominha = parseInt(idade) + 10
    document.getElementById('msgFinal').innerHTML = `Daqui a 10 anos você terá ${sominha} anos`
}

