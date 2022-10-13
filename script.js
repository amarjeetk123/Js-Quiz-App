const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById("quiz");
// const answerEls;
 let questionEl = document.getElementById("question");

 let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text")
let d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let radio_button = document.querySelectorAll(".answer")

let currentQuiz = 0
let score = 0




function loadQuiz() {
    if(currentQuiz  == quizData.length){
        end_quiz()
    }
   else{
    reset()
    let data = quizData[currentQuiz ]
    questionEl.innerHTML = data.question;
    a_text.innerHTML = data.a
    b_text.innerHTML = data.b
    c_text.innerHTML = data.c
    d_text.innerHTML = data.d
   }
}
loadQuiz()

function deselectAnswers() {
}

function getSelected() {
    
}

submitBtn.addEventListener('click', () => {
    let data = quizData[currentQuiz];
    let correct_answer = data.correct;
    let user_choise = getSelected()
    if(user_choise == correct_answer){
        score = score+1
    }
    currentQuiz++
    loadQuiz()
})
function getSelected() {
    let output;
    radio_button.forEach((input)=>{
        if(input.checked){
            output = input.value ;
        }
    })
    return output;
}





function reset(){
    radio_button.forEach(
        (input)=>{
        input.checked = false ;
    })
}

let total = quizData.length
const end_quiz = () =>{
    document.getElementById("quiz").innerHTML = ` <h1>Thanks for playing the quiz</h1>  
               <h2> Your score is ${score}/${total} </h2>
    `
    document.getElementById("quiz").style.padding = "50px 50px "
}