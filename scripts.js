const points = document.querySelector('#points')
const button  = document.querySelector('#main-button')

const item1 = document.querySelector('#item1')

let score = 0
let click_power = 0
let auto_power = 0

let price1 = 100
const price1View = document.querySelector('#price1')
item1.disabled = true

let price2 = 500
const price2View = document.querySelector('#price2')
item2.disabled = true

button.addEventListener('click', function(){

    score = (score + click_power + 1)

    points.innerHTML = score



    if(score >= price1){

        item1.disabled = false
    }

    if(score >= price2){

        item2.disabled = false
    }
})


item1.addEventListener('click', function(){

    click_power++

    score = score - price1
    points.innerHTML = score

    if(score < price1){
        item1.disabled = true
    }

    price1 = price1*2
    price1View.innerHTML = price1
})

function loop_point(){

    score = score + auto_power
    points.innerHTML = score

}

item2.addEventListener('click', function(){

    auto_power++
    score = score - price2
    points.innerHTML = score

    if(score < price2){
        item2.disabled = true
    }

    price2 = price2*2
    price2View.innerHTML = price2

})

setInterval(loop_point, 1000)