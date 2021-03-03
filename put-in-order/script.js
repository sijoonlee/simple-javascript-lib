

document.getElementsByTagName("body")[0].innerHTML = `
<div id="holder">
    <div data-order="1">1<i class="fas fa-arrow-up order-up"></i><i class="fas fa-arrow-down order-down"></i></div>
    <div data-order="2">2<i class="fas fa-arrow-up order-up"></i><i class="fas fa-arrow-down order-down"></i></div>
    <div data-order="3">3<i class="fas fa-arrow-up order-up"></i><i class="fas fa-arrow-down order-down"></i></div>
    <div data-order="4">4<i class="fas fa-arrow-up order-up"></i><i class="fas fa-arrow-down order-down"></i></div>
    <div data-order="5">5<i class="fas fa-arrow-up order-up"></i><i class="fas fa-arrow-down order-down"></i></div>    
</div>
<div id="btnCheck">Check Order</div>
<div id="result"></div>
`
const holder = document.getElementById("holder");
const btnCheck = document.getElementById("btnCheck");
const result = document.getElementById("result");

function changeOrder(children, index, goUp){
    let temp = null;
    let arr = [];
    for(const child of children){
        arr.push(child.outerHTML)
    }


    if(goUp === true){
        if(index > 0){
            temp = arr[index-1]
            arr[index-1] = arr[index]
            arr[index] = temp
        }
        
    } else {
        if(index < arr.length - 1){
            temp = arr[index+1]
            arr[index+1] = arr[index]
            arr[index] = temp
        }
    }
    return arr.join(" ")
}

function addEventListenerToArrow(){
    const upArrows = document.getElementsByClassName("order-up")
    const downArrows = document.getElementsByClassName("order-down")
    for(let i = 0; i < upArrows.length; i++){
        upArrows[i].addEventListener("click", (e)=>{
            const children = changeOrder(e.target.parentElement.parentElement.children, i, true)
            e.target.parentElement.parentElement.innerHTML = children
            addEventListenerToArrow()
        })
        downArrows[i].addEventListener("click", (e)=>{
            const children = changeOrder(e.target.parentElement.parentElement.children, i, false)
            e.target.parentElement.parentElement.innerHTML = children
            addEventListenerToArrow()
        })
    }
}

btnCheck.addEventListener("click", ()=>{
    let correct = true
    for(let i = 0; i < holder.children.length; i++){
        if(holder.children[i].dataset.order != i + 1 ){
            correct = false
            break
        }
    }
    if(correct) result.innerHTML = "You got it"
    else result.innerHTML = "You're wrong"
})



addEventListenerToArrow()


