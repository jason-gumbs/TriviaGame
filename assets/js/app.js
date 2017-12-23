$("#answers").hide();
$("#answers1").hide();
$("#answers2").hide();
$("#answers3").hide();
$("#answers4").hide();

$("#start").one( "click", function(){
run();
$("#start").hide();
renderQuestion();
renderAnswer();
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
      	renderAnswer();
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
        q1: ["what is the name of our instructer?","1"],
        q2: ["what is your favorite time of the year.", "4"],
        q3: ["who is the best rapper alive.", "3"],
        q4: ["when will you be finished with this course.", "2"],
       
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
        a5: ["christmas", "f"],
        a6: ["July 4th", "f"],
        a7: ["new year", "f"],
        a8: ["birthday", "f"],
        a9: ["Jay-z", "f"],
        a10: ["Migos", "f"],
        a11: ["Lucci", "f"],
        a12: ["Lil baby", "f"],
        a13: ["May", "f"],
        a14: ["June", "f"],
        a15: ["January", "f"],
        a16: ["December", "f"],
        
        
       
      }
    var i = 0;
       var answerArray = [answersa.a1, answersa.a2, answersa.a3, answersa.a4, 
       answersa.a5, answersa.a6, answersa.a7, answersa.a8, 
       answersa.a9, answersa.a10, answersa.a11, answersa.a12, 
       answersa.a13, answersa.a14, answersa.a15, answersa.a16];


      
         

          function renderAnswer() {
   
        // If there are still more questions, render the next one.
        if (i  <= (answerArray.length - 1)) {
      

           
       $(".a").text(answerArray[i][0]);
       i++
       $(".b").text(answerArray[i][0]);
       i++
       $(".c").text(answerArray[i][0]);
       i++
       $(".d").text(answerArray[i][0]);
  
          i++
          //$( ".c,.a,.b,.d" ).empty();
          
 }
        // If there aren't, render the end game screen.
        //else {
          //$("#question").html ("Game Over!");
          //$("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        
      }
       // Add an on click listener to all elements that have the class "operator"
      $(".c,.a,.b,.d").on("click", function() {
        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        //if (!firstNumber || isCalculated) return;
// Set isOperatorChosen to true so we start writing to secondNumber
       // isOperatorChosen = true;

        // Store off the operator
        var operator =  $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        //alert(operator);
        //alert(questionsArray[questionIndex-1][1]);
       

          // If they guess the correct answer, increase and update score, alert them they got it right.
          if (operator == questionsArray[questionIndex-1][1]) {
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
        
         
          setTimeout(stop, 1000 * 4);
          setTimeout(renderQuestion, 1000 * 5);
          setTimeout(renderAnswer, 1000 * 5);




        

      });


      

