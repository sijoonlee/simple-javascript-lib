document.getElementsByTagName("body")[0].innerHTML = `
<div id="holder">
    <div>What is my name?</div>
    <input id="answer" placeholder="type here" type="text"/>
    <div id="btnCheck">Check Answer</div>
    <div id="result"></div>
</div>
`
const btnCheck = document.getElementById("btnCheck");
const result = document.getElementById("result");
const userAnswer = document.getElementById("answer")
const correctAnswer = "Sijoon Lee"


btnCheck.addEventListener("click", ()=>{
    if(userAnswer.value.trim().length > 0){
        result.innerHTML = "Thank you for your answer, the name is Sijoon Lee"
    }    
})

