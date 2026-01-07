// ----------------------------
// ТЕСТЫ — вопросы по темам (обновлённые)
// ----------------------------
const TESTS = {
    krit: {
        title: "Критическое мышление",
        questions: [
            "Вы принимаете мнение человека только если оно совпадает с мнением авторитета?",
            "Вы размышляете, прежде чем принять или отвергнуть чьи-то слова?",
            "Вы чувствуете неприязнь, когда ваши убеждения сталкиваются с чужими?",
            "Вы склонны формировать мнение о чем-то или о ком-то, не разобравшись?",
            "Вам хочется утешать себя, лишь бы не принимать горькую правду?",
            "Вы считаете, что правда у каждого своя и её нельзя найти?",
            "Вы доверяете слухам и мнением большинства вместо самостоятельного изучения темы или человека?",
            "Вы судите всех по себе?",
            "Вы склонны обобщать два разных понятия?",
            "Вам тяжело вникнуть в вещи, которые новые для вас?"
        ]
    },

    selfesteem: {
        title: "Низкая самооценка",
        questions: [
            "Вы выискиваете недостатки у других потому что не прощаете свои?",
            "Вам охота стать лучше кого-то?",
            "Вам охота всем что-то доказать?",
            "Вы сравниваете себя с другими?",
            "Вы злитесь на себя за ошибки?",
            "Вы носите маску потому что боитесь показать реального себя?",
            "Вы хвастаетесь перед друзьями или близкими?",
            "Вы любите грубо кого-то подкалывать чтобы чувствовать себя выше?",
            "Вы любите грубо шутить над собой перед друзьями или близкими?",
            "Вы верите в идеальных людей?",
            "Вы боитесь признать ошибку перед кем-то?",
            "Вы много сплетничаете?",
            "Вы обесцениваете свои достоинства?",
            "Вас беспокоит мнение окружающих о Вас?",
            "Вам легче складывать ответственность вместо того чтобы признать свои ошибки?",
            "Вас задевает критика?"
        ]
    },

    manip: {
        title: "Собеседник-манипулятор",
        questions: [
            "Отрицает свою вину, но при этом у вас есть аргументы про него или нее?",
            "Его или её красивые слова не сходятся с действиями?",
            "Он или она вас провоцирует на негативные эмоции?",
            "Уходит от неудобных вопросов?",
            "Он или она проявляет агрессию или пассивность, когда правда раскрыта?",
            "Он или она искажает ваши слова?",
            "Он или она говорит нехорошие вещи за вашей спиной?",
            "Он или она вас шантажирует?",
            "Он или она пытается вызвать чувство вины у Вас?"
        ]
    },

    stress: {
        title: "Хронический стресс",
        questions: [
            "У вас появляется раздражение на самого себя, но при этом умом понимаете, что ошибаться это нормально, если учиться на ошибках?",
            "Вы чувствуете тревогу, когда сталкиваетесь с людьми или их критикой, но при этом знаете, что не все идеальные и всем не угодить?",
            "Вы чувствуете опасность даже там, где её нет?",
            "У вас проблема с концентрацией внимания?",
            "Вы можете раздражаться на человека, даже если тот ничего плохого не делает?",
            "У вас есть мыслительная жвачка, связанная с музыкой, страшными образами после ужастиков и т.д.?",
            "Вы чувствуете сильное чувство вины, даже зная, что вы правы?",
            "Ваш сон прерывается?",
            "У Вас есть хроническая усталость / Вы весь день измотаны даже после долгого сна?"
        ]
    },

    introvert: {
        title: "Признаки интроверта (шизоида, флегматика, меланхолика)",
        questions: [
            "У Вас или у него/неё небольшой круг друзей?",
            "Вы или он/она чувствуете усталость даже после приятного общения?",
            "Вы или он/она не любите разговоры ради разговоров?",
            "Вы или он/она не выражаете эмоции ярко, что противоречит внутреннему состоянию?",
            "Вам или ему/ей тяжело фокусироваться на задачах в шумном месте?",
            "Вы или он/она открыты с собеседником только 1 на 1?",
            "Вам или ему/ей тяжело формулировать мысли мгновенно?",
            "Вы или он/она внимательны к деталям и к окружающим?",
            "Вам или ему/ей не скучно с самим собой и не стремитесь получить внимание?",
            "Вы или он/она прямолинейны и не терпите ложь независимо от её цели?"
        ]
    },

    extrovert: {
        title: "Признаки экстраверта (истероида, сангвиника, холерика)",
        questions: [
            "Вам или ему/ей не нравится одиночество?",
            "Вам или ему/ей нравится общаться просто так, даже если стесняетесь кого-то?",
            "Вам или ему/ей не нравятся паузы в общении?",
            "У вас или у него/неё много друзей или знакомых в интернете или в жизни?",
            "Вы или он/она чувствуете бодрость во время живого общения?",
            "Вы или он/она озвучиваете мысли вслух?"
        ]
    },

    ambivert: {
        title: "Признаки амбиверта",
        questions: [
            "Вы или он(а) не считаете себя экстравертом или интровертом?",
            "Вы или он(а) можете быть в хорошей компании и одни?",
            "Вы или он(а) можете много болтать, но делать паузы в разговорах?"
        ]
    },

    infantile: {
        title: "Признаки Инфантильности/Незрелости",
        questions: [
            "Вы или он/она постоянно жалуетесь на жизнь, но ничего не делаете с этим?",
            "Вы или он/она не благодарны за помощь или поддержку?",
            "Вы или он/она склонны обвинять кого-то вместо того чтобы признать свои ошибки и не меняетесь?",
            "Вы или он/она не придерживаетесь личных принципов?",
            "Вы или он/она тяжело доводите дела до конца?",
            "Вы или он/она обижаетесь на критику?"
        ]
    }
};

