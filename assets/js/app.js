$("#answers").hide();
$("#answers1").hide();
$("#answers2").hide();
$("#answers3").hide();
$("#answers4").hide();

$("#start").one( "click", function(){
run();
$("#start").hide();
renderQuestion();
//renderAnswer()
$("#answers").show();

});
$("#start").one( "click", function(){
	});

  
	 //  Set our number counter to 100.
    var number =30;
	//  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
 function run() {
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
	 //  Decrease number by one.
      number--;
        $("#show-number").show();
	 //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>You have " + number + " seconds remaining </h2>");
		//  Once number hits zero...
      if (number === 0) {
		//  ...run the stop function.
        stop();
        //  Alert the user that time is up.
      	renderQuestion();
      }
    }
   //  The stop function
    function stop() {
	   //  Clears our intervalId
       //  We just pass the name of the interval
       //  to the clearInterval function.
      clearInterval(intervalId);
      
       number =30;
       run();
      
    

    }
         var questions = {
        q1: ["what is the name of our instructer?", "t"],
        q2: ["There are 365 days in a year.", "t"],
        q3: ["There are 42 ounces in a pound.", "f"],
        q4: ["The Declaration of Independence was created in 1745.", "f"],
        q5: ["Bananas are vegetables.", "f"]
      };

         var questionIndex = 0;
         var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

            function renderQuestion() {
        // If there are still more questions, render the next one.
        if (questionIndex <= (questionsArray.length - 1)) {
          $("#question").html("<h3>" +questionsArray[questionIndex][0]+ "</h3>");
          questionIndex++
          
 }
        // If there aren't, render the end game screen.
        else {
          $("#question").html ("Game Over!");
          $("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
      }

            var answersa = {
        a1: ["John", "t"],
        a2: ["Adam", "t"],
        a3: ["sara", "f"],
        a4: ["lewis", "f"],
       
      };
      var answerindex = 0;
       var answerArray = [answersa.a1, answersa.a2, answersa.a3, answersa.a4];


      
         

          function renderAnswer() {
        // If there are still more questions, render the next one.
        if (answerindex  <= (answerArray.length - 1)) {
          $(".c").html("<button>" +answerArray[answerindex ][0]+ "</button>");
          $(".c").html("<button>" +answerArray[answerindex ][1]+ "</button>");
          $(".c").html("<button>" +answerArray[answerindex ][2]+ "</button>");
          $(".c").html("<button>" +answerArray[answerindex ][3]+ "</button>");
          answerindex++
          
 }
        // If there aren't, render the end game screen.
        else {
          $("#question").html ("Game Over!");
          $("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }
      }
       // Add an on click listener to all elements that have the class "operator"
      $(".c").on("click", function() {
        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        //if (!firstNumber || isCalculated) return;
// Set isOperatorChosen to true so we start writing to secondNumber
       // isOperatorChosen = true;

        // Store off the operator
        var operator =  $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        //alert(operator);
       

          // If they guess the correct answer, increase and update score, alert them they got it right.
          if (operator === questionsArray[questionIndex][1]) {
            $("#question").html("<h2>Correct </h2>");
            $("#show-number").hide();
             clearInterval(intervalId);
           //score++;
            //updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
              $("#question").html("<h2>Wrong Answer</h2>");
            $("#show-number").hide();
             clearInterval(intervalId);
          }

          // Increment the questionIndex variable and call the renderQuestion function.
          questionIndex++;
         
          setTimeout(stop, 1000 * 4);
          setTimeout(renderQuestion, 1000 * 5);



        

      });


      

