
$('#start').on('click', function() {
  $('#start').remove();
  for(var i = 0; i < questions.length; i++) {
    $('#sub-container').append('<h3>' + questions[i].question + '</h3>');
    for(var j = 0; j < questions[i].answers.length; j++) {
      $('#sub-container').append("<input type = 'radio' name='question' "+ [i] +" 'value=' "+ questions[i].correctAnswer[j] + "' > " + questions[i].answers[j]);
    } 
  }
});

var questions = [{
    question: 'Which actress said, "Fasten your seatbelts. Its going to be a bumpy night," in All About Eve?' ,
    answers:['guess 0', 'guess 1', 'guess 2', 'Bette Davis (as Margo Channing.)'],
    correctAnswer: '',
},
{
    question: 'Which actress said, "Fasten your seatbelts. Its going to be a bumpy night," in All About Eve?',
    answers: ['guess 0', 'guess 1', 'guess 2', 'Bette Davis (as Margo Channing.)'],
    correctAnswer: '',
  },
{
    question: 'Which actress said, "Fasten your seatbelts. Its going to be a bumpy night," in All About Eve?',
    answers: ['guess 0', 'guess 1', 'guess 2', 'Bette Davis (as Margo Channing.)'],
    correctAnswer: '',
  }];

