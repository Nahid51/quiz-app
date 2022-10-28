const quizDB = [
    {
        "title": "What is the past form of 'eat'?",
        "options": [
            "eat",
            "ate",
            "eaten",
            "have ate"
        ],
        "answer": "ate"
    },
    {
        "title": "Which sentence is present continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I am eating rice"
    },
    {
        "title": "Which sentence is present perfect tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "title": "Which sentence is present perfect continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "title": "Which sentence is past continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I was eating rice"
    },
    {
        "title": "Which sentence is past perfect tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "title": "Which sentence is past perfect continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "title": "Which sentence is future continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will be eating rice"
    },
    {
        "title": "Which sentence is future perfect tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will have eaten rice"
    },
    {
        "title": "Which sentence is future perfect continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I will have been eating rice for 1 year"
        ],
        "answer": "I will have been eating rice for 1 year"
    }
];

const startingMinit = 10;
let time = startingMinit * 60;
const countDownEl = document.querySelector('#countDown');
setInterval(updateCountDown, 1000);

function updateCountDown() {
    const hour = "00";
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerText = `Remaining Time: ${hour}:${minutes}:${seconds}`;
    time--;

    if (minutes === '00') {
        window.location.href = "https://sunny-tanuki-d0e903.netlify.app/time-out/time-out.html"
    }
};

const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");
const question6 = document.querySelector(".question6");
const question7 = document.querySelector(".question7");
const question8 = document.querySelector(".question8");
const question9 = document.querySelector(".question9");
const question10 = document.querySelector(".question10");


const ques1 = question1.innerHTML = `1. ${quizDB[0].title}`;
const ques2 = question2.innerHTML = `2. ${quizDB[1].title}`;
const ques3 = question3.innerHTML = `3. ${quizDB[2].title}`;
const ques4 = question4.innerHTML = `4. ${quizDB[3].title}`;
const ques5 = question5.innerText = `5. ${quizDB[4].title}`;
const ques6 = question6.innerText = `6. ${quizDB[5].title}`;
const ques7 = question7.innerText = `7. ${quizDB[6].title}`;
const ques8 = question8.innerText = `8. ${quizDB[7].title}`;
const ques9 = question9.innerText = `9. ${quizDB[8].title}`;
const ques10 = question10.innerText = `10. ${quizDB[9].title}`;

