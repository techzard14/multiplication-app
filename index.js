const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

const scoreEl = document.getElementById("score")

const btnEl = document.querySelector(".btn")
btnEl.addEventListener("mouseover", (event) =>{
    console.log(event.pageX);
});

let score = JSON.parse(localStorage.getItem("score"));
console.log(score)
if (!score){
    score = 0; 
    scoreEl.textContent = score

}else{
    scoreEl.textContent = score
}

questionEl.innerText = `what is ${num1} multiply by ${num2}`

const correctAns = num1 * num2;

formEl.addEventListener("submit", (e)=>{
    // e.preventDefault()
    const userAns = +inputEl.value
    if (userAns === correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()  
    }
    formEl.reset()
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
