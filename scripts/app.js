function init(){
    //all code goes here
    const gridElem=document.querySelector('.grid')
    function createGrid(){
        // for every cell that we require creat a div
        //append this cell to our gris
        for(let i=0;i<100;i++){
            const cell = document.createElement('div')
            cell.textContent=i
            
            gridElem.appendChild(cell)
        }
    }
    createGrid()
}
document.addEventListener('DOMContentLoaded',init)