let points = document.querySelector('#points')
const button  = document.querySelector('#main-button')

let score = 0

button.addEventListener('click', function(){

    score++

    points.innerHTML = score

    
})