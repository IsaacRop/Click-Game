let points = document.querySelector('#points')
const button  = document.querySelector('#main-button')

const item1 = document.querySelector('#item1')

let score = 0
let click_power = 0

item1.disabled = true

button.addEventListener('click', function(){

    score = (score + click_power + 1)

    points.innerHTML = score



    if(score >= 100){

        item1.disabled = false
    }
})


item1.addEventListener('click', function(){

    click_power++

    score = score - 100
    points.innerHTML = score


    if(score < 100){

        item1.disabled = true
    }
})