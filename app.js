// Global State
const state = {
    currentUser: null,
    currentLevel: 1,
    currentQuestion: 0,
    score: 0,
    answers: [],
    timer: null,
    timeLeft: 20,
    questionsPerLevel: 10,
    maxLevels: 50
};

// LocalStorage Keys
const STORAGE_KEYS = {
    LEADERBOARD: 'genquiz_leaderboard',
    USER_PROGRESS: 'genquiz_user_progress'
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('GenQuiz initialized');
    loadLeaderboard();
});

// Navigation Functions
function showHome() {
    hideAllScreens();
    document.getElementById('home-screen').classList.add('active');
}

function showRegistration() {
    hideAllScreens();
    document.getElementById('registration-screen').classList.add('active');
}

function showLeaderboard() {
    hideAllScreens();
    renderLeaderboard();
    document.getElementById('leaderboard-screen').classList.add('active');
}

function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Registration
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    
    if (username) {
        state.currentUser = username;
        state.currentLevel = 1;
        state.currentQuestion = 0;
        state.score = 0;
        state.answers = [];
        startQuiz();
    }
});

// Quiz Functions
function startQuiz() {
    hideAllScreens();
    document.getElementById('quiz-screen').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const questions = getQuestionsForLevel(state.currentLevel);
    
    if (state.currentQuestion >= questions.length) {
        endLevel();
        return;
    }

    const question = questions[state.currentQuestion];
    
    // Update UI
    document.getElementById('level-display').textContent = `Level ${state.currentLevel}`;
    document.getElementById('question-counter').textContent = 
        `Question ${state.currentQuestion + 1}/${state.questionsPerLevel}`;
    document.getElementById('question-text').textContent = question.question;

    // Shuffle and display options
    const shuffledOptions = shuffleArray([...question.options]);
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    shuffledOptions.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(option, question.correctAnswer);
        optionsContainer.appendChild(optionDiv);
    });

    // Start timer
    startTimer();
}

function startTimer() {
    state.timeLeft = 20;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = state.timeLeft;
    timerElement.classList.remove('warning');

    clearInterval(state.timer);
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        timerElement.textContent = state.timeLeft;

        if (state.timeLeft <= 5) {
            timerElement.classList.add('warning');
        }

        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            selectAnswer(null, getQuestionsForLevel(state.currentLevel)[state.currentQuestion].correctAnswer);
        }
    }, 1000);
}

