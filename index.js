const restart = document.getElementById("restart")
const play=document.getElementById("play")
const rock=document.getElementById("rock")
const scissors=document.getElementById("scissors")
const paper=document.getElementById("paper")
let selectedElement=null
const rock_en=document.getElementById("rock_en")
const scissors_en=document.getElementById("scissors_en")
const paper_en=document.getElementById("paper_en")
const images = Array.from(document.querySelectorAll('.img'))
    


function selectElement(elem){ 
    images.map(item => {
        item.style.display = 'none'    
    })
    console.log(images)

    elem.style.display = 'block'
    selectedElement=elem
}

rock.addEventListener('click',() => selectElement(rock))

paper.addEventListener('click',() => selectElement(paper))

scissors.addEventListener('click',() => selectElement(scissors))


restart.addEventListener("click", ()=>{
    location.reload() 
})

play.addEventListener("click", ()=>{
    const array = Array.from(document.querySelectorAll('.enemy'))
    array[Math.floor(Math.random()*array.length)].style.display = 'block'
})

rock_en.style.display = 'none'
paper_en.style.display = 'none'
scissors_en.style.display = 'none'

