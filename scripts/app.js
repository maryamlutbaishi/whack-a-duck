function init(){
    //all code goes here
    const gridElem=document.querySelector('.grid')
    const cells=[]
    const gridWidth=10
    const numberOfCells= gridWidth*gridWidth
    function createGrid(){
        // for every cell that we require creat a div
        //append this cell to our gris
        for(let i=0;i<100;i++){
            const cell = document.createElement('div')
            cell.classList.add('duck')
            cell.textContent=i
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    createGrid()
}
document.addEventListener('DOMContentLoaded',init)