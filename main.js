function checkAnswer(button) {
    const correctAnswer = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwe645y5f4kba7.webp"; 
    const selectedImage = button.querySelector('img').src; 

    if (selectedImage !== correctAnswer) {
        shuffleAnswers(); 
    } else {
        alert("Chúc chị Quỳnh sinh nhật vui vẻ"); 
    }
}

function shuffleAnswers() {
    const answers = document.querySelectorAll('.answer');
    const answersArray = Array.from(answers);
    const answersContent = answersArray.map(btn => btn.innerHTML); 

    for (let i = answersContent.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answersContent[i], answersContent[j]] = [answersContent[j], answersContent[i]];
    }
    answersArray.forEach((btn, index) => {
        btn.innerHTML = answersContent[index]; 
    });
}
