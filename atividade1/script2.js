function tabuada(){
    var x = document.getElementsByTagName('p')
    for (let i = 1; i <= 10; i++){
        var calculo = 9 * i
        x[i].innerHTML = `9 * ${i} = ${calculo}`
    }
}