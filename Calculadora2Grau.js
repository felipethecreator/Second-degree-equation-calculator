function CalcularDelta(ax2, bx, c) {
    let bAoQuadrado = bx ** 2
    let ac = 4 * ax2 * c
    let delta = (bx**2) - 4 * ax2 * c

    if (delta < 0) {
        console.log('Calculando o Δ:')
        console.log('Δ = b² - 4.a.c')
        console.log(`Δ = ${bx}² - 4.${ax2}.${c}`)
        console.log(`Δ = ${bAoQuadrado} - 4.${ax2}.${c}`)
        console.log(`Δ = ${bAoQuadrado} - ${ac}`)
        console.log(`Resultado de Δ = ${delta}`)
        throw new Error("Delta é negativo! Não existem raízes reais para numeros negativos...")
    } else {
         return delta
    } 
} 

function X1(resultDelta, ax2, bx) {
    let x1 = ((-bx + Math.sqrt(resultDelta)) / 2*ax2)
    return x1
    
}
function X2(resultDelta, ax2, bx) {
    let x2 = ((-bx - Math.sqrt(resultDelta)) / 2*ax2)
    return x2
}

ax2 = 1
bx = 4
c = 3

function ImprimirResultado() {
let bAoQuadrado = bx ** 2
let ac = 4 * ax2 * c
try {
const resultDelta = CalcularDelta(ax2,bx,c)
const valorRaizDelta = Math.sqrt(resultDelta)
const resultX1 = X1(resultDelta, ax2, bx)
const resultX2 = X2(resultDelta, ax2, bx)
const resultA = (2 * ax2)
const resultBX1 = -bx + valorRaizDelta
const resultBX2 = -bx - valorRaizDelta
console.log('Calculando o Δ:')
console.log('Δ = b² - 4.a.c')
console.log(`Δ = ${bx}² - 4.${ax2}.${c}`)
console.log(`Δ = ${bAoQuadrado} - 4.${ax2}.${c}`)
console.log(`Δ = ${bAoQuadrado} - ${ac}`)
console.log(`Resultado de Δ = ${resultDelta}`)
console.log("")
console.log("Obtendo resultado de X:")
console.log("X = (-b ± √Δ) / 2.a")
console.log(`X = (-${bx} ± √${resultDelta}) / (2 . ${ax2})`)
console.log("")
console.log(`X1 = (-${bx} + ${valorRaizDelta} / ${resultA})`)
console.log(`X1 = (${resultBX1} / ${resultA})`)
console.log(`Resultado de X1 = ${resultX1}`)
console.log("")
console.log(`X2 = (-${bx} - ${valorRaizDelta} / ${resultA})`)
console.log(`X2 = (${resultBX2} / ${resultA})`)
console.log(`Resultado de X2 = ${resultX2}`)
console.log("")
console.log(`Resultado Final:`)
console.log(`X1: ${resultX1}`)
console.log(`X2: ${resultX2}`)



} catch (error) {
    console.log(error.message);
    }
}

ImprimirResultado()
