function SnapCrackle(maxValue){
    let resultado = "";
    for (let index = 1; index <= maxValue; index++) {
        if (index % 2 !== 0 && index % 5 === 0) {
            resultado += "SnapCrackle, "
            continue
        }
        if (index % 2 !== 0) {
            resultado += "Snap, "
            continue
        }
        if (index % 5 === 0) {
            resultado += "Crackle, "
            continue
        }
        resultado += index + ", "  
}   
    console.log(resultado)
}
SnapCrackle(12)