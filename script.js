let currentQuestion = 1;
let answers = {};

const questions = {
    1: "Do you miss me?",
    2: "Do you want to see me?",
    3: "Should we plan something special?"
};

function answer(choice) {
    answers[currentQuestion] = choice;
    currentQuestion++;

    if (currentQuestion <= 3) {
        updateQuestion();
    } else {
        showResult();
    }
}

function updateQuestion() {
    document.getElementById('progress').textContent = `Question ${currentQuestion} of 3`;
    document.getElementById('question').textContent = questions[currentQuestion];
}

function showResult() {
    const progress = document.getElementById('progress');
    const question = document.getElementById('question');
    const buttonContainer = document.getElementById('buttonContainer');
    const result = document.getElementById('result');

    progress.style.display = 'none';
    buttonContainer.style.display = 'none';

    let message = '';
    const heart = '<div class="heart">💕</div>';

    if (answers[1] === 'yes' && answers[2] === 'yes' && answers[3] === 'yes') {
        message = heart + "Perfect! I miss you too and can't wait to see you. Let's make something awsome happen! 🥰";
    } else if (answers[1] === 'yes' && answers[2] === 'yes') {
        message = heart + "I miss you too! I'm happy you want to see me. Let's make it happen soon! ❤️";
    } else if (answers[1] === 'yes') {
        message = heart + "Aww, I miss you too! Even though we can't meet right now, you're always on my mind. 💭";
    } else if (answers[2] === 'yes' && answers[3] === 'yes') {
        message = heart + "I love your enthusiasm! Let's plan something really special together. ✨";
    } else if (answers[2] === 'yes') {
        message = heart + "I want to see you too! Let's find the perfect time. 😊";
    } else {
        message = heart + "That's okay! I appreciate your honesty. Just know I'm here whenever you want. 💙";
    }

    question.innerHTML = message;
    result.innerHTML = '<button class="yes-btn" style="margin-top: 30px;" onclick="location.reload()">Start Over</button>';
}
