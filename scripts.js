const points = document.querySelector('#points')
const button  = document.querySelector('#main-button')
const theme = document.querySelector('#theme-toggle')
const body = document.querySelector('body')

const cstats = document.querySelector('#Cstats')
const astats = document.querySelector('#Astats')

const item1 = document.querySelector('#item1')
const item2 = document.querySelector('#item2')

let score = 0
let click_power = 1
let auto_power = 0

let price1 = 100
const price1View = document.querySelector('#price1')
item1.disabled = true

let price2 = 500
const price2View = document.querySelector('#price2')
item2.disabled = true





function check(){

    if(score >= price1){

        item1.disabled = false
    } else {

        item1.disabled = true
    }
    if(score >= price2){

        item2.disabled = false
    } else {

        item2.disabled = true
    }

}

theme.addEventListener('click', function(){
    
    body.classList.toggle('dark-mode')
})

button.addEventListener('click', function(){

    score = score + click_power

    points.innerHTML = score
})

item1.addEventListener('click', function(){

    click_power = click_power*2
    

    score = score - price1
    points.innerHTML = score
    

    price1 = price1*2
    price1View.innerHTML = price1

    cstats.innerHTML = click_power
    check()
})

function loop_point(){

    score = score + auto_power
    points.innerHTML = score

}

item2.addEventListener('click', function(){


    auto_power++
    score = score - price2
    points.innerHTML = score

    

    price2 = price2*2
    price2View.innerHTML = price2

    astats.innerHTML = auto_power
    check()

})

setInterval(loop_point, 1000)
setInterval(check, 100)

