function init(){
    //all code goes here
    const gridElem=document.querySelector('.grid')
    const scoreElem=document.querySelector('#Score-display')
    const audioElm=document.querySelector('#quack')
    const cells=[]
    const gridWidth=10
    const numberOfCells= gridWidth*gridWidth

    let duckPosition= 20
    let score= 0
    let totalDucks=0

    function addDuck(){
        cells[duckPosition].classList.add('duck')
        totalDucks++
    }
    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }
    function endGame(){
        alert('Game Ended, Score:'+score)
        score =0
        scoreElem.textContent=`Your Score Is 0`
        totalDucks=0
        
    }
    function placeDuck(){
         removeDuck()
            duckPosition=Math.floor(Math.random()*numberOfCells)
            addDuck()
    }
    function play(){
        setInterval(()=>{
            if(totalDucks<10){
            // removeDuck()
            // duckPosition=Math.floor(Math.random()*numberOfCells)
            // addDuck()
            placeDuck()
            }else{
                endGame()
                
            }
            
            
        },4000)
    }
    function handeleClick(event){
        console.log('Handel Click has run!')
        if(event.target.classList.contains('duck')){
            audioElm.pause()
            audioElm.currentTime=0
            score += 10
            scoreElem.textContent=`Your Score is ${score}`
            audioElm.play()
            placeDuck()
            console.log(score)
        }
        if(score>=100){
            endGame()
        }
    }
    function createGrid(){
        // for every cell that we require creat a div
        //append this cell to our gris
        for(let i=0;i<100;i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent=i
            cell.addEventListener('click',handeleClick)
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    createGrid()
    play()
}
document.addEventListener('DOMContentLoaded',init)