function selectAnswer(selectedOption, correctAnswer) {
    clearInterval(state.timer);
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
        
        if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });

    // Store answer
    const question = getQuestionsForLevel(state.currentLevel)[state.currentQuestion];
    const isCorrect = selectedOption === correctAnswer;
    
    state.answers.push({
        question: question.question,
        selectedAnswer: selectedOption,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    if (isCorrect) {
        state.score++;
    }

    // Update mascot
    updateMascot(isCorrect);

    // Move to next question after delay
    setTimeout(() => {
        state.currentQuestion++;
        loadQuestion();
    }, 2000);
}

function updateMascot(isHappy) {
    const mascot = document.getElementById('mochi-mascot');
    if (isHappy) {
        mascot.src = 'assets/mochi-happy.png';
    } else {
        mascot.src = 'assets/mochi-sad.png';
    }
    
    // Reset to neutral after animation
    setTimeout(() => {
        mascot.src = 'assets/mochi-neutral.png';
    }, 1500);
}

function endLevel() {
    clearInterval(state.timer);
    hideAllScreens();
    
    const resultTitle = document.getElementById('result-title');
    const resultMascot = document.getElementById('result-mascot');
    const levelScore = document.getElementById('level-score');
    
    levelScore.textContent = `${state.score}/${state.questionsPerLevel}`;
    
    // Determine pass/fail (need 70% to pass)
    const passThreshold = Math.ceil(state.questionsPerLevel * 0.7);
    const passed = state.score >= passThreshold;
    
    if (passed) {
        resultTitle.textContent = 'Level Complete! 🎉';
        resultMascot.src = 'assets/mochi-happy.png';
    } else {
        resultTitle.textContent = 'Level Failed 😔';
        resultMascot.src = 'assets/mochi-sad.png';
    }
    
    document.getElementById('level-complete-screen').classList.add('active');
}

function nextLevel() {
    const passThreshold = Math.ceil(state.questionsPerLevel * 0.7);
    
    if (state.score < passThreshold) {
        alert('You need to score at least 70% to progress to the next level!');
        resetLevel();
        return;
    }
    
    // Save progress
    saveProgress();
    
    // Check if completed all levels
    if (state.currentLevel >= state.maxLevels) {
        showBadgeScreen();
        return;
    }
    
    // Move to next level
    state.currentLevel++;
    state.currentQuestion = 0;
    state.score = 0;
    state.answers = [];
    
    startQuiz();
}

function resetLevel() {
    state.currentQuestion = 0;
    state.score = 0;
    state.answers = [];
    startQuiz();
}

function reviewAnswers() {
    hideAllScreens();
    document.getElementById('review-level').textContent = state.currentLevel;
    
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    state.answers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        reviewItem.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p><strong>${answer.question}</strong></p>
            <div class="review-options">
                <div class="review-option ${answer.selectedAnswer === answer.correctAnswer ? '' : 'user-answer'}">
                    Your answer: ${answer.selectedAnswer || 'No answer'}
                    ${answer.isCorrect ? '✓' : '✗'}
                </div>
                ${!answer.isCorrect ? `
                    <div class="review-option correct-answer">
                        Correct answer: ${answer.correctAnswer} ✓
                    </div>
                ` : ''}
            </div>
            <div class="explanation">
                <strong>Explanation:</strong> ${answer.explanation}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
    
    document.getElementById('review-screen').classList.add('active');
}

function closeReview() {
    hideAllScreens();
    document.getElementById('level-complete-screen').classList.add('active');
}

// Progress Management
function saveProgress() {
    const progress = {
        username: state.currentUser,
        level: state.currentLevel,
        timestamp: new Date().toISOString()
    };
    
    const leaderboard = getLeaderboard();
    const existingUserIndex = leaderboard.findIndex(entry => entry.username === state.currentUser);
    
    if (existingUserIndex !== -1) {
        // Update existing user if new level is higher
        if (state.currentLevel > leaderboard[existingUserIndex].level) {
            leaderboard[existingUserIndex] = progress;
        }
    } else {
        leaderboard.push(progress);
    }
    
    // Sort by level (descending)
    leaderboard.sort((a, b) => b.level - a.level);
    
    localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(leaderboard));
}

function getLeaderboard() {
    const data = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
    return data ? JSON.parse(data) : [];
}

function loadLeaderboard() {
    const leaderboard = getLeaderboard();
    if (leaderboard.length === 0) {
        // Add sample data
        const sampleData = [
            { username: 'GenMaster', level: 50, timestamp: new Date().toISOString() },
            { username: 'CryptoQueen', level: 35, timestamp: new Date().toISOString() },
            { username: 'BlockchainPro', level: 28, timestamp: new Date().toISOString() }
        ];
        localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(sampleData));
    }
}

function renderLeaderboard() {
    const leaderboard = getLeaderboard();
    const container = document.getElementById('leaderboard-container');
    
    if (leaderboard.length === 0) {
        container.innerHTML = '<p>No entries yet. Be the first to play!</p>';
        return;
    }
    
    container.innerHTML = '';
    
    leaderboard.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        
        const hasBadge = entry.level >= 50;
        
        item.innerHTML = `
            <div class="rank">#${index + 1}</div>
            <div class="username">
                ${entry.username}
                ${hasBadge ? '<span class="badge-icon-small">🏅</span>' : ''}
            </div>
            <div class="level-info">Level ${entry.level}</div>
        `;
        
        container.appendChild(item);
    });
}

// Badge Screen
function showBadgeScreen() {
    hideAllScreens();
    saveProgress();
    document.getElementById('badge-screen').classList.add('active');
}

// Utility Functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getQuestionsForLevel(level) {
    // Get questions from the questions database
    const difficulty = getDifficultyForLevel(level);
    return QUESTIONS_DB[difficulty] || [];
}

function getDifficultyForLevel(level) {
    if (level <= 10) return 'easy';
    if (level <= 25) return 'medium';
    if (level <= 40) return 'hard';
    return 'expert';
}
