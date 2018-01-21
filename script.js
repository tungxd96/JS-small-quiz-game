//////////////////////Quiz Game\\\\\\\\\\\\\\\\\\\\\

(function() {
    var count = 0, result;
var i = Math.floor(Math.random()*3);
        var question0 = {
        question:'A little girl kicks a soccer ball. It goes 10 feet and comes back to her. How is this possible?',
        answer1:'A. She kicked to the wall and it bouched back.',
        answer2:'B. She kicked it up.',
        answer3:'C. She is a magician!!!',
        solution: 'B',
        correctA: false,
        correctAnswer: function() {
        if(result === this.solution) {
            console.log('Correct!');
            count++;
            console.log('Your score: '+count+' pts');
            console.log('---------------------------------');
            correctA = true;
        } else if(result === 'EXIT'){
            correctA = false;
            i = -1; 
        } else if(result !== this.solution){
            console.log('Incorrect!');
            console.log('Your current score: '+count+' pts');
            console.log('---------------------------------');
            correctA = false;
            count = 0;
        } else {
            correctA = false;
            i = -1;
        }
    },
        abc: function() {
            questionNum(question0);
            typeWin();
    }
};
        var question1 = {
        question:'A is the father of B. But B is not the son of A. How’s that possible?',
        answer1:'A. B is the daughter.',
        answer2:'B. B\'s real dad married with another woman.',
        answer3:'C. B\'s lonely.',
        solution: 'A',
        abc: function() {
            questionNum(question1);
            typeWin();
    }
};
            
        var question2 = {
        question: 'How can you drop a raw egg onto a concrete floor without cracking it?',
        answer1:'A. Cover the egg with soft tower.',
        answer2:'B. Put a bowl of water on the floor then drop the egg into that bowl.',
        answer3:'C. The Egg won’t crack the concrete floor.',
        solution: 'C',
        abc: function() {
            questionNum(question2);
            typeWin();
    }
}; 
    while(i>=0) {
        switch(i) {
            case 0:
                question0.abc();
                i=Math.floor(Math.random()*3);
                question0.correctAnswer();
                break;
            case 1: 
                question1.abc();
                i=Math.floor(Math.random()*3);
                question1.correctAnswer = question0.correctAnswer
                question1.correctAnswer();
                break;
            case 2:
                question2.abc();
                i=Math.floor(Math.random()*3);
                question2.correctAnswer = question0.correctAnswer
                question2.correctAnswer();
                break;
        }
        }

    function typeWin() {
            result = prompt('Please type your correct answer(type any letter showing below) or type EXIT to quit the game.');
            
            
}
    function questionNum (quesNum) {
            console.log(quesNum.question);
            console.log(quesNum.answer1);
            console.log(quesNum.answer2);
            console.log(quesNum.answer3);
}
})();

/////////////////////COMPLETED\\\\\\\\\\\\\\\\\\\\\\\\