const enableDisable = () => {
    let qValue1 = document.querySelector("#qValue1");
    let qValue2 = document.querySelector("#qValue2");
    let qValue3 = document.querySelector("#qValue3");
    let qValue4 = document.querySelector("#qValue4");
    if (qValue1.checked) {
        qValue2.disabled = true;
        qValue3.disabled = true;
        qValue4.disabled = true;
    }
    if (qValue2.checked) {
        qValue1.disabled = true;
        qValue3.disabled = true;
        qValue4.disabled = true;
    }
    if (qValue3.checked) {
        qValue1.disabled = true;
        qValue2.disabled = true;
        qValue4.disabled = true;
    }
    if (qValue4.checked) {
        qValue1.disabled = true;
        qValue2.disabled = true;
        qValue3.disabled = true;
    }
};
const enableDisable2 = () => {
    let qValue5 = document.querySelector("#qValue5");
    let qValue6 = document.querySelector("#qValue6");
    let qValue7 = document.querySelector("#qValue7");
    let qValue8 = document.querySelector("#qValue8");
    if (qValue5.checked) {
        qValue6.disabled = true;
        qValue7.disabled = true;
        qValue8.disabled = true;
    }
    if (qValue6.checked) {
        qValue5.disabled = true;
        qValue7.disabled = true;
        qValue8.disabled = true;
    }
    if (qValue7.checked) {
        qValue5.disabled = true;
        qValue6.disabled = true;
        qValue8.disabled = true;
    }
    if (qValue8.checked) {
        qValue5.disabled = true;
        qValue6.disabled = true;
        qValue7.disabled = true;
    }
};
const enableDisable3 = () => {
    let qValue9 = document.querySelector("#qValue9");
    let qValue10 = document.querySelector("#qValue10");
    let qValue11 = document.querySelector("#qValue11");
    let qValue12 = document.querySelector("#qValue12");
    if (qValue9.checked) {
        qValue10.disabled = true;
        qValue11.disabled = true;
        qValue12.disabled = true;
    }
    if (qValue10.checked) {
        qValue9.disabled = true;
        qValue11.disabled = true;
        qValue12.disabled = true;
    }
    if (qValue11.checked) {
        qValue9.disabled = true;
        qValue10.disabled = true;
        qValue12.disabled = true;
    }
    if (qValue12.checked) {
        qValue9.disabled = true;
        qValue10.disabled = true;
        qValue11.disabled = true;
    }
};
const enableDisable4 = () => {
    let qValue13 = document.querySelector("#qValue13");
    let qValue14 = document.querySelector("#qValue14");
    let qValue15 = document.querySelector("#qValue15");
    let qValue16 = document.querySelector("#qValue16");
    if (qValue13.checked) {
        qValue14.disabled = true;
        qValue15.disabled = true;
        qValue16.disabled = true;
    }
    if (qValue14.checked) {
        qValue13.disabled = true;
        qValue15.disabled = true;
        qValue16.disabled = true;
    }
    if (qValue15.checked) {
        qValue13.disabled = true;
        qValue14.disabled = true;
        qValue16.disabled = true;
    }
    if (qValue16.checked) {
        qValue13.disabled = true;
        qValue14.disabled = true;
        qValue15.disabled = true;
    }
};
const enableDisable5 = () => {
    let qValue17 = document.querySelector("#qValue17");
    let qValue18 = document.querySelector("#qValue18");
    let qValue19 = document.querySelector("#qValue19");
    let qValue20 = document.querySelector("#qValue20");
    if (qValue17.checked) {
        qValue18.disabled = true;
        qValue19.disabled = true;
        qValue20.disabled = true;
    }
    if (qValue18.checked) {
        qValue17.disabled = true;
        qValue19.disabled = true;
        qValue20.disabled = true;
    }
    if (qValue19.checked) {
        qValue17.disabled = true;
        qValue18.disabled = true;
        qValue20.disabled = true;
    }
    if (qValue20.checked) {
        qValue17.disabled = true;
        qValue18.disabled = true;
        qValue19.disabled = true;
    }
};
const enableDisable6 = () => {
    let qValue21 = document.querySelector("#qValue21");
    let qValue22 = document.querySelector("#qValue22");
    let qValue23 = document.querySelector("#qValue23");
    let qValue24 = document.querySelector("#qValue24");
    if (qValue21.checked) {
        qValue22.disabled = true;
        qValue23.disabled = true;
        qValue24.disabled = true;
    }
    if (qValue22.checked) {
        qValue21.disabled = true;
        qValue23.disabled = true;
        qValue24.disabled = true;
    }
    if (qValue23.checked) {
        qValue21.disabled = true;
        qValue22.disabled = true;
        qValue24.disabled = true;
    }
    if (qValue24.checked) {
        qValue21.disabled = true;
        qValue22.disabled = true;
        qValue23.disabled = true;
    }
};
const enableDisable7 = () => {
    let qValue25 = document.querySelector("#qValue25");
    let qValue26 = document.querySelector("#qValue26");
    let qValue27 = document.querySelector("#qValue27");
    let qValue28 = document.querySelector("#qValue28");
    if (qValue25.checked) {
        qValue26.disabled = true;
        qValue27.disabled = true;
        qValue28.disabled = true;
    }
    if (qValue26.checked) {
        qValue25.disabled = true;
        qValue27.disabled = true;
        qValue28.disabled = true;
    }
    if (qValue27.checked) {
        qValue25.disabled = true;
        qValue26.disabled = true;
        qValue28.disabled = true;
    }
    if (qValue28.checked) {
        qValue25.disabled = true;
        qValue26.disabled = true;
        qValue27.disabled = true;
    }
};
const enableDisable8 = () => {
    let qValue29 = document.querySelector("#qValue29");
    let qValue30 = document.querySelector("#qValue30");
    let qValue31 = document.querySelector("#qValue31");
    let qValue32 = document.querySelector("#qValue32");
    if (qValue29.checked) {
        qValue30.disabled = true;
        qValue31.disabled = true;
        qValue32.disabled = true;
    }
    if (qValue30.checked) {
        qValue29.disabled = true;
        qValue31.disabled = true;
        qValue32.disabled = true;
    }
    if (qValue31.checked) {
        qValue29.disabled = true;
        qValue30.disabled = true;
        qValue32.disabled = true;
    }
    if (qValue32.checked) {
        qValue29.disabled = true;
        qValue30.disabled = true;
        qValue31.disabled = true;
    }
};
const enableDisable9 = () => {
    let qValue33 = document.querySelector("#qValue33");
    let qValue34 = document.querySelector("#qValue34");
    let qValue35 = document.querySelector("#qValue35");
    let qValue36 = document.querySelector("#qValue36");
    if (qValue33.checked) {
        qValue34.disabled = true;
        qValue35.disabled = true;
        qValue36.disabled = true;
    }
    if (qValue34.checked) {
        qValue33.disabled = true;
        qValue35.disabled = true;
        qValue36.disabled = true;
    }
    if (qValue35.checked) {
        qValue33.disabled = true;
        qValue34.disabled = true;
        qValue36.disabled = true;
    }
    if (qValue36.checked) {
        qValue33.disabled = true;
        qValue34.disabled = true;
        qValue35.disabled = true;
    }
};
const enableDisable10 = () => {
    let qValue37 = document.querySelector("#qValue37");
    let qValue38 = document.querySelector("#qValue38");
    let qValue39 = document.querySelector("#qValue39");
    let qValue40 = document.querySelector("#qValue40");
    if (qValue37.checked) {
        qValue38.disabled = true;
        qValue39.disabled = true;
        qValue40.disabled = true;
    }
    if (qValue38.checked) {
        qValue37.disabled = true;
        qValue39.disabled = true;
        qValue40.disabled = true;
    }
    if (qValue39.checked) {
        qValue37.disabled = true;
        qValue38.disabled = true;
        qValue40.disabled = true;
    }
    if (qValue40.checked) {
        qValue37.disabled = true;
        qValue38.disabled = true;
        qValue39.disabled = true;
    }
};



const check = () => {
    let c = 0;
    const q1 = document.quiz.question1.value;
    const q2 = document.quiz.question2.value;
    const q3 = document.quiz.question3.value;
    const q4 = document.quiz.question4.value;
    const q5 = document.quiz.question5.value;
    const q6 = document.quiz.question6.value;
    const q7 = document.quiz.question7.value;
    const q8 = document.quiz.question8.value;
    const q9 = document.quiz.question9.value;
    const q10 = document.quiz.question10.value;
    if (q1 === quizDB[0].answer) { c++ }
    if (q2 === quizDB[1].answer) { c++ }
    if (q3 === quizDB[2].answer) { c++ }
    if (q4 === quizDB[3].answer) { c++ }
    if (q5 === quizDB[4].answer) { c++ }
    if (q6 === quizDB[5].answer) { c++ }
    if (q7 === quizDB[6].answer) { c++ }
    if (q8 === quizDB[7].answer) { c++ }
    if (q9 === quizDB[8].answer) { c++ }
    if (q10 === quizDB[9].answer) { c++ }

    localStorage.setItem("sumResult", c);
    // return false;
};