// ----------------------------
// ЛОГИКА ТЕСТА
// ----------------------------
let currentTest = null,
    qi = 0,
    answers = [];

// Инициализация карточек тестов
document.querySelectorAll(".card").forEach(card => {
    card.onclick = () => startTest(card.dataset.test);
});

// Инициализация кнопок навигации
document.getElementById("back").onclick = handleBack;
document.getElementById("next").onclick = handleNext;

function startTest(id) {
    currentTest = TESTS[id];
    qi = 0;
    answers = new Array(currentTest.questions.length).fill(null);
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("quizWrap").classList.remove("hidden");
    document.getElementById("testTitle").textContent = currentTest.title;
    renderQuestion();
}

function renderQuestion() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "";
    const qText = currentTest.questions[qi];
    
    if (!qText) {
        quiz.innerHTML = "<p style='color:#777'>В этой теме пока нет вопросов.</p>";
        document.getElementById("next").style.display = "none";
        return;
    }

    const q = document.createElement("div");
    q.className = "question";
    q.innerHTML = `<div style="font-weight:700">${qText}</div>`;

    const opts = document.createElement("div");
    opts.className = "options";

    const yesBtn = document.createElement("div");
    yesBtn.className = "opt y";
    yesBtn.textContent = "ДА";
    yesBtn.onclick = () => {
        answers[qi] = 1;
        renderQuestion();
    };
    if (answers[qi] === 1) yesBtn.classList.add("selected");

    const sometimesBtn = document.createElement("div");
    sometimesBtn.className = "opt s";
    sometimesBtn.textContent = "ИНОГДА";
    sometimesBtn.onclick = () => {
        answers[qi] = 0.5;
        renderQuestion();
    };
    if (answers[qi] === 0.5) sometimesBtn.classList.add("selected");

    const noBtn = document.createElement("div");
    noBtn.className = "opt n";
    noBtn.textContent = "НЕТ";
    noBtn.onclick = () => {
        answers[qi] = 0;
        renderQuestion();
    };
    if (answers[qi] === 0) noBtn.classList.add("selected");

    opts.appendChild(yesBtn);
    opts.appendChild(sometimesBtn);
    opts.appendChild(noBtn);

    q.appendChild(opts);
    quiz.appendChild(q);

    document.getElementById("next").textContent = qi === currentTest.questions.length - 1 ? "Завершить" : "Дальше";
}

function handleBack() {
    if (qi === 0) {
        document.getElementById("quizWrap").classList.add("hidden");
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("result").classList.add("hidden");
        document.querySelector(".nav").classList.remove("hidden");
        return;
    }
    qi--;
    renderQuestion();
}

function handleNext() {
    if (qi < currentTest.questions.length - 1) {
        qi++;
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const allYes = answers.every(v => v === 1);
    let message = "";
    const sum = answers.reduce((acc, v) => acc + (v || 0), 0);
    const score = Math.max(0, 10 - sum);

    if (allYes) {
        switch (currentTest.title) {
            case "Критическое мышление":
                message = "Критическое мышление страдает (все ответы ДА)";
                break;
            case "Низкая самооценка":
                message = "У вас низкая самооценка (все ответы ДА)";
                break;
            case "Собеседник-манипулятор":
                message = "Вы имеете дело с манипулирующим человеком (все ответы ДА)";
                break;
            case "Хронический стресс":
                message = "У вас высокий уровень стресса (все ответы ДА)";
                break;
            case "Признаки интроверта (шизоида, флегматика, меланхолика)":
                message = "Интроверсия зашкаливает (все ответы ДА)";
                break;
            case "Признаки экстраверта (истероида, сангвиника, холерика)":
                message = "Экстраверсия зашкаливает (все ответы ДА)";
                break;
            case "Признаки амбиверта":
                message = "Амбивертность выражена максимально (все ответы ДА)";
                break;
            case "Признаки Инфантильности/Незрелости":
                message = "Явные признаки инфантильности/незрелости (все ответы ДА)";
                break;
            default:
                message = "Все ответы ДА";
        }
    } else {
        switch (currentTest.title) {
            case "Критическое мышление":
                if (score <= 3) message = "Отличное критическое мышление";
                else if (score <= 6) message = "Средний уровень критического мышления";
                else message = "Критическое мышление страдает";
                break;
            case "Хронический стресс":
                if (score <= 3) message = "У вас низкий уровень стресса";
                else if (score <= 6) message = "Средний уровень стресса";
                else message = "У вас высокий уровень стресса";
                break;
            case "Низкая самооценка":
                if (score <= 3) message = "У вас здоровая самооценка";
                else if (score <= 6) message = "Уровень самооценки средний";
                else message = "У вас низкая самооценка";
                break;
            default:
                message = "";
        }
    }

    const res = document.getElementById("result");
    res.classList.remove("hidden");
    res.className = "result-box";
    res.innerHTML = `<b>${currentTest.title}</b><br>Уровень: ${score.toFixed(1)}/10<br>${message}<br><button id="toMenu">Вернуться в меню</button>`;

    document.getElementById("quiz").innerHTML = "";
    document.querySelector(".nav").classList.add("hidden");

    document.getElementById("toMenu").onclick = () => {
        document.getElementById("quizWrap").classList.add("hidden");
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("result").classList.add("hidden");
        document.querySelector(".nav").classList.remove("hidden");
        answers = [];
        qi = 0;
    };
}