// الأسئلة والإجابات
const questions = [
  {
      question: "من هو النبي الذي أرسل إلى بني إسرائيل؟",
      choices: ["موسى عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم", "إبراهيم عليه السلام"],
      correct: 1
  },
  {
      question: "ما هو آخر كتاب سماوي نزل على الأنبياء؟",
      choices: ["التوراة", "الإنجيل", "القرآن الكريم", "الزبور"],
      correct: 2
  },
  {
      question: "من هو الصحابي الذي كان أول من أسلم من الرجال؟",
      choices: ["أبو بكر الصديق", "عمر بن الخطاب", "علي بن أبي طالب", "عثمان بن عفان"],
      correct: 0
  },
  {
      question: "ما هي أول سور القرآن الكريم؟",
      choices: ["الفاتحة", "البقرة", "الأنعام", "الإخلاص"],
      correct: 0
  }
];

// إعدادات اللعبة
let score = 0;
let currentQuestion = 0;
let capturedRegions = [];

// تحديد عناصر الصفحة
const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".choice-btn");
const scoreElement = document.getElementById("score");
const mapRegions = document.querySelectorAll(".map-region");

// عرض السؤال التالي
function loadQuestion() {
  if (currentQuestion >= questions.length) {
      alert("لقد انتهت اللعبة! النقاط النهائية: " + score);
      return;
  }

  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  choiceButtons.forEach((button, index) => {
      button.textContent = question.choices[index];
  });
}

// التحقق من الإجابة
function checkAnswer(choiceIndex) {
  const question = questions[currentQuestion];
  if (choiceIndex === question.correct) {
      score += 10;
      capturedRegions.push(currentQuestion + 1);  // احتلال جزء من الخريطة
      alert("إجابة صحيحة!");
  } else {
      alert("إجابة خاطئة!");
  }

  // تحديث النقاط
  scoreElement.textContent = score;

  // الانتقال إلى السؤال التالي
  currentQuestion++;
  loadQuestion();

  // تحديث الخريطة
  updateMap();
}

// تحديث الخريطة
function updateMap() {
  mapRegions.forEach((region, index) => {
      if (capturedRegions.includes(index + 1)) {
          region.style.backgroundColor = "#16a085";  // المنطقة المحتلة
      }
  });
}

// التفاعل مع الخريطة
function captureRegion(regionIndex) {
  if (capturedRegions.includes(regionIndex)) {
      alert("لقد احتلت هذه المنطقة بالفعل!");
  } else {
      alert("لتحتلال هذه المنطقة، يجب الإجابة على السؤال بشكل صحيح.");
  }
}

// بدء اللعبة
loadQuestion();
