const quizData = [
    {
        question: "How old are you?",
        a: 'Above 60 Years',
        b: 'Between 45 - 60 Years',
        c: 'Between 30 - 45 Years',
        d: 'Less than 30 Years',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "Who depends on you financially?",
        a: 'Parents, Spouse & Kid(s)',
        b: 'Spouse & Kid(s)',
        c: 'Parents/Spouse',
        d: 'No dependents',
        e:'Spouse',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd',
        correctE:'e',
    },
    {
        question: "What's your investing experience?",
        a: '10000 and less',
        b: '100000-50000',
        c: '50000-200000',
        d: '200000 and above',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "What is the first thought to cross your mind, when you invest your money?",
        a: 'Danger',
        b: 'Uncertainty',
        c: 'Opportunity',
        d: 'Thrill',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "What type of income you desire?",
        d: 'Very unstable, probability of higher gains',
        c: 'Unstable, decent amount every month',
        b: 'Somewhat stable, with variable incentives',
        a: 'Stable, fixed amount every month',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "Choose your investment preference/Objective",
        a: 'Principal protection, I should not lose my money',
        b: 'Can consider a loss of 4% if the expected gains are of 10%',
        c: 'Can consider a loss of 15% if the expected gains are of 30%',
        d: 'Can consider a loss of 30% if the expected gains are of 50%',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "How would you feel if the performance of your recent investments is below expectations?",
        a: 'Very upset',
        b: 'Somewhat upset, but hope that it will improve in the future',
        c: 'Uneasy but willing to take it in my stride',
        d: 'Not upset because I know that all investments carry risk',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "Describe your Risk Range. What level of losses and profits you would be comfortable with?",
        a: 'Worst Year = 1% and Best Year = 15 % ',
        b: 'Worst Year = -5% and Best Year = 20%',
        c: 'Worst Year = -10% and Best Year = 25%',
        d: 'Worst Year = -15% and Best Year = 30%',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "Would you invest in a company that underperformed in the past and caused you losses?",
        a: 'Definitely not',
        b: 'May be, but am not very sure',
        c: 'Perhaps I will',
        d: 'Definitely, yes',
        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd'
    },
    {
        question: "What is your monthly in-hand income after tax?",
        a: '<₹50,000 a month',
        b: '₹50K to ₹1L a month',
        c: '₹1L to ₹2L a month',
        d: '₹2L to ₹3L a month / >₹3L a month',

        correctA: 'a',
        correctB: 'b',
        correctC: 'c',
        correctD: 'd',
        correctE:'e',
    },



]
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");


const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer =  answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){


    answerEls.forEach(answerEl => {
        answerEl.checked = false;
        
    });
}

submitbtn.addEventListener('click', () => {
    
    const answer = getSelected();
    if (answer) {
        if(answer === quizData[currentQuiz].correctA){
            score = score + 1 ;
        }
        if(answer === quizData[currentQuiz].correctB){
            score = score + 2;
        }
        if(answer === quizData[currentQuiz].correctC){
            score = score + 3;
        }
        if(answer === quizData[currentQuiz].correctD){
            score = score + 4;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            if(score <=12){
            //     quiz.innerHTML = `<h2>You have a score ${score}.</h2><button onclick="location.reload()">Reload</button></button>`;
            // }
            quiz.innerHTML = `<h2> Very Conservative.</h2><img src="imgs\Conservative.png" alt ="Very Conservative">`;

            }
            else if(13<=score<=19){
                quiz.innerHTML = `<h2> Conservative.</h2><img src="imgs\Conservative.png" alt ="Very Conservative">`;
            }
            else if(20<=score<=27){
                quiz.innerHTML = `<h2> Moderate.</h2><img src="imgs\Moderate.png" alt ="Very Conservative"><p></p>`;
            }
            else if(28<=score<=35){
                quiz.innerHTML = `<h2> Aggressive.</h2><img src="imgs\Aggressive.png" alt ="Very Conservative">`;
            }
            else if(score>=36){
                quiz.innerHTML = `<h2>High Aggressive.</h2><img src="imgs\HighAgressive.png" alt ="Very Conservative">`;
            }
           
        }
    }

});